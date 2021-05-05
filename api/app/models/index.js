const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.devices = require("./device.model.js")(mongoose);
db.supports = require('./support.model.js')(mongoose); 

module.exports = db;
