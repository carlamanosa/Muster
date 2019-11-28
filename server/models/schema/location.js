const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  timeStamp: { type: Number, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true }
});

module.exports = LocationSchema;