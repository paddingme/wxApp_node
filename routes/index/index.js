/**
 * Created  on 10/2/2016.
 */
var async    = require('async'),
    services = require('../../service'),
    login    = require('./login'),
    signIn   = require('./signIn'),
    signOut  = require('./signOut');


module.exports = function(server){
    server.use('/login',login);
};