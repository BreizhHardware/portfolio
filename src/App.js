import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import "./index.css";
import Card from "./components/Card.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Project from "./components/Project.tsx";
import Footer from "./components/Footer.tsx";
import CV from "./components/CV.tsx";
import Menu from "./components/Menu.tsx";
import data from "./assets/DATA.ts";
import { useTranslation } from "react-i18next";
import i18n from './i18n.js';

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Detect if the user has their system in dark mode
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userPrefersDark) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("dark");
    }

    useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
    }

    return (
        <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100 dark:bg-gray-900">
            <Menu />
            <div data-aos="face-down" data-aos-duration="800" id="top">
                <Card name={data.name} title={data.title} social={data.social} />
            </div>
            <hr className="text-gray-800 dark:text-gray-200 mt-4"  id="about"/>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <About />
                <Skills skills={data.skills} />
                <hr className="text-gray-800 dark:text-gray-200 mt-4" id="projects" />
                <Project projects={data.projects} />
                <hr className="text-gray-800 dark:text-gray-200 mt-4" id="cv" />
                <CV />
                <Footer />
            </div>
            <button onClick={toggleTheme} className="fixed bottom-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-gray-900 shadow-md">
                {theme === "light" ? <FaMoon size={20} className="text-gray-800" /> : <FaSun size={20} className="text-gray-200" />}
            </button>
            <button onClick={toggleLanguage} className="fixed bottom-5 right-16 p-2 rounded-full bg-gray-100 dark:bg-gray-900 shadow-md text-gray-800 dark:text-gray-200">
                {i18n.language === "fr" ? "EN" : "FR"}
            </button>
        </div>
    );
}

export default App;