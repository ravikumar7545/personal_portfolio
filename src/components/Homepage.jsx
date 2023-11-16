import React from 'react';
import MainDetails from './MainDetails';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';

const Homepage = () => {
  return (
    <div>
      <MainDetails />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Homepage;
