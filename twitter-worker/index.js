const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const CACHE_TTL = 3600; // 1 hour

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    if (!username) {
      return json({ error: "username required" }, 400);
    }

    const cacheKey = new Request(
      `https://twitter-stats-cache/${username.toLowerCase()}`,
      { method: "GET" }
    );
    const cache = caches.default;

    const cached = await cache.match(cacheKey);
    if (cached) return addCors(cached);

    if (!env.TWITTER_BEARER_TOKEN) {
      return json({ error: "TWITTER_BEARER_TOKEN secret not set" }, 500);
    }

    const apiRes = await fetch(
      `https://api.twitter.com/2/users/by/username/${encodeURIComponent(username)}?user.fields=public_metrics`,
      { headers: { Authorization: `Bearer ${env.TWITTER_BEARER_TOKEN}` } }
    );

    if (!apiRes.ok) {
      return json({ error: `Twitter API error: ${apiRes.status}` }, 502);
    }

    const { data } = await apiRes.json();
    const m = data?.public_metrics;

    const result = {
      followers: m?.followers_count ?? null,
      following: m?.following_count ?? null,
    };

    const response = new Response(JSON.stringify(result), {
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${CACHE_TTL}`,
      },
    });

    await cache.put(cacheKey, response.clone());
    return response;
  },
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function addCors(response) {
  const res = new Response(response.body, response);
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}
