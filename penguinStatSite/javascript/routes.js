(function() {
  "use strict";

  angular.module("StatApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

      .state("home", {
        url: "/",
        templateUrl: "index.html"
      })

      // list of men's players
      .state("players", {
        url: "/players",
        templateUrl: "/html/players.template.html",
        controller: "PlayersController as playersList",
        resolve: {
          players: [
            "PlayerDataService",
            function(PlayerDataService) {
              return PlayerDataService.getAllPlayers().then(function(result) {
                return result.data;
              });
            }
          ]
        }
      })

      // individual player's stats
      .state("players.playerStats", {
        url: "/playerStats/{shortName}",
        templateUrl: "/html/playerStats.template.html",
        controller: "StatsController as playerStats",
        resolve: {
          stats: [
            "$stateParams",
            "PlayerDataService",
            function($stateParams, PlayerDataService) {
              return PlayerDataService.getStatsForPlayer(
                $stateParams.shortName
              ).then(function(result) {
                return result.data.stats;
              });
            }
          ],
          name: [
            "$stateParams",
            "PlayerDataService",
            function($stateParams, PlayerDataService) {
              return PlayerDataService.getStatsForPlayer(
                $stateParams.shortName
              ).then(function(result) {
                return result.data.name;
              });
            }
          ]
        }
      })

      // list of games played
      .state("team", {
        url: "/team",
        templateUrl: "/html/team.template.html",
        controller: "TeamController as gameList",
        resolve: {
          games: [
            "TeamDataService",
            function(TeamDataService) {
              return TeamDataService.getAllGames().then(function(result) {
                return result.data;
              });
            }
          ],
          ourStats: [
            "TeamDataService",
            function(TeamDataService) {
              return TeamDataService.getOurStats(1).then(function(result) {
                return result.data;
              });
            }
          ]
        }
      })

      // team stats from a specific game
      .state("team.teamStats", {
        url: "/teamStats/{round}",
        templateUrl: "/html/teamStats.template.html",
        controller: "TeamStatsController as teamStats",
        resolve: {
          stats: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return TeamDataService.getGameStats($stateParams.round).then(
                function(result) {
                  return result.data;
                }
              );
            }
          ],
          round: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return $stateParams.round;
            }
          ],
          ourStats: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return TeamDataService.getOurStats($stateParams.round).then(
                function(result) {
                  return result.data;
                }
              );
            }
          ]
        }
      })

      // womens data

      // list of women's players
      .state("wPlayers", {
        url: "/wPlayers",
        templateUrl: "/html/wPlayers.template.html",
        controller: "PlayersController as playersList",
        resolve: {
          players: [
            "PlayerDataService",
            function(PlayerDataService) {
              return PlayerDataService.getAllWPlayers().then(function(result) {
                return result.data;
              });
            }
          ]
        }
      })

      // individual women's stats
      .state("wPlayers.wPlayerStats", {
        url: "/playerStats/{shortName}",
        templateUrl: "/html/wPlayerStats.template.html",
        controller: "StatsController as playerStats",
        resolve: {
          stats: [
            "$stateParams",
            "PlayerDataService",
            function($stateParams, PlayerDataService) {
              return PlayerDataService.getStatsForPlayer(
                $stateParams.shortName
              ).then(function(result) {
                return result.data.stats;
              });
            }
          ],
          name: [
            "$stateParams",
            "PlayerDataService",
            function($stateParams, PlayerDataService) {
              return PlayerDataService.getStatsForPlayer(
                $stateParams.shortName
              ).then(function(result) {
                return result.data.name;
              });
            }
          ]
        }
      })

      // list of women's games
      .state("wTeam", {
        url: "/wTeam",
        templateUrl: "/html/wTeam.template.html",
        controller: "TeamController as gameList",
        resolve: {
          games: [
            "TeamDataService",
            function(TeamDataService) {
              return TeamDataService.getAllWGames().then(function(result) {
                return result.data;
              });
            }
          ],
          ourStats: [
            "TeamDataService",
            function(TeamDataService) {
              return TeamDataService.getOurWStats().then(function(result) {
                return result.data;
              });
            }
          ]
        }
      })

      // individual game stats
      .state("wTeam.teamStats", {
        url: "/teamStats/{round}",
        templateUrl: "/html/teamStats.template.html",
        controller: "TeamStatsController as teamStats",
        resolve: {
          stats: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return TeamDataService.getWGameStats($stateParams.round).then(
                function(result) {
                  return result.data;
                }
              );
            }
          ],
          round: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return $stateParams.round;
            }
          ],
          ourStats: [
            "$stateParams",
            "TeamDataService",
            function($stateParams, TeamDataService) {
              return TeamDataService.getOurWStats().then(function(result) {
                return result.data;
              });
            }
          ]
        }
      });
  }
})();
