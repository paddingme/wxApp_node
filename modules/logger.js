/**
 * Created  on 10/2/2016.
 */
var bunyan = require('bunyan'),
    currentEnv = require('../db').currentEnv;

var Logger = bunyan.createLogger({
    name: "WXApp_xuXuanHui"
    });

function LogOperator(){}

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