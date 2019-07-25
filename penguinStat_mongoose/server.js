const express = require("express");
const logger = require("morgan");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
cors({ credentials: true, origin: true });
app.use(cors());

const mongoose = require("mongoose");
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
const PenguinStats = models.PenguinStats;
const OpponentStats = models.OpponentStats;
const wPenguinStats = models.wPenguinStats;
const wOpponentStats = models.wOpponentStats;

// GET all men's players
app.get("/players", (req, res, next) => {
  let result = Player.find({}, function(error, players) {
    if (error) return next(error);
    else {
      let playersMap = {};
      // add each player to map object
      players.forEach(function(pl) {
        playersMap[pl._id] = pl;
      });
      console.log("Sending all men's players");
      res.send(playersMap);
    }
  });
});

// GET all women's players
app.get("/wplayers", (req, res, next) => {
  let result = WPlayer.find({}, function(error, players) {
    if (error) return next(error);
    else {
      let playersMap = {};
      // add each player to map object
      players.forEach(function(pl) {
        playersMap[pl._id] = pl;
      });
      console.log("Sending all women's players");
      res.send(playersMap);
    }
  });
});

// GET specific MALE player
app.get("/players/:short_name", (req, res, next) => {
  let query = { short_name: req.params.short_name };
  Player.findOne(query, (error, result) => {
    if (error) return next(error);
    if (result == null) {
      // invalid short_name
      res.status(406).send("Player not found");
    } else {
      res.send(result);
    }
  });
});

// GET specific FEMALE player
app.get("/wplayers/:short_name", (req, res, next) => {
  let query = { short_name: req.params.short_name };
  WPlayer.findOne(query, (error, result) => {
    if (error) return next(error);
    if (result == null) {
      // invalid short_name
      res.status(406).send("Player not found");
    } else {
      console.log(`Sent data on ${result.name} `);
      res.send(result);
    }
  });
});

///////////////////////       MEN'S TEAM STATS        ////////////////////////

// GET all PENGUIN GAME STATS - men
app.get("/penguinStats", (req, res, next) => {
  let result = PenguinStats.find({}, function(error, games) {
    if (error) return next(error);
    else {
      console.log("Sending all penguin stats");
      res.send(games);
    }
  });
});

// GET specific PENGUIN game stats - men
app.get("/penguinstats/:round", (req, res, next) => {
  // check for valid round value
  if (req.params.round < 1 || req.params.round > 21) {
    res.status(406).send("Requested round is outside acceptable range (1-21)");
  } else {
    let query = { round: req.params.round };
    PenguinStats.findOne(query, (error, result) => {
      if (error) return next(error);
      console.log(`Sent Penguin data from round ${result.round} `);
      res.send(result);
    });
  }
});

// GET all Opponent GAME STATS - men
app.get("/opponentStats", (req, res, next) => {
  let result = OpponentStats.find({}, function(error, games) {
    if (error) return next(error);
    else {
      console.log("Sending all opponent stats");
      res.send(games);
    }
  });
});

// GET specific OPPONENT game stats - men
app.get("/opponentstats/:round", (req, res, next) => {
  // check for valid round value
  if (req.params.round < 1 || req.params.round > 21) {
    res.status(406).send("Requested round is outside acceptable range (1-21)");
  } else {
    let query = { round: req.params.round };
    OpponentStats.findOne(query, (error, result) => {
      if (error) return next(error);
      console.log(`Sent opponent data from round ${result.round} `);
      res.send(result);
    });
  }
});

////////////////// WOMEN'S TEAM STATS ///////////////

// GET all PENGUIN GAME STATS - women
app.get("/penguinStatsWomen", (req, res, next) => {
  let result = wPenguinStats.find({}, function(error, games) {
    if (error) return next(error);
    else {
      console.log("Sending all penguin stats");
      res.send(games);
    }
  });
});

// GET specific PENGUIN game stats - women
app.get("/penguinStatsWomen/:round", (req, res, next) => {
  // check for valid round value
  if (req.params.round < 1 || req.params.round > 21) {
    res.status(406).send("Requested round is outside acceptable range (1-21)");
  } else {
    let query = { round: req.params.round };
    wPenguinStats.findOne(query, (error, result) => {
      if (error) return next(error);
      console.log(`Sent Penguin data from round ${result.round} `);
      res.send(result);
    });
  }
});

// GET all Opponent GAME STATS - women
app.get("/opponentStatsWomen", (req, res, next) => {
  let result = wOpponentStats.find({}, function(error, games) {
    if (error) return next(error);
    else {
      console.log("Sending all opponent stats");
      res.send(games);
    }
  });
});

// GET specific OPPONENT game stats - women
app.get("/opponentstatsWomen/:round", (req, res, next) => {
  // check for valid round value
  if (req.params.round < 1 || req.params.round > 21) {
    res.status(406).send("Requested round is outside acceptable range (1-21)");
  } else {
    let query = { round: req.params.round };
    wOpponentStats.findOne(query, (error, result) => {
      if (error) return next(error);
      console.log(`Sent opponent data from round ${result.round} `);
      res.send(result);
    });
  }
});

app.use(errorhandler());

app.listen(3000);
