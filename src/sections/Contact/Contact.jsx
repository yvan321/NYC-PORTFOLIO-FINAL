import  { useEffect } from "react";
import styles from './ContactStyles.module.css';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function Contact() {


  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation only happens once
      offset: 100, // Distance to trigger animation
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6v5bvhm',       
      'template_v3uzpm5',      
      form.current,
      'EEHkrdGxdH9Z3WUBe'        
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
    });

    
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 data-aos="fade-up" className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div data-aos="fade-up" className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div data-aos="fade-up" className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"          
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div data-aos="fade-up" className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
