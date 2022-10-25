const followService = require("../services/FollowService");

exports.getFollower = async (req, res) => {
  try {
    const results = await followService.getAllFollower(req.params.user_id);
    res.json({ data: results, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFollowing = async (req, res) => {
  try {
    const results = await followService.getFollowing(req.params.user_id);
    res.json({ data: results, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



