var mongoose = require('mongoose');
var Schema    = mongoose.Schema;
var idvalidator = require('mongoose-id-validator');

var userSchema = new Schema({
    userName: { type: String, required: true,index: {unique: true}, trim: true },
    password:{type: String, required: true, index: {unique: true}},
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    admin: {type: Boolean, default: false}
});

var User = mongoose.model('User', userSchema);
module.exports = User;
