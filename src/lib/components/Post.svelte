<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import type { Post } from "$lib/types/post";
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
                            {new Date(post.date).toLocaleDateString('en-us', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </dd>
                    <dd class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {readTime(post.content)} min read
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
            <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
            </h2>
            <div class="flex flex-wrap">
                {#each post.tags as tag}
                    <Tag text={tag} />
                {/each}
            </div>
        </div>
    {/if}
    </footer>
</div>

<style>
</style>
