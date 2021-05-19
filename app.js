require("dotenv").config();
const express = require("express");

//DB config
require("./configs/db.config");

const app = express();

//Middleware config
require("./configs/middleware.config")(app);
require("./configs/cors.config")(app);
//Session config + Passport
require("./configs/session.config")(app);
require("./configs/passport.config")(app);

//Prefijos
const privateRouter = require("./routes/private.routes");
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");
const habitsRouter = require("./routes/habits.routes");

app.use("/api/habits", habitsRouter);
app.use("/api/task", taskRouter);
app.use("/api/private", privateRouter); //postman update
app.use("/api/auth", authRouter)

//Heroku
// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});

//Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: "Not Found" });
});

module.exports = app;
