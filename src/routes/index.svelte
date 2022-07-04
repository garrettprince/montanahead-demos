<script>
	import { fade } from 'svelte/transition';
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Player from '../lib/components/Player.svelte';
	import Player2 from '../lib/components/Player2.svelte';

	let pageLoad = true;
</script>

{#if pageLoad}
	<body transition:fade class="flex flex-col justify-center h-screen max-w-3xl mx-auto">
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
