const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const moment = require('moment');

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
  date: {
    type: Date,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
});

module.exports = mongoose.model('HotsDraft', HotsDraft);
