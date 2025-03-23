const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587, // Use port 465 if you need a secure connection
  auth: {
    user: "postmaster@sandbox328a431aed2a449892811b3a1cec6a02.mailgun.org",
    pass: "93715d1be548018cb9807adbec7d49aa-ac3d5f74-f87b8aea"
  }
});

// Function to send reminder email
const sendReminderEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: '"Reminder Service" <your-email@gmail.com>',
      to,
      subject,
      text
    });
    console.log(`Reminder email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

module.exports = sendReminderEmail;
