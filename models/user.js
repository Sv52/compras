var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bycript = require('bcrypt-nodejs');

var userSchema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true }

});

userSchema.methods.encryptPassword = function(password) {
    return bycript.hashSync(password, bycript.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    return bycript.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);