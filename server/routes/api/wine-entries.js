/*jshint esversion: 6*/

const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/wine');


router.get('/wine-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    return res.json(entries);
  });
});

router.get('/wine-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) { return res.json(err).status(500); }
    if (!entry) {return res.json(err).status(404);}

    return res.json(entry);
  });
});

module.exports = router;