const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    firstName: { 
        type:String,
        required:true,
        unique: true
    },
    lastName: {
        type:String,
        required:true
    },
}, 
{collection: 'admin'});

module.exports= mongoose.model('admin', adminSchema);