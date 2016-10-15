/**
 * Created by bas on 2016/10/11.
 */

var userModel = require('../models/user').model;
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
