const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const ZadatakSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 1000,
    unique: true,
    required: true
  },
  resenje: {
    type: String,
    maxlength: 1000,
    trim: true,
  },
  kategorija: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  tezina: {
    type: Number,
    min: 0,
    max: 10
  },
})

ZadatakSchema.plugin(uniqueValidator) // mora da bi radilo unique

module.exports = ZadatakSchema