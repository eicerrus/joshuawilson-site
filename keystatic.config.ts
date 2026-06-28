import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'eicerrus/joshuawilson-site' },
  collections: {
    videos: collection({
      label: 'Videos',
      slugField: 'title',
      schema: {
        title:       fields.slug({ name: { label: 'Title' } }),
        date:        fields.date({ label: 'Date' }),
        url:         fields.text({ label: 'YouTube URL' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});
