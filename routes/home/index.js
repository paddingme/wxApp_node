/**
 * Created  on 10/2/2016.
 */
var async    = require('async'),
    services = require('../../services'),
    login    = require('./login'),
    signIn   = require('./signIn'),
    signOut  = require('./signOut');
var db = require('../../db');
var userModel = db.wxApp_xuXuanHuiConnection.model('user');

function createUser(){
    userModel.create({
        openId: "fewrgrefgresf",
        nickName: "test",
        gender: "男",
        city: "zhenjiang",
        province: "江苏",
        country: "china",
        avatarUrl: "xsdsdsdsdsa",
        unionId: "cfgegfefe",
        flag: 1
    },function (err) {
        if(!err){
            console.log("创建数据成功");
        }
    });
}


module.exports = function(server){
    server.post('/login',login);
    server.get('/',function(req,res,next){


        createUser();
        res.send('hello restify...');
        next();
    })
};