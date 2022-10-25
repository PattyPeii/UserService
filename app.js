const express = require("express");
const mongoose = require("mongoose");
const UserInformationRouter = require("./routes/UserInformationRoutes");
const FollowRouter = require("./routes/FollowRoutes");

var grpc = require("grpc");
const PROTO_PATH="./proto/user.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
const userService = require("./services/UserInformationService");

const app = express();

require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/information", UserInformationRouter);
app.use("/follow", FollowRouter);


console.log(process.env.MONGODB_URI);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// config gRPC


const server = new grpc.Server();
module.server = server;
server.bind(`0.0.0.0:${process.env.GRPC_PORT}`,grpc.ServerCredentials.createInsecure());

var packageDefinition = protoLoader.loadSync(PROTO_PATH,{
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});
var userProto =grpc.loadPackageDefinition(packageDefinition);

server.addService(userProto.UserService.service,{
  GetUserInformation: async (call,callback)=>{
      let user = await userService.getUserById(call.request.user_id);
      if(user) {
          callback(null, user);
      }else {
          callback({
              code: grpc.status.NOT_FOUND,
              details: "Not found"
          });
      }
  }
});

app.listen(process.env.API_PORT, () => {
  server.start();
  console.log(`gRPC Server is running on port ${process.env.GRPC_PORT}`);
  console.log(`Server is running on port ${process.env.API_PORT}`);
});

module.exports = app;
