import ProjectCard from "./ProjectCard";
import {useTranslation} from "react-i18next";

type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string;
};

interface ProjectsProps {
    projects: Project[];
}

function Projects({projects}: ProjectsProps) {
    const { t } = useTranslation();
    return(
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold dark:text-gray-200">{t('projects.title')}</h1>
                <div className="flex-row flex-wrap flex justify-center gap-4">
                    {projects.map((project: any) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
        </div>
    )
};

export default Projects;