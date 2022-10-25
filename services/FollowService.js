const followModel = require("../models/FollowModel");

exports.getFollower = async (user_id) => {
  return await followModel.find({following_user_id:user_id});
};

exports.getFollowing = async (user_id) => {
  return await followModel.find({follower_user_id:user_id});
};