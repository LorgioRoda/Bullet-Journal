const express = require("express");
const router = express.Router();
const User = require("./private.routes");
const uploader = require("../configs/cloudinary.config");

router.get("/:id", (req, res) => {
  const { id } = req.user.params;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

//Profile edit user with Cloudinary
router.post(
  "/edit", uploader.fields(
  [
    { name: profile_pic, maxCount: 1 },
    { name: profile_Background, maxCount: 1 },
  ]),
  (req, res) => {
    const { username, description } = req.body;
    const { _id: id } = req.user;
    if (req.files) {
      User.findById(id).then((currentUser) => {
        User.findByIdAndUpdate(
          id,
          {
            username,
            description,
            profile_pic: req.files.profile_pic
              ? req.files.profile_pic[0].path
              : currentUser.profile_pic,
            profile_Background: req.files.profile_Background
              ? req.files.profile_Background[0].path
              : currentUser.profile_Background,
          },
          { new: true }
        )
          .then((user) => res.status(200).json(user))
          .catch((err) => res.status(500).json(err));
      });
    }
  }
);

//Duda con el put y findbyandupdate

/* router.put("/:id", ([ {name: profile_pic, maxCount: 1}, {name: profile_Background, maxCount: 1},]), (req, res, next) => {
  User.findByIdAndUpdate(
    {_id: req.user.id},
    {
      ...req.body,
      profile_pic: req.files.profile_pic
        ? req.files.profile_pic[0].path
        : currentUser.profile_pic,
      profile_Background: req.files.profile_Background
        ? req.files.profile_Background[0].path
        : currentUser.profile_Background,
    },
    { new: true }
  )
  .then((user) => res.status(200).json(user))
  .catch((err) => res.status(500).json(err))
})
 */

//Profile delete
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Todo.findOneAndRemove({ _id: id, user: req.user.id })
    .then(() => res.status(200).json({ message: `${id} deleted 🗑` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
