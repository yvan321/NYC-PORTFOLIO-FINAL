// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields: name, email, and message' });
  }

  // Ensure environment variables are loaded
  // eslint-disable-next-line no-undef
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ message: 'Email credentials are not set in the environment variables' });
  }

  // Set up nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // eslint-disable-next-line no-undef
      user: process.env.EMAIL_USER,  // Your email from the .env file
      // eslint-disable-next-line no-undef
      pass: process.env.EMAIL_PASS,  // Your email password (or app password) from .env file
    },
  });

  let mailOptions = {
    from: email, // Sender (user's email)
    // eslint-disable-next-line no-undef
    to: process.env.EMAIL_USER,  // Your email, where the message is sent to
    subject: 'New Contact Form Submission',
    text: `You have a new message from ${name} (${email}): \n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Email failed to send', error });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  });
}
