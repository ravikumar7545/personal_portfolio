import '../styles/main-details.scss';
import resume from '../assets/resume.pdf';

const MainDetails = () => {
  return (
    <section id="details" className="main-details">
      <div className="name-details">
        <p id="pre-title">Hello I'm</p>
        <h3 id="name">Ravi Kumar</h3>
        <p id="post-title">Full Stack Developer</p>
        <a href={resume} download="Resume">
          <button id="resume-btn">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default MainDetails;
