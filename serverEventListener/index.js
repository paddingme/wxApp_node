/**
 * Created  on 10/4/2016.
 */
var serverEventHandler = require('../errorHandlers').handleServerError;

module .exports = function(server){
    //handle not found event
    server.on('NotFound',serverEventHandler.notFoundHandler);
    // handle NotAcceptable
    server.on('NotAcceptable',serverEventHandler.notAcceptableHandler);
    //handle InvalidHeader
    server.on('InvalidHeader',serverEventHandler.invalidHeaderHandler);
    //handle RequestExpired
    server.on('RequestExpired',serverEventHandler.requestExpiredHandler);
    //handle MethodNotAllowed event
    server.on('MethodNotAllowed',serverEventHandler.methodNotAllowedHandler);
    //handle VersionNotAllowed event
    server.on('VersionNotAllowed',serverEventHandler.versionNotAllowedHandler);
    //handle UnsupportedMediaType event
    server.on('UnsupportedMediaType',serverEventHandler.unsupportedMediaTypeHandler);
    // handle RequestTimeout
    server.on('RequestTimeout',serverEventHandler.timeOutHandler);
    //handle TooManyRequests
    server.on('TooManyRequests',serverEventHandler.tooManyRequest);
    //handle InternalServer
    server.on('InternalServer',serverEventHandler.internalServerHandler);
    //handle ServiceUnavailable
    server.on('ServiceUnavailable',serverEventHandler.serviceUnavailableHandler);
    //handle after event
    server.on('after', function (req,res,route,err) {

    });
    //handle uncaughtException event
    server.on('uncaughtException',serverEventHandler.uncaughtExceptionHandler);
    console.log("3.--->server events are listening.")
};