// @ts-ignore
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaTimes, FaGithub, FaCalendarAlt, FaCode} from "react-icons/fa";
import GitHubButton from 'react-github-btn';
import {useTranslation} from "react-i18next";

interface Project {
    title: string;
    link: string;
    tags: string[];
    description: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectModal: React.FC<{ project: Project; isOpen: boolean; onClose: () => void }> = ({ 
    project, 
    isOpen, 
    onClose 
}) => {
    const { t } = useTranslation();
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div 
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeInUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {project.title}
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Description détaillée */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                            <FaCode className="mr-2" />
                            Description du projet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t(`projects.${project.title}.description`)}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Technologies utilisées
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm animate-slideInLeft"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Détails spécifiques au projet */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Objectifs du projet
                            </h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Développement d'une solution complète</li>
                                <li>• Application des meilleures pratiques</li>
                                <li>• Travail en équipe et gestion de projet</li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Compétences acquises
                            </h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Architecture et conception</li>
                                <li>• Développement full-stack</li>
                                <li>• Tests et déploiement</li>
                            </ul>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <FaExternalLinkAlt />
                            <span>Voir le projet</span>
                        </a>

                        {(project.title !== "MercuryCloud" && project.title !== "Alternance Horoquartz") && (
                            <div className="flex space-x-2">
                                <GitHubButton 
                                    href={project.link} 
                                    data-color-scheme="no-preference: light; light: light; dark: dark;" 
                                    data-icon="octicon-star" 
                                    data-size="large" 
                                    data-show-count="true"
                                >
                                    Star
                                </GitHubButton>
                                <GitHubButton 
                                    href={project.link + "/fork"} 
                                    data-color-scheme="no-preference: light; light: light; dark: dark;" 
                                    data-icon="octicon-repo-forked" 
                                    data-size="large" 
                                    data-show-count="true"
                                >
                                    Fork
                                </GitHubButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { t } = useTranslation();
    const { title, link, tags } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group w-full sm:w-5/12 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 card-hover cursor-pointer transition-all duration-300"
                 onClick={() => setIsModalOpen(true)}
            >
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h1>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <hr className="my-4" />
                
                <p className="dark:text-gray-300 text-sm line-clamp-3 mb-4">
                    {t(`projects.${project.title}.description`)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs border-2 rounded-full dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                            +{project.tags.length - 3} autres
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        Voir les détails →
                    </span>
                    
                    {(title !== "MercuryCloud" && title !== "Alternance Horoquartz") && (
                        <div className="flex items-center space-x-2">
                            <FaGithub className="text-gray-600 dark:text-gray-400" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">Open Source</span>
                        </div>
                    )}
                </div>
            </div>

            <ProjectModal 
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ProjectCard;