'use strict';

angular.module('MeraMinisterApp')
    .controller('MainCtrl', function ($scope, Ministry, googleFeeds) {
      Ministry.states().then(function (found) {
        $scope.states = found;
      });

      $scope.getMinisters = function (stateId) {
        Ministry.mps(stateId).then(function (found) {
          $scope.ministers = found;
        });
      }

      $scope.news = null;

      $scope.loadNews = function (minister) {
        googleFeeds.fetchFeed('https://news.google.com/news?hl=en&as_occt=any&as_qdr=y&q=' + minister.name + '&um=1&ie=UTF-8&output=rss').then(function (results) {
          $scope.news = results;
        });
      }
    });
