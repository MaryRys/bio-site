import $ from 'jquery';
import './navbar.scss';

const createNavbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Bio <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Technologies</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Resume</a>
            </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Project 1</a>
              <a class="dropdown-item" href="#">Project 2</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>`;
  $('#navbar').html(domString);
};

export default createNavbar;
