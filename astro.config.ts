import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";

export default defineConfig({
  site: "https://alexi.sh",
  compressHTML: true,
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  build: {
    inlineStylesheets: "auto",
  },
  experimental: {
    assets: true,
  },
  integrations: [
    sitemap({
      filter: (page) => page !== "https://alexi.sh/build/",
    }),
    tailwind(),
    mdx(),
  ],
});
