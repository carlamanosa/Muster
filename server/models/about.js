const mongoose = require("mongoose");

const AboutSchema = require("./schema/about");

const About = mongoose.model("About", AboutSchema);

module.exports = About;