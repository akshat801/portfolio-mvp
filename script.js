// ── Config ───────────────────────────────────────────────────────────────
// After deploying twitter-worker/, paste your Worker URL here.
// e.g. "https://twitter-stats.YOUR-SUBDOMAIN.workers.dev"
const TWITTER_STATS_WORKER = "";

// ── Last updated footer ──────────────────────────────────────────────────
(function() {
  const el = document.getElementById("last-updated");
  if (!el) return;
  const label = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date());
  el.textContent = "Last updated " + label;
})();

// ── Copy email to clipboard ──────────────────────────────────────────────
// Click hijacks the mailto: link, copies the address, and swaps the tooltip
// to "Email copied" briefly. Falls back to the native mailto: behaviour if
// the Clipboard API is unavailable or denied.
(function initEmailCopy() {
  const el = document.querySelector(".copy-email");
  if (!el) return;
  const tip = el.querySelector(".copy-tooltip");
  if (!tip) return;

  const DEFAULT_TIP = "Tap to copy email";
  const COPIED_HTML =
    'Email copied' +
    '<svg class="copy-tooltip__check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg>';
  let resetTimer;

  // Once the cursor leaves (and the tooltip has faded out), restore the
  // original text so the next hover starts fresh with "Tap to copy email".
  function scheduleReset() {
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      tip.textContent = DEFAULT_TIP;
    }, 220); // slightly longer than the .18s opacity transition
  }
  function cancelReset() {
    clearTimeout(resetTimer);
  }

  el.addEventListener("mouseleave", scheduleReset);
  el.addEventListener("blur", scheduleReset);
  el.addEventListener("mouseenter", cancelReset);
  el.addEventListener("focus", cancelReset);

  el.addEventListener("click", (e) => {
    e.preventDefault();
    const email = (el.getAttribute("href") || "").replace(/^mailto:/, "") ||
      el.textContent.trim();

    const onSuccess = () => {
      tip.innerHTML = COPIED_HTML;
    };

    const onFailure = () => {
      // Fall back to opening the native mail client without navigating the page.
      const a = document.createElement("a");
      a.href = "mailto:" + email;
      a.click();
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(onSuccess).catch(onFailure);
    } else {
      onFailure();
    }
  });
})();

// ── Smart link preview ───────────────────────────────────────────────────
// On first hover of a `.smart-preview` link, fetch its Open Graph metadata
// via microlink.io (free, CORS-enabled) and render a small preview card.
// Result is cached per URL so subsequent hovers are instant.
(function initSmartPreview() {
  const links = document.querySelectorAll(".smart-preview");
  if (!links.length) return;

  const cache = new Map();

  // localStorage cache with TTL — survives reloads, drastically reduces API
  // hits (GitHub allows 60 unauthenticated req/hr; microlink free tier is
  // 50 req/day). Fresh hits return instantly; stale data is also kept as a
  // fallback when the network fails or rate limits hit.
  const STORE_PREFIX = "preview-cache-v1:";
  const TTL_MS = 30 * 60 * 1000; // 30 minutes

  function readStored(key) {
    try {
      const raw = localStorage.getItem(STORE_PREFIX + key);
      if (!raw) return null;
      const { ts, data } = JSON.parse(raw);
      if (typeof ts !== "number" || !data) return null;
      return { data, fresh: Date.now() - ts < TTL_MS };
    } catch { return null; }
  }
  function writeStored(key, data) {
    try {
      localStorage.setItem(STORE_PREFIX + key, JSON.stringify({ ts: Date.now(), data }));
    } catch { /* quota exceeded, private mode, etc. */ }
  }

  function escapeText(s) {
    const d = document.createElement("div");
    d.textContent = s ?? "";
    return d.innerHTML;
  }
  function escapeAttr(s) {
    return String(s ?? "").replace(/"/g, "&quot;");
  }

  function statusMarkup(text) {
    return `<span class="preview-card__status">${escapeText(text)}</span>`;
  }

  function fmtCount(v) {
    if (v == null || v === "") return null;
    // Preserve already-formatted shorthand like "2.1K", "1.5M", "500+".
    if (typeof v === "string" && /[A-Za-z+]/.test(v.trim())) return v.trim();
    const n = typeof v === "number" ? v : parseFloat(String(v).replace(/,/g, ""));
    if (!isFinite(n)) return String(v).trim() || null;
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, "") + "K";
    return n.toLocaleString("en-US");
  }

  function renderCard(card, data, fallbackTitle) {
    let host = "";
    try {
      host = new URL(data.url).hostname.replace(/^www\./, "");
    } catch {
      /* ignore */
    }
    const logo = data.logo?.url || "";
    const title = data.title || fallbackTitle;
    const desc = data.description || "";

    // Screenshot-driven media variant — full-bleed image up top with
    // excerpt below. Same layout the writing list uses for article hero
    // shots. Skips logo/site/title/stats since the image is the subject.
    if (data.screenshot) {
      card.classList.add("preview-card--media");
      card.innerHTML = `
        <img class="preview-card__image" src="${escapeAttr(data.screenshot)}" alt="" loading="lazy" />
        ${desc ? `<div class="preview-card__desc">${escapeText(desc)}</div>` : ""}
      `;
      return;
    }
    // Build a generic [{label, value}] list — different sources contribute
    // different metrics (X: followers/following, GitHub: commits/last commit).
    const statItems = [];
    const connections = data.connections; // already a string like "500+"
    const followers = fmtCount(data.followers);
    const following = fmtCount(data.following);
    const totalCommits = fmtCount(data.totalCommits);
    const lastCommit = relativeTime(data.lastCommitAt);
    const stories = fmtCount(data.stories);
    const lastPost = relativeTime(data.lastPostAt);
    if (connections) statItems.push({ label: "Connections", value: connections });
    if (followers) statItems.push({ label: "Followers", value: followers });
    if (following) statItems.push({ label: "Following", value: following });
    if (totalCommits) statItems.push({ label: "Total commits", value: totalCommits });
    if (lastCommit) statItems.push({ label: "Last commit", value: lastCommit });
    if (stories) statItems.push({ label: "Stories", value: stories });
    if (lastPost) statItems.push({ label: "Last post", value: lastPost });

    const stats = statItems.length
      ? `<div class="preview-card__stats">${statItems
          .map(
            (s) =>
              `<span class="preview-card__stat"><strong>${escapeText(s.value)}</strong> ${escapeText(s.label)}</span>`
          )
          .join("")}</div>`
      : "";

    card.innerHTML = `
      <div class="preview-card__header">
        ${
          logo
            ? `<img class="preview-card__logo" src="${escapeAttr(logo)}" alt="" loading="lazy" />`
            : ""
        }
        <span class="preview-card__site">${escapeText(host)}</span>
      </div>
      <div class="preview-card__title">${escapeText(title)}</div>
      ${desc ? `<div class="preview-card__desc">${escapeText(desc)}</div>` : ""}
      ${stats}
    `;
  }

  function fetchMicrolink(url, link) {
    const params = new URLSearchParams({ url });
    // For X profile URLs, ask microlink to also extract follower/following
    // counts via CSS selectors. Other hosts ignore unrecognised data fields.
    if (/^https?:\/\/(www\.)?(x|twitter)\.com\//i.test(url)) {
      params.set("data.followers.selector", 'a[href$="/verified_followers"] span');
      params.set("data.followers.attr", "innerText");
      params.set("data.following.selector", 'a[href$="/following"] span');
      params.set("data.following.attr", "innerText");
    }
    // Opt-in screenshot rendering — microlink renders the page in a headless
    // browser and returns a hosted image URL. Used for project links that
    // benefit from a homepage thumbnail.
    if (link?.dataset?.previewScreenshot === "true") {
      params.set("screenshot", "true");
    }
    // `no-cache` matches the GitHub fetcher — revalidate on each load so
    // updates to the linked profile (bio, follower count) appear fresh.
    return fetch("https://api.microlink.io/?" + params.toString(), { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        if (json?.status !== "success" || !json.data) return null;
        return {
          ...json.data,
          screenshot: json.data.screenshot?.url || null,
          // Fall back to dataset attributes when API can't scrape dynamic values
          followers: json.data.followers || link?.dataset?.followers || null,
          following: json.data.following || link?.dataset?.following || null,
        };
      });
  }

  // Fetches follower/following counts from the Cloudflare Worker proxy.
  // Returns null if the worker URL isn't configured or the request fails.
  function fetchXStats(username) {
    if (!TWITTER_STATS_WORKER) return Promise.resolve(null);
    const endpoint =
      TWITTER_STATS_WORKER.replace(/\/$/, "") + "?username=" + encodeURIComponent(username);
    return fetch(endpoint, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
  }

  // Fetches X profile data: Microlink for title/bio/logo, Worker for stats.
  function fetchXProfile(url, link) {
    const usernameMatch = url.match(/(?:x|twitter)\.com\/([^/?#]+)/i);
    const username = usernameMatch?.[1];
    return Promise.all([
      fetchMicrolink(url, link),
      username ? fetchXStats(username) : Promise.resolve(null),
    ]).then(([microlinkData, stats]) => {
      if (!microlinkData) return null;
      return {
        ...microlinkData,
        followers: stats?.followers ?? microlinkData.followers ?? null,
        following: stats?.following ?? microlinkData.following ?? null,
      };
    });
  }

  function fetchMediumProfile(url, link) {
    // Medium puts profile pages behind antibot protection (microlink fails),
    // but their public RSS feed is open. We pipe it through rss2json — a
    // free, CORS-enabled JSON converter — so the browser can read it.
    const feed = url.replace(/\/(@[^/?#]+).*$/, "/feed/$1");
    const proxy = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed);
    return fetch(proxy, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((j) => {
        if (j.status !== "ok" || !j.feed) return null;
        const handleMatch = url.match(/@([^/?#]+)/);
        const handle = handleMatch ? handleMatch[1] : "";
        // "Stories by Akshat Srivastava on Medium" → "Akshat Srivastava on Medium"
        const cleanTitle = (j.feed.title || "").replace(/^Stories by\s+/i, "");
        const latest = j.items?.[0];
        // Medium's follower count isn't in the RSS feed and Medium auth-walls
        // direct scraping. Use a manual override via data-followers, like
        // LinkedIn — falls back gracefully if the attribute is missing.
        const followers = link?.dataset?.followers || null;
        // Allow a manual description override via data-bio — useful when
        // the latest article title isn't representative of the publication.
        const bioOverride = link?.dataset?.bio || null;
        return {
          url,
          title: cleanTitle || (handle ? "@" + handle + " on Medium" : "Medium"),
          description: bioOverride || latest?.title || j.feed.description || "",
          // Use Medium's brand icon for site identity instead of the user's
          // avatar — keeps the header consistent with the other previews
          // where the logo represents the platform, not the profile.
          // 64×64 from Medium's CDN — apple-touch-icon path returns 404.
          logo: { url: "https://miro.medium.com/v2/resize:fill:64:64/1*sHhtYhaCe2Uc3IU0IgKwIQ.png" },
          stories: j.items?.length || null,
          followers,
        };
      });
  }

  function fetchLinkedInProfile(url, link) {
    return fetchMicrolink(url, link).then((d) => {
      if (!d) return null;

      // Try to extract the headline from the OG title — LinkedIn formats it
      // as "Name - Headline | LinkedIn" (often truncated). For a fuller,
      // accurate headline, the link may set `data-headline="..."` to
      // override since LinkedIn auth-walls the live value.
      let headline = link.dataset.headline || null;
      if (!headline && d.title) {
        const m = d.title.match(/^.+?-\s*(.+?)\s*\|\s*LinkedIn\s*$/i);
        if (m) headline = m[1].trim();
      }

      // Parse connections count from the OG description, e.g.
      // "... · 500+ connections on LinkedIn ..."
      let connections = link.dataset.connections || null;
      if (!connections && d.description) {
        const m = d.description.match(/(\d{1,3}(?:,\d{3})*\+?|\d+\+?)\s*connections/i);
        if (m) connections = m[1];
      }

      // Followers can't be derived from public OG; relies on data-followers.
      const followers = link.dataset.followers || null;

      return {
        ...d,
        // Replace the long About-section snippet with the (more useful)
        // headline. Falls back to the original description if nothing parsed.
        description: headline || d.description,
        connections,
        followers,
      };
    });
  }

  function fetchGitHubProfile(username, link) {
    const headers = { Accept: "application/vnd.github+json" };
    // `no-cache` revalidates with GitHub on every page load using the ETag
    // they return — fast 304s when nothing changed, fresh data right after
    // you push. `force-cache` was serving stale responses across reloads.
    const opts = { cache: "no-cache", headers };

    const userP = fetch(
      "https://api.github.com/users/" + encodeURIComponent(username),
      opts
    ).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));

    const eventsP = fetch(
      "https://api.github.com/users/" + encodeURIComponent(username) + "/events/public?per_page=30",
      opts
    )
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);

    // Total commits = sum of authored commits across the user's owned public
    // repos. We use the `Link: rel="last"` page header to get a count without
    // paginating through every commit. More accurate than search/commits,
    // whose index is incomplete.
    const commitsP = fetch(
      "https://api.github.com/users/" + encodeURIComponent(username) + "/repos?per_page=100&type=owner",
      opts
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((repos) => {
        if (!Array.isArray(repos)) return null;
        return Promise.all(
          repos.map((repo) =>
            fetch(
              `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?author=${encodeURIComponent(username)}&per_page=1`,
              opts
            )
              .then((resp) => {
                if (!resp.ok) return 0;
                const link = resp.headers.get("Link") || "";
                const m = link.match(/&page=(\d+)>;\s*rel="last"/);
                if (m) return parseInt(m[1], 10);
                // No Link header means 0 or 1 commit on the only page.
                return resp.json().then((arr) => (Array.isArray(arr) ? arr.length : 0));
              })
              .catch(() => 0)
          )
        ).then((counts) => counts.reduce((a, b) => a + b, 0));
      })
      .catch(() => null);

    // Most-recently-pushed public repo — more reliable than events (which
    // only covers the last 300 public events and misses private-repo pushes).
    const lastPushP = fetch(
      "https://api.github.com/users/" + encodeURIComponent(username) + "/repos?sort=pushed&direction=desc&per_page=1&type=owner",
      opts
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((repos) => (Array.isArray(repos) && repos[0]?.pushed_at) || null)
      .catch(() => null);

    return Promise.all([userP, commitsP, eventsP, lastPushP])
      .then(([u, total, ev, repoPushedAt]) => {
        const eventPush = Array.isArray(ev)
          ? ev.find((e) => e.type === "PushEvent")?.created_at || null
          : null;
        // Pick whichever date is more recent.
        const lastCommitAt = [repoPushedAt, eventPush]
          .filter(Boolean)
          .sort()
          .at(-1) || null;
        return {
          url: u.html_url,
          title: u.name ? `${u.name} (@${u.login})` : `@${u.login}`,
          description: u.bio || "",
          // Custom GitHub logo from local assets — picked to match the rest
          // of the portfolio's visual style.
          logo: { url: "assets/github-logo.png?v=2" },
          totalCommits: total,
          lastCommitAt,
        };
      })
      .catch(() => {
        // GitHub's unauthenticated rate limit is 60/hr; on heavy testing
        // days we hit it. Fall back to whatever the link author put in
        // data-* attributes so the card still renders something useful.
        const nameAttr = link?.dataset?.name;
        const bioAttr = link?.dataset?.bio;
        const commitsAttr = link?.dataset?.commits;
        const lastCommitAttr = link?.dataset?.lastCommit;
        if (!nameAttr && !bioAttr && !commitsAttr && !lastCommitAttr) return null;
        return {
          url: "https://github.com/" + username,
          title: nameAttr ? `${nameAttr} (@${username})` : `@${username}`,
          description: bioAttr || "",
          logo: { url: "assets/github-logo.png?v=2" },
          totalCommits: commitsAttr ? parseInt(commitsAttr, 10) : null,
          lastCommitAt: lastCommitAttr || null,
        };
      });
  }

  function relativeTime(iso) {
    if (!iso) return null;
    const t = new Date(iso).getTime();
    if (!isFinite(t)) return null;
    const diffSec = Math.max(0, Math.round((Date.now() - t) / 1000));
    if (diffSec < 60) return "just now";
    const min = Math.round(diffSec / 60);
    if (min < 60) return min + "m ago";
    const hr = Math.round(min / 60);
    if (hr < 24) return hr + "h ago";
    const day = Math.round(hr / 24);
    if (day < 7) return day + "d ago";
    if (day < 30) return Math.round(day / 7) + "w ago";
    if (day < 365) return Math.round(day / 30) + "mo ago";
    return Math.round(day / 365) + "y ago";
  }

  links.forEach((link) => {
    const card = document.createElement("span");
    card.className = "preview-card";
    // Author can opt into below-the-link positioning via the data attribute —
    // useful for full-width list rows where a right-side preview overflows.
    if (link.dataset.previewPosition === "below") {
      card.classList.add("preview-card--below");
    }
    card.setAttribute("aria-hidden", "true");
    card.innerHTML = statusMarkup("Loading preview…");
    // Span used so it's valid inside an anchor (transparent content); CSS
    // gives it block-level rendering. pointer-events:none keeps clicks
    // pass-through to the link itself.
    link.appendChild(card);

    let loaded = false;
    let inflight = false;

    link.addEventListener("mouseenter", maybeFetch);
    link.addEventListener("focus", maybeFetch);

    function maybeFetch() {
      if (loaded || inflight) return;
      const url = link.href;

      // 1) In-memory cache (instant, same session).
      if (cache.has(url)) {
        renderCard(card, cache.get(url), link.textContent.trim());
        loaded = true;
        return;
      }

      // 2) localStorage cache (persists across reloads).
      const stored = readStored(url);
      if (stored?.fresh) {
        cache.set(url, stored.data);
        renderCard(card, stored.data, link.textContent.trim());
        loaded = true;
        return;
      }

      // 3) Stale or missing — fetch fresh data.
      inflight = true;

      // Pick the best data source per host — GitHub has a public REST API
      // that's more reliable than scraping; LinkedIn needs hybrid parsing
      // off microlink + data-attribute overrides; X needs microlink with
      // custom selectors; everything else uses microlink defaults.
      const ghMatch = url.match(/^https?:\/\/(?:www\.)?github\.com\/([^/?#]+)\/?$/i);
      const isLinkedIn = /^https?:\/\/(?:www\.)?linkedin\.com\//i.test(url);
      const isMedium = /^https?:\/\/(?:www\.)?medium\.com\/@/i.test(url);
      const isX = /^https?:\/\/(?:www\.)?(x|twitter)\.com\//i.test(url);
      const hasStaticData = link.dataset.previewTitle || link.dataset.previewDesc;
      const fetcher = hasStaticData
        ? Promise.resolve({
            url,
            title: link.dataset.previewTitle || link.textContent.trim(),
            description: link.dataset.previewDesc || "",
            logo: link.dataset.previewLogo ? { url: link.dataset.previewLogo } : null,
          })
        : ghMatch
        ? fetchGitHubProfile(ghMatch[1], link)
        : isLinkedIn
        ? fetchLinkedInProfile(url, link)
        : isMedium
        ? fetchMediumProfile(url, link)
        : isX
        ? fetchXProfile(url, link)
        : fetchMicrolink(url, link);

      // Show stale data immediately while we revalidate in the background —
      // avoids a "Loading…" flash on every reload.
      if (stored?.data) {
        cache.set(url, stored.data);
        renderCard(card, stored.data, link.textContent.trim());
        loaded = true;
      }

      fetcher
        .then((data) => {
          if (data) {
            cache.set(url, data);
            writeStored(url, data);
            renderCard(card, data, link.textContent.trim());
            loaded = true;
          } else if (!stored?.data) {
            card.innerHTML = statusMarkup("Preview unavailable");
            loaded = true;
          }
          // If we already showed stale data and the refresh fails, leave
          // the stale render in place.
        })
        .catch(() => {
          if (!stored?.data) {
            card.innerHTML = statusMarkup("Preview unavailable");
            loaded = true;
          }
        })
        .finally(() => {
          inflight = false;
        });
    }
  });
})();

// ── Live IST clock ───────────────────────────────────────────────────────
// Renders Bengaluru-local time as HH:MM AM/PM and ticks on the minute.
(function initBengaluruClock() {
  const el = document.getElementById("bengaluruTime");
  if (!el) return;

  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  function render() {
    el.textContent = fmt.format(new Date());
  }

  render();

  // Align the first tick to the next minute boundary, then tick every 60s.
  const now = new Date();
  const msToNextMinute =
    60000 - (now.getSeconds() * 1000 + now.getMilliseconds());
  setTimeout(() => {
    render();
    setInterval(render, 60000);
  }, msToNextMinute);
})();

// ── Scroll progress bar ──────────────────────────────────────────────────
(function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress__bar");
  if (!bar) return;

  const doc = document.documentElement;
  let ticking = false;

  function update() {
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
    bar.style.transform = "scaleX(" + p + ")";
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

// ── Custom cursor ────────────────────────────────────────────────────────
(function initCursor() {
  const fine = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
  if (!fine) return;

  const cursor = document.querySelector(".cursor");
  const ring = cursor?.querySelector(".cursor__ring");
  const dot = cursor?.querySelector(".cursor__dot");
  if (!cursor || !ring || !dot) return;

  // Belt-and-suspenders: inject a runtime <style> tag that hides the native
  // cursor everywhere. Some Chrome edge cases (file:// protocol, certain
  // SVG hover states, zoomed pages) can let the OS pointer leak through
  // even with the media-query rule applied. This runtime injection runs
  // unconditionally once we've confirmed we want the custom cursor.
  const guardStyle = document.createElement("style");
  guardStyle.setAttribute("data-cursor-guard", "");
  guardStyle.textContent =
    "html, body, *, *::before, *::after { cursor: none !important; }" +
    "input, textarea, select, [contenteditable=\"true\"] { cursor: auto !important; }";
  document.head.appendChild(guardStyle);
  // Also pin inline on root elements — beats anything except inline child
  // styles, which we don't set anywhere.
  document.documentElement.style.cursor = "none";
  document.body.style.cursor = "none";

  let mx = -100, my = -100;
  let rx = -100, ry = -100;
  let dx = -100, dy = -100;
  let started = false;

  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const ringEase = reduced ? 1 : 0.2;
  const dotEase = reduced ? 1 : 0.7;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!started) {
      rx = dx = mx;
      ry = dy = my;
      started = true;
    }
  }, { passive: true });

  function setPos(el, x, y) {
    el.style.setProperty("--cx", x + "px");
    el.style.setProperty("--cy", y + "px");
  }

  function tick() {
    rx += (mx - rx) * ringEase;
    ry += (my - ry) * ringEase;
    dx += (mx - dx) * dotEase;
    dy += (my - dy) * dotEase;
    setPos(ring, rx, ry);
    setPos(dot, dx, dy);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  document.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
  document.addEventListener("mouseenter", () => cursor.classList.remove("is-hidden"));
  document.addEventListener("mousedown", () => cursor.classList.add("is-clicking"));
  document.addEventListener("mouseup", () => cursor.classList.remove("is-clicking"));

  // Interactive targets — event delegation so it picks up dynamically-added elements too
  const interactiveSelector = 'a, button, [role="button"], label, summary';
  const textSelector = "input, textarea, select, [contenteditable='true']";

  document.addEventListener("mouseover", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest(textSelector)) {
      cursor.classList.add("is-text");
    } else if (t.closest(interactiveSelector)) {
      cursor.classList.add("is-hovering");
    }
  });
  document.addEventListener("mouseout", (e) => {
    const t = e.target;
    const related = e.relatedTarget;
    if (!(t instanceof Element)) return;
    // only clear state if leaving to something outside the interactive element
    if (t.closest(interactiveSelector) && (!related || !(related instanceof Element) || !related.closest(interactiveSelector))) {
      cursor.classList.remove("is-hovering");
    }
    if (t.closest(textSelector) && (!related || !(related instanceof Element) || !related.closest(textSelector))) {
      cursor.classList.remove("is-text");
    }
  });
})();

// Theme: initial value is already set by the inline <head> script to prevent FOUC.
// Here we only wire the toggle and keep aria state in sync.
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function syncToggle() {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (!toggle) return;
  toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  toggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

syncToggle();

toggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  syncToggle();
});

// Reveal on scroll
const targets = document.querySelectorAll(".intro, .block, .footer");
const prefersReducedMotion = window.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

// Anchor handling:
// - bare "#" → prevent default so placeholder links don't scroll to top
// - "#id" → smooth-scroll and move focus for accessibility
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#" || href === "#!") {
      e.preventDefault();
      return;
    }
    if (href === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // Underline the section heading 200ms after scroll stops
    const heading = target.querySelector(".block__label");
    if (heading) {
      let scrollTimer;
      const triggerFlash = () => {
        window.removeEventListener("scroll", onScroll);
        // Measure actual text width via Range API (no layout shift)
        const range = document.createRange();
        range.selectNodeContents(heading);
        const textWidth = range.getBoundingClientRect().width;
        heading.style.setProperty("--label-text-width", textWidth + "px");
        heading.classList.add("block__label--flash");
        setTimeout(() => heading.classList.remove("block__label--flash"), 900);
      };
      const onScroll = () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(triggerFlash, 200);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      // Fallback: if already at position and no scroll fires
      scrollTimer = setTimeout(triggerFlash, 800);
    }
    // Move focus for keyboard and screen-reader users
    const prevTabindex = target.getAttribute("tabindex");
    if (prevTabindex === null) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    if (prevTabindex === null) {
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        { once: true }
      );
    }
  });
});
