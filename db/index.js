/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    async     = require('async'),
    models    = require('../models'),
    config    = require('./config');

var currentConfig = config.test;
// var currentConfig = config.dev;
// var currentConfig = config.proc;

function registerWxAppXuxuanhuiModels(){
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });

    mongoCon.once('open',function (err) {
        if(err&&currentConfig.log=="file"){
            //ToDo:记录链接失败日志
            console.log("connection failed");
        }else{

        }
    });
}

function registerWxAppXuxuanhuiLogModels(){
    var opts = currentConfig.mongo.wxApp_xuXuanHui_log.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui_log.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui_log.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui_log.db;
    var mongoLogConn =  mongoose.createConnection(host, db, port, opts);
    mongoLogConn.once('open',function (err) {
        if(err&&currentConfig.log=="file"){
            //ToDo:记录链接失败日志
            console.log("connection failed");
        }else{
            //Todo:注册models
        }
    });

    mongoLogConn.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui_log' server");
    });

}


function getMongoConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    return mongoCon;
}
function getMongoLogConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoLogCon =  mongoose.createConnection(host, db, port, opts);
    mongoLogCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    return mongoLogCon;
}




module.exports = {
    regiXuxuanhuiModels:registerWxAppXuxuanhuiModels,
    regiXuxuanhuiLogModels:registerWxAppXuxuanhuiLogModels,
    getMongoConnection:getMongoConnection,
    getMongoLogConnection:getMongoLogConnection,
    currentConfig :currentConfig
};