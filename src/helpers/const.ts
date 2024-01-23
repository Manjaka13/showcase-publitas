import { NavigationLinkType } from "@/components/NavigationLinks";
import { SocialType } from "@/components/Social";

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
