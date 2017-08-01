/*jshint esversion: 6*/

const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/user');
const User          = require('../../models/user');


router.get('/user-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    return res.json(entries);
  });
});

router.get('/user-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) { return res.json(err).status(500); }
    if (!entry) {return res.json(err).status(404);}

    return res.json(entry);
  });
});


router.post('/user-entries', (req,res,next) => {
  const newUser = new User ({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    city: req.body.city,
    avatar: req.body.avatar
  });

  newUser.save((err) => {
    if (err) { return err; }
    if (newUser.errors) { return res.status(400).json(newUser); }
    return res.json(newUser);
  });

});

module.exports = router;