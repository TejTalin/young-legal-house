export default {
  name: 'legalInsight',
  title: 'Legal Insight (Instagram-style)',
  type: 'document',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Short punchy line shown on the tile, e.g. "Justice delayed is justice denied." Keep it to one sentence.',
      validation: Rule => Rule.required().max(90),
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'instagramUrl',
      title: 'Instagram Post URL (optional)',
      type: 'url',
      description: 'If this tile mirrors an actual Instagram post, link it here so the tile can open Instagram on click.',
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
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first. Leave blank to sort by newest.',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
      initialValue: () => new Date().toISOString(),
    },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Newest First', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'caption', media: 'image', status: 'publicationStatus' },
    prepare({ title, media, status }) {
      return { title, subtitle: status === 'published' ? 'Published' : 'Draft', media };
    },
  },
}
