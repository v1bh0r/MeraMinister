'use strict';

angular.module('MeraMinisterApp')
    .service('MyMinisterInfo', ['$http', '$q', 'JsonP', function ($http, $q, JsonP) {
      var BASE_URL = "http://api.myminister.info/";
      return {
        call: function (relativeUrl) {
          return JsonP.fetch(BASE_URL + relativeUrl);
        }
      }
    }]);
