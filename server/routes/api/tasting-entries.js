/*jshint esversion: 6*/
const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/tasting');
const Notes         = require('../../models/notes');

router.post('/userNotes', (req, res, next) => {
  console.log('This is notes in the API!')
  const newNotes = new Notes ({
     appearance: {
      colorSchema: req.body.appearance.colorSchema
    },
    nose: {
      floral: req.body.nose.floral,
      redFruit: req.body.nose.redFruit,
      blackFruit: req.body.nose.blackFruit,
      driedFruit: req.body.nose.dryFruit,
      herbs: req.body.nose.herbsSpices,
      quirky: req.body.nose.quirky
    },
    palate: {
      redFruit: req.body.palate.redFruit,
      blackFruit: req.body.palate.blackFruit,
      driedFruit: req.body.palate.dryFruit,
      herbs: req.body.palate.herbsSpices,
      quirky: req.body.palate.quirky
    }
  });

  newNotes.save((err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: "New user notes created!",
      id: newNotes._id
    });
  });
})


router.get('/tasting-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    return res.json(entries);
  });
});

router.get('/tasting-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) { return res.json(err).status(500); }
    if (!entry) {return res.json(err).status(404);}

    return res.json(entry);
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
