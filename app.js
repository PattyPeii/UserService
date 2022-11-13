const express = require("express");
const mongoose = require("mongoose");
const UserInformationRouter = require("./routes/UserInformationRoutes");
const FollowRouter = require("./routes/FollowRoutes");
const FavRouter = require("./routes/FavRoutes");

const grpc = require('@grpc/grpc-js')
const PROTO_PATH = "./proto/user.proto";
var protoLoader = require("@grpc/proto-loader");
const userService = require("./services/UserInformationService");

const app = express();

require("dotenv").config();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "User Service On !!" });
});

// const db = require("./models");
// const Role = db.role;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/information", UserInformationRouter);
app.use("/follow", FollowRouter);
app.use("/fav", FavRouter);

// console.log(process.env.MONGODB_URI);
// routes
require("./routes/AuthRoutes")(app);
require("./routes/UserRoutes")(app);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
      // initial();
    }
  }
);

// config gRPC


var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });
var userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
module.server = server;
// server.bindAsync(
//   `0.0.0.0:${process.env.GRPC_PORT}`,
//   grpc.ServerCredentials.createInsecure()
// );



server.addService(userProto.UserService.service, {
  GetUserInformation: async (call, callback) => {
    let user = await userService.getUserById(call.request.user_id);
    if (user) {
      callback(null, user);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

server.bindAsync(`0.0.0.0:${process.env.PORT}`, grpc.ServerCredentials.createInsecure(), (error, port)  => {
  server.start();
})


// app.listen(process.env.API_PORT, () => {
//   // server.start();
//   server.bindAsync(`0.0.0.0:${process.env.GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
//     server.start();
//   })
//   console.log(`gRPC Server is running on port ${process.env.GRPC_PORT}`);
//   console.log(`REST is running on port ${process.env.API_PORT}`);
// });

module.exports = app;

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "moderator",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//       });

//       new Role({
//         name: "admin",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
