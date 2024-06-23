// @ts-ignore
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import {useTranslation} from "react-i18next";

function Card({name, social: {github, twitter, linkedin, mail}}){
    //Get avatar from gravatar using email
    const profile = `https://1.gravatar.com/avatar/4d43af207280d1d23e2a2905577c7b6167723fec2d33f946cc86f114c1a85b8d?size=256`;
    const { t } = useTranslation();
    return (
        <div className="w-full" id="top">
            <div className="flex flex-col items-center justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 dark:bg-gray-800">
                <div className="">
                    <img
                        className="w-32 mx-auto shadow-xl rounded-full"
                        src={profile}
                        alt={name}
                    />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-gray-900 dark:text-white">{name}</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 dark:text-gray-200"> {t('card.title')} </p>
                    <div className="flex align-center justify-center mt-4">
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:bg-opacity-20"
                            href={github}
                        >
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:bg-opacity-20"
                            href={twitter}
                        >
                            <FaTwitter />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:bg-opacity-20"
                            href={linkedin}
                        >
                            <FaLinkedin />
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a
                            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-800 dark:hover:bg-opacity-20"
                            href={"mailto:" + mail}
                        >
                            <FaRegEnvelope />
                            <span className="sr-only">Mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;