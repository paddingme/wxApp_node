/**
 * Created  on 10/5/2016.
 */
/**
 * Created  on 10/5/2016.
 */

var mongoose = require("mongoose"),
    db = require('../db');

function WebErrorLog(){}
var webErrorSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    hostname: {type: String, required: true, trim: true},
    pid: {type: String, required: true, trim: true},//进程号
    level: {type: Number, required: true, trim: true},//30 info 40 warn 50 error 60 fatal
    msg: {type: String, required: true, trim: true},
    errorDetail:{type: String, required: true, trim: true},
    time: {type: Date, required: true, default: new Date()},
    req:{
        method:{type:String,required:true,trim:true},
        url:{type:String,required:true,trim:true},
        ip:{type:String,required:true,trim:true},
        header:{type:{}},
        body:{type:{}}
    },
    openId:{type:String,required:true,trim:true},
    isVisitor:{type:Number,required:true,trim:true}//是否是游客  1 注册用户 0 游客
});
WebErrorLog.model = db.getMongoLogConnection().model('webErrorLog');
WebErrorLog.schema = webErrorSchema;
module.exports = WebErrorLog;