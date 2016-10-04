/**
 * Created  on 10/4/2016.
 */
var serverEventHandler = require('../errorHandlers').handleServerError;

module .exports = function(server){
    //handle not found event
    server.on('NotFound',function(){

    });

    //handle MethodNotAllowed event
    server.on('MethodNotAllowed',function(){

    });

    //handle VersionNotAllowed event
    server.on('VersionNotAllowed', function () {

    });

    //handle UnsupportedMediaType event

    server.on('UnsupportedMediaType', function () {

    });

    //handle after event
    server.on('after', function () {

    });

    //handle uncaughtException event

    server.on('uncaughtException',function(){

    });
};