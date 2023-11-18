import './App.css';
import Navbar from './components/Navbar';
import MainDetails from './components/MainDetails';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <MainDetails />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
