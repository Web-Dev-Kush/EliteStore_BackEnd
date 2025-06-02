const express = require("express");
const router = express.Router();
const Contact = require("../modals/Contact");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
