import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import ReactDOM from "react-dom";
import './output.css';
import './other.css';
import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import CV from "./components/CV";
import Menu from "./components/Menu";
import LoadingScreen from "./components/LoadingScreen";
import ContactSection from "./components/ContactSection";
import TimelineSection from "./components/TimelineSection";
import data from "./assets/DATA";
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import {createRoot} from "react-dom/client";

function App() {
    // Initialise le thème depuis localStorage ou détecte le thème système
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }
        // Détecte le thème système si aucun thème sauvegardé
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return userPrefersDark ? "dark" : "light";
    });
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Synchronise la classe 'dark' avec l'état 'theme' et sauvegarde dans localStorage
        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
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
        <div className="min-h-screen py-10 bg-gray-100 dark:bg-gray-900 m-0 relative" data-testid="root">
            <div className={`mobile-margin relative z-10 transition-all duration-1000 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <Menu />
                <div data-aos="face-down" data-aos-duration="800" id="top">
                    <Card name={data.name} title={data.title} social={data.social} />
                </div>
                <hr className="text-gray-800 dark:text-gray-200 mt-4"  id="about"/>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <About />
                    <Skills skills={data.skills} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="experience" />
                    <TimelineSection experience={data.experience.map(item => ({
                        ...item,
                        type: item.type as "work" | "education" | "achievement"
                    }))} />
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
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;