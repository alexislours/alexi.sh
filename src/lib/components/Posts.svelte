<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import Title from "$lib/components/Title.svelte";
    import SearchBox from "$lib/components/SearchBox.svelte";
    import { page } from "$app/stores";
    import fuzzySearch from "$utils/search.js";

    import type { Post } from "$lib/types/post";
    import type { TagItem } from "$lib/types/tag";
    import { readTime } from "$utils/read-time";

    export let title = "";
    export let subtitle = "";
    export let posts: Post[] = [];
    export let tags: TagItem[] = [];
    export let search = true;
    export let count = 0;
    if (count) {
        posts = posts.slice(0, count);
    }
    $: filter = $page.url.searchParams.get("query");
    $: currentPosts = filter ? fuzzySearch(posts, filter) : posts;
</script>

<div class="mt-5">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <div class="grid lg:grid-cols-2 gap-4">
            <div>
                <Title {title} {subtitle} />
            </div>

            <div>
                {#if search}
                    <SearchBox />
                {/if}

                {#if tags.length}
                    <div class="flex flex-wrap gap-4 md:gap-2 mt-4">
                        {#each tags as tag}
                            <div class="flex items-center">
                                <Tag text={tag.text} count={tag.count} />
                            </div>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
    <ul class="flex flex-col gap-3">
        {#each currentPosts as post}
            <li>
                <article class="bg-neutral-50 dark:bg-zinc-800 rounded-lg p-5">
                    <div
                        class="space-y-2"
                    >
                        <div>
                            <div>
                                <div>
                                    <h2
                                        class="text-2xl font-bold leading-8 tracking-tight"
                                    >
                                        <a
                                            href={`/blog/${post.slug}`}
                                            class="text-gray-900 dark:text-gray-100"
                                            data-sveltekit-preload-code="viewport"
                                        >
                                            {post.title}
                                        </a>
                                    </h2>
                                    <p class="mt-2">
                                        {new Date(post.date).toLocaleDateString(
                                            "en-us",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )} ({readTime(post.wordCount)} mins)
                                    </p>
                                </div>
                                <div
                                    class="max-w-none mt-3 text-gray-500 dark:text-gray-400"
                                >
                                    {post.description}
                                </div>
                            </div>
                            <div class="text-base mt-3 font-medium">
                                <a
                                    href={`/blog/${post.slug}`}
                                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    aria-label={`Read "${post.title}"`}
                                >
                                    Read more &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
</div>
