import React, { useState } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import "./index.css";
import Card from "./components/Card.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Project from "./components/Project.tsx";
import Footer from "./components/Footer.tsx";
import data from "./assets/DATA.ts";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
      document.documentElement.classList.toggle("dark");
  }

  return (
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100 dark:bg-gray-900">
          <div data-aos="face-down" data-aos-duration="800">
              <Card name={data.name} title={data.title} social={data.social} />
          </div>
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <About title={data.about.title} description={data.about.description} />
              <Skills skills={data.skills} />
              <Project projects={data.projects} />
              <Footer />
          </div>
          <button onClick={toggleTheme} className="fixed bottom-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-gray-900 shadow-md">
                {theme === "light" ? <FaMoon size={20} className="text-gray-800" /> : <FaSun size={20} className="text-gray-200" />}
          </button>
      </div>
  );
}

export default App;
