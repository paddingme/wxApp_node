var async = require('async'),
    regiIndex  = require('./index'),
    regiMine   = require('./mine'),
    regiMore   = require('./more'),
    regiProd   = require('./products');



module.exports = function(server){
    async.parallel([
        function(cb){
            regiIndex(server);
            cb(null);
        },
        function(cb){
            regiProd(server);
            cb(null);
        },
        function (cb) {
            regiMine(server);
            cb(null);
        },
        function(cb){
            regiMore(server);
            cb(null);
        }],function(err){
        if(!err){
            console.log('------   routes registered completed  -----');
        }
    })
};