/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    redis     = require('redis'),
    async     = require('async'),
    models    = require('../models'),
    config    = require('./config');

var currentConfig = config.test;
// var currentConfig = config.dev;
// var currentConfig = config.proc;

function getMongoConnection(){
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

function getMongoLogConnection(){
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

function getRedisClient(callback){

    var client = redis.createClient(currentConfig.redis.port,currentConfig.redis.host);

    client.auth(currentConfig.redis.password,function(err){
        if(err){
            console.log("Error:redis server auth failed");
        }
    });
    client.on('error',function(){
        console.log("Error:failed to connect redis server");
        if(currentConfig.log=='file'){
            //ToDo:记录日志
        }else{
            if(getMongoConnection()){
                //ToDo:保存redis链接错误日志到数据库
            }
        }
    });
    client.select(currentConfig.redis.db,function (err) {
        if(err){
            //ToDo:记录日志
        }
    });
    callback(client);

}


module.exports = {
    getMongoConnection:getMongoConnection,
    getMongoLogConnection:getMongoLogConnection,
    getRedisClient:getRedisClient,
    logType :currentConfig.log
};