import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                translation: {
                    "about.title": "A propos de moi",
                    "about.description": "Je suis étudiant en 2e année à l'ISEN Nantes. Je suis passionné par l'informatique. J'ai appris à coder en autodidacte et je suis actuellement en train d'apprendre le C++ et le PHP. Je suis également passionné par l'électronique et le hardware. Je possède un homelab composé de 2 serveur, un DELL T320 et un DELL T330 les 2 sous proxmox.",
                    "card.title": "Etudiant en 2e année a l'ISEN Nantes",
                    "projects.title": "Mes projets",
                    "projects.SansDomaineFixe.xyz.description": "Site web offrant des enregistrements DNS gratuits",
                    "projects.Front end starter.description": "Mon starter personnel pour projet front end",
                    "projects.Project C - ISEN CIR 1.description": "Projet de fin de 1ere année à l'ISEN Nantes",
                    "projects.Projet robot.description": "Projet de robot avec le club Modelec ISEN pour la coupe de france de robotique (Developpement et déploiment sur Raspberry Pi)",
                    "projects.MercuryCloud.description": "Projet d'herbergeur de serveur de jeu et VPS. Poste de support technique, administrateur des service VPS, Game et web.",
                    "projects.Projet C++ - ISEN CIR 2.description": "Projet de fin de 4e semestre à l'ISEN Nantes. Création d'un jeu de type Tower Defense en C++ avec la librairie QT6.",
                    "cv.title": "Mon CV",
                    "nav.about": "A propos de moi",
                    "nav.projects": "Mes projets",
                    "nav.cv": "Mon CV",
                },
            },
            en: {
                translation: {
                    "cv.title": "My CV",
                    "about.title": "About me",
                    "about.description": "I am a second year student at ISEN Nantes. I am passionate about computer science. I learned to code on my own and I am currently learning C++ and PHP. I am also passionate about electronics and hardware. I have a homelab composed of 2 servers, a DELL T320 and a DELL T330 both under proxmox.",
                    "card.title": "Second year student at ISEN Nantes",
                    "projects.title": "My projects",
                    "projects.SansDomaineFixe.xyz.description": "Website offering free DNS records",
                    "projects.Front end starter.description": "My personal starter for front end projects",
                    "projects.Project C - ISEN CIR 1.description": "End of 1st year project at ISEN Nantes",
                    "projects.Projet robot.description": "Robot project with the Modelec ISEN club for the French robotics cup (Development and deployment on Raspberry Pi)",
                    "projects.MercuryCloud.description": "Game server and VPS hosting project. Technical support position, administrator of VPS, Game and web services.",
                    "projects.Projet C++ - ISEN CIR 2.description": "End of 4th semester project at ISEN Nantes. Creation of a Tower Defense type game in C++ with the QT6 library.",
                    "nav.about": "About me",
                    "nav.projects": "My projects",
                    "nav.cv": "My CV",
                },
            },
        },
        lng: navigator.language.startsWith('fr') ? 'fr' : 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;