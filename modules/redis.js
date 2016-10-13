/**
 * Created  on 10/4/2016.
 */

var redis     = require('redis'),
    currentConfig = require('../db').currentConfig,
    logger    = require('./logger');


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
            //ToDo:记录错误日志到文件
        }else if(currentConfig.log == 'db'){
            //ToDo:保存redis链接错误日志到数据库
        }
    });
    client.select(currentConfig.redis.db,function (err) {
        if(err){
            //ToDo:记录日志
        }
    });
    callback(client);

}

function RedisOperator(){}


RedisOperator.getString = function (key) {
    getRedisClient(function (client) {
        client.get(key,function(err,res){
            client.quit();
            if(err){
                //ToDo:记录日志
                return null;
            }else{
                return res;
            }
        })
    });

};

RedisOperator.setString = function(key,value){
    getRedisClient(function (client) {
        client.set(key,value,function(err){
            if(err){
                //ToDO: 记录日志
            }
            client.quit();
        })
    });

};

module.exports = RedisOperator;

