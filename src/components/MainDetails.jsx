import '../styles/main-details.scss';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion';

const MainDetails = () => {
  const animationDetail = {
    initial: {
      y: -100,
      opacity: 0,
    },
    final: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section id="details">
      <div className="name-details">
        <motion.p
          initial={animationDetail.initial}
          whileInView={{
            ...animationDetail.final,
            transition: { delay: 0.1 },
          }}
          id="pre-title"
        >
          Hello I'm
        </motion.p>
        <motion.h3
          initial={animationDetail.initial}
          whileInView={{
            ...animationDetail.final,
            transition: { delay: 0.3 },
          }}
          id="name"
        >
          Ravi Kumar
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            ...animationDetail.final,
            transition: { duration: 1, delay: 0.5 },
          }}
          id="post-title"
        >
          Full Stack Developer
        </motion.p>
        <a href={resume} download="Resume">
          <button id="resume-btn">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default MainDetails;
