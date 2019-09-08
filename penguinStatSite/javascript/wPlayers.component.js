(function() {
  "use strict";

  angular.module("StatApp").component("wPlayers", {
    templateUrl: "./html/wPlayers.template.html",
    bindings: {
      players: "<"
    }
  });
})();
