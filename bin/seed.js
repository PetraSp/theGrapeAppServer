/*jshint esversion: 6*/

const mongoose = require('mongoose');
const portDB = require('../config').portDB;
// const databaseName = require('../config').dbName;
mongoose.connect(`mongodb://localhost:${portDB}/grapeApp`);
const User = require('../models/user');
const Wine = require('../models/wine');
const Tasting = require('../models/tasting');

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
    label: 'https://wine-searcher1.freetls.fastly.net/images/labels/78/04/bodegas-escorihuela-gascon-1884-reserve-cabernet-sauvignon-mendoza-argentina-10297804.jpg',
    expertNotes:  {
      appearance: {
        colorSchema: ['deep - ruby'],
      },
      nose: {
        floral: ['none'],
        redFruit: ['none'],
        blackFruit: ['black cherry', 'blackberry', 'black plum'],
        driedFruit: ['none'],
        herbs: ['none'],
        quirky: ['meat/leather', 'coffee', 'forest floor'],
      },
      palate: {
        floral: ['none'],
        redFruit: ['none'],
        blackFruit: ['none'],
        driedFruit: ['none'],
        herbs: ['black pepper'],
        quirky: ['none']
      },
    },
  },
  {
    name: 'Garnatxa Negra',
    vineyard: 'Edetaria',
    vintage: 2011,
    label: 'http://cdn.ct-static.com/labels/334260.jpg',
    expertNotes:  {
      appearance: {
        colorSchema: ['medium - garnet']
      },
      nose: {
        floral: ['perfumed, floral notes', 'violet'],
        redFruit: ['strawberry'],
        blackFruit: ['none'],
        driedFruit: ['none'],
        herbs: ['cinnamon', 'vanilla', 'clove'],
        quirky: ['meat/leather', 'mushroom'],
      },
      palate: {
        floral: ['thing'],
        redFruit: ['strawberry'],
        blackFruit: ['none'],
        driedFruit: ['none'],
        herbs: ['cinnamon', 'vanilla', 'clove'],
        quirky: ['meat/leather', 'mushroom']
      },
    },
  },
  {
    name: 'Silver Oak',
    vineyard: 'Silver Oak Cellars',
    vintage: 2006,
    label: 'http://www.winemag.com/wp-content/assets/reviews/label-images/wine/wine/131290_21B_2793_070111.jpg',
    expertNotes:  {
      appearance: {
        colorSchema: ['deep - garnet'],
      },
      nose: {
        floral: ['none'],
        redFruit: ['strawberry', 'raspberry'],
        blackFruit: ['none'],
        driedFruit: ['raisins'],
        herbs: ['cinnamon', 'clove'],
        quirky: ['chocolate'],
      },
      palate: {
        floral: ['none'],
        redFruit: ['red cherry'],
        blackFruit: ['black currant', 'blackberry'],
        driedFruit: ['none'],
        herbs: ['black pepper'],
        quirky: ['mushroom']
      },
    },
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
  mongoose.connection.close();
});
