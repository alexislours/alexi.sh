<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -5, duration: 300, delay: 0 }}>
		<slot />
	</div>
{/key}