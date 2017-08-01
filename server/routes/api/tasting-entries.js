/*jshint esversion: 6*/
const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/tasting');


router.get('/tasting-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    return res.json(entries);
  });
});

router.post('/tasting-entries', (req,res,next) => {
  const newTasting = new Tasting ({
    userID: req.body.userID,
    score: req.body.score,
    wine: req.body.wineID,
    userNotes: req.body.userNotesID
  });

  newTasting.save((err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: "New tasting created!",
      id: newTasting._id
    });
  });
});

module.exports = router;