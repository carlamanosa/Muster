const mongoose = require("mongoose");

const CandleSchema = require("./schema/candle");

const Candle = mongoose.model("Candle", CandleSchema);

module.exports = Candle;