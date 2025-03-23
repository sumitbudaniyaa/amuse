const express = require('express');
const QRCode = require('qrcode');
const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

const router = express.Router();

// 📌 Book Ticket
router.post('/book', async (req, res) => {
  try {
    const { eventId, userMobile } = req.body;
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Generate QR Code
    const qrData = `${userMobile}-${eventId}-${Date.now()}`;
    const qrCode = await QRCode.toDataURL(qrData);

    // Save Ticket
    const ticket = new Ticket({ eventId, eventName: event.name, userMobile, qrCode });
    await ticket.save();

    // Update Tickets Sold
    let [sold, total] = event.ticketsSold.split('/').map(Number);
    sold += 1;
    event.ticketsSold = `${sold}/${total}`;
    await event.save();

    res.json({ message: "Ticket booked", ticket });
  } catch (error) {
    res.status(500).json({ error: "Error booking ticket" });
  }
});

module.exports = router;
