/**
 * Created  on 10/2/2016.
 */
var async = require('async'),
    regiUserModel  = require('./user');

module.exports = function (DBConnection,mongoose) {
    async.parallel({
        user:function(cb){
            regiUserModel(DBConnection.mongoConnection,mongoose);
            cb(null);
        }
    },function(err){
        if(!err){
            console.log("---- mongodb models have been registered. ----");
        }
    })
};
