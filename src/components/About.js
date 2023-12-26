import React from 'react'
import './about.css';

const About = () => {
  return (
    <>
      <div id="s2" className='section'>
      <div className='container'>
        <h2>About Me</h2>
        <p>Currently pursuing B.Tech program in Computer Science at Nirma University, my focus lies in the realms of Web Development and Artificial Intelligence/Machine Learning. My passion drives me to consistently delve into the ever-evolving landscape of technology and innovation. Through my academic journey, I am gaining both theoretical knowledge and practical skills, fostering a comprehensive understanding of the dynamic field of computer science. This pursuit reflects my commitment to staying abreast of advancements and contributing to the transformative possibilities inherent in the world of technology.</p>
      </div>
       <div className="container">
       <ul class="list-group list-group-horizontal">
          <li class="list-group-item" style={{width:"200px"}}>Name</li>
          <li class="list-group-item" style={{width:"600px"}}>Aditya Pachchigar</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" style={{width:"200px"}}>Location</li>
          <li class="list-group-item" style={{width:"600px"}}>Surat, Gujarat<br /><a href="https://www.google.com/maps/place/Surat,+Gujarat/@21.1593403,72.7398951,31579m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu?entry=ttu" target="_blank" rel="noreferrer">Show in Map</a></li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" style={{width:"200px"}}>Current Status</li>
          <li class="list-group-item" style={{width:"600px"}}>Final Year student at Nirma University</li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" style={{width:"200px"}}>Education</li>
          <li class="list-group-item" style={{width:"600px"}}>
          {/* B.Tech. in Computer Science (2020 - Present)<br /><h6>Nirma University, Ahmedabad</h6>CGPA - 7.57
          <br /><br /><br />
          HSC - 12th - CBSE<br /><h6>L.P. Savani International School, Surat</h6>Percentage - 89.2 %
          <br /><br /><br />
          SSC - 10th - CBSE<br /><h6>L.P. Savani International School, Surat</h6>Percentage - 90 % */}

          <section class="py-5">
  <ul class="timeline">
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">B.Tech. in Computer Science</h5>
      <p class="text-muted mb-2 fw-bold">2020 - Present</p>
      <p class="text-muted">
        Nirma University, Ahmedabad
        <br />
        CGPA - 7.57
      </p>
    </li>

    <li class="timeline-item mb-5">
      <h5 class="fw-bold">HSC - 12th - CBSE</h5>
      <p class="text-muted mb-2 fw-bold">2020</p>
      <p class="text-muted">
      L.P. Savani International School, Surat
      <br />
      Percentage - 89.2 %
      </p>
    </li>

    <li class="timeline-item mb-5">
      <h5 class="fw-bold">SSC - 10th - CBSE</h5>
      <p class="text-muted mb-2 fw-bold">2018</p>
      <p class="text-muted">
      L.P. Savani International School, Surat
      <br />
      Percentage - 90.0 %
      </p>
    </li>
  </ul>
</section>
          </li>
        </ul>
       </div>
    </div>
    </>



    
  )
}

export default About