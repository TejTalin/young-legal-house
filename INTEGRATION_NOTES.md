# Sanity Integration — What Changed

This is your `YLH-redesign-updated-clean.zip` with the Sanity CMS wired in. I
actually ran `npm install` and `npm run build` on this exact folder to
confirm it compiles — 26/26 pages build with zero syntax/type errors. The
only build failures are `/`, `/blogs`, and `/events` failing to *prerender*
in my sandbox specifically, because my sandbox's network is locked to
npm/GitHub domains only — it can't reach `yam0dcsb.apicdn.sanity.io`. That
restriction doesn't exist on Vercel, your own machine, or Codex's
environment, so those three pages will render real data there.

## Files changed

- **`lib/sanity.js`** — full rewrite. Points at your live project
  (`yam0dcsb` / `production`), adds every fetcher needed: `getAllBlogs`,
  `getBlogBySlug`, `getRecentBlogs` (homepage), `getPopularBlogs` (sidebar),
  `getRecentLegalInsights`, `getAllEvents`, `getUpcomingEvents` (homepage),
  `getEventBySlug`.
- **`sanity/schema/*.js`** — replaced with the exact schema currently live at
  `ylh-bie.sanity.studio` (blog, event, legalInsight). This folder in the
  website repo isn't an active Studio (nothing routes to it) — it's kept in
  sync for reference/future use only. Your real CMS is the standalone deploy.
- **`app/blogs/page.jsx`** — now a server component fetching blogs, popular
  posts, and legal insights, passed down as props.
- **`app/blogs/BlogsClient.jsx`** — full rebuild matching your mockup:
  hero, stats bar, category + content-type filters, search, featured post,
  2-column grid, sidebar (Popular Posts / Latest Insights / newsletter),
  pagination. All driven by live Sanity data, no more mock content.
- **`app/blogs/[slug]/page.jsx`** — full rebuild. Renders headings,
  bold/italic/underline, justified paragraphs, block quotes, and bulleted
  lists from the rich text field; shows Abstract (if filled in) and
  Bibliography (if filled in) only when present.
- **`app/events/page.jsx`** + **`app/events/EventsClient.jsx`** (new) — the
  old file was a single hardcoded page for one past event ("Lex Noctis");
  that's now `app/events/_legacy-EventsClient.unused.jsx.bak` (kept, not
  deleted, in case you want to reference its copy). The new page is a real
  listing: hero, stats, filters (All/Upcoming/Past/Competition/Webinar/
  Workshop/Talk), search, "What's Coming Up" grid, "From Our Legacy" past
  strip, newsletter bar — all from Sanity.
- **`app/events/[slug]/page.jsx`** (new) — event detail page. Shows poster
  or cover image, description, rich body content, prizes, and
  registration/brochure/Instagram/recap links only when those fields are
  filled in for that event.
- **`app/page.jsx`** + **`app/HomeClient.jsx`** — "Recent Blogs" and
  "Upcoming Events" homepage widgets now pull from the same live data
  instead of the static mock arrays.
- **`app/redesign.css`** — added the CSS for the new events-page grid cards,
  past-events strip, sidebar's 3-column insight tiles, and the full article/
  event detail page typography (including the "Justified" paragraph style).
  Everything else reuses classes that were already in this file.

## One thing to do before this looks fully real

Right now Sanity has the 4 blog posts you imported earlier, but **no events
yet** — so `/events` will correctly show its "no events published yet"
empty state until you add some. Fastest way: open
`https://ylh-bie.sanity.studio` → Events → create the 4 upcoming + however
many past events you want, Publication Status → Published. Takes a few
minutes per event since the form is already built.

## Not touched in this pass

Careers and Bare Acts pages are untouched — still on static mock data, as
agreed. This pass was scoped to Blogs, Events, and the homepage widgets that
depend on them.
