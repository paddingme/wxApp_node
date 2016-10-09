/**
 * Created  on 10/2/2016.
 */
var bunyan = require('bunyan'),
    path    = require('path'),
    logType = require('../db').logType;

var Logger = bunyan.createLogger({
    name: "WXApp_xuXuanHui",
    serializers: bunyan.stdSerializers,
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            path: path.resolve(__dirname,'../logs/webError.log')
        }
    ]
    });

Logger.on('error', function (err) {
    console.log('an error occured to bunyan instance..');
    // do other things
});
//log.trace, log.debug, log.info, log.warn, log.error, and log.fatal
function LogOperator(){}

LogOperator.logToStdOut = function (info) {
    if(logType==='stdout'){

    }
};

LogOperator.logMongoErrorToFile = function () {

};

LogOperator.logRedisErrorToFile = function(){

};

LogOperator.logWebErrorToFile = function(){

};

LogOperator.logToFile = function(){

};

LogOperator.logMongoErrorToDB = function(){

};

LogOperator.logRedisErrorToDB = function(){

};

LogOperator.logWebErrorToDB = function () {

};

LogOperator.logToDB = function(){

};

module.exports = {
    logger:Logger,
    LogOperator:LogOperator
};