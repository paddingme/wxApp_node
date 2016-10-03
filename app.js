var path            = require('path'),
    restify         = require('restify'),
    fs              = require('fs'),
    mongoose        = require('mongoose'),
    registerPlugins = require('./plugins');


//create server
var server = restify.createServer({
    certificate: fs.readFileSync('path/to/server/certificate'),
    key: fs.readFileSync('path/to/server/key'),
    name: 'WXApp'
});

//register server plugins
registerPlugins(server);

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
server.listen(8080);

module.exports = app;
