import { FC } from "react";
import { capitalizeFirst } from "@/helpers/utils";
import { TECHS } from "@/helpers/const";

/**
 * Tech tags
 */

export type ProjectTagType = keyof typeof TECHS;

interface ProjectTagComponentType {
	tag: ProjectTagType;
}

export const ProjectTag: FC<ProjectTagComponentType> = ({
	tag,
}): JSX.Element => (
	<div className="project-tag" title={capitalizeFirst(tag)}>
		<img className="project-tag__logo" src={TECHS[tag]} alt={tag} />
	</div>
);
