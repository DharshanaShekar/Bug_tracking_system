const mongoose = require('mongoose');
const db = require('../config/db')

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
});

const UserModel = db.model('user',userSchema);

module.exports = UserModel;

