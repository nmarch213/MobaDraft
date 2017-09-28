const mongoose = require('mongoose');
const winston = require('winston');
const randomstring = require('randomstring');

//models
const HotsDraft = require('../models/HotsDraft');
const HotsDraftLobby = require('../models/HotsDraftLobby');

module.exports = {
  newHotsDraftLobby: function(draft) {
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
        return;
      }

      newHotsDraft(draft.map, draft.coinToss, addedHotsDraftLobby._id);

      winston.info(
        addedHotsDraftLobby._id + ' has been created and is running!'
      );
    });
  }
};

function newHotsDraft(map, coinToss, draftLobbyId) {
  var newHotsDraft = {
    map: map,
    coinToss: coinToss
  };

  HotsDraft.create(newHotsDraft, function(err, addedHotsDraft) {
    if (err) {
      winston.error('Creating a new draft has failed: ' + err);
      return;
    }
    HotsDraftLobby.findOneAndUpdate(
      { _id: draftLobbyId },
      {
        $push: {
          draft: addedHotsDraft._id
        }
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
