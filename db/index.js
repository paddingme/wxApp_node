/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    async    = require('async'),
    mongoDBSchemas = require('../models');
    config    = require('./config');

//var currentConfig = config.test;
 var currentConfig = config.dev;
// var currentConfig = config.proc;

var mongoConn = mongoose.createConnection(currentConfig.mongo.wxApp_xuXuanHui);
mongoConn.on('error',function(){
    console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
});

var mongoLogConn = mongoose.createConnection(currentConfig.mongo.wxApp_xuXuanHui_log);
mongoLogConn.on('error',function(){
    console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui_log' server");
});


var MongoConnection = function getMongoConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    return mongoCon;
};
var MongoLogConnection = function getMongoLogConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoLogCon =  mongoose.createConnection(host, db, port, opts);
    mongoLogCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    //console.log('get a wxAppLog connection');
    return mongoLogCon;
};

module.exports = {
    getMongoConnection:mongoConn,
    getMongoLogConnection:mongoLogConn,
    currentConfig :currentConfig
};