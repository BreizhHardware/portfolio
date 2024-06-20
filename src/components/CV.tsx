// @ts-ignore
import React from 'react';

function CV(){
    return (
        <div className="max-w-4xl mx-auto mt-16 flex justify-center items-center flex-col gap-1">
            <p className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Mon CV</p>
            <iframe src="/CV%20Félix%20MARQUET.pdf" className="w-full md:w-3/4 h-64 md:h-96 lg:h-screen" title="CV Félix MARQUET"></iframe>
        </div>
    );
}

export default CV;