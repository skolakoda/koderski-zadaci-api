const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')

const { tokenKey } = require('../utils/config')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  ime: {
    type: String,
    trim: true
  },
  username: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  },
  bodovi: {
      type: Number,
      min: 0,
      max: 1000
  },
  slika: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
}, {timestamps: true}) 

UserSchema.methods.napraviToken = function() {
  return jwt.sign({ _id: this._id, role: this.role }, tokenKey, { expiresIn: '30d' })
}

UserSchema.plugin(uniqueValidator)

module.exports = UserSchema