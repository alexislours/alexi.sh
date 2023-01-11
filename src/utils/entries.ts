import * as jsdom from "jsdom";
import { slug } from "github-slugger";

import type { Post } from "$lib/types/post";
import type { Project } from "$lib/types/project";
import type { TagItem } from "$lib/types/tag";

type PostMetadata = Omit<Post, "content" | "wordCount" | "slug" | "tags">;

export const getPosts = () => {
	const query = Object.entries(import.meta.glob("/content/posts/**/*.md", { eager: true })) as [
		string,
		Post & { metadata: PostMetadata }
	][];
	const posts = query.map(([filepath, entry]) => {
		return {
			...entry.metadata,
			content: entry.default.render().html,
			wordCount:
				jsdom.JSDOM.fragment(entry.default.render().html).textContent?.split(/\s+/).length || 0,
			slug: filepath
				.replace(/(\/index)?\.md/, "")
				.split("/")
				.pop(),
			tags: entry.metadata.tags || []
		};
	});
	return posts
		.filter((entry) => !entry.draft)
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.map((entry, index, allEntries) => ({
			...entry,
			next: allEntries[index - 1],
			prev: allEntries[index + 1]
		})) as Post[];
};

export const getProjects = () => {
	const query = Object.entries(import.meta.glob("/content/projects/**/*.md", { eager: true })) as [
		string,
		Project & { metadata: Project }
	][];
	const projects = query.map(([, entry]) => {
		return {
			...entry.metadata
		};
	}) as Project[];
	return projects.sort((a, b) => b.start.localeCompare(a.start));
};

export const getTags = (): TagItem[] => {
	const posts = getPosts();
	const tags = posts.reduce((acc, post) => {
		post.tags.forEach((tag: string) => {
			if (acc[tag]) {
				acc[tag] += 1;
			} else {
				acc[tag] = 1;
			}
		});
		return acc;
	}, {} as Record<string, number>);

	const tagItems = Object.entries(tags).map(([tag, count]) => {
		return {
			text: tag,
			count,
			slug: slug(tag)
		};
	}) as TagItem[];

	return tagItems.sort((a: TagItem, b: TagItem) => (a.count < b.count ? 1 : -1));
};
