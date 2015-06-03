'use strict';

angular.module('mytacksApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
