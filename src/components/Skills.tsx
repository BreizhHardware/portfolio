// @ts-ignore
import React from 'react';
// @ts-ignore
import SkillCard from './SkillCard.tsx';

function Skills({skills}) {
    return(
        <div className="flex flex-col sm:flex-row align-center justify-center max-w-8xl mx-auto mt-8 gap-5 flex-wrap">
            {skills.map((skill) => {
                return (
                    <SkillCard skillName={skill.skillName} skillLevel={skill.skillLevel}/>
                );
            })}
        </div>
    );
}

export default Skills;