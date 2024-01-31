var mongoose = require('mongoose')
var user = new mongoose.Schema({
    
    name: String,
    firstname: String,
    password: String
},  {
    collection: "auth"
});

UserModel = mongoose.model('User', user);
module.exports.UserModel = UserModel;