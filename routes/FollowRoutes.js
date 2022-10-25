const express = require("express");
const {
  getFollowing,
  getFollower,
} = require("../controllers/FollowController");

const router = express.Router();

router.route("/:user_id/following").get(getFollowing);
router.route("/:user_id/follower").get(getFollower);


module.exports = router;
