import $ from 'jquery';
import dataGetter from './helpers/dataGetter';

const writeProjects = (projects) => {
  let domString = '';
  domString += '<h3 class="subheader">Projects</h3>';
  projects.forEach((project) => {
    domString += `
    <div class="container">
      <div class="row">
      <div class="card" style="width: 30rem;">
        <img class="card-img-top" src="${project.screenshot}" alt="screenshot">
        <div class="card-body">
          <p class="card-text">${project.title}</p>
          <p class="project-description">${project.description}</p>
          <p class="technologies">${project.technologiesUsed}
          <a href="${project.url}">View Website</a>
        </div>
      </div>
    </div>
    </div>`;
  });
  $('#projects').html(domString);
};


const getAndPrintProjects = () => {
  dataGetter.getAllProjectsFromDb()
    .then((data) => {
      writeProjects(data);
    })
    .catch((error) => {
      console.error('Error getting projects', error);
    });
};

export default getAndPrintProjects;
