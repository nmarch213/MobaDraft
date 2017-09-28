const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const moment = require('moment');

var HotsDraftLobby = new Schema({
  teamOneName: String,
  teamTwoName: String,
  teamOneToken: String,
  teamTwoToken: String,
  draft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HotsDraft'
  },
  date: {
    type: Date,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
});

module.exports = mongoose.model('HotsDraftLobby', HotsDraftLobby);
