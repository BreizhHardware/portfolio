// @ts-ignore
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import GitHubButton from 'react-github-btn';
import { useTranslation } from "react-i18next";
import { motion, useInView } from 'motion/react';
import ProjectModal from './ProjectModal';

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
    const [open, setOpen] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    // Les boutons GitHub chargent un script tiers : on ne les monte qu'à l'approche de la carte
    const nearView = useInView(ref, { once: true, margin: '300px' });
    const { title, link, tags } = project;
    const details = t(`projects.${title}.details`, { returnObjects: true, defaultValue: [] }) as unknown;
    const detailList = Array.isArray(details) ? (details as string[]) : [];
    const hasDetails = detailList.length > 0;
    return (
        <motion.div
            className="group w-full p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
            whileHover={{ y: -6, boxShadow: '0 18px 40px -12px rgba(59,130,246,0.35)', borderColor: 'rgb(59 130 246)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
            <a href={link}>
                <h3 className="text-xl text-center font-bold dark:text-gray-200">
                    {t(`projects.${title}.title`)}{" "}
                    <FaExternalLinkAlt className="inline align-baseline" />
                </h3>
            </a>
            <hr className="my-4" />
            <p className="dark:text-gray-300">{t(`projects.${title}.description`)}</p>
            <div className="mt-4 mb-6 flex flex-wrap justify-center items-center gap-2">
                {tags.map((tag) => (
                    <div key={tag} className="px-4 py-1 border-2 rounded-full dark:text-gray-300">{tag}</div>
                ))}
            </div>
            {hasDetails && (
                <div className="w-full text-center mb-4">
                    <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm transition-colors">
                        <FaInfoCircle /> {t('projects.learnMore')}
                    </button>
                </div>
            )}
            {(title !== "MercuryCloud" && title !== "Alternance Horoquartz") && (
            <div className="w-full text-center min-h-[28px]" ref={ref}>
                {nearView && <>
                <GitHubButton href={link} data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star on GitHub">Star</GitHubButton>
                {" "}
                <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork on GitHub">Fork</GitHubButton>
                </>}
            </div>
            )}
            {hasDetails && (
                <ProjectModal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={t(`projects.${title}.title`)}
                    description={t(`projects.${title}.description`)}
                    details={detailList}
                    tags={tags}
                    link={link}
                />
            )}
        </motion.div>
    );
};

export default ProjectCard;
