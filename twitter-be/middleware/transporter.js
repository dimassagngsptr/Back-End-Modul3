const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
   service: "gmail",
   auth: {
      user: "dimasageng631@gmail.com",
      pass: "teas ornf okiv esvi",
   },
   tls: {
      rejectUnauthorized: false,
   },
});

module.exports = transporter;
