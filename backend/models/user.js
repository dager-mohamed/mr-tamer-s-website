const mongoose = require('mongoose')

const reqstring = {
    type: String,
    required: true
}
const User = new mongoose.Schema({
    Username: reqstring,
    Password: reqstring
})

const model = mongoose.model('UserData', User)

module.exports = model