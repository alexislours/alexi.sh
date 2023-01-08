import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		alias: {
			"$lib/*": "src/lib",
			"$utils/*": "src/utils"
		},
		adapter: adapter({
			edge: false,
			split: true
		})
	},

	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
