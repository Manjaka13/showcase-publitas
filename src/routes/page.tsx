import { Helmet } from "@modern-js/runtime/head";
import "@/styles/main.scss";
import { Navigation } from "@/components/Navigation";
import "@/helpers/icons";
import LOGO from "@/images/favicon.png";

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
			<p>
				Esse veniam culpa officia in consectetur. Eiusmod cillum et officia elit sit
				dolor labore ea ad nulla. Pariatur labore esse ut consequat laboris
				exercitation velit cillum aliquip duis. Minim ullamco est incididunt officia
				minim occaecat aliquip aliquip ullamco enim occaecat officia nostrud
				deserunt.
			</p>
		</main>
	</div>
);

export default Index;
