<script>
	import { songList } from '../data/SongList';

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

<main class="flex-col m-auto">
	<p class="flex justify-center font-nhaasbd text-2xl border border-white">{currentSong}</p>

	<!-- Buttons Container -->
	<div class="flex justify-center items-center border border-white">
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
				on:click={playClick}
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
	
	<!-- Song Progress/Time Bar -->
	<div class="flex bg-red-500 w-20 h-1"></div>


</main>
