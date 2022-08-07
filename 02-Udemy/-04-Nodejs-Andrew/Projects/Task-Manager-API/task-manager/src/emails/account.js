const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sayedabdo4900@gmail.com",
    subject: "Thanks for joining in ",
    text: `Welcome to the app ${name}`,
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sayedabdo4900@gmail.com",
    subject: "Sorry to see you go ",
    text: `Goodbye ${name}`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
// sgMail.send({
//   to: "sayedabdo4900@gmail.com",
//   from: "sayedabdo4900@gmail.com",
//   subject: "This is my first creation",
//   text: "Welcome :)",
// });
