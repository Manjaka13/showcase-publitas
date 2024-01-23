import { ClockType } from "@/components/Cover";
import { DAYS, MONTHS } from "@/helpers/const";

/**
 * Various useful functions
 */

// Returns an object with the current date and time
export const getNow = (): ClockType => {
	const date: Date = new Date();
	return {
		hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
		minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
		date: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
		month: MONTHS[date.getMonth()],
		year: date.getFullYear(),
		day: DAYS[date.getDay()],
	};
};
