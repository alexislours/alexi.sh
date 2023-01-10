<script lang="ts">
	import { config } from "$lib/config";

	export let title = config.title;
	export let description = config.description;
	export let img = "";
	let url = config.domain;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={url} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if img}
		<meta name="twitter:image" content={img} />
	{/if}

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if img}
		<meta property="og:image" content={img} />
	{/if}
</svelte:head>
