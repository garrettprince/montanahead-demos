<script>
	import Footer from '../lib/components/Footer.svelte';
	import MockLogo from '../lib/components/MockLogo.svelte';
	import SongControls from '../lib/components/SongControls.svelte';
</script>

<body class="flex flex-col justify-center h-screen">
	<header class="">
		<nav class="flex justify-between md:">
			<MockLogo />
			<div class="flex-col mt-6 mr-8">
				<p class="flex justify-center font-medium text-xl">MONTANAHEAD</p>
				<p class="flex font-extrabold justify-end">DEMOS</p>
			</div>
		</nav>
	</header>
	<main class="flex h-full">
		<section class="flex mx-auto">
			<SongControls />
		</section>
	</main>
	<Footer />
</body>
