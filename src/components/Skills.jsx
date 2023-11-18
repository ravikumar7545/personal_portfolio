import '../styles/skills.scss';
import { motion } from 'framer-motion';
import {
  backend_skills,
  frontend_skills,
  other_skills,
} from '../assets/developer_skill';

export const firstList = {
  initial: { opacity: 0, y: -30 },
  final: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const secondList = {
  initial: { opacity: 0, y: -30 },
  final: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
};

export const thirdList = {
  initial: { opacity: 0, y: -30 },
  final: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills">
      <motion.h5
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        What I Know
      </motion.h5>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-heading"
      >
        Skills
      </motion.h2>
      <div id="skills-container">
        <div className="frontend-skills">
          <h3 className="skills-heading">Frontend Development</h3>
          <div className="experience_content">
            {frontend_skills.map((skills) => {
              const { Icon } = skills;
              return (
                <motion.article
                  key={skills.skill_name}
                  initial="initial"
                  whileInView="final"
                  variants={skills.variations_level}
                  className="experience_details"
                >
                  <Icon />
                  <div>
                    <h4>{skills.skill_name}</h4>
                    <small>{skills.skill_level}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
        <div className="backend-skills">
          <h3 className="skills-heading">Backend Development</h3>
          <div className="experience_content">
            {backend_skills.map((skills) => {
              const { Icon } = skills;
              return (
                <motion.article
                  key={skills.skill_name}
                  initial="initial"
                  whileInView="final"
                  variants={skills.variations_level}
                  className="experience_details"
                >
                  <Icon />
                  <div>
                    <h4>{skills.skill_name}</h4>
                    <small>{skills.skill_level}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
        <div className="others-skills">
          <h3 className="skills-heading">Other</h3>
          <div className="experience_content">
            {other_skills.map((skills) => {
              const { Icon } = skills;
              return (
                <motion.article
                  key={skills.skill_name}
                  initial="initial"
                  whileInView="final"
                  variants={skills.variations_level}
                  className="experience_details"
                >
                  <Icon />
                  <div>
                    <h4>{skills.skill_name}</h4>
                    <small>{skills.skill_level}</small>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
