const winston = require('winston');

//models
const HotsDraftLobby = require('../models/HotsDraftLobby');
//controllers
const hotsDraftController = require('../controllers/hotsDraft');

module.exports = app => {
  app.post('/api/hotsNewDraft', (req, res) => {
    hotsDraftController.newHotsDraftLobby(req.body, function(err, draftLobby) {
      hotsDraftController.getHotsDraftLobby(draftLobby._id, function(
        err,
        updatedLobby
      ) {
        res.send(updatedLobby);
        //NOTE: Change to res.json
      });
    });
  });

  app.get('/api/getHotsLobby/:id', (req, res) => {
    hotsDraftController.getHotsDraftLobby(req.params.id, function(err, lobby) {
      res.send(lobby);
    });
  });
};
