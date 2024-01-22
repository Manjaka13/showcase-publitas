/**
 * Import icons into fontawesome library
 */

import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
	faHeart,
	faStarAndCrescent,
	faWrench,
	faDownload,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Manually add fontawesome styles
config.autoAddCss = false;

// Add icons to library
library.add(faHeart, faStarAndCrescent, faWrench, faDownload, faEnvelope);
