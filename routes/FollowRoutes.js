const express = require("express");
const {
  getFollowing,
  getFollower,
  follow,
  unFollow,
} = require("../controllers/FollowController");

const router = express.Router();

router.route("/:user_id/following").get(getFollowing);
router.route("/:user_id/follower").get(getFollower);
router.route("/:user_id/:following_user_id").post(follow).delete(unFollow)


module.exports = router;
