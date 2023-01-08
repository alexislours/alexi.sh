<script>
	import { config } from "$lib/config";
	import Gitlab from "$lib/icons/Gitlab.svelte";
	import Mail from "$lib/icons/Mail.svelte";
    import Rss from "$lib/icons/Rss.svelte";
	let startYear = 2022;
	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="flex items-center justify-center gap-4 h-12">
			<a href={config.gitlab} target="_blank" rel="noopener noreferrer" aria-label="Gitlab">
				<Gitlab />
			</a>
			<a
				href={`mailto:${config.email}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Email"
			>
				<Mail />
			</a>

			<a href="/rss.xml" target="_blank" rel="noopener noreferrer" aria-label="RSS">
				<Rss />
			</a>
		</div>
		<div
			class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-100"
		>
			© {startYear}-{year}
			{config.author}
		</div>
	</div>
</footer>
