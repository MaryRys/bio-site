import $ from 'jquery';
import './navbar.scss';

const createNavbar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="main-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#bio">Bio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#skills">Technologies</a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacts">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>`;
  $('#navbar').html(domString);
};

const navbarEvents = () => {
  $('#main-nav li a').on('click', (e) => {
    const targetHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetHref).offset().top,
    }, 1000);
    e.preventDefault();
  });
};

export default {
  createNavbar,
  navbarEvents,
};
