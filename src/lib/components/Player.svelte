<script>
	import { songList } from '../data/SongList';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Howler, Howl } from 'howler';

	const sound = new Howl({
		src: ['../../static/audio/tackleHit.wav'],
		loop: false,
		volume: 0.5,
		preload: true,
		onload: function() {
			console.log('loaded');
		},
	});

	function playSound() {
		sound.play()
	}

	// Initialize play state as false when the site loads
	let playing = false;


	// Bring in song data from the songList.js file
	const gum = songList.gum.title.toUpperCase();
	const swimmingLessons = songList.swimmingLessons.title.toUpperCase();
	const theKing = songList.theKing.title.toUpperCase();
	const minutes = songList.minutes.title.toUpperCase();

	const songs = [gum, swimmingLessons, theKing, minutes];

	// Establish a variable to hold the current song index from songs array
	let currentIndex = 0;
	let currentSong = songs[currentIndex];

	// Functions for users to choose songs out of order via click
	function gumClick() {
		currentSong = gum;
		currentIndex = 0;
	}

	function swimmingLessonsClick() {
		currentSong = swimmingLessons;
		currentIndex = 1;
	}

	function theKingClick() {
		currentSong = theKing;
		currentIndex = 2;
	}

	function minutesClick() {
		currentSong = minutes;
		currentIndex = 3;
	}

	// Functions to handle progressing and regressing through the songs array
	function previousClick() {
		currentIndex -= 1;

		if (currentIndex === -1) {
			currentIndex = 3;
		}

		currentSong = songs[currentIndex];

		console.log(currentIndex);
		console.log(currentSong);
	}

	function nextClick() {
		currentIndex += 1;

		if (currentIndex > songs.length - 1) {
			currentIndex = 0;
		}

		currentSong = songs[currentIndex];

		console.log(currentIndex);
		console.log(currentSong);
	}

	// Functions to handle whether the song is playing or not
	function playClick() {
		console.log('play');
		playing = !playing;
	}

	function pauseClick() {
		console.log('pause');
		playing = !playing;
	}
</script>

<!-- Top Song Container -->
<section class="flex justify-between">
	<!-- Gum Container -->
	<div class="flex flex-col">
		{#if currentSong === gum}
			<p class="flex transform rotate-90 ml-3 mb-[-1rem] text-gray-400 font-nhaasbd">1</p>
			<p class="flex ml-4 font-nhaasbd text-2xl transform rotate-90">
				{gum}
			</p>
		{:else}
			<p
				on:click={gumClick}
				class="flex transform rotate-90 ml-3 mb-[-1rem] text-gray-600 font-nhaasbd cursor-pointer"
			>
				1
			</p>
			<button
				on:click={gumClick}
				class="flex ml-4 font-nhaasbd text-2xl transform rotate-90 text-gray-600 cursor-pointer"
			>
				{gum}
			</button>
		{/if}
	</div>

	<!-- Minutes Container -->
	<div class="flex flex-col">
		{#if currentSong === minutes}
			<p class="flex font-nhaasbd text-2xl mr-[-0.7rem] mb-1 transform rotate-270">
				{minutes}
			</p>
			<p class="flex transform rotate-270 ml-[0.95rem] text-gray-400 font-nhaasbd">4</p>
		{:else}
			<p
				on:click={minutesClick}
				class="flex font-nhaasbd text-2xl mr-[-0.7rem] mb-1 transform rotate-270 text-gray-600 cursor-pointer"
			>
				{minutes}
			</p>
			<button
				on:click={minutesClick}
				class="flex transform rotate-270 ml-[0.95rem] text-gray-600 font-nhaasbd cursor-pointer"
				>4</button
			>
		{/if}
	</div>
</section>

<main class="flex flex-col mx-auto justify-between">
	<!-- Buttons Container -->
	<div class="flex justify-center items-center">
		<!-- Previous Button -->
		<button
			on:click={previousClick}
			class="m-6 hover:scale-105 transform transition duration-300 ease-out active:scale-95"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 123 118">
				<g id="Group_5" data-name="Group 5" transform="translate(-596 -395)">
					<path
						id="Polygon_9"
						data-name="Polygon 9"
						d="M59,0l59,106H0Z"
						transform="translate(613 513) rotate(-90)"
						fill="#fff"
					/>
					<rect
						id="Rectangle_8"
						data-name="Rectangle 8"
						width="35"
						height="118"
						transform="translate(631 513) rotate(180)"
						fill="#fff"
					/>
				</g>
			</svg>
		</button>

		<!-- Conditional Play/Pause Blocks -->
		{#if !playing}
			<!-- Play Button -->
			<button
				on:click={playSound}
				class="hover:scale-105 transform transition duration-300 ease-out active:scale-95 align-middle mx-4 mr-[0.8rem]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 262 303">
					<path
						id="Polygon_1"
						data-name="Polygon 1"
						d="M151.5,0,303,262H0Z"
						transform="translate(262) rotate(90)"
						fill="#fff"
					/>
				</svg>
			</button>
		{:else}
			<!-- Pause Button -->
			<button
				on:click={pauseClick}
				class="hover:scale-105 transform transition duration-300 ease-out active:scale-95 align-middle mx-4"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 218 257">
					<g id="Group_8" data-name="Group 8" transform="translate(-824 -648)">
						<rect
							id="Rectangle_3"
							data-name="Rectangle 3"
							width="88"
							height="257"
							transform="translate(824 648)"
							fill="#fff"
						/>
						<rect
							id="Rectangle_4"
							data-name="Rectangle 4"
							width="88"
							height="257"
							transform="translate(954 648)"
							fill="#fff"
						/>
					</g>
				</svg>
			</button>
		{/if}

		<!-- Next Button -->
		<button
			on:click={nextClick}
			class="m-6 hover:scale-105 transform transition duration-300 ease-out active:scale-95"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 123 118">
				<g id="Group_7" data-name="Group 7" transform="translate(-1210 -395)">
					<path
						id="Polygon_12"
						data-name="Polygon 12"
						d="M59,0l59,106H0Z"
						transform="translate(1316 395) rotate(90)"
						fill="#fff"
					/>
					<path
						id="Path_1"
						data-name="Path 1"
						d="M0,0H35V118H0Z"
						transform="translate(1298 395)"
						fill="#fff"
					/>
				</g>
			</svg>
		</button>
	</div>

	<div id="waveform" />

	<!-- Song Progress/Time Bar -->
	<!-- <div class="flex bg-red-500 w-20 h-1" /> -->
</main>

<!-- Bottom Song Container -->
<section class="flex justify-between">
	<!-- Swimming Lessons Container -->
	<div class="flex flex-col">
		{#if currentSong === swimmingLessons}
			<p class="flex transform rotate-90 ml-[-5.5rem] mb-[-0.7rem] text-gray-400 font-nhaasbd">2</p>
			<p class="flex ml-[-5.1rem] font-nhaasbd text-2xl transform rotate-90">
				{swimmingLessons}
			</p>
		{:else}
			<p
				on:click={swimmingLessonsClick}
				class="flex transform rotate-90 ml-[-5.5rem] mb-[-0.7rem] text-gray-600 font-nhaasbd cursor-pointer"
			>
				2
			</p>
			<button
				on:click={swimmingLessonsClick}
				class="flex ml-[-5.1rem] font-nhaasbd text-2xl transform rotate-90 text-gray-600 cursor-pointer"
			>
				{swimmingLessons}
			</button>
		{/if}
	</div>

	<!-- The King Container -->
	<div class="flex flex-col">
		{#if currentSong === theKing}
			<p class="flex font-nhaasbd text-2xl mr-[-1rem] mb-[-0.3rem] transform rotate-270">
				{theKing}
			</p>
			<p class="flex transform rotate-270 ml-[0.5rem] mr-[-0.8rem] text-gray-400 font-nhaasbd">3</p>
		{:else}
			<button
				on:click={theKingClick}
				class="flex font-nhaasbd text-2xl mr-[-1rem] mb-[-0.3rem] transform rotate-270 text-gray-600 cursor-pointer"
			>
				{theKing}
			</button>
			<p
				on:click={theKingClick}
				class="flex transform rotate-270 ml-[0.5rem] mr-[-0.8rem] text-gray-600 font-nhaasbd cursor-pointer"
			>
				3
			</p>
		{/if}
	</div>
</section>
