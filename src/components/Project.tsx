// @ts-ignore
import React from 'react';
// @ts-ignore
import ProjectCard from "./ProjectCard.tsx";
import {useTranslation} from "react-i18next";

function Projects({projects}) {
    const { t } = useTranslation();
    return(
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold dark:text-gray-200">{t('projects.title')}</h1>
                <div className="flex-row flex-wrap flex justify-center gap-4">
                    {projects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
        </div>
    )
};

export default Projects;