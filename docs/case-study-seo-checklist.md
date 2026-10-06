# Case study SEO checklist

Run through this while drafting a case study in `src/pages/work/`. The keyword clusters and the reasons behind each step are in `docs/seo-strategy.md` (sections 3 and 7).

## 1. Before writing

- [ ] **Facts are real and approved.** Client name, numbers and quotes are approved by the client (use the `/feedback/` answers). No invented results. If the client can't be named yet, describe them by industry and place.
- [ ] **One primary search** picked from the cluster tables in `docs/seo-strategy.md` §3. Pick the cluster this project is the strongest proof for.
- [ ] **Two to four supporting searches:** a close variant, an owner-phrased problem, and a local phrase if the client is in Middle Tennessee.
- [ ] Both are noted in a comment at the top of the `.astro` file.

## 2. CaseStudy props (`src/layouts/CaseStudy.astro`)

- [ ] **`title`** (the H1 and Article headline; also the search title unless `seoTitle` is set):
  - search title (`seoTitle`, or `title` if no `seoTitle`) about **44 characters or less**, so it stays at about 60 or less once Base adds " · Timothy Gaull"
  - primary phrase near the front
  - pattern `Client: primary phrase`, for example "Gunter Metals: brand identity designed with AI"
  - no keyword lists, pipes or "Case study:" prefix
- [ ] **`description`** (the visible lede; also the meta description unless `metaDescription` is set):
  - meta description (`metaDescription`, or `description` if none) **150 to 160 characters**, written as the story's first sentence
  - pattern `What was done for [client], a [industry] in [place]. How. Result.`
  - includes the primary phrase once, and the place for local clients
- [ ] **`eyebrow`**: `Client · industry`, under about 45 characters, client name first. Article `about` uses `client` when it is set, otherwise the eyebrow.
- [ ] **`facts`**: 3 to 5 items using the standard labels.
  - Industry, Location, Service, Timeline, Result
  - optional: Tools, Status, Role
  - **Service** is an exact service name: AI Opportunity Sprint, Brand & Business Foundations, or Fractional AI & Growth Partner
  - **Result** is one verified number with a unit
- [ ] Optional props:
  - `seoTitle` and `metaDescription` when the H1 or lede run longer than search results show
  - `image` (`{ src, width, height }`) for the share image; omit to use the default card
  - `published` and `updated` (YYYY-MM-DD); bump `updated` only when the story itself changes
  - `client` (`{ name, url }`); add `url` only if the client has a public site

## 3. Body

- [ ] **H2s are questions owners ask:**
  - "What was slowing [client] down?"
  - "What we did"
  - "What AI did, and what people decided"
  - "What changed"
  - "What this means for a [industry] owner"
- [ ] The primary phrase appears **once each** in: the title, the lede, one H2 and the first body paragraph. Nowhere is it repeated just for the sake of it.
- [ ] **At least one quotable sentence:** subject + verb + number + unit + place. For example: "Timothy Gaull designed the Gunter Metals brand identity in four days, using Claude as a design partner."
- [ ] An **approved owner quote**, if there is one.
- [ ] **Internal links in the text:**
  - the matching service page (if it exists)
  - `/kit/`
  - one related case study or guide
  - `/nashville/` for Middle Tennessee clients (if it exists)
  - The layout already adds the intro call and kit note at the end.
- [ ] **Images:**
  - descriptive alt text (what it shows and why it matters), or `alt=""` if decorative
  - `width` and `height` set, and `loading="lazy"` below the first screen
  - descriptive file names in `public/images/work/`
- [ ] **FAQ (3 to 5 Q&As)** if the primary search is a learning question, or the project answers cost, time or tool questions. Answer first in 40 to 80 words, using the `<details>` pattern from `src/pages/kit.astro`.
- [ ] Short sentences and plain words, in the site's voice.

## 4. After it's written

- [ ] Add the card to the `cases` array in **`src/pages/work/index.astro`** (`href`, `kind`, `stat`, `title`, `body`).
- [ ] If it's a top-three story, update the `work` array in **`src/pages/index.astro`**.
- [ ] Add one line under "## Case studies" in **`public/llms.txt`**: `- [Client](https://timothygaull.com/work/slug/): what was done, for whom (industry, place), result.` Use the same facts as the page.
- [ ] Link to it from the matching service page's "Work that shows it" section (once service pages exist).
- [ ] **Sitemap is automatic** (`@astrojs/sitemap` in `astro.config.mjs`). After deploy, confirm the URL appears in `https://timothygaull.com/sitemap-0.xml`.
- [ ] **Search Console:** URL Inspection, then "Request indexing". **Bing Webmaster Tools:** submit the URL (IndexNow covers this if Cloudflare Crawler Hints is on).
- [ ] Post it on the Gaull & Co Google Business Profile and LinkedIn.
- [ ] Ask the client for a Google review (every client, the same way, no incentives) and, if they're happy to, a link from their site.
- [ ] Add the page to next month's review in `docs/seo-strategy.md` §10.3.

## Don't

- Don't make city-swapped copies of a page for other towns.
- Don't add keywords to the Business Profile name or to URL slugs. Keep slugs as `/work/client-name/` and never rename them.
- Don't use a number, quote or client name without the client's approval.
- Don't claim any partnership with Anthropic, OpenAI or Google.
