import '../styles/project.scss';

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2 className="section-heading">Projects</h2>
      <div className="project-container">
        <div className="project-box">
          <img
            className="project-image"
            src={require('../assets/food_delivery_website_image.png')}
            alt="project_image"
          />
          <p className="project-title">Food Delievery Website</p>
          <p className="project-description">
            MERN Website through which restaurant can deliver their products
            online with register, login and add to cart feature.
          </p>
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
        <div className="project-box">
          <img
            className="project-image"
            src={require('../assets/gradebook_image.png')}
            alt="project_image"
          />
          <p className="project-title">Gradebook</p>
          <p className="project-description">
            React project display the details of all the students in table and
            graph or pie format of their grade and various statistics with
            sorting and filtering option.
          </p>
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
        </div>
        <div className="project-box">
          <img
            className="project-image"
            src={require('../assets/todo_image.png')}
            alt="project_image"
          />
          <p className="project-title">Todo</p>
          <p className="project-description">
            Todo website (MERN) through which user can add, edit or delete their
            task.
          </p>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/ravikumar7545/ToDo">
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
