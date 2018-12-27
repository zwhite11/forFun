(function() {
  "use strict";

  angular.module("Data").service("PlayerDataService", PlayerDataService);

  /**
   * use http service to retrieve player data
   */
  PlayerDataService.$inject = ["$http"];
  function PlayerDataService($http) {
    var service = this;
    var playerStats;

    service.getAllPlayers = function() {
      console.log("getting all players");
      var response = $http({
        method: "GET",
        url: "http://localhost:3000/players/"
      });

      return response;
    };

    // get men's players stats
    service.getStatsForPlayer = function(shortName) {
      var response = $http({
        method: "GET",
        url: "http://localhost:3000/players/" + shortName
      });

      return response;
    };

    //women's data
    service.getAllWPlayers = function() {
      var response = $http({
        method: "GET",
        url: "http://localhost:3000/wplayers/"
      });
      return response;
    };

    // get women's players stats
    service.getStatsForWPlayer = function(shortName) {
      var response = $http({
        method: "GET",
        url: "http://localhost:3000/wplayers/" + shortName
      });

      return response;
    };
  }
})();
