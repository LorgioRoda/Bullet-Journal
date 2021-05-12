const express = require("express");
const Habits = require("../models/Habits.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  //Parte del CRUD, recibir todos las Habits
  Habits.find() //importamos el modelo
    .then((Habits) => res.status(200).json(Habits)) //ok
    .catch((err) => res.status(500).json(err)); //error
});

router.get("/:id", (req, res, next) => {
  //Obtener un Habits en concreto
  const { id } = req.params;
  Habits.findOne({ _id: id })
    .then((Habits) => res.status(200).json(Habits)) //ok
    .catch((err) => res.status(500).json(err)); //error
});

router.post("/", (req, res, next) => {
  const { name, description, image, checkBox, dueDate, habitsList } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  Habits.create({ name, description, image, checkBox, dueDate, habitsList })
    .then((Habits) => res.status(200).json(Habits))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  //actualizar con put
  const { id } = req.params;
  Habits.findOneAndUpdate({ _id: id }, req.body, { new: true }) //Habits actualizado
    .then((Habits) => res.status(200).json(Habits))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Habits.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `Habits ${id} deleted` }))
    .catch((err) => res.status(500).json(err));
});

//Ya tenemos el CRUD completo de un modelo
module.exports = router;
