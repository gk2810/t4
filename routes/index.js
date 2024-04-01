const Route = require("express").Router();
const messageAPI = require("../controller/api");
const auth = require("../middleware/auth");

Route.get("/message", auth.authenticate, messageAPI);

module.exports = Route;