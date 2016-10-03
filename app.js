var path            = require('path'),
    restify         = require('restify'),
    fs              = require('fs'),
    async           = require('async'),
    mongoose        = require('mongoose'),
    registerPlugins = require('./plugins'),
    initRoute       = require('./routes'),
    registerModels  = require('./models');


//create server
var server = restify.createServer({
    certificate: fs.readFileSync('path/to/server/certificate'),
    key: fs.readFileSync('path/to/server/key'),
    name: 'WXApp'
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

// error handlers

// development error handler
if (server.get('env') === 'development') {
    server.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
server.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
server.listen(8080);

module.exports = server;
