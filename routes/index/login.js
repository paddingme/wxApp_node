/**
 * Created  on 10/2/2016.
 */
var async    = require('async'),
    services = require('../../services');

function login(req,res,next){
    //login
    next.ifError(err);
    res.send();
    next();
}
module.exports = login;