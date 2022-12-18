const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    firstName: { 
        type:String,
        required:true,
        unique: true
    },
    lastName: {
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    age: {
        type:Number,
        required:true
    }
}, 
{collection: 'client'});

module.exports= mongoose.model('client', clientSchema);