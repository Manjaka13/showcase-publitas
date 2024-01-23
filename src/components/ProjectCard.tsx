import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectTag, ProjectTagType } from "@/components/ProjectTag";

/**
 * Card that displays a work
 */

type ProjectLinkType = {
	github?: string;
	live: string;
};

export interface ProjectType {
	name: string;
	date: string;
	link: ProjectLinkType;
	tag: ProjectTagType[];
	description: string;
	image?: string;
	logo?: string;
}

export const ProjectCard: FC<ProjectType> = ({
	name,
	date,
	link,
	tag,
	description,
	image,
	logo,
}): JSX.Element => {
	const mappedTechno: JSX.Element[] = tag.map((item: ProjectTagType) => (
		<li className="item" key={uuidv4()}>
			<ProjectTag tag={item} />
		</li>
	));

	return (
		<div className="project-card">
			<div
				className="project-card__head"
				style={{
					background: `url(${image})`,
					backgroundSize: "cover",
				}}
			>
				<p className="date">{date}</p>
			</div>
			<div className="project-card__body">
				<div className="project-card__title">
					<div className="title">
						{logo && <img className="logo" src={logo} alt="Logo" />}
						<h3 className="text">{name}</h3>
					</div>
					{link.github && (
						<a
							className="repo-link regular"
							href={link.github}
							title="View repository"
						>
							<FontAwesomeIcon icon={["fab", "github"]} /> Repo
						</a>
					)}
				</div>
				<div className="project-card__divider"></div>
				<ul className="project-card__techno">{mappedTechno}</ul>
				<p className="project-card__description" title={description}>
					{description}
				</p>
				{link.live && (
					<a
						className="button project-card__view regular"
						href={link.live}
						title="View live"
					>
						<FontAwesomeIcon icon="external-link" /> Visit
					</a>
				)}
			</div>
		</div>
	);
};
