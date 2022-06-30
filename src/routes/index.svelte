<script>
	import MockLogo from '../lib/components/MockLogo.svelte';
	import SongControls from '../lib/components/SongControls.svelte';
</script>

<body>
	<header>
		<nav class="flex justify-between ">
			<MockLogo />
			<div class="flex-col mt-6 mr-8">
				<p class="flex justify-center font-medium text-xl">MONTANAHEAD</p>
				<p class="flex font-extrabold justify-end">DEMOS</p>
			</div>
		</nav>
	</header>
	<main class="flex h-screen">
		<section class="flex-col mx-auto my-auto ">
			<SongControls />
		</section>
	</main>
</body>
