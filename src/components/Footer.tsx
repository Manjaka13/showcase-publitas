import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Page footer
 */

export const Footer = (): JSX.Element => (
	<footer className="footer">
		<div className="container">
			<p className="footer__copyright">
				Made with <FontAwesomeIcon className="heart" icon="heart" /> by{" "}
				<a className="link" href="#0" title="The developer">
					Hari
				</a>
				, all rights reserved
			</p>
		</div>
	</footer>
);
