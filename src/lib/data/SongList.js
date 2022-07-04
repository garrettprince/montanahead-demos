import { Howl } from 'howler'

export const songList = {
	gum: {
		title: 'Gum',
		artist: 'Montanahead',
		album: 'Demos',
		duration: '5:03',
		year: '2022',
		howl: new Howl({
			src: '/static/audio/Gum.mp3',
			html5: true,
			loop: false,
			volume: 0.5
		})
	},
	swimmingLessons: {
		title: 'Swimming Lessons',
		artist: 'Montanahead',
		album: 'Demos',
		src: 'https://s3.amazonaws.com/montanahead-audio/swimming-lessons.mp3',
		duration: '5:13',
		year: '2022',
		description: ''
	},
	theKing: {
		title: 'The King',
		artist: 'Montanahead',
		album: 'Demos',
		src: 'https://s3.amazonaws.com/montanahead-audio/the-king.mp3',
		duration: '4:13',
		year: '2022',
		description: ''
	},
	minutes: {
		title: 'Minutes',
		artist: 'Montanahead',
		album: 'Demos',
		src: 'https://s3.amazonaws.com/montanahead-audio/minutes.mp3',
		duration: '7:17',
		year: '2022',
		description: ''
	}
};
