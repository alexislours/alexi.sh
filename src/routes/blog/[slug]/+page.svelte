<script lang="ts">
	import Head from "$lib/components/layout/Head.svelte";
	import Post from "$lib/components/Post.svelte";
	import Utterances from "$lib/components/Utterances.svelte";
	export let data;
	const post = data.post;
</script>

<Head title={post.title} description={post.description} img={post.image} />
<Post {post} />
<Utterances />
