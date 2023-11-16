import '../styles/about.scss';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2 className="section-heading">About Me</h2>
      <div id="about-container">
        <div id="cartoon-image">
          <img
            src={require('../assets/cartoon_image.png')}
            alt="cartoon-image"
          />
        </div>
        <div id="about-me-box">
          <p>
            Recent graduated in B.Tech CSE excited about diving into Full Stack
            Development. With expertise in HTML, CSS, JavaScript, React, and
            Node.js, I bring several project experience and a hunger for
            problem-solving. My adaptability, collaborative spirit, and passion
            for staying updated in tech market make me a dynamic addition to any
            tech team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
