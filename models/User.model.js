const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    description: {type: String, default: ""},
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
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
