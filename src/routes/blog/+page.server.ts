import { getPosts, getTags } from "$utils/entries";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = getPosts();
	if (!posts) {
		throw error(404, "No post found");
	}

	const tags = getTags();

	return {
		posts: posts,
		tags: tags
	};
}
