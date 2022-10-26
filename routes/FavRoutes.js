const express = require("express");
const {
  getFav,
  createFav,
  deleteFav,
} = require("../controllers/FavController");

const router = express.Router();

router.route("/:user_id/favlist").get(getFav);
router.route("/:user_id/favlist/:recipe_id").get(createFav).delete(deleteFav);

module.exports = router;
