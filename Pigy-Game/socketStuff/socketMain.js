//where all the socket stuff is going to go in socketMain.js
//The purpose of socketMain is to be the entrypoint for all socket stuff
//This file will be the one that is run by the user to start the server

const io = require("../servers").io;

//The socket.io documentation recommends using an object to store all the sockets
const app = require("../servers").app;

module.exports = app;
