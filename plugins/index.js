/**
 * Created  on 10/2/2016.
 */
var restify = require('restify');

/**
 * write some custom plugins for server
 */
//function customPlugin(){
//
//}

/**
 *
 * @param server
 */

module.exports = function(server){
    //use plugins
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.authorizationParser());
    server.use(restify.dateParser());
    server.use(restify.queryParser());
    server.use(restify.jsonp());
    server.use(restify.gzipResponse());
    server.use(restify.bodyParser());
    //server.use(restify.requestExpiry());
    server.use(restify.throttle({
        burst: 100,
        rate: 50,
        ip: true,
        overrides: {
            '192.168.1.1': {
                rate: 0,        // unlimited
                burst: 0
            }
        }
    }));
    server.use(restify.conditionalRequest());
    console.log('---- server plugins have been registered  ----');
};
