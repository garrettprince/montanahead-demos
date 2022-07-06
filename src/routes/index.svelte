<script>
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Player from '../lib/components/Player.svelte';
	import Player2 from '../lib/components/Player2.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<body
		transition:fade={{ delay: 300, duration: 2000 }}
		class="flex flex-col justify-center h-screen max-w-3xl mx-auto"
	>
		<header class="">
			<Nav />
		</header>
		<main class="flex flex-col justify-evenly h-full">
			<Player />
			<!-- <Player2 /> -->
		</main>
		<Footer />
	</body>
{/if}
