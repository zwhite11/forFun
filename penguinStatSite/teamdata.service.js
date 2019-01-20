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
        url: "/forFun/penguinStatSite/teamStats/opponentStats.json"
        // url: "/teamStats/opponentStats.json"
      });

      return response;
    };

    service.getGameStats = function(round) {
      var response = $http({
        method: "GET",
        url: "/forFun/penguinStatSite/teamStats/opponentStats.json"
        // url: "/teamStats/opponentStats.json"
      });
      service.round = round;

      return response;
    };

    service.getOurStats = function(round) {
      var response = $http({
        method: "GET",
        url: "/forFun/penguinStatSite/teamStats/ourStats.json"
        // url: "/teamStats/ourStats.json"
      });
      service.round = round;

      return response;
    };

    //WOMENS GAMES

    service.getAllWGames = function() {
      var response = $http({
        method: "GET",
        url: "/forFun/penguinStatSite/wTeamStats/opponentStats.json"
        // url: "/wTeamStats/opponentStats.json"
      });

      return response;
    };

    service.getWGameStats = function(round) {
      var response = $http({
        method: "GET",
        url: "/forFun/penguinStatSite/wTeamStats/opponentStats.json"
        // url: "/wTeamStats/opponentStats.json"
      });
      service.round = round;

      return response;
    };

    service.getOurWStats = function() {
      var response = $http({
        method: "GET",
        url: "/forFun/penguinStatSite/wTeamStats/ourStats.json"
        // url: "/wTeamStats/ourStats.json"
      });

      return response;
    };
  }
})();
