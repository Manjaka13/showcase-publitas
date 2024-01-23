import { v4 as uuidv4 } from "uuid";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECT_LIST } from "@/helpers/const";

/**
 * List of projects
 */

export const ProjectList = (): JSX.Element => {
	const mappedProjectList: JSX.Element[] = PROJECT_LIST.map((item) => (
		<li className="project-list__item" key={uuidv4()}>
			<ProjectCard {...item} />
		</li>
	));

	return (
		<ul className="project-list" id="project-list">
			{mappedProjectList}
		</ul>
	);
};
