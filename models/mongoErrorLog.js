/**
 * Created  on 10/5/2016.
 */
var mongoose = require("mongoose");
var mongoErrorLogSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    hostname: {type: String, required: true, trim: true},
    pid: {type: String, required: true, trim: true},//进程号
    level: {type: Number, required: true, trim: true},//50 error 60 fatal
    time: {type: Date, required: true, default: new Date()},
    ip:{type:String,required:true,trim:true},
    requestDB:{type:String,required:true,trim:true},
    requestModel:{type:String,required:true,trim:true},
    operationType:{type:String,required:true,trim:true},
    queryObject:{type:{}},
    msg: {type: String, required: true, trim: true},
    errorDetail: {type: String, required: true, trim: true}
});
module.exports =mongoErrorLogSchema;
