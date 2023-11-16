import '../styles/contact.scss';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-details-container">
        <div className="contact-details">
          <div className="email-contact">
            {/* Insert email icon here */}
            <MdOutlineMailOutline size={'30px'} />

            <p>Email</p>
            <p>elravisingh@gmail.com</p>
          </div>
          <div className="whatsapp-contact">
            {/* Insert email icon here */}
            <FaWhatsapp size={'30px'} />

            <p>Whatsapp</p>
            <p>+91 6200 723 461</p>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your full name" />
          <input type="text" placeholder="Your email" />
          <textarea type="text" placeholder="Your message" />
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
