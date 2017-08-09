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


// const users = [
//
//   {
//    username: "Petra Spirulina",
//    password: "1234",
//    email: "petra@spirulina.com",
//    city: "Prague",
//    avatar: "http://www.well-beingsecrets.com/wp-content/uploads/spirulina-is-Antidote-to-Poisoning.jpg"
//   },
//   {
//     username: "Alex Banana Bickermaster",
//     password: "thisisapassword",
//     email: "alex@buchan.com",
//     city: "NotOfThisEarth",
//     avatar: "https://cymatics.fm/wp-content/uploads/2016/11/MixingBlog_SkeletonMeme-1024x591.png"
//   },
// ];
//
// User.create(users, (err, docs) => {
//   if(err){
//     throw err;
//   }
//   docs.forEach((user) => {
//     console.log(user);
//   });
// });

// ###################### ###################### ###################### ######################
//         WINES                  WINES                 WINES                   WINES
// ###################### ###################### ###################### ######################

const wines = [
  {
    name: 'Presidents Blend',
    vineyard: 'Escorihuela Gascon',
    vintage: 2008,
    label: 'https://lanocheenvino.files.wordpress.com/2016/03/1884.jpg',
    expertNotes:  "598ad511c9a4a4633feea62d",
  },
{
  name: 'Another wine',
  vineyard: 'The Venus Floating Vineyards',
  vintage: 2556,
  label: 'Antigrav Label',
  expertNotes:  "598ad511c9a4a4633feea62d",
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


// ###################### ###################### ###################### ######################
//         TASTINGS                 TASTINGS                 TASTINGS                   USERS
// ###################### ###################### ###################### ######################

// const tastings = [
//
//   {
//     userID: "rachel",
//     score: "100",
//     wine: "Cabernet", //[{ type: Schema.Types.ObjectID, ref: 'Wine'}],
//     userNotes: "my Notes",
//   },
//   {
//     userID: "Petra",
//     score: "200",
//     wine: "Rose", //[{ type: Schema.Types.ObjectID, ref: 'Wine'}],
//     userNotes: "your notes",
//   },
// ];
//
// Tasting.create(tastings, (err, docs) => {
//   if(err){
//     throw err;
//   }
//   docs.forEach((tasting) => {
//     console.log(tasting);
//   });
// });
//
// // ###################### ###################### ###################### ######################
// //         NOTES                 NOTES                 NOTES                   USERS
// // ###################### ###################### ###################### ######################
//
//
// const notes =
// [
// {
//     appearance: {
//       intensity: 'deep',
//       color: 'ruby',
//     },
//     nose: {
//       floral: ['none'],
//       redFruit: ['none'],
//       blackFruit: ['black cherry', 'blackberry', 'black plum'],
//       dryFruit: ['none'],
//       herbsSpices: ['none'],
//       quirky: ['meat/leather', 'coffee', 'forest floor'],
//     },
//     palate: {
//       redFruit: ['none'],
//       blackFruit: ['none'],
//       dryFruit: ['none'],
//       herbsSpices: ['black pepper'],
//       quirky: ['none']
//     },
//   },
//   {
//       appearance: {
//         intensity: 'deep',
//         color: 'ruby',
//       },
//       nose: {
//         floral: ['none'],
//         redFruit: ['none'],
//         blackFruit: ['black cherry', 'blackberry', 'black plum'],
//         dryFruit: ['none'],
//         herbsSpices: ['none'],
//         quirky: ['meat/leather', 'coffee', 'forest floor'],
//       },
//       palate: {
//         redFruit: ['none'],
//         blackFruit: ['none'],
//         dryFruit: ['none'],
//         herbsSpices: ['black pepper'],
//         quirky: ['none']
//       },
//     },
//   ];
//
// Notes.create(notes, (err, docs) => {
//     if(err){
//       throw err;
//     }
//     docs.forEach((notes) => {
//       console.log(notes);
//     });
//     mongoose.connection.close();
//   });
