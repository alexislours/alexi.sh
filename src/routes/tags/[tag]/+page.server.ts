import { error } from "@sveltejs/kit";
import { slug } from "github-slugger";
import { getPosts } from "$utils/entries.js";

function slugsArray(tags: string[]) {
	return tags?.map((t) => slug(t)) || [];
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: { tag: string } }) {
	const { tag } = params;
	const posts = getPosts();
	const filteredPosts = posts.filter((p) => slugsArray(p.tags).includes(tag));

	if (!filteredPosts) {
		throw error(404, "No post found");
	}

	return {
		tag: tag,
		posts: filteredPosts
	};
}
