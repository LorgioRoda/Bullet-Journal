const express = require("express");
const router = express.Router();
const User = require("./private.routes");

router.get("/:id", (req, res) => {
  const { id } = req.user;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

router.get("/edit", (req, res) => {
  const { _id: id } = req.user;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});


//Profile delete
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Todo.findOneAndRemove({ _id: id, user: req.user.id })
    .then(() => res.status(200).json({ message: `Todo ${id} deleted 🗑` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
