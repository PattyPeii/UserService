const express = require("express");
const {
  getFav,
  createFav,
  deleteFav,
} = require("../controllers/FavController");

const router = express.Router();

router.route("/:user_id/favlist").get(getFav);
router.route("/:recipe_id/favlist/create").post(createFav);
// router.route("/:recipe_id/favlist/").delete(deleteFav);

module.exports = router;
