let ourStats = require("./wTeamStats/ourStats.json"); // array of our stats
let oppStats = require("./wTeamStats/opponentStats.json"); // array of opponent stats

const mongoose = require("mongoose");

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/penguinStats",
  { useNewUrlParser: true, useFindAndModify: false }
);

// stat schema
const wPenguinStats = mongoose.model("wPenguinStats", {
  round: Number,
  opponent: String,
  location: String,
  result: String,
  pts: Number,
  fgm: Number,
  fga: Number,
  fgp: Number,
  twoptm: Number,
  twopta: Number,
  twoptp: Number,
  threeptm: Number,
  threepta: Number,
  threeptp: Number,
  ftm: Number,
  fta: Number,
  ftp: Number,
  oreb: Number,
  reb: Number,
  ast: Number,
  stl: Number,
  blk: Number,
  to: Number,
  pf: Number,
  pip: Number,
  scp: Number,
  pft: Number,
  fbp: Number,
  bp: Number
});

// const wOpponentStats = mongoose.model("wOpponentStats", {
//   round: Number,
//   opponent: String,
//   location: String,
//   result: String,
//   pts: Number,
//   fgm: Number,
//   fga: Number,
//   fgp: Number,
//   twoptm: Number,
//   twopta: Number,
//   twoptp: Number,
//   threeptm: Number,
//   threepta: Number,
//   threeptp: Number,
//   ftm: Number,
//   fta: Number,
//   ftp: Number,
//   oreb: Number,
//   reb: Number,
//   ast: Number,
//   stl: Number,
//   blk: Number,
//   to: Number,
//   pf: Number,
//   pip: Number,
//   scp: Number,
//   pft: Number,
//   fbp: Number,
//   bp: Number
// });

// // add each game to stats (Opponent)
// oppStats.forEach(game => {
//   let newGame = new wOpponentStats(game);
//   newGame.save((error, results) => {
//     if (error) console.log(error);
//     console.log(`game added from round ${game.round}`);
//   });
// });

// add each game to stats (Penguin)
ourStats.forEach(game => {
  let newGame = new wPenguinStats(game);
  newGame.save((error, results) => {
    if (error) console.log(error);
    console.log(`game added from round ${game.round}`);
  });
});

// mongoose.disconnect();
