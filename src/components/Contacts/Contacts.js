import $ from 'jquery';
import './Contacts.scss';

const writeContacts = () => {
  const domString = `
  <div class="card text-center" style="width: 400px">
        <h6>Contact Me</h6>
          <p>rys.mary@gmail.com</p>
              <a href="https://www.linkedin.com/in/maryrys">
              <i class="fab fa-linkedin"></i></a>
              <a class="twitter" href=""></a>
              <a href="https://github.com/MaryRys">
              <i class="fab fa-github-alt"></i>
              </a>
        </div>`;
  $('#contacts').html(domString);
};

export default writeContacts;
