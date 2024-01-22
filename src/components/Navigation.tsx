import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationLinks } from "@/components/NavigationLinks";

/**
 * Navigation component
 */

export const Navigation = (): JSX.Element => (
	<nav className="navigation">
		<div className="container">
			<div className="navigation__title">
				<div className="icon-box">
					<FontAwesomeIcon icon="heart" />
				</div>
				<h1 className="title regular">
					Hari in <span className="wonderland">Wonderland</span>
					<FontAwesomeIcon className="star" icon="star-and-crescent" />
				</h1>
			</div>
			<NavigationLinks />
		</div>
	</nav>
);
