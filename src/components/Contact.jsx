import '../styles/contact.scss';
import { motion } from 'framer-motion';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';
const Contact = () => {
  return (
    <section id="contact">
      <motion.h5
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        Get in Touch
      </motion.h5>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="section-heading"
      >
        Contact Me
      </motion.h2>
      <div className="contact-details-container">
        <div className="contact-details">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            className="email-contact"
          >
            <MdOutlineMailOutline size={'30px'} />

            <p>Email</p>
            <p>elravisingh@gmail.com</p>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            className="whatsapp-contact"
          >
            <FaWhatsapp size={'30px'} />

            <p>Whatsapp</p>
            <p>+91 6200 723 461</p>
          </motion.div>
        </div>
        <div className="contact-form">
          <h3>Send Message</h3>
          <input type="text" placeholder="Your full name" />
          <input type="text" placeholder="Your email" />
          <textarea type="text" placeholder="Your message" />
          <button onClick={() => toast.success('Message sent')}>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
