const followModel = require("../models/FollowModel");

exports.getFollower = async (user_id) => {
  return await followModel.find({following_user_id:user_id});
};

exports.getFollowing = async (user_id) => {
  return await followModel.find({user_id:user_id});
};

// Create
exports.initFollow = async (user_id, following_user_id) => {
  if (followModel.find({user_id:user_id, following_user_id:following_user_id}) != []) {
    return {data: "Already followed"}
  }
  return await followModel.create({user_id:user_id, following_user_id:following_user_id});
};

// Delete
exports.unFollow = async (user_id, following_user_id) => {
  return await followModel.deleteOne({user_id:user_id, following_user_id:following_user_id});
};