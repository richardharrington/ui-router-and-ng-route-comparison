'use strict';

var app = window.app = angular.module('ngRouteTestApp', [
  'ngResource',
  'ngRoute'
]);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/stuff/:stuffId', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
