/*jshint esversion: 6*/

const mongoose = require('mongoose');
const portDB = require('../config').portDB;
// const databaseName = require('../config').dbName;
mongoose.connect(`mongodb://localhost:${portDB}`);
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
