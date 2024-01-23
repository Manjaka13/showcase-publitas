import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEVELOPER_LINK, DEVELOPER_NICKNAME } from "@/helpers/const";

/**
 * Page footer
 */

export const Footer = (): JSX.Element => (
	<footer className="footer">
		<div className="container">
			<p className="footer__copyright">
				Made with <FontAwesomeIcon className="heart" icon="heart" /> by{" "}
				<a className="link" href={DEVELOPER_LINK} title="The developer">
					{DEVELOPER_NICKNAME}
				</a>
				, all rights reserved
			</p>
		</div>
	</footer>
);
