import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Project from './components/Project';

const App = () => {
 return (
    <>
      <Navbar />
      {/* <Home />
      <About />
      <Contact />
      <Project /> */}
      {/* <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element= {<Home /> } />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </>
 );
}

export default App