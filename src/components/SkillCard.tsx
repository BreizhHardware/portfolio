// @ts-ignore
import React from 'react';
import {
    FaCuttlefish,
    FaDocker,
    FaHtml5,
    FaJs,
    FaLinux,
    FaPhp,
    FaPython,
    FaReact,
    FaRust,
    FaServer
} from 'react-icons/fa';
//@ts-ignore
import ProgresBar from "./ProgresBar.tsx";
import {FaGolang} from "react-icons/fa6";

const iconClassName = "mx-auto text-4xl text-gray-800 dark:text-gray-200";

const iconMapping: IconMapping = {
    "C": <FaCuttlefish className={iconClassName} />,
    "C++": <FaCuttlefish className={iconClassName} />,
    "Admin Système": <FaServer className={iconClassName} />,
    "Python": <FaPython className={iconClassName} />,
    "PHP": <FaPhp className={iconClassName} />,
    "HTML/CSS": <FaHtml5 className={iconClassName} />,
    "JS/TS": <FaJs className={iconClassName} />,
    "Linux": <FaLinux className={iconClassName} />,
    "Go": <FaGolang className={iconClassName} />,
    "Docker": <FaDocker className={iconClassName} />,
    "Rust": <FaRust className={iconClassName} />,
    "React": <FaReact className={iconClassName} />,
};

interface SkillCardProps {
    skillName: string;
    skillLevel: number;
}

type IconMapping = {
    [key: string]: JSX.Element;
}

const SkillCard: React.FC<SkillCardProps> = ({skillName, skillLevel}) => {
    const skillIcon = iconMapping[skillName];
    return(
        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 ">
            {skillIcon}
            <p className="text-xl font-semibold mt-4 dark:text-gray-400">{skillName}</p>
            <ProgresBar className="" bgcolor={"#1d2a44"} completed={skillLevel} ></ProgresBar>
        </div>
    );
}

export default SkillCard;