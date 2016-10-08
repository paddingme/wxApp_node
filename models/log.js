/**
 * Created  on 10/5/2016.
 */

var mongoose = require("mongoose"),
    db = require('../db');

function Log(){}
var logSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    hostname: {type: String, required: true, trim: true},
    pid: {type: String, required: true, trim: true},
    level: {type: Number, required: true, trim: true},
    msg: {type: String, required: true, trim: true},
    time: {type: Date, required: true, default: new Date()}
    //req,res,ip,req(body),user_id,isVisitor...
});
Log.model = db.getMongoLogConnection().model('log',logSchema);
module.exports = Log;