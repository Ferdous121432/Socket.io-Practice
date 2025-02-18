//The purpose of expressMain is to be the entrypoint for all Express stuff
//This file will be the one that is run by the user to start the server
//It will be the one that requires all the other files and sets up the server
//It will also be the one that handles all the routes

const app = require("../servers").app;

module.exports = app;
