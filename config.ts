// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }: any) => z.object({
    draft: z.boolean(),
    title: z.string(),
    author: z.object({
      name: z.string(),
      avatar: z.string(),
    }),
    date: z.date().nullable(),
    description: z.string().nullable(),
    tags: z.array(z.string()).nullable(),
    preview_image: image().optional(),
    series: z.string().optional(),
  }),
});

const portfolioCollection = defineCollection({
  schema: ({ image }: any) => z.object({
    draft: z.boolean(),
    title: z.string(),
    category: z.string().optional(),
    date: z.date().nullable().optional(),
    // author: z.object({
    //   name: z.string(),
    //   avatar: z.string(),
    // }),
    // date: z.date().nullable(),
    description: z.string().nullable(),
    // tags: z.array(z.string()).nullable(),
    preview_image: image().optional(),
    repo: z.string()
    // series: z.string().optional(),
  }),

})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection
};