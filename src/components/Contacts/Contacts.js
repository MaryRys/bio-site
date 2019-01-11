import $ from 'jquery';
import './Contacts.scss';

const writeContacts = () => {
  const domString = `
  <div class="text-center contacts" style="width: 100%">
        <p>Contact Me @ 
          rys.mary@gmail.com
              <a href="https://www.linkedin.com/in/maryrys">
              <i class="fab fa-linkedin fa-3x"></i></a>
              <a class="twitter" href=""></a>
              <a href="https://github.com/MaryRys">
              <i class="fab fa-github-alt fa-3x"></i>
        </p>
        </div>`;
  $('#contacts').html(domString);
};

export default writeContacts;
