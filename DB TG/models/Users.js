const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
       type :  String,
    },
    email: {
        type: String, require: true, index:true, unique:true,sparse:true
    },
    esay: Number,
    medium: Number,
    hard: Number,
    time: Number,
})

const users = mongoose.model('Users', UserSchema)

module.exports = users;