import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schema/index'

export default defineConfig({
  name: 'young-legal-house',
  title: 'Young Legal House CMS',
  projectId: 'c2r4n385',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
