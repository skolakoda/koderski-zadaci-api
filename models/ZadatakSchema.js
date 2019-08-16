const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ZadatakSchema = new mongoose.Schema(
  {
    naslov: {
      type: String,
      required: true
    },
    ime: {
      type: String,
      required: true
    },
    text: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 1000,
      unique: true,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    resenje: {
      type: String,
      maxlength: 1000,
      trim: true
    },
    testovi: [
      {
        input: {
          type: String,
          required: true
        },
        output: {
          type: Number,
          required: true
        },
        method: {
          type: String,
          required: true
        }
      }
    ],
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
    }
  },
  { timestamps: true }
);

ZadatakSchema.plugin(uniqueValidator); // mora da bi radilo unique

module.exports = ZadatakSchema;
