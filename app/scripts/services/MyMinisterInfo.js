'use strict';

angular.module('MeraMinisterApp')
    .service('MyMinisterInfo', ['$http', '$q', function ($http, $q) {
      var BASE_URL = "http://api.myminister.info/";
      return {
        call: function (relativeUrl) {
          var deferred = $q.defer();
          $http({method: 'JSONP', url: BASE_URL + relativeUrl + "?callback=JSON_CALLBACK", cache: true}).then(function (result) {
            deferred.resolve(JSON.parse(result.data.model));
          }, function (problem) {
            deferred.reject(problem)
          });
          return deferred.promise;
        }
      }
    }]);
