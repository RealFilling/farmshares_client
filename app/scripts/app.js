'use strict';

farmsharesClientApp = angular.module('farmsharesClientApp', [])

farmsharesClientApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);