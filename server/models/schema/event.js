const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  date: { type: Number, required: true },
  url: { type: String, required: true }
});

module.exports = EventSchema;