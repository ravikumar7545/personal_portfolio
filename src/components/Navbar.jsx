import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-link">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
