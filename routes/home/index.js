/**
 * Created  on 10/2/2016.
 */
var async    = require('async'),
    services = require('../../services'),
    login    = require('./login'),
    signIn   = require('./signIn'),
    signOut  = require('./signOut');
var createUsr = require('../../modules/testMongo');
module.exports = function(server){
    server.post('/login',login);
    server.get('/',function(req,res,next){

        res.send('hello restify...');
        createUsr();
        next();
    })
};