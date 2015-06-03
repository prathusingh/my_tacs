// Name: main.js 
// Description: This is used for login functionalitys
// API: /api/awesomeThings
'use strict';

angular.module('mytacksApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
