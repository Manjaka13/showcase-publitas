import { useEffect, useState } from "react";
import { GREETINGS, DAYS, MONTHS } from "@/helpers/const";

/**
 * Page cover
 */

export interface ClockType {
	hours: string | number;
	minutes: string | number;
	date: string | number;
	month: string;
	year: number;
	day: string;
}

export const Cover = (): JSX.Element => {
	const [tick, setTick] = useState<boolean>(true);
	const [greeting, setGreeting] = useState<string>(GREETINGS[0]);
	const [background, setBackground] = useState<number>(0);
	const [clock, setClock] = useState<ClockType>({
		hours: "xx",
		minutes: "xx",
		date: "xx",
		month: "Jan",
		year: 2024,
		day: "22",
	});

	// Updates our cover clock
	const updateClock = (): void => {
		const date = new Date();

		setClock({
			hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
			minutes:
				date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
			date: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
			month: MONTHS[date.getMonth()],
			year: date.getFullYear(),
			day: DAYS[date.getDay()],
		});
		setTick((prev) => !prev);
	};

	useEffect(() => {
		let time = null;
		const date = new Date().toLocaleString("fr-FR", { hour12: false });
		const now: number = parseInt(date.split(" ")[1].split(":")[0], 10);
		const limits: number[] = [5, 8, 13, 16, 19];
		for (let i = 0, j = 0; i < limits.length - 1; i++, j++) {
			if (now >= limits[i] && now < limits[i + 1]) {
				time = j;
				break;
			}
		}
		if (!time) time = 4;
		setGreeting(GREETINGS[time]);
		setBackground(time);

		// Update clock every second
		const intervalId: NodeJS.Timer = setInterval(() => {
			updateClock();
		}, 1000);

		// Do not forget to clear
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div className={`cover cover--${background}`}>
			<div className="container">
				<h2 className="cover__time">
					{clock.hours} <pre>{tick ? ":" : " "}</pre> {clock.minutes}
				</h2>
				<p className="cover__date">
					{clock.day}, {clock.date} {clock.month}. {clock.year}
				</p>
				<div className="cover__divider"></div>
				<p className="cover__greeting bold">{greeting}</p>
			</div>
		</div>
	);
};
