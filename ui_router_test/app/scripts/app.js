'use strict';

var app = window.app = angular.module('uiRouterTestApp', [
  'ngResource',
  'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/stuff/:stuffId',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });

});

