// @ts-ignore
import React from 'react';
import ProjectCard from "./ProjectCard.tsx";

function Projects({projects}) {
    return(
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold dark:text-gray-200">Mes projets</h1>
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </div>
    )
};

export default Projects;