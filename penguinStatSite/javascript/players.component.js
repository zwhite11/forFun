(function() {
  "use strict";

  angular.module("StatApp").component("players", {
    templateUrl: "./html/players.template.html",
    bindings: {
      players: "<"
    }
  });
})();
