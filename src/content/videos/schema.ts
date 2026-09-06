import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    url: z.string(),
    description: z.string(),
  }),
});

export const collections = { videos };
