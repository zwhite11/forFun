(function() {
  "use strict";

  angular.module("StatApp").component("team", {
    templateUrl: "./html/team.template.html",
    bindings: {
      games: "<"
    }
  });
})();
