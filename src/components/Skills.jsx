import '../styles/skills.scss';
import { FaReact } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { RiJavascriptLine } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNode } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { TbBrandThreejs } from 'react-icons/tb';
import { SiMongodb, SiExpress, SiPython, SiRedux } from 'react-icons/si';
const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Know</h5>
      <h2 className="section-heading">Skills</h2>
      <div id="skills-container">
        <div className="frontend-skills">
          <h3 className="skills-heading">Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaReact size={'20px'} />
              <div>
                <h4>React JS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact size={'20px'} />
              <div>
                <h4>Next JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <AiOutlineHtml5 size={'20px'} />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <DiCss3 size={'20px'} />
              <div>
                <h4>CSS/SCSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <RiJavascriptLine size={'20px'} />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BiLogoTypescript size={'20px'} />
              <div>
                <h4>Typescript</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend-skills">
          <h3 className="skills-heading">Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNode size={'20px'} />
              <div>
                <h4>Node JS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress size={'20px'} />
              <div>
                <h4>Express JS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb size={'20px'} />
              <div>
                <h4>MONGO DB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb size={'20px'} />
              <div>
                <h4>Mongoose</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="others-skills">
          <h3 className="skills-heading">Other</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiPython size={'20px'} />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiRedux size={'20px'} />
              <div>
                <h4>Redux</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandFramerMotion size={'20px'} />
              <div>
                <h4>Framer Motion</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandThreejs size={'20px'} />
              <div>
                <h4>Three JS</h4>
                <small>Begineer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
