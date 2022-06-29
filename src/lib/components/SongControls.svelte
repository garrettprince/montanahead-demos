<script>
	import PlayButton from './PlayButton.svelte';
	import PreviousButton from './PreviousButton.svelte';
	import NextButton from './NextButton.svelte';
	import PauseButton from './PauseButton.svelte';
</script>

<div class="flex">
	<main class="flex-col m-auto">
		<div class="flex justify-center items-center">
			<PreviousButton />
			<!-- <PlayButton /> -->
			<PauseButton />
			<NextButton />
		</div>
	</main>
</div>
