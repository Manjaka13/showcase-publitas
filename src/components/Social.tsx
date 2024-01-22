import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL } from "@/helpers/const";

/**
 * Component that displays social links
 */

export interface SocialType {
	title: string;
	link: string;
	icon: IconProp;
}

const mappedSocial: JSX.Element[] = SOCIAL.map((item) => (
	<li className="social__item" key={item.link}>
		<a className="link" href={item.link} title={item.title}>
			<FontAwesomeIcon icon={item.icon} />
		</a>
	</li>
));

export const Social = (): JSX.Element => {
	return <ul className="social">{mappedSocial}</ul>;
};
