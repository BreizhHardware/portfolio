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
        description: "Je suis étudiant en 2e année à l'ISEN Nantes. Je suis passionné par l'informatique. J'ai appris à coder en autodidacte et je suis actuellement en train d'apprendre le C++ et le PHP. Je suis également passionné par l'électronique et le hardware. Je possède un homelab composé de 2 serveur, un DELL T320 et un DELL T330 les 2 sous proxmox."
    },
    skills: [
        {
            skillName: "C",
            skillLevel: 70,
        },
        {
            skillName: "C++",
            skillLevel: 50,
        },
        {
            skillName: "Admin Système",
            skillLevel: 80,
        },
        {
            skillName: "Python",
            skillLevel: 50,
        },
        {
            skillName: "PHP",
            skillLevel: 60,
        }
    ],
    projects: [
        {
            title: "SansDomaineFixe.xyz",
            description: "Site web offrant des enregistrements DNS gratuits",
            tags: ["TS", "tailwindcss", "pocketbase"],
            link: "https://github.com/BreizhHardware/sansdomainefixe.xyz"
        },
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
            title: "Mercury Cloud",
            description: "Projet d'herbergeur de serveur de jeu et VPS. Poste de support technique, administrateur des service VPS, Game et web.",
            tags: ["Linux", "Virtualisation", "CPanel", "Plesk", "WHMCS"],
            link: "https://mercurycloud.fr/"
        }
    ]
};

export default Felix;