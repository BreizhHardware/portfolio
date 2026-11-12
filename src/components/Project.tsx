import ProjectCard from "./ProjectCard";
import {useTranslation} from "react-i18next";
import Reveal from "./Reveal";

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
            <h2 className="mt-8 text-2xl md:text-4xl text-center font-extrabold dark:text-gray-200">{t('projects.title')}</h2>
                <div className="flex-row flex-wrap flex justify-center gap-4">
                    {projects.map((project: any, i: number) => (
                        <Reveal key={project.title} delay={(i % 2) * 0.12} className="w-full sm:w-5/12 m-4 flex">
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
        </div>
    )
};

export default Projects;