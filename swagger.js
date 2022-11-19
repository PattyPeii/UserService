const swaggerAutogen = require('swagger-autogen')()

const outputAuthRoutesFile = './swagger_output_AuthRoutes.json'
const endpointsAuthRoutesFiles = ['./routes/AuthRoutes.js']

swaggerAutogen(outputAuthRoutesFile, endpointsAuthRoutesFiles)

const outputFavRoutesFile = './swagger_output_FavRoutes.json'
const endpointsFavRoutesFiles = ['./routes/FavRoutes.js']

swaggerAutogen(outputFavRoutesFile, endpointsFavRoutesFiles)

const outputFollowRoutesFile = './swagger_output_FollowRoutes.json'
const endpointsFollowRoutesFiles = ['./routes/FollowRoutes.js']

swaggerAutogen(outputFollowRoutesFile, endpointsFollowRoutesFiles)

const outputUserInformationRoutesFile = './swagger_output_UserInformationRoutes.json'
const endpointsUserInformationRoutesFiles = ['./routes/UserInformationRoutes.js']

swaggerAutogen(outputUserInformationRoutesFile, endpointsUserInformationRoutesFiles)

const outputUserRoutesFile = './swagger_output_UserRoutes.json'
const endpointsUserRoutesFiles = ['./routes/UserRoutes.js']

swaggerAutogen(outputUserRoutesFile, endpointsUserRoutesFiles)
