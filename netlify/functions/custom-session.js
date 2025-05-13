const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, format, topic, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fothphil@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

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

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Custom session request sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Failed to send email', error: error.message })
    };
  }
};
