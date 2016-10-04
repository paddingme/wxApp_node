var path            = require('path'),
    restify         = require('restify'),
    fs              = require('fs'),
    async           = require('async'),
    mongoose        = require('mongoose'),
    registerPlugins = require('./plugins'),
    initRoute       = require('./routes'),
    registerModels  = require('./models');


//set node env
process.env.currentEnv = 'dev';
//process.env.currentEnv = 'proc';

//create server
var server = restify.createServer({
    certificate: fs.readFileSync('path/to/server/certificate'),
    key: fs.readFileSync('path/to/server/key'),
    name: 'WXApp',
    log:'',//ToDo:bunyan instance,
    formatters:''
});


async.series({
    
    //register models
    models:function(cb){
        registerModels(mongoose);
        cb(null);
    },
    //register server plugins
    plugins:function(cb){
        registerPlugins(server);
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
var port = normalizePort(process.env.PORT || '8080');
server.listen(port);

