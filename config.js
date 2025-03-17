// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Jacob',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Get some rest,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '8ba28eec716879ef5bbe32cf89c89fc7', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '43.652',
	defaultLongitude: '-79.384',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://gmail.com',
		},
		{
			id: '3',
			name: 'Trello Board',
			icon: 'trello',
			link: 'https://trello.com/b/80fy4Gpf/jacobs-board',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Solo',
			icon: 'life-buoy',
			link: 'https://solo-inline.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: '',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: '',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.ca/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			id: '1',
			links: [
				{
					name: 'Wizard Inspo',
					link: 'https://www.youtube.com/watch?v=vZYadDxpfwQ&list=PLwXxJLYUrIlA0ZE38Oyd7Q4ROgg8iKhEK',
				},
				{
					name: 'Wizard Skating Tips',
					link: 'https://www.youtube.com/watch?v=aLQNy2f6nI0&list=PLwXxJLYUrIlCNAMaBTCK6VtJAReOljZMW',
				},
				{
					name: 'Home Inspo',
					link: 'https://www.youtube.com/watch?v=taJ5pN7Zdn0&list=PLwXxJLYUrIlBQCMY2S7IDu6pMuTbWGelY',
				},
				{
					name: 'Classic House Jams',
					link: 'https://www.youtube.com/watch?v=EazO091XM-4&list=PLwXxJLYUrIlBb_m874fPgY_LxY-byl_Ci',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'A Cloud Guru',
					link: 'https://www.pluralsight.com/cloud-guru',
				},
				{
					name: 'WealthSimple',
					link: 'https://www.wealthsimple.com/en-ca/',
				},
				{
					name: 'Pexels',
					link: 'https://www.pexels.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Data Engineering',
					link: 'https://www.reddit.com/r/dataengineering/',
				},
				{
					name: 'Python',
					link: 'https://www.reddit.com/r/python/',
				},
				{
					name: 'Linux',
					link: 'https://www.reddit.com/r/linux/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/grephappiness',
				},
			],
		},
	],
};
