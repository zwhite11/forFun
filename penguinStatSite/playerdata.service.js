(function () {
    'use strict';
    
    angular.module('Data')
    .service('PlayerDataService', PlayerDataService)

    /**
     * use http service to retrieve player data
     */
    PlayerDataService.$inject = ['$http'];
    function PlayerDataService($http){
        var service = this;
        var playerStats;

        service.getAllPlayers = function(){
            var response = $http({
                method: "GET",
                url: ("./players.json")            
            });

            return response;
        };

        //all players, men and women, in the same folder
        service.getStatsForPlayer = function(shortName){
            var response = $http({
                method: "GET",
                url: ("./players/" + shortName + ".json")            
            });    

            return response;            
        };


        //women's data
        service.getAllWPlayers = function(){
            var response = $http({
                method: "GET",
                url: ("./wPlayers.json")            
            });
            return response;
        };



    }
    
})();