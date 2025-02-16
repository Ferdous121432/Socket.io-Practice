const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  //   console.log(socket.id);
  socket.on("ggg", (dataFromClient) => {
    console.log("ggg", dataFromClient);
  });
  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
});
