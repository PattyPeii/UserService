const favService = require("../services/FavService");

exports.getFav = async (req, res) => {
  try {
    const results = await favService.getFav(req.params.user_id);
    res.json({ data: results, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFav = async (req, res) => {
  console.log(req.body);
  try {
    const fav = await favService.createFav({
      user_id: req.params.user_id,
      recipe_id: req.params.recipe_id,
    });
    res.json({ data: fav, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteFav = async (req, res) => {
  try {
    const fav = await favService.deleteFav({
        user_id: req.params.user_id,
        recipe_id: req.params.recipe_id,
      });
    res.json({ data: fav, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
