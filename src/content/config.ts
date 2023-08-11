import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image()
        .refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        })
        .optional(),
    }),
});

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      subtitle: z.string(),
      at: z.string().optional(),
      start: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      end: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val))
        .optional(),
      href: z.string().url().optional(),
      heroImage: image(),
    }),
});

export const collections = { blog, projects };
