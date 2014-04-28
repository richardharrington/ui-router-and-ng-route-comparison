'use strict';


  angular.module('testy3App', [
  'ngResource',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
      .state('route1', {
        url: '/route1',
        templateUrl: 'views/route1.html',
        controller: 'Route1Ctrl'
      })
      .state('route2', {
        url: '/route2',
        templateUrl: 'views/route2.html',
        controller: 'Route2Ctrl'
      })

  })




