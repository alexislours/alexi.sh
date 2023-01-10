<script lang="ts">
	import Head from "$lib/components/layout/Head.svelte";
	import Posts from "$lib/components/Posts.svelte";
	import type { Post } from "$lib/types/post";

	export let data: { tag: string; posts: Post[] };
</script>

<Head title={`Alexis LOURS - ${data.tag.toUpperCase()}`} />

<Posts title={data.tag.toUpperCase()} posts={data.posts} search={false} />
