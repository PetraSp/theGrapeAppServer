/*jshint esversion: 6*/

const mongoose = require('mongoose');
const portDB = require('../config').portDB;
// const databaseName = require('../config').dbName;
mongoose.connect(`mongodb://localhost:${portDB}/grapeApp`);
const User = require('../models/user');

const users = [

{
  username: "Petra Spirulina",
  password: "1234",
  email: "petra@spirulina.com",
  city: "Prague",
  avatar: "http://www.well-beingsecrets.com/wp-content/uploads/spirulina-is-Antidote-to-Poisoning.jpg"
}
];

User.create(users, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach((user) => {
    console.log(user);
  });
  mongoose.connection.close();
});
