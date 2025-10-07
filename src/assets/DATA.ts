const Felix = {
    name: "Félix MARQUET",
    title: "Etudiant en 2e année a l'ISEN Nantes",
    social: {
        github: "https://github.com/BreizhHardware",
        twitter: "https://twitter.com/BreizhHardware",
        linkedin: "https://www.linkedin.com/in/f%C3%A9lix-marquet-5071bb167/",
        mail: "felix.marquet@isen-ouest.yncrea.fr"
    },
    about: {
        title: "A propos de moi",
        description: "Je suis étudiant en 3e année à l'ISEN Nantes en alternance chez Horoquartz. Je suis passionné par l'informatique. J'ai appris à coder en autodidacte et je suis actuellement en train d'apprendre le C++ et le PHP. Je suis également passionné par l'électronique et le hardware. Je possède un homelab composé de 2 serveur, un DELL T320 et un DELL T330 les 2 sous proxmox."
    },
    skills: [
        {
            skillName: "C",
            skillLevel: 85,
        },
        {
            skillName: "C++",
            skillLevel: 80,
        },
        {
            skillName: "Admin Système",
            skillLevel: 80,
        },
        {
            skillName: "Python",
            skillLevel: 80,
        },
        {
            skillName: "PHP",
            skillLevel: 70,
        },
        {
            skillName: "HTML/CSS",
            skillLevel: 85,
        },
        {
            skillName: "JS/TS",
            skillLevel: 85,
        },
        {
            skillName: "Linux",
            skillLevel: 80,
        },
        {
            skillName: "Go",
            skillLevel: 60,
        },
        {
            skillName: "Docker",
            skillLevel: 70,
        },
        {
            skillName: "Rust",
            skillLevel: 65,
        },
        {
            skillName: "React",
            skillLevel: 80,
        },
        {
            skillName: "Java",
            skillLevel: 30,
        }
    ],
    experience: [
        {
            id: 1,
            type: 'work',
            title: 'Développeur - Alternant',
            organization: 'Horoquartz',
            location: 'Saint-Herblain, France',
            startDate: '2024',
            endDate: 'Present',
            current: true,
            description: [
                'Développement d\'un système de mise à jour pour les produits Horoquartz',
                'Conception et implémentation d\'APIs REST avec Node.js et Go',
                'Gestion des bases de données PostgreSQL',
                'Déploiement avec Docker et Kubernetes sur Azure'
            ],
            technologies: ['Node.js', 'Go', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure']
        },
        {
              id: 2,
              type: 'education',
              title: 'ISEN Nantes - Cycle Ingénieur',
              organization: 'Institut Supérieur de l\'Électronique et du Numérique',
              location: 'Nantes, France',
              startDate: '2022',
              endDate: '2027',
              current: true,
              description: [
                'Formation d\'ingénieur en informatique et nouvelles technologies',
                'Spécialisation en cybersécurité',
                'Projets en équipe et gestion de projet'
              ],
              technologies: ['C', 'C++', 'Python', 'Linux', 'Réseaux']
            },
            {
                id: 3,
                type: 'work',
                title: 'Support Technique & Admin VPS',
                organization: 'MercuryCloud',
                location: 'Remote',
                startDate: '2023',
                endDate: 'Present',
                current: true,
                description: [
                    'Support technique pour serveurs de jeu et VPS',
                    'Administration des services CPanel et Plesk',
                    'Gestion du système WHMCS pour la facturation',
                    'Virtualisation et maintenance des serveurs Linux'
                ],
                technologies: ['Linux', 'Virtualisation', 'CPanel', 'Plesk', 'WHMCS']
            },
            {
                id: 4,
                type: 'achievement',
                title: 'Projet Robot - Coupe de France de Robotique',
                organization: 'Club Modelec ISEN',
                location: 'Nantes, France',
                startDate: '2023',
                endDate: '2023',
                description: [
                    'Développement du système de contrôle du robot',
                    'Interface utilisateur avec QT',
                    'Déploiement sur Raspberry Pi',
                    'Travail en équipe multidisciplinaire'
                ],
                technologies: ['C++', 'QT', 'Raspberry Pi', 'Linux']
            },
    ],
    projects: [
        {
            title: "Front end starter",
            description: "Mon starter personnel pour projet front end",
            tags: ["HTML", "CSS", "JS"],
            link: "https://github.com/BreizhHardware/front-end-starter"
        },
        {
            title: "Project C - ISEN CIR 1",
            description: "Projet de fin de 1ere année à l'ISEN Nantes",
            tags: ["C", "HTML", "CSS", "JS"],
            link: "https://github.com/BreizhHardware/projetCGroupe8"
        },
        {
            title: "Projet robot",
            description: "Projet de robot avec le club Modelec ISEN pour la coupe de france de robotique (Developpement et déploiment sur Raspberry Pi)",
            tags: ["C++", "QT", "Raspberry Pi"],
            link: "https://github.com/modelec"
        },
        {
            title: "MercuryCloud",
            description: "Projet d'herbergeur de serveur de jeu et VPS. Poste de support technique, administrateur des service VPS, Game et web.",
            tags: ["Linux", "Virtualisation", "CPanel", "Plesk", "WHMCS"],
            link: "https://mercurycloud.fr/"
        },
        {
            title: "Projet C++ - ISEN CIR 2",
            description: "Projet de fin de 4e semestre à l'ISEN Nantes. Création d'un jeu de type Tower Defense en C++ avec la librairie QT6.",
            tags: ["C++", "QT"],
            link: "https://github.com/BreizhHardware/Poulpes-de-l-Espace-La-derniere-ligne-de-Defense"
        },
        {
            title: "Github NTFY",
            description: "Projet de notification pour les releases github et dockerhub qui envoie des notifications sur ntfy, gotify et discord",
            tags: ["Python", "Rust", "Nuxt", "Docker", "Github Actions"],
            link: "https://github.com/BreizhHardware/ntfy_alerts"
        },
        {
            title: "Projet C++ - ISEN CIPA 3",
            description: "Projet de jeu de simulation de comportement de banc de poisson en C++ avec la librairie SLD2, avec support du multijoueur.",
            tags: ["C++", "SDL2", "Multiplayer"],
            link: "https://github.com/BreizhHardware/bloubloulespoissons"
        },
        {
            title: "Alternance Horoquartz",
            description: "Développement d'un système de mise à jour pour les produits Horoquartz",
            tags: ["Node.js", "Go", "PostgreSQL", "Docker", "Kubernetes", "Azure"],
            link: "https://www.horoquartz.com/"
        }
    ]
};

export default Felix;
