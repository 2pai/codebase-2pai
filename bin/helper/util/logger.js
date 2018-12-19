const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            handleExceptions: true,
            json: false
        })
    ],
    exitOnError: false
})
const log = (ctx,desc,scope) => {
    const object = {
        ctx,
        scope,
        message:desc.toString()
    }
    logger.info(object);
}
module.exports = {
    log
};