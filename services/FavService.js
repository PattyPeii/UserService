const favModel = require("../models/FavModel");

exports.getFav = async (user_id) => {
  return await favModel.find({ user_id: user_id });
};
// exports.createFav = async (recipe) => {
//   return await favModel.create(recipe_id);
// };
exports.createFav = async (recipe) => {
    return await favModel.create(recipe);
  };
// exports.deleteFav = async (recipe_id) => {
//   return await favModel.find({
//     recipe_id: { $in: recipe_id },
//     user_id: { $in: user_id },
//   });
// };
