const winston = require('winston');

//models
const HotsDraftLobby = require('../models/HotsDraftLobby');
//controllers
const hotsDraftController = require('../controllers/hotsDraft');

module.exports = app => {
  app.post('/api/hotsNewDraft', (req, res) => {
    console.log(req.body);
    res.send({ hi: 'there' });
  });
};
