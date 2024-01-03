// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
    schema: ({ image }: any) => z.object({
        date: z.date().nullable(),
        description: z.string().nullable(),
        title: z.string(),
        tags: z.array(z.string()).nullable(),
        preview_image: image().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};