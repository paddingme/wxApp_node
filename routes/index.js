var async = require('async'),
    regiHomePageRoute  = require('./home'),
    regiMinePageRoute   = require('./mine'),
    regiMorepageRoute   = require('./more'),
    regiProdPageRoute  = require('./products');


module.exports = function(server){
    async.parallel([
        function(cb){
            regiHomePageRoute(server);
            cb(null);
        //},
        //function(cb){
        //    regiProd(server);
        //    cb(null);
        //},
        //function (cb) {
        //    regiMine(server);
        //    cb(null);
        //},
        //function(cb){
        //    regiMore(server);
        //    cb(null);
        }],function(err){
        if(!err){
            console.log('4.--->server routes initialize completely.');
        }
    })
};