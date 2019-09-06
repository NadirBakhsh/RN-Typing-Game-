const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
       type :  String,
    },
    email: {
        type: String,
        require: true,
        text : true,
    },
})

const users = mongoose.model('Users', UserSchema)

module.exports = users;