var path            = require('path'),
    restify         = require('restify'),
    fs              = require('fs'),
    async           = require('async'),
    registerWxAppModels = require('./db').regiXuxuanhuiModels,
    registerWxAppLogModels = require('./db').regiXuxuanhuiLogModels,
    registerPlugins = require('./plugins'),
    initRoute       = require('./routes'),
    registerEventListener = require('./serverEventListener'),
    logger          = require('./modules').log.logger;

//create server
var server = restify.createServer({
    //certificate: fs.readFileSync('path/to/server/certificate'),
    //key: fs.readFileSync('path/to/server/key'),
    name: 'WXApp_xuXuanHui',
    log:logger
    //formatters:''
});


async.series({

    //register mongodb models
    models:function (cb) {
        registerWxAppModels();
        registerWxAppLogModels();
    },
    //register server plugins
    plugins:function(cb){
        registerPlugins(server);
        cb(null);
    },
    //register server event listener
    listener: function (cb) {
        registerEventListener(server);
        cb(null);
    },
    //initial server routes
    routes:function(cb){
        initRoute(server);
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

