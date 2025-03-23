const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventName: { type: String, required: true },   // Event name
  userMobile: { type: String, required: true }, // User's mobile number
  qrCode: { type: String, required: true }      // QR Code for the ticket
});

module.exports = mongoose.model('Ticket', TicketSchema);
