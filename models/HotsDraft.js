const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HotsDraft = new Schema({
  teamOneDraft: [{
    type: Number
  }],
  teamOneBans: [{
    type: Number
  }],
  teamTwoDraft: [{
    type: Number
  }],
  teamTwoBans: [{
    type: Number
  }],
  teamOneWon: Number,
  teamTwoWon: Number
  coinToss: String,
  map: String
});

module.exports = mongoose.model('HotsDraft', HotsDraft);
