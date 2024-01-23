import { useEffect, useMemo, useState } from "react";
import { ClockType } from "@/components/Cover";
import { GREETINGS } from "@/helpers/const";
import { getNow } from "@/helpers/utils";

/**
 * Page cover hook logic
 */

interface UseCoverType {
	greeting: string;
	background: number;
	tick: boolean;
	clock: ClockType;
}

export const useCover = (): UseCoverType => {
	const [tick, setTick] = useState<boolean>(true);
	const [greeting, setGreeting] = useState<string>(GREETINGS[0]);
	const [background, setBackground] = useState<number>(0);
	const [clock, setClock] = useState<ClockType>(getNow());

	// Updates our cover clock
	const updateClock = (): void => {
		setClock(getNow());
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

	return useMemo(
		() => ({
			greeting,
			background,
			tick,
			clock,
		}),
		[greeting, background, tick, clock],
	);
};
