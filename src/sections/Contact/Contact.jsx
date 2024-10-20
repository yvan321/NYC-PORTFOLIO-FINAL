import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Simple email validation
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic input validation
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!isValidEmail(formState.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      setIsLoading(false);

      if (data.success) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
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
            value={formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formState.email}
            onChange={handleInputChange}
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
            value={formState.message}
            onChange={handleInputChange}
          />
        </div>
        <input className="hover btn" type="submit" value={isLoading ? 'Sending...' : 'Submit'} disabled={isLoading} />
      </form>

      {isSubmitted && <p>Your message has been sent successfully!</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </section>
  );
}

export default Contact;
