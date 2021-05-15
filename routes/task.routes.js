const express = require("express");
const Task = require("../models/Task.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  //Parte del CRUD, recibir todos las Task
  Task.find() //importamos el modelo
    .then((tasks) => res.status(200).json(tasks)) //ok
    .catch((err) => res.status(500).json(err)); //error
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Task.findOne({ _id: id })
    .then((Task) => res.status(200).json(Task)) //ok
    .catch((err) => res.status(500).json(err)); //error
});

router.post("/", (req, res, next) => {
  const { name, description, done, dueDate, priority, taskList } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  Task.create({ name, description, done, dueDate, priority, taskList })
    .then((Task) => res.status(200).json(Task))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  //actualizar con put
  const { id } = req.params;
  Task.findOneAndUpdate({ _id: id }, req.body, { new: true }) //Task actualizado
    .then((Task) => res.status(200).json(Task))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Task.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `Task ${id} deleted` }))
    .catch((err) => res.status(500).json(err));
});

//Ya tenemos el CRUD completo de un modelo
module.exports = router;
