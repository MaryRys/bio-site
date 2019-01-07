import $ from 'jquery';

const writeTechs = () => {
  const domString = `
  <div>
  <i class="fab fa-js-square"></i>
  <i class="fab fa-html5"></i>
  <i class="fab fa-css3-alt"></i>
  <i class="fab fa-sass"></i>
  <i class="fab fa-github"></i>
  <i class="fab fa-react"></i>
  `;
  $('.skills').html(domString);
};

export default writeTechs;
