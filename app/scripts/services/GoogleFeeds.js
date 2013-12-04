'use strict';

angular.module('MeraMinisterApp')
    .provider('googleFeeds', function () {

      var qService = null;

      // Private variables
      var googleFeedsService = null;

      // Private constructor
      function FeedEngine() {
        this.fetchFeed = function (url) {
          var deferred = qService.defer();

          if (googleFeedsService) {
            var feed = new googleFeedsService.Feed(url);
            feed.load(function (result) {
              if (!result.error) {
                deferred.resolve(result.feed.entries);
              } else {
                deferred.reject(result.error);
              }
            });
          } else {
            deferred.reject("Feeds engine not initialised");
          }
          return deferred.promise;
        };
      }

      // Public API for configuration
      this.initialise = function (feedService) {
        googleFeedsService = feedService;
      };

      // Method for instantiating
      this.$get = function ($q) {
        qService = $q;
        return new FeedEngine();
      };
    })
    .config(function (googleFeedsProvider) {
      googleFeedsProvider.initialise(google.feeds);
    });
