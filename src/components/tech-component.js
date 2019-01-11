import $ from 'jquery';

const writeTechs = () => {
  const domString = `
  <h4>Technologies</h4>
  <div>
  <i class="fab fa-js-square fa-7x"></i>
  <i class="fab fa-html5 fa-7x"></i>
  <i class="fab fa-css3-alt fa-7x"></i>
  <i class="fab fa-sass fa-7x"></i>
  <i class="fab fa-github fa-7x"></i>
  <i class="fab fa-react fa-7x"></i>
  `;
  $('#skills').html(domString);
};

export default writeTechs;
