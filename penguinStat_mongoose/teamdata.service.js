(function() {
  "use strict";

  angular.module("Data").service("TeamDataService", TeamDataService);

  // inject http service to retrieve team stat files
  TeamDataService.$inject = ["$http"];
  function TeamDataService($http) {
    var service = this;

    service.getAllGames = function() {
      var response = $http({
        method: "GET",
        // lines commented out - development vs production
        // url: ("/forFun/penguinStatSite/teamStats/opponentStats.json")
        // url: "/teamStats/opponentStats.json"
        url: "http://localhost:3000/opponentstats"
      });

      // console.log("response: ", response);
      return response;
    };

    // opponent stats
    service.getGameStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/opponentStats.json")
        // url: "/teamStats/opponentStats.json"
        url: "http://localhost:3000/opponentstats/" + round
      });
      service.round = round;

      return response;
    };

    // our stats
    service.getOurStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/ourStats.json")
        // url: "/teamStats/ourStats.json"
        url: "http://localhost:3000/penguinstats/" + round
      });
      service.round = round;

      return response;
    };

    service.getPenguinStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/ourStats.json")
        // url: "/teamStats/ourStats.json"
        url: "http://localhost:3000/penguinstats/"
      });

      return response;
    };

    //WOMENS GAMES //////////////////

    service.getAllWGames = function() {
      var response = $http({
        method: "GET",
        // lines commented out - development vs production
        // url: ("/forFun/penguinStatSite/teamStats/opponentStats.json")
        // url: "/teamStats/opponentStats.json"
        url: "http://localhost:3000/opponentStatsWomen"
      });

      // console.log("response: ", response);
      return response;
    };

    // opponent stats
    service.getWGameStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/opponentStats.json")
        // url: "/teamStats/opponentStats.json"
        url: "http://localhost:3000/opponentStatsWomen/" + round
      });
      service.round = round;

      return response;
    };

    // our stats
    service.getOurWStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/ourStats.json")
        // url: "/teamStats/ourStats.json"
        url: "http://localhost:3000/penguinStatsWomen/" + round
      });
      service.round = round;

      return response;
    };

    service.getWPenguinStats = function(round) {
      var response = $http({
        method: "GET",
        // url: ("/forFun/penguinStatSite/teamStats/ourStats.json")
        // url: "/teamStats/ourStats.json"
        url: "http://localhost:3000/penguinStatsWomen/"
      });

      return response;
    };
  }
})();
