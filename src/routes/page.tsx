import { Helmet } from "@modern-js/runtime/head";
import "@/styles/main.scss";
import { Navigation } from "@/components/Navigation";
import "@/helpers/icons";
import LOGO from "@/images/favicon.png";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/Cover";
import { ProjectList } from "@/components/ProjectList";

/**
 * Entry point
 */

const Index = () => (
	<div className="container-box">
		<Helmet>
			<meta charSet="utf-8" />
			<title>Hari work showcase</title>
			<link rel="icon" type="image/x-icon" href={LOGO} />
		</Helmet>
		<main>
			<Navigation />
			<Cover />
			<div className="container">
				<ProjectList />
			</div>
		</main>
		<Footer />
	</div>
);

export default Index;
