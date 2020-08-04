const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: { type: String, required: true },
  list: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});
const name = mongoose.model("name", nameSchema);
module.exports = name;
