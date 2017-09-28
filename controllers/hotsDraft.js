const mongoose = require('mongoose');
const HotsDraftLobby = require('../models/HotsDraftLobby');
const winston = require('winston');
const randomstring = require('randomstring');

module.exports = {
  newHotsDraft: function(teamOneName, teamTwoName, map, coinToss) {
    var newHotsDraft = {
      teamOneName: teamOneName,
      teamTwoName: teamTwoName,
      teamOneToken: randomstring.generate(),
      teamTwoToken: randomstring.generate(),
      map: map,
      coinToss: coinToss
    };

    HotsDraft.create(newHotsDraft, function(err, addedHotsDraft) {
      if (err) {
        winston.error('Creating a new draft has failed: ' + err);
        return;
      }

      winston.info(addedHotsDraft.map + ' has been created and is running!');
    });
  }
};
