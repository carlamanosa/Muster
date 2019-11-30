const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  questions: { type: Object, required: true },
  aboutUser: { type: String }
});

module.exports = AboutSchema;