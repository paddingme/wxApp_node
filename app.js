var path            = require('path'),
    restify         = require('restify'),
    fs              = require('fs'),
    async           = require('async'),
    models  = require('./models'),
    db              = require('./db'),
    registerPlugins = require('./plugins'),
    registerServerEventListener = require('./serverEventListener'),
    logger          = require('./modules').log.logger;

//create server
var server = restify.createServer({
    //certificate: fs.readFileSync('path/to/server/certificate'),
    //key: fs.readFileSync('path/to/server/key'),
    name: 'WXApp_xuXuanHui',
    log:logger
    //formatters:''
});

function registerModels(){

    //var opts = currentConfig.mongo.wxApp_xuXuanHui.opts;
    //var host = currentConfig.mongo.wxApp_xuXuanHui.host;
    //var port = currentConfig.mongo.wxApp_xuXuanHui.port;
    //var db   = currentConfig.mongo.wxApp_xuXuanHui.db;
    //var mongoCon =  mongoose.createConnection(host, db, port, opts);
    //mongoCon.on('error',function(){
    //    console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui' server");
    //});
    //mongoCon.once('open',function (err) {
    //    if(err&&currentConfig.log=="file"){
    //        //ToDo:记录链接失败日志
    //        console.log("connection failed");
    //    }else{
    async.each(models.wxApp_xuXuanHui,function(item,cb){
        db.getMongoConnection.model(item.modelName,item.schema);
        cb(null);
    },function(err){
        if(!err){
            console.log('mongo WxApp models has registered completed...');
        }
    });
    //    }
    //});
    //
    //var logOpts = currentConfig.mongo.wxApp_xuXuanHui_log.opts;
    //var logHost = currentConfig.mongo.wxApp_xuXuanHui_log.host;
    //var logPort = currentConfig.mongo.wxApp_xuXuanHui_log.port;
    //var logDb   = currentConfig.mongo.wxApp_xuXuanHui_log.db;
    //var mongoLogConn =  mongoose.createConnection(logHost, logDb, logPort, logOpts);
    //mongoLogConn.once('open',function (err) {
    //    if(err&&currentConfig.logType=="file"){
    //        //ToDo:记录链接失败日志
    //        console.log("connection failed");
    //    }else{
    //Todo:注册models
    async.each(models.wxApp_xuXuanHui_log,function(item,cb){
        db.getMongoLogConnection.model(item.modelName,item.schema);
        cb(null);
    },function(err){
        if(!err){
            console.log('mongo WxAppLog models has registered completed...');
        }
    });
    //    }
    //});
    //
    //mongoLogConn.on('error',function(){
    //    console.log("Error:failed to create connection to DB 'wxApp_xuXuanHui_log' server");
    //});

}
async.series({

    //register mongodb models
    models:function (cb) {
        registerModels();
        cb(null);
    },
    //register server plugins
    plugins:function(cb){
        registerPlugins(server);
        cb(null);
    },
    //register server event listener
    listener: function (cb) {
        registerServerEventListener(server);
        cb(null);
    },
    //initial server routes
    routes:function(cb){
        require('./routes')(server);
        //initRoute(server);
        cb(null);
    }
    
},function(err){
    if(!err){
        console.log("server init complete...");
    }
});

// catch 404 and forward to error handler
server.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
var port = normalizePort(process.env.PORT || '10122');
server.listen(port);
console.log("Success:server start at port "+port);

