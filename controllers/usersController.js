const mUser = require('../app/models/userModel');

module.exports.getAll = function(req,res){
    return mUser.getAll(req,res);
}