import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://alexi.sh",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  experimental: {
    assets: true,
  },
  integrations: [sitemap(), tailwind(), mdx()],
});
