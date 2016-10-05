/**
 * Created  on 10/4/2016.
 */
var fileOperator = require('./file'),
    log       = require('./logger'),
    mongoOperator = require('./mongo'),
    redisOperator = require('./redis'),
    request       = require('./request');


module.exports = {
    fileOperator:fileOperator,
    log:log,
    mongoOperator:mongoOperator,
    redisOperator:redisOperator,
    request:request
};