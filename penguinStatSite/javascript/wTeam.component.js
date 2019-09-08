(function() {
  "use strict";

  angular.module("StatApp").component("wTeam", {
    templateUrl: "./html/wTeam.template.html",
    bindings: {
      games: "<"
    }
  });
})();
