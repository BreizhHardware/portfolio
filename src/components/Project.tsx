// @ts-ignore
import React from 'react';
// @ts-ignore
import ProjectCard from "./ProjectCard.tsx";

function Projects({projects}) {
    return(
        <div id="projects">
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold dark:text-gray-200">Mes projets</h1>
                <div className="flex-row flex-wrap flex justify-center gap-4">
                    {projects.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </div>
        </div>
    )
};

export default Projects;