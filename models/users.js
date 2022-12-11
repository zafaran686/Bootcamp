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
            typ:String, 
            enum:['admin','client']
        },
    item:
        {
         type: mongoose.Types.ObjectId,
         refPath:'usertype.kind'
        }
    }
}, 
{collection: 'users'});

module.exports= mongoose.model('users', usersSchema);