import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import ReactDOM from "react-dom";
import './output.css';
import './other.css';
import Card from "./components/Card.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Project from "./components/Project.tsx";
import Footer from "./components/Footer.tsx";
import CV from "./components/CV.tsx";
import Menu from "./components/Menu.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";
import ParticlesBackground from "./components/ParticlesBackground.tsx";
import GitHubStatsSection from "./components/GitHubStatsSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import TimelineSection from "./components/TimelineSection.tsx";
import data from "./assets/DATA.ts";
import { useTranslation } from "react-i18next";
import i18n from './i18n.js';
import {createRoot} from "react-dom/client";

function App() {
    const [theme, setTheme] = useState("light");
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

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

    const handleLoadingComplete = () => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setShowContent(true), 100);
        }, 500);
    }

    useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
    }

    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
    }

    return (
        <div className="min-h-screen py-10 bg-gray-100 dark:bg-gray-900 m-0" data-testid="root">
            <ParticlesBackground isDark={theme === "dark"} />
            <div className={`mobile-margin transition-all duration-1000 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <Menu />
                <div data-aos="face-down" data-aos-duration="800" id="top">
                    <Card name={data.name} title={data.title} social={data.social} />
                </div>
                <hr className="text-gray-800 dark:text-gray-200 mt-4"  id="about"/>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <About />
                    <Skills skills={data.skills} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="experience" />
                    <TimelineSection experience={data.experience} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="github" />
                    <GitHubStatsSection />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="projects" />
                    <Project projects={data.projects} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="contact" />
                    <ContactSection />
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
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;