const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
const newCourse = require("./routes/send-email");

app.use("/api", newCourse);

app.get("/home", (req, res) => {
  res.send("Hello World");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
