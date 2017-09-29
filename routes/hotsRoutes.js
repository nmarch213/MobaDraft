const winston = require('winston');

//models
const HotsDraftLobby = require('../models/HotsDraftLobby');
//controllers
const hotsDraftController = require('../controllers/hotsDraft');

module.exports = app => {
  app.post('/api/hotsNewDraft', (req, res) => {
    hotsDraftController.newHotsDraftLobby(req.body, function(err, draftLobby) {
      console.log(draftLobby);
      res.send(draftLobby);
    });
  });
};
