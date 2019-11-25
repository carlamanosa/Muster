const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MobSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true }
});

module.exports = MobSchema;