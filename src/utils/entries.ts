import { browser } from '$app/environment';
import { slug } from 'github-slugger';
import type { TagItem } from '$lib/types/tag';

type EntryType = 'posts' | 'projects';

const getPosts = () => {
	return Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));
};

const getProjects = () => {
	return Object.entries(import.meta.glob('/content/projects/**/*.md', { eager: true }));
};

const getEntriesByType = (entryType: EntryType) => {
	switch (entryType) {
		case 'posts':
			return getPosts();
		case 'projects':
			return getProjects();
		default:
			throw new Error(`unknown entry type ${entryType}`);
	}
};

const getMetadata = (entryType: EntryType, filepath: string, entry: any) => {
	return {
		...entry.metadata,

		content: entry.default.render().html,

		slug: filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop(),
			
		tags: entry.metadata.tags || []
	};
};

export const getEntries = (entryType: EntryType) => {

	let entries = getEntriesByType(entryType);

	return (
		entries
			.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
			.filter((entry) => !entry.draft)
			.sort((a, b) => (a.date < b.date ? 1 : -1))
			.map((entry, index, allEntries) => ({
				...entry,
				next: allEntries[index - 1],
				prev: allEntries[index + 1]
			}))
	);
};

export const getTags = (): TagItem[] => {
	const posts = getEntries('posts');
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
			text:tag,
			count,
			slug: slug(tag)
		};
	});
	return tags;
};
