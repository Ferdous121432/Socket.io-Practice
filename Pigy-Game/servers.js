const express = require("express");
const app = express();
const socketio = require("socket.io");
const expressServer = app.listen(9000);
const io = socketio(expressServer);

//App Organization
//servers.js is not entry point for the server. it creates the server and exports it

module.exports = {
  app: app,
  io: io,
};
