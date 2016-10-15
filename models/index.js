/**
 * Created  on 10/2/2016.
 */
var mongoose  = require('mongoose'),
    async     = require('async'),
    logSchema = require('./log').schema,
    userSchema = require('./user').schema,
    currentConfig = require('../db').currentConfig;

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
            async.each(modelsMap.wxApp_xuXuanHui,function(item,cb){
                mongoCon.model(item.modelName,item.schema);
                cb(null);
            },function(err){
                if(!err){
                    console.log('mongo models has registered completed...');
                }
            })
        }
    });
    //
    var logOpts = currentConfig.mongo.wxApp_xuXuanHui_log.opts;
    var logHost = currentConfig.mongo.wxApp_xuXuanHui_log.host;
    var logPort = currentConfig.mongo.wxApp_xuXuanHui_log.port;
    var logDb   = currentConfig.mongo.wxApp_xuXuanHui_log.db;
    var mongoLogConn =  mongoose.createConnection(logHost, logDb, logPort, logOpts);
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

exports.regiModels = registerModels;



