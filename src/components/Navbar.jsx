import '../styles/navbar.scss';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className={
          isSideNavOpen ? 'navbar-link mobile-navbar-link' : 'navbar-link'
        }
      >
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#details"
        >
          Home
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#about"
        >
          About
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#project"
        >
          Project
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#skills"
        >
          Skills
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          href="#contact"
        >
          Contact
        </motion.a>
      </motion.div>
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
