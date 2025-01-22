const projects = [
    {
        name: "Integration",
        description: "Integrating and designing responsive interfaces.",
        url: "https://github.com/CatFrancois/P2-Open"
    },
    {
        name: "React",
        description: "Developing user interfaces and routing with React.",
        url: "https://github.com/CatFrancois/Open-P6"
    },
    {
        name: "Backend",
        description: "Implementing secure CRUD operations and data management.",
        url: "https://github.com/CatFrancois/P7"
    },
    {
        name: "Debugging",
        description: "Debugging and optimizing website performance.",
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
        <a href="${project.url}" target="_blank">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
});