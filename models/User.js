const { model } = require('mongoose')
const UserSchema = require('./UserSchema')

const User = model('User', UserSchema, 'Users')

module.exports = User