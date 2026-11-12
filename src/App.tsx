import React, { useState, useEffect, lazy, Suspense } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import ReactDOM from "react-dom";
import './output.css';
import './other.css';
import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
const Project = lazy(() => import("./components/Project"));
import Footer from "./components/Footer";
const CV = lazy(() => import("./components/CV"));
import Menu from "./components/Menu";
import LoadingScreen from "./components/LoadingScreen";
const ContactSection = lazy(() => import("./components/ContactSection"));
const TimelineSection = lazy(() => import("./components/TimelineSection"));
const CyberSection = lazy(() => import("./components/CyberSection"));
const HomelabSection = lazy(() => import("./components/HomelabSection"));
import ScrollProgress from "./components/ScrollProgress";
import Reveal from "./components/Reveal";
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

    const { t } = useTranslation();

    useEffect(() => {
        // Garde <html lang>, le titre et la description SEO synchronisés avec la langue
        const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
        document.documentElement.lang = lang;
        document.title = lang === "fr"
            ? "Félix MARQUET - Portfolio | Développeur & étudiant ingénieur ISEN"
            : "Félix MARQUET - Portfolio | Developer & ISEN engineering student";
        document.querySelector('meta[name="description"]')?.setAttribute("content", lang === "fr"
            ? "Portfolio de Félix MARQUET, étudiant ingénieur en 5e année à l'ISEN Nantes et développeur en alternance : projets web, DevOps, Go, Rust, React et homelab."
            : "Portfolio of Félix MARQUET, fifth-year engineering student at ISEN Nantes and work-study developer: web projects, DevOps, Go, Rust, React and homelab.");
    }, [i18n.language, t]);

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
                <ScrollProgress />
                <div id="top">
                    <Card name={data.name} title={data.title} social={data.social} />
                </div>
                <hr className="text-gray-800 dark:text-gray-200 mt-4"  id="about"/>
                <div>
                    <Reveal><About /></Reveal>
                    <Reveal><Skills skills={data.skills} /></Reveal>
                    <Suspense fallback={<div className="min-h-screen" />}>
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="experience" />
                    <TimelineSection experience={data.experience.map(item => ({
                        ...item,
                        type: item.type as "work" | "education" | "achievement"
                    }))} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" />
                    <CyberSection />
                    <HomelabSection />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="projects" />
                    <Project projects={data.projects} />
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="contact" />
                    <Reveal><ContactSection /></Reveal>
                    <hr className="text-gray-800 dark:text-gray-200 mt-4" id="cv" />
                    <CV />
                    </Suspense>
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