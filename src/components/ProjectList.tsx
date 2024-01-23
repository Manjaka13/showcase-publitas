import { v4 as uuidv4 } from "uuid";
import { ProjectCard, ProjectType } from "@/components/ProjectCard";
import MY_IMAGE from "@/images/3.jpg";
import MY_LOGO from "@/images/favicon.png";

/**
 * List of projects
 */

const FOO: ProjectType = {
	name: "Namanagasy",
	date: "Feb. 2018",
	link: {
		github: "https://github.com/manjaka13/namana-gasy",
		live: "https://namana-gasy.mg",
	},
	tag: ["react", "nextjs"],
	description:
		"Fugiat irure et labore eu tempor in laboris aute amet consectetur adipisicing sint sit. Sint ipsum incididunt labore nisi mollit voluptate culpa enim commodo exercitation qui minim reprehenderit velit. Officia commodo labore consequat magna excepteur laborum.",
	image: MY_IMAGE,
	logo: MY_LOGO,
};

export const ProjectList = (): JSX.Element => {
	const mappedProjectList: JSX.Element[] = [];

	for (let i = 0; i < 6; i++)
		mappedProjectList.push(
			<li className="project-list__item" key={uuidv4()}>
				<ProjectCard {...FOO} />
			</li>,
		);

	return (
		<ul className="project-list" id="project-list">
			{mappedProjectList}
		</ul>
	);
};
