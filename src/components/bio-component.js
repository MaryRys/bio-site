import $ from 'jquery';

const writeBio = () => {
  const domString = `
    <div class="container text-center">
        <img class="card-img-top" style="width: 400px;" src="https://s3-us-west-1.amazonaws.com/co-directory-images/mary-rys-301b2752.jpg" alt="profile_image" id="headShot"></img>
        <div>
          <p class="card-text">I'm a Califoria native, Nashville transplant with a B.S. in biology. I'm a current student at Nashville Software School making a transition into a tech career. Out of college I began working in public health conducting surveillance for West Nile Virus and Zika Virus. I quickly began working with large amounts of data, and several softwares designed to track all this information. After finding that none of these programs really met our needs, I began to investigate how I could improve upon what I was handed, which lead me to learning some code and the rest is history! </p>
        </div>
    </div>`;
  $('#bio').html(domString);
};

export default writeBio;
