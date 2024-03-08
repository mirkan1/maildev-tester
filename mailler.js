const nodemailer = require('nodemailer');

// We add this setting to tell nodemailer the host isn't secure during dev
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const transport = nodemailer.createTransport({
  port: 1025,
  host: 'localhost', // Assuming your mail server is running locally
  // Other settings...
});

// Example usage:
const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent via Nodemailer and Maildev.'
};

transport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
