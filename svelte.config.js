import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		alias: {
			"$lib/*": "src/lib",
			"$utils/*": "src/utils"
		},
		adapter: adapter({
			edge: false,
			split: true
		}),
		inlineStyleThreshold: 50000
	},

	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
