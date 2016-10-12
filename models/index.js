/**
 * Created  on 10/2/2016.
 */
var logSchema = require('./log').schema,
    userSchema = require('./user').schema;

var modelsMap = {
    wxApp_xuXuanHui:[
        {
            modelName:'user',
            schema:userSchema
        }
    ],
    wxApp_xuXuanHui_log:[
        {
            modelName:'log',
            schema:logSchema
        }
    ]
};


module.exports = modelsMap;



