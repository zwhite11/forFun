const mongoose = require("mongoose");
var exports = (module.exports = {});

// men's player model
exports.Player = mongoose.model("Player", {
  name: String,
  short_name: String,
  stats: Array
});

// women's player model
exports.WPlayer = mongoose.model("WPlayer", {
  name: String,
  short_name: String,
  stats: Array
});

// Opponent stats model
exports.OpponentStats = mongoose.model("OpponentStats", {
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

//  penguin stats model
exports.PenguinStats = mongoose.model("PenguinStats", {
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

// Opponent women's stats model
exports.wOpponentStats = mongoose.model("wOpponentStats", {
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

//  penguin women's stats model
exports.wPenguinStats = mongoose.model("wPenguinStats", {
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
