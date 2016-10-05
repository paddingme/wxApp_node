/**
 * Created  on 10/2/2016.
 */
var async = require('async'),
    logger = require('../modules').log;
var modelsMap = [
    {
        modelName:'user',
        fileUrl:'./user'
    },
    {
        modelName:'log',
        fileUrl:'./log'
    }
];


function getModel(name){
    async.forEach(modelsMap, function (item) {
        if(item.modelName===name){
            return require(item.fileUrl).model;
        }
    }, function (err) {
        if(err){
            console.log("model isn't exist");
            //ToDo:记录日志
        }
    })
}
module.exports = {
    getModel:getModel
};



