<script lang="ts">
	import { slug } from "github-slugger";
	export let text = "";
	export let url = slug(text);
	export let count: number | null = null;
</script>

<a
	href={`/tags/${url}`}
	class="mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm md:text-xs"
>
	{text}
	{#if count}({count}){/if}
</a>
