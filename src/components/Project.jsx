import '../styles/project.scss';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <section id="project">
      <motion.h5
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        My Recent Work
      </motion.h5>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-heading"
      >
        Projects
      </motion.h2>
      <div className="project-container">
        <div className="project-box">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            className="project-image"
            src={require('../assets/food_delivery_website_image.png')}
            alt="project_image"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
            className="project-title"
          >
            Food Delievery Website
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            className="project-description"
          >
            MERN Website through which restaurant can deliver their products
            online with register, login and add to cart feature.
          </motion.p>
          <div className="project-buttons">
            <a target="_blank" href="https://cravo-frontend.onrender.com/">
              <button>Live Demo</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/ravikumar7545/cravo_frontend"
            >
              <button>Github</button>
            </a>
          </div>
        </div>
        <motion.div className="project-box">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            className="project-image"
            src={require('../assets/gradebook_image.png')}
            alt="project_image"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
            className="project-title"
          >
            Gradebook
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            className="project-description"
          >
            React project display the details of all the students in table and
            graph or pie format of their grade and various statistics with
            sorting and filtering option.
          </motion.p>
          <div className="project-buttons">
            <a target="_blank" href="https://gradebook-topaz.vercel.app/">
              <button>Live Demo</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/ravikumar7545/gradebook"
            >
              <button>Github</button>
            </a>
          </div>
        </motion.div>
        <motion.div className="project-box">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            className="project-image"
            src={require('../assets/todo_image.png')}
            alt="project_image"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
            className="project-title"
          >
            Todo
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            className="project-description"
          >
            Todo website (MERN) through which user can add, edit or delete their
            task.
          </motion.p>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/ravikumar7545/ToDo">
              <button>Github</button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
