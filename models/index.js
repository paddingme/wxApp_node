/**
 * Created  on 10/2/2016.
 */
var async = require('async'),
    regiUserModel  = require('./user');


module.exports = function (mongoose) {
    async.parallel({
        user:function(cb){
            regiUserModel(mongoose);
            cb(null);
        }
    },function(err){
        if(!err){
            console.log("models have been registered.");
        }
    })
};
