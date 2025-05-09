import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fothphil@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Routes
app.post('/api/join-session', async (req, res) => {
  const { name, email, sessionTitle } = req.body;

  try {
    const mailOptions = {
      from: 'fothphil@gmail.com',
      to: 'fothphil@gmail.com',
      subject: `New Session Registration: ${sessionTitle}`,
      html: `
        <h2>New Session Registration</h2>
        <p><strong>Session:</strong> ${sessionTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br>
        <p>Please reach out to the participant with further details.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.post('/api/custom-session', async (req, res) => {
  const { name, email, format, topic, message } = req.body;

  try {
    const mailOptions = {
      from: 'fothphil@gmail.com',
      to: 'fothphil@gmail.com',
      subject: `Custom Session Request: ${topic}`,
      html: `
        <h2>Custom Session Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Format:</strong> ${format}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        
        <h3>Message:</h3>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Custom session request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const mailOptions = {
      from: 'fothphil@gmail.com',
      to: 'fothphil@gmail.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
