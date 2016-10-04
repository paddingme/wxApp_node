/**
 * Created  on 10/4/2016.
 */
var  fs = require('fs'),
    async  = require('async'),
    gridfs = require('gridfs-stream'),
    multer = require('multer');

function FileOperator(){}

module.exports = FileOperator;