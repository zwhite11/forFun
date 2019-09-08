(function() {
  "use strict";

  angular.module("StatApp").component("stats", {
    templateUrl: "./html/playerStats.template.html",
    bindings: {
      stats: "<"
    }
  });
})();
