const mongoose = require("mongoose");

// load all the men's players data
let zw = require("./players/zw.json");
let bw = require("./players/bw.json");
let cb = require("./players/cb.json");
let dm = require("./players/dm.json");
let fe = require("./players/fe.json");
let jab = require("./players/jab.json");
let jb = require("./players/jb.json");
let je = require("./players/je.json");
let job = require("./players/job.json");
let js = require("./players/js.json");
let md = require("./players/md.json");
let mk = require("./players/mk.json");
let tk = require("./players/tk.json");
let tw = require("./players/tw.json");

// women's players
let aj = require("./wPlayers/aj.json");
let am = require("./wPlayers/am.json");
let br = require("./wPlayers/br.json");
let cj = require("./wPlayers/cj.json");
let ec = require("./wPlayers/ec.json");
let et = require("./wPlayers/et.json");
let kk = require("./wPlayers/kk.json");
let lm = require("./wPlayers/lm.json");
let mh = require("./wPlayers/mh.json");
let ms = require("./wPlayers/ms.json");
let mt = require("./wPlayers/mt.json");
let ra = require("./wPlayers/ra.json");
let sh = require("./wPlayers/sh.json");
let tm = require("./wPlayers/tm.json");

// create array to hold all the MEN's players
let playersArray = [];
playersArray.push(zw, cb, bw, dm, fe, jab, jb, je, job, js, md, mk, tw, tk);

// creat array for all the Women's players
let wPlayersArray = [];
wPlayersArray.push(aj, am, br, cj, ec, et, kk, lm, mh, ms, mt, ra, sh, tm);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/penguinStats",
  { useNewUrlParser: true, useFindAndModify: false }
);

// import models
const models = require("./models.js");

// set model variables
const Player = models.Player;
const WPlayer = models.WPlayer;

// add each Male player as new document
playersArray.forEach(player => {
  let newPlayer = new Player(player);
  newPlayer.save((error, results) => {
    if (error) return next(error);
    console.log(`Added player ${player.name}`);
  });
});

// add each Female player as new document
wPlayersArray.forEach(player => {
  let newPlayer = new WPlayer(player);
  newPlayer.save((error, results) => {
    if (error) return next(error);
    console.log(`Added player ${player.name}`);
  });
});

// mongoose.disconnect();
