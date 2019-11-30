const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  num: { type: Number, required: true },
  resp: { type: String, required: true }
});

module.exports = QuestionSchema;