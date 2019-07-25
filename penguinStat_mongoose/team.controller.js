/**
 * team controller for handling team stats
 */

(function() {
  "use strict";

  angular.module("StatApp").controller("TeamController", TeamController);

  TeamController.$inject = ["TeamDataService", "games", "ourStats"];
  function TeamController(TeamDataService, games, ourStats) {
    var gameList = this;
    gameList.games = games;
    gameList.ourStats = ourStats;

    //games = opponent stats
    //ourStats = our stats

    var gamesPlayed = gameList.games.length;

    //separate our home, away, losses and losses stats
    gameList.homeGames = [];
    gameList.awayGames = [];
    gameList.wins = [];
    gameList.losses = [];

    //opponent separation
    gameList.oHomeGames = [];
    gameList.oAwayGames = [];
    gameList.oWins = [];
    gameList.oLosses = [];

    // loop through games played and add each based on the category for our stats and opponents
    // our stats
    gameList.ourStats.forEach(game => {
      if (game.location == "H") {
        gameList.homeGames.push(game);
      }

      if (game.location == "A") {
        gameList.awayGames.push(game);
      }

      if (game.result == "W") {
        gameList.wins.push(game);
      }

      if (game.result == "L") {
        gameList.losses.push(game);
      }
    });

    // opponent stats
    gameList.games.forEach(game => {
      if (game.location == "H") {
        gameList.oHomeGames.push(game);
      }

      if (game.location == "A") {
        gameList.oAwayGames.push(game);
      }

      if (game.result == "W") {
        gameList.oWins.push(game);
      }

      if (game.result == "L") {
        gameList.oLosses.push(game);
      }
    });

    //functions for calculating totals, averages and percentages
    let calcTotals = function(totalsObject, gamesArray) {
      gamesArray.forEach(game => {
        totalsObject.pts += game.pts;
        totalsObject.fgm += game.fgm;
        totalsObject.fga += game.fga;
        totalsObject.twoptm += game.twoptm;
        totalsObject.twopta += game.twopta;
        totalsObject.threeptm += game.threeptm;
        totalsObject.threepta += game.threepta;
        totalsObject.ftm += game.ftm;
        totalsObject.fta += game.fta;
        totalsObject.oreb += game.oreb;
        totalsObject.reb += game.reb;
        totalsObject.ast += game.ast;
        totalsObject.stl += game.stl;
        totalsObject.blk += game.blk;
        totalsObject.to += game.to;
        totalsObject.pf += game.pf;
        totalsObject.pip += game.pip;
        totalsObject.scp += game.scp;
        totalsObject.pft += game.pft;
        totalsObject.fbp += game.fbp;
        totalsObject.bp += game.bp;
      });
    };

    let calcAverages = function(averagesObject, totalsObject, numGamesPlayed) {
      averagesObject.pts = (totalsObject.pts / numGamesPlayed).toFixed(2);
      averagesObject.fgm = (totalsObject.fgm / numGamesPlayed).toFixed(2);
      averagesObject.fga = (totalsObject.fga / numGamesPlayed).toFixed(2);
      averagesObject.twoptm = (totalsObject.twoptm / numGamesPlayed).toFixed(2);
      averagesObject.twopta = (totalsObject.twopta / numGamesPlayed).toFixed(2);
      averagesObject.threeptm = (
        totalsObject.threeptm / numGamesPlayed
      ).toFixed(2);
      averagesObject.threepta = (
        totalsObject.threepta / numGamesPlayed
      ).toFixed(2);
      averagesObject.ftm = (totalsObject.ftm / numGamesPlayed).toFixed(2);
      averagesObject.fta = (totalsObject.fta / numGamesPlayed).toFixed(2);
      averagesObject.oreb = (totalsObject.oreb / numGamesPlayed).toFixed(2);
      averagesObject.reb = (totalsObject.reb / numGamesPlayed).toFixed(2);
      averagesObject.ast = (totalsObject.ast / numGamesPlayed).toFixed(2);
      averagesObject.stl = (totalsObject.stl / numGamesPlayed).toFixed(2);
      averagesObject.blk = (totalsObject.blk / numGamesPlayed).toFixed(2);
      averagesObject.to = (totalsObject.to / numGamesPlayed).toFixed(2);
      averagesObject.pf = (totalsObject.pf / numGamesPlayed).toFixed(2);
      averagesObject.pip = (totalsObject.pip / numGamesPlayed).toFixed(2);
      averagesObject.scp = (totalsObject.scp / numGamesPlayed).toFixed(2);
      averagesObject.pft = (totalsObject.pft / numGamesPlayed).toFixed(2);
      averagesObject.fbp = (totalsObject.fbp / numGamesPlayed).toFixed(2);
      averagesObject.bp = (totalsObject.bp / numGamesPlayed).toFixed(2);
    };

    let calcPercentages = function(totalsObject) {
      totalsObject.fgp = ((totalsObject.fgm / totalsObject.fga) * 100).toFixed(
        2
      );
      totalsObject.twoptp = (
        (totalsObject.twoptm / totalsObject.twopta) *
        100
      ).toFixed(2);
      totalsObject.threeptp = (
        (totalsObject.threeptm / totalsObject.threepta) *
        100
      ).toFixed(2);
      totalsObject.ftp = ((totalsObject.ftm / totalsObject.fta) * 100).toFixed(
        2
      );
    };

    //---------their stats-----------
    var oppTotals = {};

    oppTotals.fgm = 0;
    oppTotals.pts = oppTotals.fga = oppTotals.twoptm = oppTotals.twopta = oppTotals.threeptm = oppTotals.threepta = oppTotals.ftm = oppTotals.fta = oppTotals.oreb = oppTotals.reb = oppTotals.ast = oppTotals.stl = oppTotals.blk = oppTotals.to = oppTotals.pf = oppTotals.pip = oppTotals.scp = oppTotals.pft = oppTotals.fbp = oppTotals.bp =
      oppTotals.fgm;

    // loop through opponent team stats and add up totals
    calcTotals(oppTotals, gameList.games);

    //calculate percentages
    calcPercentages(oppTotals);

    gameList.oppTotals = oppTotals;

    //calculate averages
    var oppAverages = {};
    calcAverages(oppAverages, oppTotals, gamesPlayed);

    gameList.oppAverages = oppAverages;

    //--------------------ourstats----------------

    var ourTotals = {};
    ourTotals.fgm = 0;
    ourTotals.pts = ourTotals.fga = ourTotals.twoptm = ourTotals.twopta = ourTotals.threeptm = ourTotals.threepta = ourTotals.ftm = ourTotals.fta = ourTotals.oreb = ourTotals.reb = ourTotals.ast = ourTotals.stl = ourTotals.blk = ourTotals.to = ourTotals.pf = ourTotals.pip = ourTotals.scp = ourTotals.pft = ourTotals.fbp = ourTotals.bp =
      ourTotals.fgm;

    // loop through our stats and add up our totals
    calcTotals(ourTotals, gameList.ourStats);

    //calc percentages
    calcPercentages(ourTotals);

    gameList.ourTotals = ourTotals;

    //calculate averages
    var ourAverages = {};
    calcAverages(ourAverages, ourTotals, gamesPlayed);

    gameList.ourAverages = ourAverages;

    //---------HOME stats-----------

    //opponent home totals
    var oppHomeTotals = {};
    oppHomeTotals.fgm = 0;
    oppHomeTotals.pts = oppHomeTotals.fga = oppHomeTotals.twoptm = oppHomeTotals.twopta = oppHomeTotals.threeptm = oppHomeTotals.threepta = oppHomeTotals.ftm = oppHomeTotals.fta = oppHomeTotals.oreb = oppHomeTotals.reb = oppHomeTotals.ast = oppHomeTotals.stl = oppHomeTotals.blk = oppHomeTotals.to = oppHomeTotals.pf = oppHomeTotals.pip = oppHomeTotals.scp = oppHomeTotals.pft = oppHomeTotals.fbp = oppHomeTotals.bp =
      oppHomeTotals.fgm;

    //our home totals
    var ourHomeTotals = {};
    ourHomeTotals.fgm = 0;
    ourHomeTotals.pts = ourHomeTotals.fga = ourHomeTotals.twoptm = ourHomeTotals.twopta = ourHomeTotals.threeptm = ourHomeTotals.threepta = ourHomeTotals.ftm = ourHomeTotals.fta = ourHomeTotals.oreb = ourHomeTotals.reb = ourHomeTotals.ast = ourHomeTotals.stl = ourHomeTotals.blk = ourHomeTotals.to = ourHomeTotals.pf = ourHomeTotals.pip = ourHomeTotals.scp = ourHomeTotals.pft = ourHomeTotals.fbp = ourHomeTotals.bp =
      ourHomeTotals.fgm;

    // adding up opponents home game stat totals
    calcTotals(oppHomeTotals, gameList.oHomeGames);
    calcTotals(ourHomeTotals, gameList.homeGames);

    //opponent percentages
    calcPercentages(oppHomeTotals);

    gameList.oppHomeTotals = oppHomeTotals;

    //our percentages
    calcPercentages(ourHomeTotals);

    gameList.ourHomeTotals = ourHomeTotals;

    //calculate opponent home averages
    var oppHomeAverages = {};
    calcAverages(oppHomeAverages, oppHomeTotals, gameList.homeGames.length);
    gameList.oppHomeAverages = oppHomeAverages;

    //calculate our home averages
    var ourHomeAverages = {};
    calcAverages(ourHomeAverages, ourHomeTotals, gameList.homeGames.length);
    gameList.ourHomeAverages = ourHomeAverages;

    //---------AWAY stats-----------

    //opponent away totals
    var oppAwayTotals = {};
    oppAwayTotals.fgm = 0;
    oppAwayTotals.pts = oppAwayTotals.fga = oppAwayTotals.twoptm = oppAwayTotals.twopta = oppAwayTotals.threeptm = oppAwayTotals.threepta = oppAwayTotals.ftm = oppAwayTotals.fta = oppAwayTotals.oreb = oppAwayTotals.reb = oppAwayTotals.ast = oppAwayTotals.stl = oppAwayTotals.blk = oppAwayTotals.to = oppAwayTotals.pf = oppAwayTotals.pip = oppAwayTotals.scp = oppAwayTotals.pft = oppAwayTotals.fbp = oppAwayTotals.bp =
      oppAwayTotals.fgm;

    //our Away totals
    var ourAwayTotals = {};
    ourAwayTotals.fgm = 0;
    ourAwayTotals.pts = ourAwayTotals.fga = ourAwayTotals.twoptm = ourAwayTotals.twopta = ourAwayTotals.threeptm = ourAwayTotals.threepta = ourAwayTotals.ftm = ourAwayTotals.fta = ourAwayTotals.oreb = ourAwayTotals.reb = ourAwayTotals.ast = ourAwayTotals.stl = ourAwayTotals.blk = ourAwayTotals.to = ourAwayTotals.pf = ourAwayTotals.pip = ourAwayTotals.scp = ourAwayTotals.pft = ourAwayTotals.fbp = ourAwayTotals.bp =
      ourAwayTotals.fgm;

    // adding up opponents away game totals
    calcTotals(oppAwayTotals, gameList.oAwayGames);
    calcTotals(ourAwayTotals, gameList.awayGames);

    //opponent percentages
    calcPercentages(oppAwayTotals);

    gameList.oppAwayTotals = oppAwayTotals;

    //our percentages
    calcPercentages(ourAwayTotals);

    gameList.ourAwayTotals = ourAwayTotals;

    //calculate opponent away averages
    var oppAwayAverages = {};
    calcAverages(oppAwayAverages, oppAwayTotals, gameList.awayGames.length);
    gameList.oppAwayAverages = oppAwayAverages;

    //calculate our away averages
    var ourAwayAverages = {};
    calcAverages(ourAwayAverages, ourAwayTotals, gameList.awayGames.length);
    gameList.ourAwayAverages = ourAwayAverages;

    //---------WIN stats-----------

    //opponent wins totals
    var oppWinsTotals = {};
    oppWinsTotals.fgm = 0;
    oppWinsTotals.pts = oppWinsTotals.fga = oppWinsTotals.twoptm = oppWinsTotals.twopta = oppWinsTotals.threeptm = oppWinsTotals.threepta = oppWinsTotals.ftm = oppWinsTotals.fta = oppWinsTotals.oreb = oppWinsTotals.reb = oppWinsTotals.ast = oppWinsTotals.stl = oppWinsTotals.blk = oppWinsTotals.to = oppWinsTotals.pf = oppWinsTotals.pip = oppWinsTotals.scp = oppWinsTotals.pft = oppWinsTotals.fbp = oppWinsTotals.bp =
      oppWinsTotals.fgm;

    //our wins totals
    var ourWinsTotals = {};
    ourWinsTotals.fgm = 0;
    ourWinsTotals.pts = ourWinsTotals.fga = ourWinsTotals.twoptm = ourWinsTotals.twopta = ourWinsTotals.threeptm = ourWinsTotals.threepta = ourWinsTotals.ftm = ourWinsTotals.fta = ourWinsTotals.oreb = ourWinsTotals.reb = ourWinsTotals.ast = ourWinsTotals.stl = ourWinsTotals.blk = ourWinsTotals.to = ourWinsTotals.pf = ourWinsTotals.pip = ourWinsTotals.scp = ourWinsTotals.pft = ourWinsTotals.fbp = ourWinsTotals.bp =
      ourWinsTotals.fgm;

    // adding up opponent totals during our wins
    calcTotals(oppWinsTotals, gameList.oWins);
    calcTotals(ourWinsTotals, gameList.wins);

    // opponent percentages
    calcPercentages(oppWinsTotals);

    gameList.oppWinsTotals = oppWinsTotals;

    // our percentages
    calcPercentages(ourWinsTotals);

    gameList.ourWinsTotals = ourWinsTotals;

    // calculate opponent averages during our wins
    var oppWinsAverages = {};
    calcAverages(oppWinsAverages, oppWinsTotals, gameList.wins.length);
    gameList.oppWinsAverages = oppWinsAverages;

    //calculate our averages during wins
    var ourWinsAverages = {};
    calcAverages(ourWinsAverages, ourWinsTotals, gameList.wins.length);
    gameList.ourWinsAverages = ourWinsAverages;

    //---------LOSS stats-----------

    //opponent loss totals
    var oppLossTotals = {};
    oppLossTotals.fgm = 0;
    oppLossTotals.pts = oppLossTotals.fga = oppLossTotals.twoptm = oppLossTotals.twopta = oppLossTotals.threeptm = oppLossTotals.threepta = oppLossTotals.ftm = oppLossTotals.fta = oppLossTotals.oreb = oppLossTotals.reb = oppLossTotals.ast = oppLossTotals.stl = oppLossTotals.blk = oppLossTotals.to = oppLossTotals.pf = oppLossTotals.pip = oppLossTotals.scp = oppLossTotals.pft = oppLossTotals.fbp = oppLossTotals.bp =
      oppLossTotals.fgm;

    //our loss totals
    var ourLossTotals = {};
    ourLossTotals.fgm = 0;
    ourLossTotals.pts = ourLossTotals.fga = ourLossTotals.twoptm = ourLossTotals.twopta = ourLossTotals.threeptm = ourLossTotals.threepta = ourLossTotals.ftm = ourLossTotals.fta = ourLossTotals.oreb = ourLossTotals.reb = ourLossTotals.ast = ourLossTotals.stl = ourLossTotals.blk = ourLossTotals.to = ourLossTotals.pf = ourLossTotals.pip = ourLossTotals.scp = ourLossTotals.pft = ourLossTotals.fbp = ourLossTotals.bp =
      ourLossTotals.fgm;

    // opponents totals during our losses
    calcTotals(oppLossTotals, gameList.oLosses);
    calcTotals(ourLossTotals, gameList.losses);

    //opponent percentages
    calcPercentages(oppLossTotals);

    gameList.oppLossTotals = oppLossTotals;

    //our percentages
    calcPercentages(ourLossTotals);

    gameList.ourLossTotals = ourLossTotals;

    //calculate opponent averages during losses
    var oppLossAverages = {};
    calcAverages(oppLossAverages, oppLossTotals, gameList.losses.length);
    gameList.oppLossAverages = oppLossAverages;

    //calculate our averages averages during losses
    var ourLossAverages = {};
    calcAverages(ourLossAverages, ourLossTotals, gameList.losses.length);
    gameList.ourLossAverages = ourLossAverages;

    // data against a specific opponent

    var oppList = [
      "Smithton",
      "Wynyard",
      "Somerset",
      "Burnie",
      "Ulverstone",
      "Devonport",
      "Latrobe"
    ];

    gameList.oppList = oppList;

    // an object holding game separated data for US
    gameList.gameSeparatedUs = {
      Smithton: [],
      Wynyard: [],
      Somerset: [],
      Burnie: [],
      Ulverstone: [],
      Devonport: [],
      Latrobe: []
    };

    // an object holding game separated data for THEM
    gameList.gameSeparatedThem = {
      Smithton: [],
      Wynyard: [],
      Somerset: [],
      Burnie: [],
      Ulverstone: [],
      Devonport: [],
      Latrobe: []
    };

    // separating our stats against specific opponents and adding them to the gameSeparated object
    gameList.ourStats.forEach(function(game) {
      if (game.opponent == "Smithton") {
        gameList.gameSeparatedUs.Smithton.push(game);
      }
      if (game.opponent == "Wynyard") {
        gameList.gameSeparatedUs.Wynyard.push(game);
      }
      if (game.opponent == "Somerset") {
        gameList.gameSeparatedUs.Somerset.push(game);
      }
      if (game.opponent == "Burnie") {
        gameList.gameSeparatedUs.Burnie.push(game);
      }
      if (game.opponent == "Ulverstone") {
        gameList.gameSeparatedUs.Ulverstone.push(game);
      }
      if (game.opponent == "Devonport") {
        gameList.gameSeparatedUs.Devonport.push(game);
      }
      if (game.opponent == "Latrobe") {
        gameList.gameSeparatedUs.Latrobe.push(game);
      }
    });

    // separating OPPONENT stats against specific opponents and adding them to the gameSeparated object
    gameList.games.forEach(function(game) {
      if (game.opponent == "Smithton") {
        gameList.gameSeparatedThem.Smithton.push(game);
      }
      if (game.opponent == "Wynyard") {
        gameList.gameSeparatedThem.Wynyard.push(game);
      }
      if (game.opponent == "Somerset") {
        gameList.gameSeparatedThem.Somerset.push(game);
      }
      if (game.opponent == "Burnie") {
        gameList.gameSeparatedThem.Burnie.push(game);
      }
      if (game.opponent == "Ulverstone") {
        gameList.gameSeparatedThem.Ulverstone.push(game);
      }
      if (game.opponent == "Devonport") {
        gameList.gameSeparatedThem.Devonport.push(game);
      }
      if (game.opponent == "Latrobe") {
        gameList.gameSeparatedThem.Latrobe.push(game);
      }
    });

    //add an object holding OUR totals and averages for a specific opponent
    for (var opponent in gameList.gameSeparatedUs) {
      var ourStats = gameList.gameSeparatedUs[opponent];
      var ourTotals = {};

      ourTotals.pts = 0;
      ourTotals.fgm = ourTotals.fga = ourTotals.twoptm = ourTotals.twopta = ourTotals.threeptm = ourTotals.threepta = ourTotals.ftm = ourTotals.fta = ourTotals.oreb = ourTotals.reb = ourTotals.ast = ourTotals.stl = ourTotals.blk = ourTotals.to = ourTotals.pf = ourTotals.pip = ourTotals.scp = ourTotals.pft = ourTotals.fbp = ourTotals.bp =
        ourTotals.pts;

      //add up total stats from each game against specific opponent
      calcTotals(ourTotals, ourStats);

      //calculate averages
      var ourAverages = {};
      calcAverages(ourAverages, ourTotals, 3);

      //calculate percentages
      calcPercentages(ourTotals);

      //push new object to specific opponent object
      gameList.gameSeparatedUs[opponent].push(ourTotals);
      gameList.gameSeparatedUs[opponent].push(ourAverages);
    }

    //add an object holding OPPONENT totals and averages for a specific opponent
    for (var opponent in gameList.gameSeparatedThem) {
      var oppStats = gameList.gameSeparatedThem[opponent];
      var oppTotals = {};

      oppTotals.pts = 0;
      oppTotals.fgm = oppTotals.fga = oppTotals.twoptm = oppTotals.twopta = oppTotals.threeptm = oppTotals.threepta = oppTotals.ftm = oppTotals.fta = oppTotals.oreb = oppTotals.reb = oppTotals.ast = oppTotals.stl = oppTotals.blk = oppTotals.to = oppTotals.pf = oppTotals.pip = oppTotals.scp = oppTotals.pft = oppTotals.fbp = oppTotals.bp =
        oppTotals.pts;

      //add up total stats from each game against specific opponent
      calcTotals(oppTotals, oppStats);

      //calculate averages
      var oppAverages = {};
      calcAverages(oppAverages, oppTotals, 3);

      //calculate percentages
      calcPercentages(oppTotals);

      //add new object to specific opponent object
      gameList.gameSeparatedThem[opponent].push(oppTotals);
      gameList.gameSeparatedThem[opponent].push(oppAverages);
    }
  }
})();
