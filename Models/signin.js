const mongoose = require('mongoose');
const User = require('./UserSche');
const bcrypt = require('bcrypt');

async function signin(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return user;
}

const signin = mongoose.model('signin', SigninSchema);
module.exports = signup;