const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: { type: String, default: "" },
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
    photo: {
      type: String,
      default:
        "http://www.kalegoi.com/wp-content/uploads/2016/09/aia-1000x200.jpg",
    },
    profile_Background: {
      type: String,
      default:
        "https://pbs.twimg.com/profile_images/1015018361745526784/2luA9Rvz.jpg",
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
