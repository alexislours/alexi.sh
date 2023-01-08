<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Transition from "$lib/components/layout/Transition.svelte";

    export let data: { pathname: string };
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6">
    <div class="flex h-screen flex-col">
        <Header />
        <main>
            <Transition pathname={data?.pathname}>
                <slot />
            </Transition>
        </main>
        <Footer />
    </div>
</div>
