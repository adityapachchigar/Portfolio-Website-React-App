import React from 'react';
// import { Link } from 'react-router-dom';
// import ProjectCard from './ProjectCard';
// import data from './projectData.json'
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Aments from './Aments';


const Navbar = () => {
  return (
    <>
        <nav id="navbar-example2" class="navbar navbar-dark bg-dark px-3 mb-3">
          <a class="navbar-brand" href="/">Home</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Acheivements</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading3">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading4">Contact</a>
            </li>
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2" tabindex="0">
          <div id="scrollspyHeading1">
            <About />
          </div>
          <div id="scrollspyHeading2">
            <Aments />
          </div>
          <div id="scrollspyHeading3">
            <Project />
          </div>
          <div id="scrollspyHeading4">
            <Contact />
          </div>
        </div>
    </>
  )
}

export default Navbar