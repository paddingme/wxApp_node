
/**
 * Created  on 10/4/2016.
 */

var mongoErrorHandler = require('./mongoErrorHandler'),
    redisErrorHandler  = require('./redisErrorHandler'),
    serverErrorHandler = require('./serverErrorHandler');

module.exports = {
    handleServerError:serverErrorHandler,
    handleRedisErrot:redisErrorHandler,
    handleMongoError:mongoErrorHandler

};


