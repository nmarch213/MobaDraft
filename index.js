const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const keys = require('./config/keys');
require('./models/HotsDraft');
require('./models/HotsDraftLobby');

//controller
const hotsDraftController = require('./controllers/hotsDraft');

mongoose.connect(keys.mongoURI, { useMongoClient: true });

io.on('connection', function(socket) {
  console.log('a user connected');
});

var draft1 = {
  teamOneName: 'metalwarrior',
  teamTwoName: 'hurtox',
  map: 'BOE',
  coinToss: 'teamOne'
};

hotsDraftController.newHotsDraftLobby(draft1);

//Routes
require('./routes/hotsRoutes')(app);

app.set('port', process.env.PORT || 5000);
server.listen(app.get('port'), function() {
  console.log('MobaDraft Server is live at: ' + app.get('port'));
});
