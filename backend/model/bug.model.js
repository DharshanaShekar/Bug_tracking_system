const mongoose = require('mongoose');
const db = require('../config/db')

const { Schema } = mongoose;

const BugSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    details:{
        type:String,
    },
    steps:{
        type:String
    },
    priority:{
        type:String,
    },
    assigned:{
        type:String
    },
    version:{
        type:String
    },
});

const BugModel = db.model('BugSchema',BugSchema);

module.exports = BugModel;

