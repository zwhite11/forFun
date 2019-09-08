(function() {
  "use strict";

  angular.module("StatApp").component("stats", {
    templateUrl: "./html/wPlayerStats.template.html",
    bindings: {
      stats: "<"
    }
  });
})();
