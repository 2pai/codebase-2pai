require('dotenv').config()

const getDevelopmentMongoServer = () => process.env.MONGODB_DEVELOPMENT_URL;

const getEnvironmentStatus = () => process.env.ENVIRONMENT;

const getBasicAuthUsername = () => process.env.BASIC_AUTH_USERNAME;
const getBasicAuthPassword = () => process.env.BASIC_AUTH_PASSWORD;

module.exports = {
    getDevelopmentMongoServer,
    getEnvironmentStatus,
    getBasicAuthUsername,
    getBasicAuthPassword

}