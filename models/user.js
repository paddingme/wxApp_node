/**
 * Created  on 10/3/2016.
 */

module.exports = function (DBConnection,mongoose){
    var userSchema = mongoose.Schema({
        openId: {type:String,required:true,trim:true},
        nickName: {type:String,required:true,trim:true},
        gender: {type:String,required:true,trim:true},
        city: {type:String,required:true,trim:true},
        province: {type:String,required:true,trim:true},
        country: {type:String,required:true,trim:true},
        avatarUrl: {type:String,required:true,trim:true},
        unionId: {type:String,required:true,trim:true},
        flag:{type:Number,required:true,trim:true},
        createdOn:{type:Date,default:new Date()
        }
    });
    DBConnection.model('user',userSchema);
};
