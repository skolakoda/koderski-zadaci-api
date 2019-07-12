const { model } = require("mongoose");
const ZadatakSchema = require("./ZadatakSchema");

const Zadatak = model("Zadatak", ZadatakSchema, "Zadaci");

module.exports = Zadatak;
