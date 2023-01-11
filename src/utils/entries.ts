import { slug } from "github-slugger";
import * as jsdom from "jsdom";
import type { TagItem } from "$lib/types/tag";

type EntryType = "posts" | "projects";

const getPosts = () => {
	return Object.entries(import.meta.glob("/content/posts/**/*.md", { eager: true }));
};

const getProjects = () => {
	return Object.entries(import.meta.glob("/content/projects/**/*.md", { eager: true }));
};

const getEntriesByType = (entryType: EntryType) => {
	switch (entryType) {
		case "posts":
			return getPosts();
		case "projects":
			return getProjects();
		default:
			throw new Error(`unknown entry type ${entryType}`);
	}
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const getMetadata = (filepath: string, entry: any) => {
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
};

export const getEntries = (entryType: EntryType) => {
	const entries = getEntriesByType(entryType);

	return entries
		.map(([filepath, entry]) => getMetadata(filepath, entry))
		.filter((entry) => !entry.draft)
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.map((entry, index, allEntries) => ({
			...entry,
			next: allEntries[index - 1],
			prev: allEntries[index + 1]
		}));
};

export const getTags = (): TagItem[] => {
	const posts = getEntries("posts");
	let tags = posts.reduce((acc, post) => {
		post.tags.forEach((tag: string) => {
			if (acc[tag]) {
				acc[tag] += 1;
			} else {
				acc[tag] = 1;
			}
		});
		return acc;
	}, {} as Record<string, number>);

	tags = Object.entries(tags).map(([tag, count]) => {
		return {
			text: tag,
			count,
			slug: slug(tag)
		};
	});

	return tags.sort((a: TagItem, b: TagItem) => (a.count < b.count ? 1 : -1));
};
