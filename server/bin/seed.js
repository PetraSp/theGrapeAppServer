/*jshint esversion: 6*/

const mongoose = require('mongoose');
const portDB = require('../config').portDB;
// const databaseName = require('../config').dbName;
mongoose.connect(`mongodb://localhost:${portDB}/grapeApp`);
const User = require('../models/user');
const Wine = require('../models/wine');
const Tasting = require('../models/tasting');
const Notes = require('..//models/notes');


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
    name: 'Presidents Blend',
    vineyard: 'Escorihuela Gascon',
    vintage: 2008,
    label: 'https://lanocheenvino.files.wordpress.com/2016/03/1884.jpg',
    expertNotes:  "598aea8e46add466d51e2ce8",
  },
{
  name: 'Garnatxa Negra',
  vineyard: 'Edetaria',
  vintage: 2011,
  label: 'https://wine-searcher1.freetls.fastly.net/images/labels/08/33/bodegas-edetaria-via-terra-garnatxa-blanca-terra-alta-spain-10680833t.jpg',
  expertNotes:  "598aea8e46add466d51e2ce7",
      },

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

//
// ###################### ###################### ###################### ######################
//         TASTINGS                 TASTINGS                 TASTINGS                   USERS
// ###################### ###################### ###################### ######################

const tastings = [

  {
    userID: "rachel",
    score: "100",
    wine: "Cabernet", //[{ type: Schema.Types.ObjectID, ref: 'Wine'}],
    userNotes: "my Notes",
  },
  {
    userID: "Petra",
    score: "200",
    wine: "Rose", //[{ type: Schema.Types.ObjectID, ref: 'Wine'}],
    userNotes: "your notes",
  },
];

Tasting.create(tastings, (err, docs) => {
  if(err){
    throw err;
  }
  docs.forEach((tasting) => {
    console.log(tasting);
  });
});

// ###################### ###################### ###################### ######################
//         NOTES                 NOTES                 NOTES                   USERS
// ###################### ###################### ###################### ######################


const notes =
[
{
    appearance: {
      intensity: 'medium',
      color: 'ruby',
    },
    nose: {
      floral: ['perfumed, floral notes', 'violet'],
      redFruit: ['strawberry'],
      blackFruit: ['none'],
      dryFruit: ['none'],
      herbsSpices: ['cinnamon', 'vanilla', 'clove'],
      quirky: ['meat/leather', 'mushroom'],
    },
    palate: {
      redFruit: ['strawberry'],
      blackFruit: ['none'],
      dryFruit: ['none'],
      herbsSpices: ['cinnamon', 'vanilla', 'clove'],
      quirky: ['meat/leather', 'mushroom']
    },
  },
  {
      appearance: {
        intensity: 'deep',
        color: 'ruby',
      },
      nose: {
        floral: ['none'],
        redFruit: ['none'],
        blackFruit: ['black cherry', 'blackberry', 'black plum'],
        dryFruit: ['none'],
        herbsSpices: ['none'],
        quirky: ['meat/leather', 'coffee', 'forest floor'],
      },
      palate: {
        redFruit: ['none'],
        blackFruit: ['none'],
        dryFruit: ['none'],
        herbsSpices: ['black pepper'],
        quirky: ['none']
      },
    },
  ];

Notes.create(notes, (err, docs) => {
    if(err){
      throw err;
    }
    docs.forEach((notes) => {
      console.log(notes);
    });
    mongoose.connection.close();
  });
