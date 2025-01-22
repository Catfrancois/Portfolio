const projects = [
    {
        name: "Intégration",
        description: "Intégrer et concevoir des interfaces réactives.",
        url: "https://github.com/CatFrancois/P2-Open"
    },
    {
        name: "React",
        description: "Développer des interfaces utilisateur et du routage avec React.",
        url: "https://github.com/CatFrancois/Open-P6"
    },
    {
        name: "Backend",
        description: "Mettre en œuvre des opérations CRUD sécurisées et la gestion des données.",
        url: "https://github.com/CatFrancois/P7"
    },
    {
        name: "Débogage",
        description: "Déboguer et optimiser les performances du site web.",
        url: "https://github.com/CatFrancois/P5-Open"
    }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Voir le Projet</a>
    `;
    projectsContainer.appendChild(projectCard);
});