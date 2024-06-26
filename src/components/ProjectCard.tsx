// @ts-ignore
import React from 'react';
import { FaExternalLinkAlt} from "react-icons/fa";
import GitHubButton from 'react-github-btn';
import {useTranslation} from "react-i18next";

interface Project {
    title: string;
    link: string;
    tags: string[];
}

interface ProjectCardProps {
    project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
    const { t } = useTranslation();
    const { title, link, tags } = project;
    return (
        <div className="group w-full sm:w-5/12 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700">
            <a href={link}>
                <h1 className="text-xl text-center font-bold dark:text-gray-200">
                    {title}{" "}
                    <FaExternalLinkAlt className="inline align-baseline" />
                </h1>
            </a>
            <hr className="my-4" />
            <p className="dark:text-gray-300">{t(`projects.${project.title}.description`)}</p>
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                {project.tags.map((tag) => (
                    <div className="px-4 py-1 border-2 rounded-full dark:text-gray-300">{tag}</div>
                ))}
            </div>
            {title !== "MercuryCloud" && (
            <div className="w-full text-center">
                <GitHubButton href={link} data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
                {" "}
                <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
            </div>
            )}
        </div>
    );
};

export default ProjectCard;