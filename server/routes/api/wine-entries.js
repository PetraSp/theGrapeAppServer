/*jshint esversion: 6*/

const express       = require('express');
const router        = express.Router();
const Wine         = require('../../models/wine');


router.get('/wine-entries', (req, res, next) => {
  Wine.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    return res.json(entries);
  });
});

router.get('/wine-entries/:id', (req, res, next) => {
  Wine.findById(req.params.id, (err, entry) => {
    if (err) { return res.json(err).status(500); }
    if (!entry) {return res.json(err).status(404);}

    return res.json(entry);
  });
});


router.post('/wine-search', (req, res, next) => {
  console.log("req.body", req.body);
  let userSearchQuery = req.body.wineName;
  // console.log("userSearchQuery", req.body.userSearchQuery);
  // console.log('SEAEAARRRCH ME BEAUTIES!!!! SEARCH!!!!');
  // db.jobs.find({$text: {"$search": " \" Madrid \" \" Uber \" "}}).pretty()
  // db.jobs.find({$text: {"$search": "\"Madrid\"\"Uber\""}}).pretty()
  Wine.find({$text: {$search: userSearchQuery}}, (err, result) => {
    console.log('inside mongo find wine')
    if (err) { return res.json(err).status(500) }
    console.log("result", result);
    res.json(result); //Save data
  });
});

module.exports = router;