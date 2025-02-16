const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8001);
// io = the server object in the docs!
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });
  socket.on("messageFromClient", (dataFromClient) => {
    console.log(dataFromClient);
    io.emit("messageFromServer", { data: dataFromClient });
  });
  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
    io.emit("newMessageFromServer", { data: dataFromClient.text });
  });
});
