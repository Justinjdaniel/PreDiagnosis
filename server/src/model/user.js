const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName: String,
    email: String,
    password: String
});

module.exports= mongoose.model('user', userSchema, 'users');  //'user' model name & 'users' collection name created in DB