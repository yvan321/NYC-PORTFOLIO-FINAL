import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure user is logged in
    if (!isLoggedIn) {
      setErrorMessage('You must be logged in to send a message.');
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
        setFormState({ name: '', email: '', message: '' });
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

  const responseGoogle = (response) => {
    // Set user information here
    if (response && response.profileObj) {
      setIsLoggedIn(true);
      setFormState({ ...formState, email: response.profileObj.email });
    }
  };

  const handleFailure = (response) => {
    console.error('Login failed:', response);
    setErrorMessage('Login failed. Please try again.');
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {!isLoggedIn ? (
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
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
              readOnly // Prevent user from changing the email
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
      )}

      {isSubmitted && <p>Your message has been sent successfully!</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </section>
  );
}

export default Contact;
