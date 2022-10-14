const express = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserInformation,
} = require("../controllers/UserInformationController");


const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);


module.exports = router;


