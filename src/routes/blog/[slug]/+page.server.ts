import { error } from "@sveltejs/kit";
import { getEntries } from "$utils/entries.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: { slug: string } }) {
	const posts = getEntries("posts");
	const { slug } = params;
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		throw error(404, "No post found");
	}

	return {
		post: post
	};
}
