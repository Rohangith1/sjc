const mongoose = require("mongoose");
//const { Schema } = mongoose;

const UserSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    unique: true,
    required: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
