const favModel = require("../models/FavModel");

exports.getFav = async (user_id) => {
  return await favModel.find({ user_id: user_id });
};
// exports.createFav = async (recipe) => {
//   return await favModel.create(recipe_id);
// };
exports.createFav = async (fav) => {
    return await favModel.create(fav);
  };

exports.deleteFav = async (fav) => {
    // return await favModel.findByIdAndDelete(id);
    return await favModel.findOneAndDelete(fav);

  };
  
// exports.deleteFav = async (recipe_id) => {
//   return await favModel.find({
//     recipe_id: { $in: recipe_id },
//     user_id: { $in: user_id },
//   });
// };
