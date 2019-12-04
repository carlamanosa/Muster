const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  isSelected: { type: String, required: true }
});

module.exports = EventSchema;