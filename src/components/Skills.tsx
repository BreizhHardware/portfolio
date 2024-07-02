// @ts-ignore
import React from 'react';
// @ts-ignore
import SkillCard from './SkillCard.tsx';

interface Skill {
    skillName: string;
    skillLevel: number;
}

interface SkillsProps {
    skills: Skill[];
}

function Skills({skills}: SkillsProps) {
    return(
        <div className="flex flex-col sm:flex-row align-center justify-center max-w-8xl mx-auto mt-8 gap-5 flex-wrap">
            {skills.map((skill: Skill) => {
                return (
                    <SkillCard skillName={skill.skillName} skillLevel={skill.skillLevel}/>
                );
            })}
        </div>
    );
}

export default Skills;