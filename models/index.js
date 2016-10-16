/**
 * Created  on 10/2/2016.
 */
var async     = require('async'),
    db        = require('../db'),
    logSchema = require('./log'),
    userSchema = require('./user');

var modelsMap = {
    wxApp_xuXuanHui:[
        {
            modelName:'user',
            schema:userSchema
        }
    ],
    wxApp_xuXuanHui_log:[
        {
            modelName:'log',
            schema:logSchema
        }
    ]
};

function registerModels(){

    async.each(modelsMap.wxApp_xuXuanHui,function(item,cb){
        db.wxApp_xuXuanHuiConnection.model(item.modelName,item.schema);
        cb(null);
    },function(err){
        if(!err){
            console.log('1.');
            console.log('---> DB:wxApp_xuXuanHui schemas have completely pulished as models');
        }
    });

    async.each(modelsMap.wxApp_xuXuanHui_log,function(item,cb){
        db.wxApp_xuXuanHui_logConnection.model(item.modelName,item.schema);
        cb(null);
    },function(err){
        if(!err){
            console.log('---> DB:wxApp_xuXuanHui_log schemas have completely pulished as models');
        }
    });
}

module.exports = registerModels;



