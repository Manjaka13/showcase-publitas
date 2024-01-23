import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NAVIGATION_LINKS } from "@/helpers/const";

/**
 * List of navigation links
 */

export interface NavigationLinkType {
	title: string;
	name: string;
	icon: IconProp;
	link?: string;
}

const mappedLinks: JSX.Element[] = NAVIGATION_LINKS.map((item) => (
	<li className="navigation-link__item" key={item.name}>
		<a
			className="link regular"
			href={item.link ? item.link : "#0"}
			title={item.title}
		>
			<FontAwesomeIcon icon={item.icon} /> {item.name}
		</a>
	</li>
));

export const NavigationLinks = (): JSX.Element => (
	<ul className="navigation-link">{mappedLinks}</ul>
);
