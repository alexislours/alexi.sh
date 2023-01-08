<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6">
    <div class="flex h-screen flex-col">
        <Header />
        <main>
            <slot />
        </main>
        <Footer/>
    </div>
</div>