const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    userName: { 
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    userType: {
        kind:
        {
            type:String, 
            enum:['admin','client']
        },
    item:
        {
         type: mongoose.Types.ObjectId,
         ref:'userType.kind'
        }
    }
}, 
{collection: 'users', versionKey: false });

module.exports= mongoose.model('users', usersSchema);