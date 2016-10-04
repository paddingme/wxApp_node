/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    redis     = require('redis'),
    config    = require('./config');

var currentConfig = process.env.currentEnv=='dev'?config.dev:config.proc;

var mongoCon = mongoose.connect;

mongoCon.on('error',function(){
    console.log("Error:failed to create connection to mongoDB server");
});
mongoCon.once('connect',function(){
    console.log("Success：connected to mongoDB sever for the first time");
});

function getMongoConnection(){
    var opts = currentConfig.mongo.opts;
    var host = currentConfig.mongo.host;
    var port = currentConfig.mongo.port;
    var db   = currentConfig.mongo.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    if(mongoCon){
        return mongoCon;
    }else if(currentConfig.log=="file"){
        //ToDo:记录链接失败日志
        console.log("connection failed");
    }
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
    redisClient:getRedisClient()
};