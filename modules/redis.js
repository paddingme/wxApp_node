/**
 * Created  on 10/4/2016.
 */

var client = require('../db').redisClient;

function RedisOperator(){}

RedisOperator.getString = function (key) {
    client.get(key,function(err,res){
        client.quit();
        if(err){
            //ToDo:记录日志
            return null;
        }else{
            return res;
        }
    })
};

RedisOperator.setString = function(key,value){
    client.set(key,value,function(err){
        if(err){
            //ToDO: 记录日志
        }
    })
};

module.exports = RedisOperator;