// const express = require("express");

// const {
//   getAllUsers,
//   createUser,
//   getUserById,
//   updateUser,
//   deleteUser,
//   getUserInformation,
// } = require("../controllers/UserInformationController");

// const router = express.Router();

// router.route("/").get(getAllUsers).post(createUser);
// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// module.exports = router;

const { authJwt } = require("../middlewares");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserInformation,
} = require("../controllers/UserInformationController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/information", [authJwt.verifyToken, authJwt.isAdmin], getAllUsers);
  app.post("/information", createUser);

  app.get("/information/:id", [authJwt.isOwner], getUserById);
  app.put("/information/:id", [authJwt.isOwner], updateUser);
  app.delete("/information/:id", [authJwt.isOwner], deleteUser);

  // app.get(
  //   "/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};
