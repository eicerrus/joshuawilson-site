import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    url: z.string(),
    description: z.string(),
  }),
});

export const collections = { videos };
