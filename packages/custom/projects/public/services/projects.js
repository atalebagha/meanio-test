'use strict';

//Projects service used for projects REST endpoint
angular.module('mean.projects').factory('Projects', ['$resource',
  function($resource) {
    return $resource('api/projects/:projectId', {
      projectId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
