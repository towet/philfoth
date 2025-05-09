const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, sessionTitle } = JSON.parse(event.body);

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fothphil@gmail.com', // Consider making this an environment variable too
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: 'fothphil@gmail.com', // And this
    to: 'fothphil@gmail.com', // And this, if it can change
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

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Registration successful' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Failed to send email', error: error.message })
    };
  }
};
