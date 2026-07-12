export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorCollege',
      title: 'Author College / Law School',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tax', value: 'Tax' },
          { title: 'TMT', value: 'TMT' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Litigation', value: 'Litigation' },
          { title: 'M&A', value: 'M&A' },
          { title: 'ADR', value: 'ADR' },
          { title: 'IPR', value: 'IPR' },
          { title: 'Constitutional Law', value: 'Constitutional Law' },
          { title: 'Criminal Law', value: 'Criminal Law' },
          { title: 'International Law', value: 'International Law' },
          { title: 'Others', value: 'Others' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'Article' },
          { title: 'Case Commentary', value: 'Case Commentary' },
          { title: 'Legislation Update', value: 'Legislation Update' },
          { title: 'Research Paper', value: 'Research Paper' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publicationStatus',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Under Review', value: 'under_review' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: Rule => Rule.required(),
      description: 'Only content marked as Published appears on the website.',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. "6 min read" — shown on homepage and blog cards',
      initialValue: '5 min read',
    },
    {
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
      description: '2-3 sentence summary shown on the blogs page card',
      validation: Rule => Rule.required()
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 5,
      description: 'Longer academic-style abstract, shown at the top of the full article/research paper page. Optional — leave blank for short-form articles.',
    },
    {
      name: 'body',
      title: 'Full Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Sub-heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
            { title: 'Justified', value: 'justify' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
      ],
      description: 'Use "Justified" from the paragraph style dropdown to justify a paragraph — no separate alignment tool needed.',
    },
    {
      name: 'bibliography',
      title: 'Bibliography / Citations',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'One citation per line, e.g. "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225". Shown at the end of the article. Leave empty if not applicable.',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
      description: 'Shown as the title/hero image on the blogs page, blog card, and homepage widget.',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      status: 'publicationStatus',
    }
    ,
    prepare({ title, subtitle, status }) {
      const statusLabel = status === 'published'
        ? 'Published'
        : status === 'under_review'
          ? 'Under Review'
          : 'Draft';

      return {
        title,
        subtitle: `${subtitle || 'Unknown Author'} • ${statusLabel}`,
      };
    },
  }
}
