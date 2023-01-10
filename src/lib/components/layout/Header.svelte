<script>
	import { config, navLinks } from "$lib/config";
	import ThemeSwitch from "$lib/components/ThemeSwitcher.svelte";
	import MobileMenu from "$lib/components/MobileMenu.svelte";
	import Logo from "$lib/icons/Logo.svelte";
</script>

<header class="flex items-center justify-between mt-10">
	<div>
		<a href="/" aria-label={config.title}>
			<div class="flex items-center justify-between">
				<div class="hidden text-4xl font-semibold sm:block font-title">
					<Logo />
				</div>
			</div>
		</a>
	</div>
	<div class="flex items-center text-base w-full sm:w-auto px-5 sm:px-0 justify-between leading-5">
		<div class="hidden sm:block">
			{#each navLinks as link}
				<a
					href={link.href}
					data-sveltekit-preload-code="viewport"
					class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">{link.title}</a
				>
			{/each}
		</div>
		<ThemeSwitch />
		<MobileMenu />
	</div>
</header>
