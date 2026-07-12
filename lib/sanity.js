import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yam0dcsb'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true, // reads are public + CDN-cached, no token required
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

/* ───────────────────────── BLOGS ───────────────────────── */

const BLOG_CARD_FIELDS = `
  _id, title, author, authorCollege, category, contentType,
  readTime, excerpt, coverImage, publishedAt, slug
`

export async function getAllBlogs() {
  return client.fetch(`
    *[_type == "blog" && publicationStatus == "published"] | order(publishedAt desc) {
      ${BLOG_CARD_FIELDS}
    }
  `)
}

export async function getBlogBySlug(slug) {
  return client.fetch(
    `
      *[_type == "blog" && publicationStatus == "published" && slug.current == $slug][0] {
        _id, title, author, authorCollege, category, contentType,
        readTime, excerpt, abstract, body, bibliography, coverImage,
        publishedAt, slug
      }
    `,
    { slug }
  )
}

// Homepage widget — most recent, lightweight projection only.
export async function getRecentBlogs(limit = 4) {
  return client.fetch(
    `
      *[_type == "blog" && publicationStatus == "published"] | order(publishedAt desc) [0...$limit] {
        ${BLOG_CARD_FIELDS}
      }
    `,
    { limit }
  )
}

// "Popular Posts" sidebar — no view-count field yet, so this is recency-based
// for now. Swap the ordering here once real view counts exist.
export async function getPopularBlogs(limit = 5) {
  return client.fetch(
    `
      *[_type == "blog" && publicationStatus == "published"] | order(publishedAt desc) [0...$limit] {
        ${BLOG_CARD_FIELDS}
      }
    `,
    { limit }
  )
}

/* ───────────────────────── LEGAL INSIGHTS ───────────────────────── */

export async function getRecentLegalInsights(limit = 6) {
  return client.fetch(
    `
      *[_type == "legalInsight" && publicationStatus == "published"]
        | order(coalesce(order, 9999) asc, publishedAt desc) [0...$limit] {
        _id, caption, image, instagramUrl
      }
    `,
    { limit }
  )
}

/* ───────────────────────── EVENTS ───────────────────────── */

const EVENT_CARD_FIELDS = `
  _id, title, slug, eventType, status, eventDate, registrationDeadline,
  location, shortDescription, coverImage
`

export async function getAllEvents() {
  return client.fetch(`
    *[_type == "event" && publicationStatus == "published"] | order(eventDate asc) {
      ${EVENT_CARD_FIELDS}
    }
  `)
}

// Homepage widget — next 3 upcoming events only, lightweight.
export async function getUpcomingEvents(limit = 3) {
  return client.fetch(
    `
      *[_type == "event" && publicationStatus == "published" && status == "upcoming"] | order(eventDate asc) [0...$limit] {
        _id, title, slug, eventType, eventDate, location
      }
    `,
    { limit }
  )
}

export async function getEventBySlug(slug) {
  return client.fetch(
    `
      *[_type == "event" && publicationStatus == "published" && slug.current == $slug][0] {
        _id, title, slug, eventType, status, eventDate, registrationDeadline,
        location, shortDescription, coverImage, body, posterImage,
        reelVideoUrl, instagramUrl, brochureUrl, registrationUrl,
        registrationFee, prizes
      }
    `,
    { slug }
  )
}
