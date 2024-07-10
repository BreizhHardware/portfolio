// @ts-ignore
import React from 'react';
import { useTranslation } from 'react-i18next';

function CV(){
    const { t } = useTranslation();
    const cvPath = t('cv.path');
    return (
        <div className="max-w-4xl mx-auto mt-16 flex justify-center items-center flex-col gap-1 mb-4">
            <p className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">{t('cv.title')}</p>
            <iframe src={cvPath} className="w-full md:w-3/4 h-64 md:h-96 lg:h-screen mt-3" title="CV Félix MARQUET"></iframe>
        </div>
    );
}

export default CV;