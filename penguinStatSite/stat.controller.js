/**
 * controller for handling player stats - overall, home games, away games, wins, and losses
 */
(function() {
  "use strict";

  angular.module("StatApp").controller("StatsController", StatsController);

  StatsController.$inject = ["PlayerDataService", "stats", "name"];
  function StatsController(PlayerDataService, stats, name) {
    var playerStats = this;
    playerStats.stats = stats;
    playerStats.name = name;

    // function for calcluating totals
    let calcTotals = function(emptyTotalsObject, gamesArray) {
      gamesArray.forEach(game => {
        emptyTotalsObject.mins += game.mins;
        emptyTotalsObject.pts += game.pts;
        emptyTotalsObject.fgm += game.fgm;
        emptyTotalsObject.fga += game.fga;
        emptyTotalsObject.twoptm += game.twoptm;
        emptyTotalsObject.twopta += game.twopta;
        emptyTotalsObject.threeptm += game.threeptm;
        emptyTotalsObject.threepta += game.threepta;
        emptyTotalsObject.ftm += game.ftm;
        emptyTotalsObject.fta += game.fta;
        emptyTotalsObject.oreb += game.oreb;
        emptyTotalsObject.dreb += game.dreb;
        emptyTotalsObject.reb += game.oreb + game.dreb;
        emptyTotalsObject.ast += game.ast;
        emptyTotalsObject.to += game.to;
        emptyTotalsObject.stl += game.stl;
        emptyTotalsObject.blk += game.blk;
        emptyTotalsObject.blkr += game.blkr;
        emptyTotalsObject.pf += game.pf;
        emptyTotalsObject.flson += game.flson;
        emptyTotalsObject.plusminus += game.plusMinus;
      });
    };

    // function for calculating player percentages. % = 0 if no attempts in that category.
    let calcPercentages = function(totalsObject) {
      if (totalsObject.fga == 0) {
        totalsObject.fgp = "N/A";
      } else {
        totalsObject.fgp = (
          (totalsObject.fgm / totalsObject.fga) *
          100
        ).toFixed(2);
      }
      if (totalsObject.twopta == 0) {
        totalsObject.twoptp = "N/A";
      } else {
        totalsObject.twoptp = (
          (totalsObject.twoptm / totalsObject.twopta) *
          100
        ).toFixed(2);
      }
      if (totalsObject.threepta == 0) {
        totalsObject.threeptp = "N/A";
      } else {
        totalsObject.threeptp = (
          (totalsObject.threeptm / totalsObject.threepta) *
          100
        ).toFixed(2);
      }
      if (totalsObject.fta == 0) {
        totalsObject.ftp = "N/A";
      } else {
        totalsObject.ftp = (
          (totalsObject.ftm / totalsObject.fta) *
          100
        ).toFixed(2);
      }
    };

    // function for calculating player averages
    let calcAverages = function(averagesObject, totalsObject, numGamesPlayed) {
      if (numGamesPlayed == 0) {
        averagesObject = totalsObject;
      } else {
        averagesObject.mins = (totalsObject.mins / numGamesPlayed).toFixed(2);
        averagesObject.pts = (totalsObject.pts / numGamesPlayed).toFixed(2);
        averagesObject.fgm = (totalsObject.fgm / numGamesPlayed).toFixed(2);
        averagesObject.fga = (totalsObject.fga / numGamesPlayed).toFixed(2);
        averagesObject.twoptm = (totalsObject.twoptm / numGamesPlayed).toFixed(
          2
        );
        averagesObject.twopta = (totalsObject.twopta / numGamesPlayed).toFixed(
          2
        );
        averagesObject.threeptm = (
          totalsObject.threeptm / numGamesPlayed
        ).toFixed(2);
        averagesObject.threepta = (
          totalsObject.threepta / numGamesPlayed
        ).toFixed(2);
        averagesObject.ftm = (totalsObject.ftm / numGamesPlayed).toFixed(2);
        averagesObject.fta = (totalsObject.fta / numGamesPlayed).toFixed(2);
        averagesObject.oreb = (totalsObject.oreb / numGamesPlayed).toFixed(2);
        averagesObject.dreb = (totalsObject.dreb / numGamesPlayed).toFixed(2);
        averagesObject.reb = (
          parseFloat(averagesObject.oreb) + parseFloat(averagesObject.dreb)
        ).toFixed(2);
        averagesObject.ast = (totalsObject.ast / numGamesPlayed).toFixed(2);
        averagesObject.to = (totalsObject.to / numGamesPlayed).toFixed(2);
        averagesObject.stl = (totalsObject.stl / numGamesPlayed).toFixed(2);
        averagesObject.blk = (totalsObject.blk / numGamesPlayed).toFixed(2);
        averagesObject.blkr = (totalsObject.blkr / numGamesPlayed).toFixed(2);
        averagesObject.pf = (totalsObject.pf / numGamesPlayed).toFixed(2);
        averagesObject.flson = (totalsObject.flson / numGamesPlayed).toFixed(2);
        averagesObject.plusminus = (
          totalsObject.plusminus / numGamesPlayed
        ).toFixed(2);
      }
    };

    // create totals object
    var totals = {};

    // initialize total values to 0
    totals.mins = 0;
    totals.pts = totals.fgm = totals.fga = totals.twoptm = totals.twopta = totals.threeptm = totals.threepta = totals.ftm = totals.fta = totals.oreb = totals.dreb = totals.reb = totals.ast = totals.to = totals.stl = totals.blk = totals.blkr = totals.pf = totals.flson = totals.plusminus =
      totals.mins;

    var gamesPlayed;
    //  if the player has no stats, they have played no games.
    if (playerStats.stats == null) {
      gamesPlayed = 0;
    }
    // otherwise, games played = length of stats array
    else {
      gamesPlayed = playerStats.stats.length;
    }

    // separate home and away games
    playerStats.homeGames = [];
    playerStats.awayGames = [];

    playerStats.stats.forEach(game => {
      if (game.location == "H") {
        playerStats.homeGames.push(game);
      } else {
        playerStats.awayGames.push(game);
      }
    });

    // console.log("homeGames", playerStats.homeGames);
    // console.log("awayGames", playerStats.awayGames);

    // separate wins and losses
    playerStats.wins = [];
    playerStats.losses = [];

    playerStats.stats.forEach(game => {
      if (game.result == "W") {
        playerStats.wins.push(game);
      } else {
        playerStats.losses.push(game);
      }
    });

    // console.log("wins", playerStats.wins);
    // console.log("losses", playerStats.losses);

    // calculate totals for all games
    calcTotals(totals, playerStats.stats);

    // adding totals to playerStats object
    playerStats.totals = [];
    playerStats.totals.push(totals);

    // calculate percentages - 0 if no attempts
    calcPercentages(totals);

    //calculate averages
    var averages = {};
    calcAverages(averages, totals, gamesPlayed);

    playerStats.averages = [];
    playerStats.averages.push(averages);
    // console.log("averages", playerStats.averages);

    //////////////////////// HOME STATS ////////////////////////////

    // home stats handled like the overall stats

    //initialize home stats to 0
    var homeTotals = {};

    homeTotals.mins = 0;
    homeTotals.pts = homeTotals.fgm = homeTotals.fga = homeTotals.twoptm = homeTotals.twopta = homeTotals.threeptm = homeTotals.threepta = homeTotals.ftm = homeTotals.fta = homeTotals.oreb = homeTotals.dreb = homeTotals.reb = homeTotals.ast = homeTotals.to = homeTotals.stl = homeTotals.blk = homeTotals.blkr = homeTotals.pf = homeTotals.flson = homeTotals.plusminus =
      homeTotals.mins;

    var gamesPlayed;
    if (playerStats.stats == null) {
      gamesPlayed = 0;
    } else {
      gamesPlayed = playerStats.stats.length;
    }

    // calculate totals from home games
    calcTotals(homeTotals, playerStats.homeGames);

    // calculate home percentages
    calcPercentages(homeTotals);

    // add home totals to the playerStats object
    playerStats.homeTotals = [];
    playerStats.homeTotals.push(homeTotals);
    // console.log("homeTotals", playerStats.homeTotals);

    // calculate home averages
    var homeAverages = {};
    calcAverages(homeAverages, homeTotals, playerStats.homeGames.length);

    playerStats.homeAverages = [];
    playerStats.homeAverages.push(homeAverages);
    // console.log("homeAverages", playerStats.homeAverages);

    /////////////////////// AWAY STATS /////////////////////////////

    // handled like home stats

    //initialize away stats to 0
    var awayTotals = {};

    awayTotals.mins = 0;
    awayTotals.pts = awayTotals.fgm = awayTotals.fga = awayTotals.twoptm = awayTotals.twopta = awayTotals.threeptm = awayTotals.threepta = awayTotals.ftm = awayTotals.fta = awayTotals.oreb = awayTotals.dreb = awayTotals.reb = awayTotals.ast = awayTotals.to = awayTotals.stl = awayTotals.blk = awayTotals.blkr = awayTotals.pf = awayTotals.flson = awayTotals.plusminus =
      awayTotals.mins;

    var gamesPlayed;
    if (playerStats.stats == null) {
      gamesPlayed = 0;
    } else {
      gamesPlayed = playerStats.stats.length;
    }

    // calculate totals for away games
    calcTotals(awayTotals, playerStats.awayGames);

    // calculate away percentages
    calcPercentages(awayTotals);

    // add away totals to playerStats object
    playerStats.awayTotals = [];
    playerStats.awayTotals.push(awayTotals);
    // console.log("awayTotals", playerStats.awayTotals);

    // calculate away averages
    var awayAverages = {};
    calcAverages(awayAverages, awayTotals, playerStats.awayGames.length);

    playerStats.awayAverages = [];
    playerStats.awayAverages.push(awayAverages);
    // console.log("awayAverages", playerStats.awayAverages);

    /////////////////////// STATS IN WINS /////////////////////////////

    // win stats handled like stats above

    //initialize away stats to 0
    var winTotals = {};

    winTotals.mins = 0;
    winTotals.pts = winTotals.fgm = winTotals.fga = winTotals.twoptm = winTotals.twopta = winTotals.threeptm = winTotals.threepta = winTotals.ftm = winTotals.fta = winTotals.oreb = winTotals.dreb = winTotals.reb = winTotals.ast = winTotals.to = winTotals.stl = winTotals.blk = winTotals.blkr = winTotals.pf = winTotals.flson = winTotals.plusminus =
      winTotals.mins;

    // calculate totals for wins
    calcTotals(winTotals, playerStats.wins);

    // calculate percentages for wins
    calcPercentages(winTotals);

    // add win totals to playerStats object
    playerStats.winTotals = [];
    playerStats.winTotals.push(winTotals);
    // console.log("winTotals", playerStats.winTotals);

    // calculate win averages
    var winAverages = {};
    calcAverages(winAverages, winTotals, playerStats.wins.length);

    playerStats.winAverages = [];
    playerStats.winAverages.push(winAverages);
    // console.log("winAverages", playerStats.winAverages);

    /////////////////////// STATS IN LOSSES /////////////////////////////

    // loss stats handled like win stats above

    // initialize away stats to 0
    var lossTotals = {};

    lossTotals.mins = 0;
    lossTotals.pts = lossTotals.fgm = lossTotals.fga = lossTotals.twoptm = lossTotals.twopta = lossTotals.threeptm = lossTotals.threepta = lossTotals.ftm = lossTotals.fta = lossTotals.oreb = lossTotals.dreb = lossTotals.reb = lossTotals.ast = lossTotals.to = lossTotals.stl = lossTotals.blk = lossTotals.blkr = lossTotals.pf = lossTotals.flson = lossTotals.plusminus =
      lossTotals.mins;

    var gamesPlayed;
    if (playerStats.stats == null) {
      gamesPlayed = 0;
    } else {
      gamesPlayed = playerStats.stats.length;
    }

    // calculate totals for all losses
    calcTotals(lossTotals, playerStats.losses);

    // calculate percentages in losses
    calcPercentages(lossTotals);

    // add loss totalts to playerStats object
    playerStats.lossTotals = [];
    playerStats.lossTotals.push(lossTotals);
    // console.log("lossTotals", playerStats.lossTotals);

    // calculate loss averages
    var lossAverages = {};
    calcAverages(lossAverages, lossTotals, playerStats.losses.length);

    playerStats.lossAverages = [];
    playerStats.lossAverages.push(lossAverages);
    // console.log("lossAverages", playerStats.lossAverages);

    // console.log("allstats", playerStats);

    ////////////////specific opponent stats////////////////////

    var oppList = [
      "Smithton",
      "Wynyard",
      "Somerset",
      "Burnie",
      "Ulverstone",
      "Devonport",
      "Latrobe"
    ];

    playerStats.oppList = oppList;

    // an object for holding game separated data
    playerStats.gameSeparated = {
      Smithton: [],
      Wynyard: [],
      Somerset: [],
      Burnie: [],
      Ulverstone: [],
      Devonport: [],
      Latrobe: []
    };

    // separating a players stats against specific opponents
    playerStats.stats.forEach(game => {
      if (game.opponent == "Smithton") {
        playerStats.gameSeparated.Smithton.push(game);
      }
      if (game.opponent == "Wynyard") {
        playerStats.gameSeparated.Wynyard.push(game);
      }
      if (game.opponent == "Somerset") {
        playerStats.gameSeparated.Somerset.push(game);
      }
      if (game.opponent == "Burnie") {
        playerStats.gameSeparated.Burnie.push(game);
      }
      if (game.opponent == "Ulverstone") {
        playerStats.gameSeparated.Ulverstone.push(game);
      }
      if (game.opponent == "Devonport") {
        playerStats.gameSeparated.Devonport.push(game);
      }
      if (game.opponent == "Latrobe") {
        playerStats.gameSeparated.Latrobe.push(game);
      }
    });

    // console.log("separated", playerStats.gameSeparated);

    //add an object holding OUR totals and averages for a specific opponent
    for (var opponent in playerStats.gameSeparated) {
      var pStats = playerStats.gameSeparated[opponent];
      var pTotals = {};

      pTotals.mins = 0;
      pTotals.pts = 0;
      pTotals.fgm = 0;
      pTotals.fga = 0;
      pTotals.twoptm = 0;
      pTotals.twopta = 0;
      pTotals.threeptm = 0;
      pTotals.threepta = 0;
      pTotals.ftm = 0;
      pTotals.fta = 0;
      pTotals.oreb = 0;
      pTotals.dreb = 0;
      pTotals.reb = 0;
      pTotals.ast = 0;
      pTotals.to = 0;
      pTotals.stl = 0;
      pTotals.blk = 0;
      pTotals.blkr = 0;
      pTotals.pf = 0;
      pTotals.flson = 0;
      pTotals.plusMinus = 0;

      //add up total stats from each game against specific opponent
      calcTotals(pTotals, pStats);

      //calculate averages
      var pAverages = {};
      calcAverages(pAverages, pTotals, pStats.length);

      //calculate percentages - initialize to "n/a"
      pTotals.fgp = pTotals.twoptp = pTotals.threeptp = pTotals.ftp = "N/A";

      calcPercentages(pTotals);

      //push new object to specific opponent object
      playerStats.gameSeparated[opponent].push(pTotals);
      playerStats.gameSeparated[opponent].push(pAverages);
    }

    // separate game stats from totls and averages to make it easier to display
    // console.log("all of them", playerStats.gameSeparated);

    var totalsAverages = {};

    for (var oppArray in playerStats.gameSeparated) {
      // console.log("oppArray", playerStats.gameSeparated[oppArray]);

      var aLength = playerStats.gameSeparated[oppArray].length;

      // if length > 2 it means the player has at least one game against that opponent
      if (aLength > 2) {
        //slice off just the totals and averages
        var justTandA = playerStats.gameSeparated[oppArray].slice(aLength - 2);
        totalsAverages[oppArray] = justTandA;
      }

      playerStats.gameSeparated[oppArray].pop();
      playerStats.gameSeparated[oppArray].pop();
    }
    playerStats.totalsAverages = totalsAverages;
    // console.log("new", playerStats.gameSeparated);
    // console.log("just t and a", totalsAverages);
  }
})();
