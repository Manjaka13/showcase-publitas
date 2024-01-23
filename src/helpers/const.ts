import { NavigationLinkType } from "@/components/NavigationLinks";
import { ProjectType } from "@/components/ProjectCard";
import { SocialType } from "@/components/Social";

import imageCss3 from "@/images/techno/css3.png";
import imageExpress from "@/images/techno/express.png";
import imageHtml5 from "@/images/techno/html5.png";
import imageJavascript from "@/images/techno/javascript.png";
import imageMongodb from "@/images/techno/mongodb.png";
import imageNextjs from "@/images/techno/nextjs.png";
import imageNodejs from "@/images/techno/nodejs.png";
import imageReact from "@/images/techno/react.png";
import imageSass from "@/images/techno/sass.png";
import imageTypescript from "@/images/techno/typescript.png";
import imageVuejs from "@/images/techno/vuejs.png";
import imageWebpack from "@/images/techno/webpack.png";

import imageAvenirgreen from "@/images/projects/avenirgreen.jpg";
import imageBobabee from "@/images/projects/bobabee.jpg";
import imageCovid19 from "@/images/projects/covid19.jpg";
import imageCurrconv from "@/images/projects/currconv.jpg";
import imageFiravahana from "@/images/projects/firavahana.jpg";
import imageGuilene from "@/images/projects/guilene.jpg";
import imageHenripotier from "@/images/projects/henripotier.jpg";
import imageHmail from "@/images/projects/hmail.jpg";
import imageImmomdg from "@/images/projects/immomdg.jpg";
import imageManifold from "@/images/projects/manifold.jpg";
import imageNamanagasycar from "@/images/projects/Namanagasycar.jpg";
import imageSinger from "@/images/projects/singer.jpg";
import imageTamirah from "@/images/projects/tamirah.jpg";
import imageWeatherapp from "@/images/projects/weatherapp.jpg";

/**
 * Our constants lies here
 */

export const NAVIGATION_LINKS: NavigationLinkType[] = [
	{
		title: "Check out my works",
		name: "My work",
		icon: "wrench",
		link: "#project-list",
	},
	{
		title: "Get in touch",
		name: "Contacts",
		icon: "envelope",
		link: "#contacts",
	},
	{
		title: "Download my resume",
		name: "Get my resume",
		icon: "download",
	},
];

export const GREETINGS: string[] = [
	"Early morning for an early code",
	"A beautiful day for a beautiful code !",
	"I think I'm already hungry... Coffee time !",
	"Let's take a break to appreciate the sunset",
	"I should go to bed at this time...",
];

export const DAYS: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const MONTHS: string[] = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"Mai",
	"Jun",
	"Jul",
	"Aog",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

export const SOCIAL: SocialType[] = [
	{
		title: "Reach me on Facebook",
		link: "https://www.facebook.com/manjaka13",
		icon: ["fab", "facebook"],
	},
	{
		title: "See my work on Github !",
		link: "https://github.com/manjaka13",
		icon: ["fab", "github"],
	},
	{
		title: "Check out my LinkedIn",
		link: "https://www.linkedin.com/in/harijaona-rajaonson/",
		icon: ["fab", "linkedin"],
	},
];

export const DEVELOPER_NAME = "Harijaona Rajaonson";
export const DEVELOPER_NICKNAME = "Hari";
export const DEVELOPER_LINK = "https://harij.vercel.app/";

export const TECHS = {
	css3: imageCss3,
	express: imageExpress,
	html5: imageHtml5,
	javascript: imageJavascript,
	mongodb: imageMongodb,
	nextjs: imageNextjs,
	nodejs: imageNodejs,
	react: imageReact,
	sass: imageSass,
	typescript: imageTypescript,
	vuejs: imageVuejs,
	webpack: imageWebpack,
};

export const PROJECT_LIST: ProjectType[] = [
	{
		name: "Namanagasycar",
		date: "2015",
		description:
			"This were one of my first projects, designated to improve tourism in Madagascar.",
		image: imageNamanagasycar,
		link: {
			github: "https://github.com/Manjaka13/namanagasycar",
			live: "https://namanagasycar.vercel.app",
		},
		tag: [
			"react",
			"nextjs",
			"typescript",
			"sass",
			"nodejs",
			"express",
			"mongodb",
		],
	},
	{
		name: "BobaBee",
		date: "2021",
		description:
			"I was a template for a bubble tee seller. Unfortunately they have money issues and couldn't affort it.",
		image: imageBobabee,
		link: {
			github: "https://github.com/Manjaka13/bobabee",
			live: "https://boba-bee.vercel.app",
		},
		tag: ["react", "nextjs", "typescript", "sass"],
	},
	{
		name: "Tamirah - Fleur de vie",
		date: "2022",
		description:
			"A non caritative association of women that projects many activities to help poor people and children.",
		image: imageTamirah,
		link: {
			github: "https://github.com/Manjaka13/tamirah",
			live: "https://tamirah.vercel.app",
		},
		tag: ["react", "nextjs", "typescript", "sass"],
	},
	{
		name: "Aventure Couture",
		date: "2020",
		description:
			"They sell sewing machines in France, they needed a website to advertise their products.",
		image: imageSinger,
		link: {
			github: "https://github.com/Manjaka13/singer",
			live: "https://aventure-couture.fr/",
		},
		tag: ["react", "nextjs", "typescript", "sass"],
	},
	{
		name: "Henri Potier",
		date: "2021",
		description:
			"This is a test project for landing a job at Publicis Sapient France, it shows most of the front end work.",
		image: imageHenripotier,
		link: {
			github: "https://github.com/Manjaka13/henri-potier",
			live: "https://henri-potier.vercel.app/",
		},
		tag: ["react", "nextjs", "typescript", "sass"],
	},
	{
		name: "Immo MDG",
		date: "2021",
		description:
			"It is a rental and sale platform for apartments, a personal real estate project in Madagascar.",
		image: imageImmomdg,
		link: {
			github: "https://github.com/Manjaka13/immo-mdg",
			live: "https://immo-mdg.vercel.app/",
		},
		tag: ["react", "nextjs", "sass"],
	},
	{
		name: "Weather app",
		date: "2022",
		description:
			"Collects weather data about a targeted city from an API and displays them in a modern UI design.",
		image: imageWeatherapp,
		link: {
			github: "https://github.com/Manjaka13/weather-app",
			live: "https://hweather-app.netlify.app/",
		},
		tag: ["react", "sass"],
	},
	{
		name: "Covid-19",
		date: "2021",
		description:
			"Gathers data from an external api (https://disease.sh/) to display covid-19 data for all available countries.",
		image: imageCovid19,
		link: {
			github: "https://github.com/Manjaka13/covid-19",
			live: "https://hcovid19.netlify.app/",
		},
		tag: ["react", "css3"],
	},
	{
		name: "Manifold",
		date: "2021",
		description:
			"It was a personal project I just made for fun, it has no purpose for the moment.",
		image: imageManifold,
		link: {
			github: "https://github.com/Manjaka13/manifold",
			live: "https://manifold-manjaka13.netlify.app/",
		},
		tag: ["react", "typescript", "sass"],
	},
	{
		name: "Guilène",
		date: "2020",
		description:
			"My gf and crush has cancer, I decided to create an app to provide her a moral support.",
		image: imageGuilene,
		link: {
			github: "https://github.com/Manjaka13/guil-ne",
			live: "https://guilene.netlify.app/",
		},
		tag: ["react", "css3"],
	},
	{
		name: "Firavahana",
		date: "2021",
		description:
			"Informative non-profit website on the situation of the municipality of Firavahana.",
		image: imageFiravahana,
		link: {
			github: "https://github.com/Manjaka13/firavahana-front",
			live: "https://firavahana.netlify.app/",
		},
		tag: ["vuejs", "webpack", "sass"],
	},
	{
		name: "Avenir Green",
		date: "2021",
		description:
			"A test for landing a job at Avenir green, this page demonstrates my integrations skills.",
		image: imageAvenirgreen,
		link: {
			github: "https://github.com/Manjaka13/page-login",
			live: "https://login-avenirgreen.netlify.app/",
		},
		tag: ["react", "sass"],
	},
	{
		name: "Currconv",
		date: "2022",
		description:
			"This is a backend service for getting currency data in real time from external API.",
		image: imageCurrconv,
		link: {
			github: "https://github.com/Manjaka13/currency-converter",
			live: "https://currconv.glitch.me/",
		},
		tag: ["nodejs", "express"],
	},
	{
		name: "HMail",
		date: "2022",
		description:
			"This is a backend utility for sending mails with NodeJS through mailjet API, I use it in all my apps.",
		image: imageHmail,
		link: {
			github: "https://github.com/Manjaka13/hmail",
			live: "https://hmailservice.herokuapp.com/",
		},
		tag: ["nodejs", "express"],
	},
];
