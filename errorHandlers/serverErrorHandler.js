/**
 * Created  on 10/4/2016.
 */
var logger = require('../modules').logger;

function ServerErrorHandler(){}

ServerErrorHandler.notFoundHandler = function(req,res,next){
    res.send("not found");
    next();
};

/**
 * @param req
 * @param res
 * @param err :  request content-type Not Acceptable
 */
ServerErrorHandler.notAcceptableHandler = function(req,res,err){

};
/**
 * @param req
 * @param res
 * @param err:InvalidHeader
 */
ServerErrorHandler.invalidHeaderHandler = function(req,res,err){

};

/**
 * @param req
 * @param res
 * @param err :RequestExpired
 */
ServerErrorHandler.requestExpiredHandler = function (req,res,err) {

};
/**
 * @param req
 * @param res
 * @param err : request method not allowed
 */
ServerErrorHandler.methodNotAllowedHandler = function (req,res,err) {

};

/**
 * @param req
 * @param res
 * @param err:version not allowed
 */
ServerErrorHandler.versionNotAllowedHandler = function (req,res,err) {

};

/**
 * @param req
 * @param res
 * @param err:unsupportedMediaType
 */
ServerErrorHandler.unsupportedMediaTypeHandler = function (req,res,err) {

};
/**
 * @param req
 * @param res
 * @param err: request timeout
 */
ServerErrorHandler.timeOutHandler = function(req,res,err){

};

/**
 * @param req
 * @param res
 * @param err:too many requests
 */
ServerErrorHandler.tooManyRequest = function(req,res,err){

};

/**
 * @param req
 * @param res
 * @param err:server internal error
 */
ServerErrorHandler.internalServerHandler = function (req,res,err) {

};

/**
 * @param req
 * @param res
 * @param err:service unavailable
 */
ServerErrorHandler.serviceUnavailableHandler = function(req,res,err){

};


ServerErrorHandler.uncaughtExceptionHandler = function (req,res,err) {

};
module.exports = ServerErrorHandler;
