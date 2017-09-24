const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HotsDraft = new Schema({
  teamOneName: String,
  teamTwoName: String,
  map: String,
  coinToss: String,
  teamOneBans: [],
  teamTwoBans: [],
  teamOneDraft: [],
  teamTwoDraft: [],
  teamOneWon: Number,
  teamTwoWon: Number,
  date: Date.now();
})

module.exports = mongoose.model('HotsDraft', HotsDraft);
