const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surviorSchema = new Schema({
  list: { type: String, required: true },
  date: { type: Date, default: Date.now },
  name: { type: Schema.Types.ObjectId, ref: "Name" },
});

const Survior = mongoose.model("Survior", surviorSchema);

module.exports = Survior;
