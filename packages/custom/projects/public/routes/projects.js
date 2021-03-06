'use strict';

//Setting up route
angular.module('mean.projects').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all projects', {
        url: '/projects',
        templateUrl: '/projects/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create project', {
        url: '/projects/create',
        templateUrl: '/projects/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit project', {
        url: '/projects/:projectId/edit',
        templateUrl: '/projects/views/edit.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('project by id', {
        url: '/projects/:projectId',
        templateUrl: '/projects/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);
