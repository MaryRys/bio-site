import $ from 'jquery';
import getProjects from '../../data/projectsData';

const writeProjects = (projects) => {
  let domString = '';
  projects.forEach((project) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${project.title}</p>
        </div>
      </div>`;
  });
  $('#projects').html(domString);
};

const loadProject = () => {
  getProjects()
    .then((data) => {
      writeProjects(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default loadProject;
