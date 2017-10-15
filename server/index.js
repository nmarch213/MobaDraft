const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const keys = require("../config/keys");
require("./models/HotsDraft");
require("./models/HotsDraftLobby");

//controller
const hotsDraftController = require("./controllers/hotsDraft");

mongoose.connect(keys.mongoURI, { useMongoClient: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

io.on("connection", function(socket) {
  console.log("user connected");
  socket.emit("hasChannel");

  socket.on("session", function(data) {
    console.log(data.id);
  });

  socket.on("hero", function(data) {
    console.log(data.hero.name);
    socket.emit("heroDrafted", { success: "sucess" });
  });
});

//This is test data for the hotsDraftController
var draft1 = {
  teamOneName: "metalwarrior",
  teamTwoName: "hurtox",
  map: "BOE",
  coinToss: "teamOne"
};

//This function call is used for testing the DB for hotsDraftController
// hotsDraftController.newHotsDraftLobby(draft1);

//Routes
require("./routes/hotsRoutes")(app);

app.set("port", process.env.PORT || 5000);
server.listen(app.get("port"), function() {
  console.log("MobaDraft Server is live at: " + app.get("port"));
});
