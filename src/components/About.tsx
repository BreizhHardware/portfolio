// @ts-ignore
import React from 'react';
import {useTranslation} from "react-i18next";

function About() {
    const { t } = useTranslation();
    return(
      <div className="max-w-4xl mx-auto mt-16">
          <p className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">{t('about.title')}</p>
          <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4 dark:text-gray-400">{t('about.description')}</p>
      </div>
    );
}

export default About;