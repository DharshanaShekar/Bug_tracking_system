const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/Bug_tracker').on('open',()=>{  // give the server ip address here
    console.log("mongodb connected");
}).on('error',()=>{
    console.log("ERROR");
});

module.exports = connection;

