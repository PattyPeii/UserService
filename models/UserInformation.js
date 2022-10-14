const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: String,
    fullname: String,
    email: String,
    phone: String,
    birthday: Date,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt"
    }
  }
);

module.exports = mongoose.model("UserInformation", userSchema);
