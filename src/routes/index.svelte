<script>
	import { fade } from 'svelte/transition';
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
import SongControls from '../lib/components/SongControls.svelte';

	let pageLoad = true
</script>

{#if pageLoad}
	<body class="flex flex-col justify-center h-screen">
		<header class="">
			<Nav />
		</header>
		<main class="flex flex-col justify-evenly h-full">
			<SongControls />
		</main>
		<Footer />
	</body>
{/if}
