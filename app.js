require("dotenv").config();
const express = require("express");

//DB config
require("./configs/db.config");

const app = express();

//Middleware config
require("./configs/middleware.config")(app);
require("./configs/cors.config")(app);

//Session config
require("./configs/session.config")(app);

//Router
const taskRouter = require("./routes/task.routes");
app.use("/api/task", taskRouter);
const habitsRouter = require("./routes/habits.routes");
app.use("/api/habits", habitsRouter);

app.use((req, res, next) => {
  return res.status(404).json({ message: "Not Found" });
});

module.exports = app; //exportar la aplicación
