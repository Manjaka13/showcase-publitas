import { Social } from "@/components/Social";
import { useCover } from "@/hooks/useCover";

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
	const { greeting, background, tick, clock } = useCover();

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
				<button className="button cover__download">Download my resume</button>
				<Social />
			</div>
		</div>
	);
};
