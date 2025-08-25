//@ts-ignore
import React from 'react';
import {useTranslation} from "react-i18next";

function Menu() {
    const { t } = useTranslation();
    return (
        <nav className="fixed top-0 w-full bg-gray-100 dark:bg-gray-900 z-50 shadow-md shadow-gray-800 dark:shadow-gray-200 menu-hidden backdrop-blur-sm">
            <ul className="flex justify-around">
                <li><a href="#top" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Félix MARQUET</a></li>
                <li><a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">{t('nav.about')}</a></li>
                <li><a href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Expérience</a></li>
                <li><a href="#homelab" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Homelab</a></li>
                <li><a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">{t('nav.projects')}</a></li>
                <li><a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#cv" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">{t('nav.cv')}</a></li>
            </ul>
        </nav>
    )
}

export default Menu;