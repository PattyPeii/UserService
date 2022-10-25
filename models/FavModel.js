const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favSchema = new Schema(
  {
    user_id: String,
    recipe_id: String,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt",
    },
  }
);

module.exports = mongoose.model("Fav", favSchema);
