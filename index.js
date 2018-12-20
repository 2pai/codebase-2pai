require('dotenv').config()
const server = require('./bin/app/server');
const logger = require('./bin/helper/util/logger')
const AppServer = new server();

const Port = process.env.SERVER_PORT || 1337;

AppServer.server.listen(Port,(req,res) => {
    let ctx = 'app-server';
logger.log(ctx,`The server is running on ${Port}`,'init')
});