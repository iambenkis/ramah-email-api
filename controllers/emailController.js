// controllers/emailController.js
const nodemailer = require("nodemailer");

// Create a transporter using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'gmail' for Gmail
  auth: {
    user: "benkisenge03@gmail.com",
    pass: "pxemigdrtvgzqtjx",
  },
});

const newCourseTemplate = (name, className) => {
  return `
    <main
      style="
        background-color: #f8f8f8;
        padding: 20px;  
        font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', Roboto,
          'Oxygen-Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      ">
      <div
        style="
          background-color: #fff;
          margin: 0 auto;
          padding: 20px 25%;
        ">
        <div style="background-color: #fff; padding: 20px; width:100%; display: block;">
          <img
            src="https://ramahschool.com/_next/image?url=%2FRamah.png&w=256&q=75"
            width="170"
            height="50"
            alt="Ramah Institute"
            style="margin: 0 auto;" />
        </div>
        <p style="font-weight: 700; font-size: 14px; line-height: 26px">
          Hi ${name},
        </p>
        <p style="font-size: 14px; line-height: 26px">
          Exciting news awaits in your dashboard!
        </p>
        <p style="font-size: 14px; line-height: 26px">
          ${className} is now available for you to
          explore.
        </p>
        <a
          href="https://www.example.com"
          style="
            background-color: #5f51e8;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            text-align: center;
            display: block;
            padding: 12px;
            font-weight: bold;
          "
          >View Dashboard</a>

        <p style="font-size: 14px; line-height: 26px">
          Before diving into this enriching material, we encourage you to take a
          moment to pray, inviting the guidance of the Holy Spirit.<br />
          Additionally, remember to have your notebook ready to take notes as
          you progress through the course.
        </p>

        <p style="font-size: 14px; font-weight: bold; line-height: 26px">
          For those who have not yet paid the second installment please use the
          link below. Payment Plans: $209 per month
        </p>
        <a
          href="https://www.example.com"
          style="
            background-color: #5f51e8;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            text-align: center;
            display: block;
            padding: 12px;
            font-weight: bold;
          "
          >Complete Payment</a
        >
        <p style="font-size: 14px; line-height: 26px">Best, regards</p>
        <p style="font-size: 14px; line-height: 26px">Ramah team</p>
      </div>
    </main>
  `;
};

const sendWelcomeEmail = async (req, res, next) => {};

const sendNewCourseEmail = async (req, res, next) => {
  // Logic to send a new course notification email using the course template
  try {
    const { to, subject, name } = req.body;

    // Send email
    await transporter.sendMail({
      from: "benkisenge03@gmail.com",
      to: to,
      subject: subject,
      html: newCourseTemplate(name, "Math"),
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = { sendWelcomeEmail, sendNewCourseEmail };
