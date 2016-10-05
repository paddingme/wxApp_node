/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    redis     = require('redis'),
    config    = require('./config');

var currentConfig = process.env.currentEnv=='dev'?config.dev:config.proc;

function getMongoConnection(){
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    mongoCon.once('open',function(){
        console.log("Success：connected to DB 'wxApp_xuXuanHui' server for the first time");
    });


    if(mongoCon){
        return mongoCon;
    }else if(currentConfig.log=="file"){
        //ToDo:记录链接失败日志
        console.log("connection failed");
    }
}

function getMongoLogConnection(){
    var opts = currentConfig.mongo.wxApp_xuXuanHui_log.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui_log.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui_log.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui_log.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    if(mongoCon){
        return mongoCon;
    }else if(currentConfig.log=="file"){
        //ToDo:记录链接失败日志
        console.log("connection failed");
    }
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui_log' server");
    });
    mongoCon.once('open',function(){
        console.log("Success：connected to DB 'wxApp_xuXuanHui_log' server for the first time");
    });
}
function getRedisClient(){

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
    return client;

}
module.exports = {
    mongoConnection:getMongoConnection(),
    mongoLogConnection:getMongoLogConnection(),
    redisClient:getRedisClient(),
    currentEnv :currentConfig
};