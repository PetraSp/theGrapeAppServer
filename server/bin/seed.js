/*jshint esversion: 6*/

const mongoose = require('mongoose');
const portDB = require('../config').portDB;
// const databaseName = require('../config').dbName;
mongoose.connect(`mongodb://localhost:${portDB}/grapeApp`);
const User = require('../models/user');
const Wine = require('../models/wine');


// ###################### ###################### ###################### ######################
//         USERS                  USERS                 USERS                   USERS
// ###################### ###################### ###################### ######################


const users = [

  {
   username: "Petra Spirulina",
   password: "1234",
   email: "petra@spirulina.com",
   city: "Prague",
   avatar: "http://www.well-beingsecrets.com/wp-content/uploads/spirulina-is-Antidote-to-Poisoning.jpg"
  },
  {
    username: "Alex Banana Bickermaster",
    password: "thisisapassword",
    email: "alex@buchan.com",
    city: "NotOfThisEarth",
    avatar: "https://cymatics.fm/wp-content/uploads/2016/11/MixingBlog_SkeletonMeme-1024x591.png"
  },
];

User.create(users, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach((user) => {
    console.log(user);
  });
}); 

// ###################### ###################### ###################### ######################
//         WINES                  WINES                 WINES                   WINES
// ###################### ###################### ###################### ######################

const wines = [

{
  name: 'A wine',
  vineyard: 'the Moon Vineyards.inc',
  vintage: 1066,
  label: 'A label',
  expertNotes: 'Almost expert notes',
},
{
  name: 'Another wine',
  vineyard: 'The Venus Floating Vineyards',
  vintage: 2556,
  label: 'Antigrav Label',
  expertNotes: 'Makes you taste the acid rain',
}
];

Wine.create(wines, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach((wine) => {
    console.log(wine);
  });
  mongoose.connection.close();
});

