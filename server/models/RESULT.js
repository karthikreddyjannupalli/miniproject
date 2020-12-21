const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true 
  },
  contestname: {
    type: String,
    required: true
  },
  contestId: {
    type: String,
    required: true,
    unique: true
  },
  questionno: {
    type: Number,
    required: true
  },
  question: [{
      questiontitle: {type: String,required: true}
  }],
  points: {
      type: Number,
      required: true
  }
});

module.exports = Result = mongoose.model("results", ResultSchema);