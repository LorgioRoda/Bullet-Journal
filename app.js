require("dotenv").config();
const express = require("express");

//DB config
require("./configs/db.config");
const app = express();

//Middleware config
require("./configs/middleware.config")(app);
//Corse
require("./configs/cors.config")(app);
//Session config + Passport
require("./configs/session.config")(app);
require("./configs/passport.config")(app);

//Prefijos
const privateRouter = require("./routes/private.routes");

app.use("/api/private", privateRouter); //postman update

//Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: "Not Found" });
});

module.exports = app;
