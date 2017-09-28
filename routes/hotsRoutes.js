const winston = require('winston');

//models
const HotsDraftLobby = require('../models/HotsDraftLobby');
//controllers
const hotsDraftController = require('../controllers/hotsDraft');

module.exports = app => {
  app.get('/api/hotsNewDraft', (req, res) => {});
};
