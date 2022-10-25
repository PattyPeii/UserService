const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowSchema = new Schema(
  {
    following_user_id: String,
    follower_user_id: String,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt",
    },
  }
);

module.exports = mongoose.model("Follow", FollowSchema);
