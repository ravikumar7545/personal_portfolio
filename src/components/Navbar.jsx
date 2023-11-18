import '../styles/navbar.scss';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <nav>
      <div
        className={
          isSideNavOpen ? 'navbar-link mobile-navbar-link' : 'navbar-link'
        }
      >
        <a href="#details">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div id="mobile-nav-menu">
        {isSideNavOpen ? (
          <IoMdClose
            size={'20px'}
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          />
        ) : (
          <TiThMenu
            size={'20px'}
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
