// Name: feed.js 
// Description: This is used for getting the tack feed on the Wall
// API: /api/feed
'use strict';

angular.module('mytacksApp')
  .controller('FeedCtrl', function ($scope, $http) {
    $http.get('/api/feed').success(function(feed) {
      $scope.feed = feed;
    });
  });