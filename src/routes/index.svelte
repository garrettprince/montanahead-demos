<script>
	import { fade } from 'svelte/transition';
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Player from '../lib/components/Player.svelte';

	let pageLoad = true
</script>

{#if pageLoad}
	<body class="flex flex-col justify-center h-screen border border-white">
		<header class="border border-white">
			<Nav />
		</header>
		<main class="flex h-full">
			<Player />
		</main>
		<Footer />
	</body>
{/if}
