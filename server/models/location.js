const mongoose = require("mongoose");

const LocationSchema = require("./schema/location");

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;