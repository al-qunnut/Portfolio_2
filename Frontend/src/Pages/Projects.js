import '../Styles/homepage_styles.css';
import { Projects } from '../script'; 


const Projects = () => {
  return Projects.map(project => (
    `<div class='card'>
      <img src="${project.src}" alt="card" class='Card-img'/>
      <dd class='details'>
        <h2>${project.title}</h2>
        <p>${project.text}</p>
      </dd>
      <button>
        <a href='${project.href}'>View</a>
      </button>
    </div>`
  )).join('');
};

function Projects() {
  return `
    <div class="Projects">
      <h2>Personal Web Projects</h2>
      <div class="projectCards">
        ${Projects()}
      </div>
    </div>
  `;
}

export default Projects;

