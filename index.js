const express = require('express');
const mongoose = require('mongoose');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('a user connected');
});

const keys = require('./config/keys');

app.set('port', process.env.PORT || 5000);
server.listen(app.get('port'), function() {
  console.log('MobaDraft Server is live at: ' + app.get('port'));
});
