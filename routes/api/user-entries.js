/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const passport = require('../../config/passport');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../../config/jwt');
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

router.post('/user-entries/update', (req, res, next) => {

});


router.put('/user-entries/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    tasting: req.body.tasting
  };

  User.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'User updated successfully'
    });
  });
})



router.post('/signup', (req,res,next) => {
  console.log('IM ON THE BACKEND!');
  console.log('req.body on backend', req.body);
  var username = req.body.username;
  var password = req.body.password;
  console.log('things', username, password);
  if (!username || !password) {
      res.status(400).json({ message: "Provide username and password" });
      return;
  }
  User.findOne({ username }, "username", (err, user) => {
      if (user !== null) {
          res.status(400).json({ message: 'user exist' });
          return;
      }
      var salt = bcrypt.genSaltSync(bcryptSalt);
      var hashPass = bcrypt.hashSync(password, salt);

  const newUser = new User ({
    username,
    password: hashPass,
    email: req.body.email,
    city: req.body.city,
    avatar: req.body.avatar
  });

  newUser.save((err, user) => {
            if (err) {
                res.status(400).json({ message: err });
            } else {
                var payload = { id: user._id, user: user.username };
                var token = jwt.sign(payload, jwtOptions.secretOrKey);
                res.status(200).json({ message: "ok", token: token, user: user });
                // res.status(200).json(user);
            }
        });
    });
});


router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    res.status(401).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({'username': username}, (err, user) => {
    if (!user) {
      res.status(401).json({ message: 'The username or password is incorrect' });
      return;
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) {
        res.status(401).json({ message: 'The username or password is incorrect' });
      }
      else {
        const payload = {id: user._id, user: user.username};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);

        res.status(200).json({ token, user });
      }
    });
  });
});

module.exports = router;