'use strict';

angular.module('MeraMinisterApp')
    .controller('MainCtrl', function ($scope, Ministry) {
      Ministry.states().then(function (found) {
        $scope.states = found;
      });

      $scope.getMinisters = function(stateId){
        Ministry.mps(stateId).then(function(found){
          $scope.ministers = found;
        })
      }
    });
