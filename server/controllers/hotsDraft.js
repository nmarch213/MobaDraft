const mongoose = require('mongoose');
const winston = require('winston');
const randomstring = require('randomstring');

//models
const HotsDraft = require('../models/HotsDraft');
const HotsDraftLobby = require('../models/HotsDraftLobby');

module.exports = {
  newHotsDraftLobby: function(draft, callback) {
    var newHotsDraftLobby = {
      teamOneName: draft.teamOneName,
      teamTwoName: draft.teamTwoName,
      teamOneToken: randomstring.generate(),
      teamTwoToken: randomstring.generate()
    };

    HotsDraftLobby.create(newHotsDraftLobby, function(
      err,
      addedHotsDraftLobby
    ) {
      if (err) {
        winston.error('Creating a new draft lobby has failed: ' + err);
        return callback(err);
      }

      newHotsDraft(draft.map, draft.coinToss, addedHotsDraftLobby._id);

      winston.info(
        addedHotsDraftLobby._id + ' has been created and is running!'
      );
      callback(null, addedHotsDraftLobby);
    });
  },

  getHotsDraftLobby: function(lobbyId, callback) {
    HotsDraftLobby.findById(lobbyId)
      .populate('HotsDraft')
      .exec(function(err, foundLobby) {
        if (err) {
          winston.error('There was an error finding lobby: ' + lobbyId);
          return callback(err);
        }
        winston.info(foundLobby._id + ' has been found');
        callback(null, foundLobby);
      });
  }
};

function newHotsDraft(map, coinToss, draftLobbyId) {
  var newHotsDraft = {
    map: map,
    coinToss: coinToss,
    teamOneDraft: [1, 2, 3, 4, 5],
    teamTwoDraft: [1, 2, 3, 4, 5]
  };

  HotsDraft.create(newHotsDraft, function(err, addedHotsDraft) {
    if (err) {
      winston.error('Creating a new draft has failed: ' + err);
      return;
    }
    HotsDraftLobby.findOneAndUpdate(
      { _id: draftLobbyId },
      {
        HotsDraft: addedHotsDraft._id
      },
      function(err, updatedHotsDraftLobby) {
        if (err) {
          winston.error('There was an error updating the HotsDraftLobby');
          return;
        }
        winston.info('HotsDraftLobby has been updated');
      }
    );
    winston.info(addedHotsDraft.map + ' has been created.');
  });
}
