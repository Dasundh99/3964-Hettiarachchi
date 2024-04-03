const mongoose  = require('mongoose');

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    Username :{
        type: String,
        required: true
    },
    Email :{
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required :true
    }

})

const User = mongoose.model("User",userSchema);
module.exports = User;