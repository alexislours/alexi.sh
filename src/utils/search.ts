import type { Post } from "$lib/types/post";

const fuzzySearch = (items: Post[], query: string) => {
	const searchKeys: Array<"title" | "description" | "content"> = [
		"title",
		"description",
		"content"
	];
	const search = query?.toLowerCase().split(" ");

	return items.filter((item) => {
		return search.every((term) => {
			return searchKeys.some((key) => {
				return item[key].toLowerCase().includes(term);
			});
		});
	});
};

export default fuzzySearch;
