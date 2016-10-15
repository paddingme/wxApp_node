/**
 * Created  on 10/2/2016.
 */
var mongoose = require('mongoose'),
    config    = require('./config');

//var currentConfig = config.test;
 var currentConfig = config.dev;
// var currentConfig = config.proc;




function getMongoConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoCon =  mongoose.createConnection(host, db, port, opts);
    mongoCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    console.log("get a wxApp connnection ");
    return mongoCon;
}
function getMongoLogConnection() {
    var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    var mongoLogCon =  mongoose.createConnection(host, db, port, opts);
    mongoLogCon.on('error',function(){
        console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    });
    console.log('get a wxAppLog connection');
    return mongoLogCon;
}

module.exports = {
    getMongoConnection:getMongoConnection,
    getMongoLogConnection:getMongoLogConnection,
    currentConfig :currentConfig
};