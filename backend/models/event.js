const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Unique event ID
  name: { type: String, required: true },            // Event name
  venue: { type: String, required: true },           // Venue location
  price: { type: Number, required: true },           // Ticket price
  date: { type: String, required: true },           // Event date
  time: { type: String, required: true },           // Event time
  description: { type: String, required: true },    // Event description
  poster: { type: String, required: true },        // File path of uploaded poster
  location: { type: String, required: true },      // Google Maps location link
  artists: { type: [String], required: true },     // List of performing artists
  status: { type: String, required: true },        // Event status (upcoming, ongoing, completed)
  ticketsSold: { type: String, required: true }    // Format: "sold/total"
});

module.exports = mongoose.model('Event', EventSchema);
