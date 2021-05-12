require("dotenv").config();
const express = require("express");

//DB config
require("./configs/db.config");
const app = express();

//Middleware config
require("./configs/middleware.config")(app);
//Corse
require("./configs/cors.config")(app);
//Session config
require("./configs/session.config")(app);
module.exports = app;


//Prefijos
