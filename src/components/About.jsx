import '../styles/about.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <motion.h5
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        Get to Know
      </motion.h5>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-heading"
      >
        About Me
      </motion.h2>
      <div id="about-container">
        <motion.div
          id="cartoon-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          <img
            src={require('../assets/cartoon_image.png')}
            alt="cartoon-image"
          />
        </motion.div>
        <div id="about-me-box">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            Recent graduated in B.Tech CSE excited about diving into Full Stack
            Development. With expertise in HTML, CSS, JavaScript, React, and
            Node.js, I bring several project experience and a hunger for
            problem-solving. My adaptability, collaborative spirit, and passion
            for staying updated in tech market make me a dynamic addition to any
            tech team.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
