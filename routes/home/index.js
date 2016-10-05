/**
 * Created  on 10/2/2016.
 */
var async    = require('async'),
    services = require('../../services'),
    login    = require('./login'),
    signIn   = require('./signIn'),
    signOut  = require('./signOut');

module.exports = function(server){
    server.post('/login',login);
    server.get('/',function(req,res,next){
        res.send('hello restiy...');
        next();
    })
};