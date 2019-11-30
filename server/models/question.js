const mongoose = require("mongoose");

const QuestionSchema = require("./schema/question");

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;