(function() {
  "use strict";

  angular
    .module("StatApp")
    .controller("TeamStatsController", TeamStatsController);

  TeamStatsController.$inject = [
    "TeamDataService",
    "stats",
    "round",
    "ourStats"
  ];
  function TeamStatsController(TeamDataService, stats, round, ourStats) {
    var teamStats = this;
    teamStats.stats = stats;
    teamStats.round = round;
    teamStats.ourStats = ourStats;
    console.log("statsssss", stats);
    console.log("oursssss", ourStats);

    //pull out specific game based on the round

    teamStats.opponentStats = stats;
    teamStats.ourStats = ourStats;
  }
})();
