/**
 * Created  on 10/2/2016.
 */
var async = require('async'),
    mongoose = require('mongoose'),
    db = require('../db'),
    regiUserModel = require('./user');

module.exports = function () {
    async.parallel({
        user: function (cb) {
            var connection = db.getMongoConnection();
            regiUserModel(connection, mongoose);
            cb(null);
        }
    }, function (err) {
        if (!err) {
            console.log("---- mongodb models have been registered. ----");
        }
    });
};
