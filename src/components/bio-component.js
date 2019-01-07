import $ from 'jquery';

const writeBio = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../src/images/image.jpg" alt="profile_image"></img>
        <div class="card-body">
          <p class="card-text">Description about me...</p>
          
        </div>
  </div>`;
  $('#bio').html(domString);
};

export default writeBio;
