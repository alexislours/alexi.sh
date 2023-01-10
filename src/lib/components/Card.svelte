<script lang="ts">
    import Calendar from "$lib/icons/Calendar.svelte";
    import type { Project } from "$lib/types/project";
    import { formatProjectDate } from "$utils/date";

    export let card: Project;
</script>

<div class="t w-[21rem]">
    <div
        class={`${
            card.image && "h-full"
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-zinc-800`}
    >
        {#if card.image}
            {#if card.href}
                <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to ${card.title}`}
                >
                    <img
                        alt={card.title}
                        src={card.image}
                        class="object-cover object-center aspect-video w-full"
                    />
                </a>
            {:else}
                <img
                    alt={card.title}
                    src={card.image}
                    class="object-cover object-center aspect-video w-full"
                />
            {/if}
        {/if}
        <div class="p-6">
            <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
                {#if card.href}
                    <a href={card.href} target="_blank" rel="noreferrer" aria-label={`Link to ${card.title}`}>
                        {card.title}
                        {#if card.at} @ {card.at} {/if}
                    </a>
                {:else}
                    {card.title}
                    {#if card.at} @ {card.at} {/if}
                {/if}
            </h2>

            {#if card.start}
                {#if card.end}
                    <p
                        class="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2"
                    >
                        <Calendar />
                        {formatProjectDate(card.start)} - {formatProjectDate(
                            card.end
                        )}
                    </p>
                {:else}
                    <p
                        class="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2"
                    >
                        <Calendar />
                        {formatProjectDate(card.start)}
                    </p>
                {/if}
            {/if}

            <p class="mb-3 mt-3 font-semibold text-zinc-900 dark:text-gray-100">
                {card.subtitle}
            </p>
            <p class="mb-3 max-w-none text-gray-500 dark:text-gray-300">
                {card.description}
            </p>
            {#if card.href}
                <p class="mt-4">
                    <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to ${card.title}`}
                    >
                        Learn more &rarr;
                    </a>
                </p>
            {/if}
        </div>
    </div>
</div>
