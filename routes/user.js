const express = require("express");
const router = express.Router();
const UserSchema = require('../modals/User')

// POST /api/user
router.post("/", async (req, res) => {
  const { fname, lname, email, contactNumber, address } = req.body;

  try {
    const newContact = await  UserSchema.create({
      fname,
      lname,
      email,
      contactNumber,
      address,
    });
    await newContact.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server Error...." });
  }
});

module.exports = router;
