// @ts-ignore
import React from 'react';
import { FaCuttlefish, FaPhp, FaPython, FaServer} from 'react-icons/fa';

const iconClassName = "mx-auto text-4xl text-gray-800 dark:text-gray-200";

const iconMapping = {
    "C": <FaCuttlefish className={iconClassName} />,
    "C++": <FaCuttlefish className={iconClassName} />,
    "Admin Système": <FaServer className={iconClassName} />,
    "Python": <FaPython className={iconClassName} />,
    "PHP": <FaPhp className={iconClassName} />,
};

interface SkillCardProps {
    skillName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({skillName, skillLevel}) => {
    const skillIcon = iconMapping[skillName];
    return(
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 ">
            {skillIcon}
            <p className="text-xl font-semibold mt-4 dark:text-gray-400">{skillName}</p>
            <progress className="w-full mt-4 rounded-lg" value={skillLevel} max="100"></progress>
        </div>
    );
}

export default SkillCard;