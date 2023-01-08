<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="mx-auto w-64 text-center">
    <h1 class="text-9xl font-bold">{$page.status}</h1>
    <p class="text-2xl font-semibold">{$page.error?.message}</p>
    <div class="pt-10">
        <a href="/" class="text-xl font-semibold border py-2 px-6 rounded-lg">
            Go Home
        </a>
    </div>
</div>
