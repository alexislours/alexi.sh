import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import UnoCSS from "unocss/astro";

export default defineConfig({
  site: "https://alexi.sh",
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    domains: ["live.staticflickr.com"],
  },
  integrations: [
    sitemap({
      filter: (page) => page !== "https://alexi.sh/build/",
    }),
    mdx(),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
