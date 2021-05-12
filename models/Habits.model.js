const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitsSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    imagen: { type: String },
    checkBox: { type: Boolean, defaut: false },
    habitsList: { type: Schema.Types.ObjectId, ref: "User" },
    dueDate: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
    toJSON: {
      tranform: (doc, ret) => {
        ret.id = doc._id;
        delete ret.id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Habitis = mongoose.model("Habits", habitsSchema);
module.exports = Habitis;
