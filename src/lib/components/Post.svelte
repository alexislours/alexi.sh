<script lang="ts">
	import Tag from "$lib/components/Tag.svelte";
	import type { Post } from "$lib/types/post";
	import { timeSince } from "$utils/date";
	import { readTime } from "$utils/read-time";
	export let post: Post;
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 mt-5">
	<header class="pt-6 xl:pb-6">
		<div class="space-y-1">
			<div>
				<h1
					class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
				>
					{post.title}
				</h1>
			</div>
			<dl class="space-y-10">
				<div>
					<dt class="sr-only">Published on</dt>
					<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
						<time dateTime={post.date}>
							{new Date(post.date).toLocaleDateString("en-us", {
								year: "numeric",
								month: "long",
								day: "numeric"
							})}
						</time>
					</dd>
					{#if post.updated}
						<dd class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
							<time dateTime={post.updated}>
								Updated on {new Date(post.updated).toLocaleDateString("en-us", {
									year: "numeric",
									month: "long",
									day: "numeric"
								})} ({timeSince(post.updated)} ago)
							</time>
						</dd>
					{/if}
					<dd class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
						{readTime(post.wordCount)} min read
					</dd>
				</div>
			</dl>
		</div>
	</header>
	<article>
		<div class="prose max-w-none pt-10 pb-8 dark:prose-invert">
			{@html post.content}
		</div>
	</article>
	<footer>
		{#if post.tags}
			<div class="py-4 xl:py-8">
				<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
				<div class="flex flex-wrap">
					{#each post.tags as tag}
						<Tag text={tag} />
					{/each}
				</div>
			</div>
		{/if}
	</footer>
	<div
		class="flex flex-col md:flex-row w-full mt-5 mb-5 gap-10 md:gap-2 items-center md:justify-between"
	>
		{#if post.next}
			<a
				href={`/blog/${post.next.slug}`}
				class="text-gray-500 dark:text-gray-400 self-start flex items-center text-sm hover:text-gray-900 dark:hover:text-gray-100"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>

				<span class="ml-2">{post.next.title}</span>
			</a>
		{:else}
			<div />
		{/if}
		{#if post.prev}
			<a
				href={`/blog/${post.prev.slug}`}
				class="text-gray-500 flex items-center text-sm self-end dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
			>
				<span class="mr-2">{post.prev.title}</span><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</a>
		{:else}
			<div />
		{/if}
	</div>
</div>
