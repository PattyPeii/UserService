const UserModel = require("../models/UserInformation");


exports.getAllUsers = async () => {
  return await UserModel.find();
};

exports.createUser = async (user) => {
  return await UserModel.create(user);
};

// exports.getUserById = async (id) => {
//   return await UserModel.findById(id);
// };
exports.getUserById = async (id) => {
  console.log('id' + id)
  return await UserModel.findOne({ user_id: id });
};

// exports.updateUser = async (id, user) => {
//   return await UserModel.findByIdAndUpdate({ user_id: id }, user);
// };
exports.updateUser = async (id, user) => {
  return await UserModel.findOneAndUpdate({ user_id: id }, user);
};

// exports.deleteUser = async (id) => {
//   return await UserModel.findByIdAndDelete(id);
// };
exports.deleteUser = async (id) => {
  return await UserModel.findOneAndDelete({ user_id: id });
};

