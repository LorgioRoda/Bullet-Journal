const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/:id", isLoggedIn,(req, res) => {
  const { id } = req.user;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

//Profile delete
router.delete("/:id/delete", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  User.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `${id} deleted 🗑` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
