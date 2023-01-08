import { error } from '@sveltejs/kit';
import { getEntries } from '$utils/entries.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
	const posts = getEntries('posts');
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		throw error(404, 'No post found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		post: post,
	};
}