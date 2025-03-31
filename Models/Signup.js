const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    fname : {
        type: String,
        required: true
    },
    lname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})
const Signup = mongoose.model('Signup', SignupSchema);
module.exports = Signup;