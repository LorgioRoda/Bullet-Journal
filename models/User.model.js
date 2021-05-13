const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 3 },
    description: {type: String, required: true, unique: true},
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        "Please fill a valid password",
      ],
    },
    profile_pic: {
      type: String,
      default:
        "https://c4.wallpaperflare.com/wallpaper/677/516/1012/world-of-warcraft-battle-for-azeroth-sylvanas-windrunner-anduin-wrynn-video-games-wallpaper-preview.jpg",
    },
    profile_Background: {
      type: String,
      default:
        "https://c4.wallpaperflare.com/wallpaper/988/183/707/artwork-fantasy-art-world-of-warcraft-horde-wallpaper-preview.jpg",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;

        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
