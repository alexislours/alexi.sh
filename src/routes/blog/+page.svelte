<script>
	import Head from "$lib/components/layout/Head.svelte";
	import Posts from "$lib/components/Posts.svelte";
	export let data;
	const posts = data.posts;
	const tags = data.tags.slice(0, 10);
</script>

<Head title="Alexis LOURS - Blog" />

<Posts title="All Posts" {posts} {tags} />
