export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Competition', value: 'Competition' },
          { title: 'Webinar', value: 'Webinar' },
          { title: 'Talk', value: 'Talk' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Concluded', value: 'concluded' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required(),
      description: 'Upcoming events show on the homepage widget and the Events page "Upcoming" tab. Concluded events move to the archive.',
    },
    {
      name: 'publicationStatus',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: Rule => Rule.required(),
      description: 'Only Published events appear on the website.',
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'date',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Online',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: '1-2 sentences shown on the homepage widget and Events listing card',
      validation: Rule => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Full Event Details',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich content shown on the individual event detail page (rules, eligibility, prizes, etc).',
    },
    {
      name: 'posterImage',
      title: 'Poster Image (optional)',
      type: 'image',
      description: 'For flagship events with a dedicated poster, e.g. Lex Noctis.',
    },
    {
      name: 'reelVideoUrl',
      title: 'Recap Video URL (optional)',
      type: 'url',
      description: 'Path or URL to a recap/reel video for concluded events.',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram Link (optional)',
      type: 'url',
    },
    {
      name: 'brochureUrl',
      title: 'Brochure PDF URL (optional)',
      type: 'url',
    },
    {
      name: 'registrationUrl',
      title: 'Registration Link (optional)',
      type: 'string',
      description: 'Internal path (e.g. /events/register) or external URL.',
    },
    {
      name: 'registrationFee',
      title: 'Registration Fee (optional)',
      type: 'string',
    },
    {
      name: 'prizes',
      title: 'Prizes (optional)',
      type: 'text',
      rows: 3,
    },
  ],
  orderings: [
    {
      title: 'Event Date, New First',
      name: 'eventDateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      status: 'status',
      pubStatus: 'publicationStatus',
    },
    prepare({ title, date, status, pubStatus }) {
      const statusLabel = status === 'upcoming' ? 'Upcoming' : 'Concluded';
      const pubLabel = pubStatus === 'published' ? 'Published' : 'Draft';
      return {
        title,
        subtitle: `${date || 'No date'} · ${statusLabel} · ${pubLabel}`,
      };
    },
  },
}
