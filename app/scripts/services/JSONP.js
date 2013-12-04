'use strict';

angular.module('MeraMinisterApp')
  .service('JsonP', ['$q', '$http', function JsonP($q, $http) {
    return {
      fetch: function(url){
        var deferred = $q.defer();
        $http({method: 'JSONP', url: url + "?callback=JSON_CALLBACK", cache: true}).then(function (result) {
          deferred.resolve(JSON.parse(result.data.model));
        }, function (problem) {
          deferred.reject(problem);
        });
        return deferred.promise;
      }
    }
  }]);
