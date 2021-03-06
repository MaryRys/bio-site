import $ from 'jquery';
import dataGetter from '../helpers/dataGetter';
import './projects-component.scss';

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
