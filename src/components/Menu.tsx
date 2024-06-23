//@ts-ignore
import React from 'react';
import {useTranslation} from "react-i18next";

function Menu() {
    const { t } = useTranslation();
    return (
        <nav className="fixed top-0 w-full bg-gray-100 dark:bg-gray-900 z-50 shadow-md shadow-gray-800 dark:shadow-gray-200">
            <ul className="flex justify-around">
                <li><a href="#top" className="text-gray-800 dark:text-gray-200">Félix MARQUET</a></li>
                <li><a href="#about" className="text-gray-800 dark:text-gray-200">{t('nav.about')}</a></li>
                <li><a href="#projects" className="text-gray-800 dark:text-gray-200">{t('nav.projects')}</a></li>
                <li><a href="#cv" className="text-gray-800 dark:text-gray-200">{t('nav.cv')}</a></li>
            </ul>
        </nav>
    )
}

export default Menu;