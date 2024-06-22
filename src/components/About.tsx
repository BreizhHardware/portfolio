// @ts-ignore
import React from 'react';

function About({ref, title, description}) {
    return(
      <div className="max-w-4xl mx-auto mt-16" id="about">
          <p className="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200">{title}</p>
          <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4 dark:text-gray-400">{description}</p>
      </div>
    );
}

export default About;