/**
 * Created  on 10/5/2016.
 */


module.exports = function(mongoose){
    var schema = mongoose.Schema;
    var log = new schema({
        name: {type:String,required:true,trim:true},
        hostname: {type:String,required:true,trim:true},
        pid: {type:String,required:true,trim:true},
        level: {type:Number,required:true,trim:true},
        msg: {type:String,required:true,trim:true},
        time: {type:Date,required:true,default:new Date()}
    });
    mongoose.model('log',log);
};
