<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import Head from "$lib/components/layout/Head.svelte";
	import type { Project } from "$lib/types/project";
	export let data;
	const projects: Project[] = data.projects;
</script>

<Head title="Alexis LOURS - Projects" description="A list of the projects I worked on." />

<div>
	<div class="container py-12">
		<p class="text-lg">A list of projects I have worked on.</p>
		<div class="flex gap-8 pt-6 flex-wrap justify-center">
			{#each projects as project}
				<Card card={project} />
			{/each}
		</div>
	</div>
	<p class="text-sm text-center">And many more...</p>
</div>
