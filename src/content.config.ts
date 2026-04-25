import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notatnik = defineCollection({
  loader: glob({ pattern: 'index.json', base: './src/content/notatnik' }),
  schema: z.object({
    publications: z
      .array(z.object({ citation: z.string() }))
      .optional()
      .default([]),
    paintings: z
      .array(z.object({ file: z.string(), caption: z.string() }))
      .optional()
      .default([]),
    cats: z
      .array(z.object({ file: z.string(), alt: z.string().optional() }))
      .optional()
      .default([]),
  }),
});

export const collections = { notatnik };
