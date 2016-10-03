/**
 * Created  on 10/2/2016.
 */
var async = require('async'),
    user   = require('./user');


module.exports = function (mongoose) {
    async.parallel({
        user:function(cb){
            user(mongoose);
            cb(null);
        }
    },function(err){
        if(!err){
            console.log("models have been registered.");
        }
    })
};
