'use strict';

angular.module('MeraMinisterApp')
  .controller('MainCtrl', function ($scope, Ministry) {
    Ministry.states().then(function(found){
      $scope.states = found;
    })
  });
