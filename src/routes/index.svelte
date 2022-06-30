<script>
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Player from '../lib/components/Player.svelte';
</script>

<body class="flex flex-col justify-center h-screen">
	<header>
		<Nav />
	</header>
	<main class="flex h-full">
		<Player />
	</main>
	<Footer />
</body>
