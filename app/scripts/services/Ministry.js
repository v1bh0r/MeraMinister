'use strict';

angular.module('MeraMinisterApp')
    .service('Ministry', ['$http', '$q', 'MyMinisterInfo', function ($http, $q, MyMinisterInfo) {
      return {
        states: function () {
          return MyMinisterInfo.call('states.json');
        },
        mps: function (stateId) {
          return MyMinisterInfo.call("states/" + stateId + "/mps.json");
        }
      }
    }]);
