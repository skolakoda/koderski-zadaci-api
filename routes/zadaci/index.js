const express = require("express");
const router = express.Router();
const Zadatak = require("../../models/Zadatak");

router.post("/dodaj", (req, res) => {
  const { text, resenje, kategorija, tezina } = req.body;

  if (!text || !resenje || !kategorija || !tezina) {
    return res.status(400).send("Niste uneli sva potrebna polja!");
  }

  const zadatak = new Zadatak({ text, resenje, kategorija, tezina });
  zadatak
    .save()
    .then(data => res.send(`Zadatak ${data.text} je ubacen u bazu!`))
    .catch(err => res.status(400).send(err.message));
});

module.exports = router;
