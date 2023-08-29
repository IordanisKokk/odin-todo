import { add } from 'date-fns';
import { Project } from './modules/project.js'

const projectsArray = [];
projectsArray.push(new Project('MyProj', 'ppprrrooojjj'))
projectsArray.push(new Project('My2Proj', 'ppprr22ro22ooj2222jj'))

export default function initWebsite() {
    const header = createHeader();
    const footer = createFooter();

    const mainSection = createMainSection();

    document.body.appendChild(header)
    document.body.appendChild(mainSection)
    document.body.appendChild(footer)

    loadProjects();

}

function loadProjects() {

    const projectList = document.querySelector('#project-list');
    projectList.textContent = ''
    projectsArray.forEach(project => {
        const listItem = document.createElement('li')
        listItem.textContent = project.title;

        let descriptionVisible = false;

        listItem.addEventListener('click', () => {
            if (!descriptionVisible) {
                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;
                projectDescription.classList.add('project-description');
                listItem.appendChild(projectDescription);
                descriptionVisible = true;
            } else {
                // If description is already visible, remove it
                listItem.removeChild(listItem.lastChild);
                descriptionVisible = false;
            }
        });
        listItem.addEventListener('mouseout', () => {
            // Only remove the description if it's visible
            if (descriptionVisible) {
                listItem.removeChild(listItem.lastChild);
                descriptionVisible = false;
            }
        })
        projectList.appendChild(listItem);
    });
    console.log(projectsArray)
}

function createMainSection(){
    const mainSection = document.createElement('main');

    const projects = document.createElement('section');
    projects.classList.add('projects');
    projects.id = 'projects'

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';

    const projectList = document.createElement('ul');
    projectList.id = 'project-list';

    const tasks = document.createElement('section');
    tasks.classList.add('tasks');
    tasks.id = 'task-list'

    const tasksTitle = document.createElement('h2');
    tasksTitle.textContent = 'Tasks';

    const tasksList = document.createElement('ul');
    tasksList.id = 'task-list';

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = '+';
    addProjectButton.addEventListener('click', () => {
        projectsArray.push(new Project('any', 'desc'));
        loadProjects()
    })

    projects.appendChild(projectTitle);
    projects.appendChild(projectList);
    projects.appendChild(addProjectButton)

    tasks.appendChild(tasksTitle);
    tasks.appendChild(tasksList);

    mainSection.appendChild(projects);
    mainSection.appendChild(tasks);

    return mainSection;
}

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
    
    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'tasks';

    header.appendChild(logo);

    return header;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const copyrightText = document.createElement('p');
    copyrightText.classList.add('copyright');
    copyrightText.textContent = 'Created by IordanisKokk for The Odin Project!';

    footer.appendChild(copyrightText);

    return footer;
}
