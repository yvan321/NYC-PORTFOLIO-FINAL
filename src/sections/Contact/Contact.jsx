import styles from './ContactStyles.module.css';
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6v5bvhm',       // Replace with your Service ID
      'template_v3uzpm5',      // Replace with your Template ID
      form.current,
      'EEHkrdGxdH9Z3WUBe'        // Replace with your Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
    });

    // Clear form after submission
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
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
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"          // Make sure to use "email" type for email validation
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
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
