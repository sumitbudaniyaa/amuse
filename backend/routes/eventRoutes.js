const express = require('express');
const multer = require('multer');
const path = require('path');
const Event = require('../models/Event');

const router = express.Router();

// Multer Storage for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

// 📌 Create Event (with Image Upload)
router.post('/create', upload.single('poster'), async (req, res) => {
  try {
    const { name, venue, price, date, time, description, location, artists, status, ticketsSold } = req.body;
    if (!req.file) return res.status(400).json({ message: "Poster is required" });

    const event = new Event({
      name,
      venue,
      price,
      date,
      time,
      description,
      poster: req.file.path,
      location,
      artists: artists.split(','),
      status,
      ticketsSold
    });

    await event.save();
    res.json({ message: "Event created", event });
  } catch (error) {
    res.status(500).json({ error: "Error creating event" });
  }
});

module.exports = router;
