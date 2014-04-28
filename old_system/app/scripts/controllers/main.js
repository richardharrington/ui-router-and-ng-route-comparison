'use strict';

var app = window.app;

var routeCurrentParams = function(routeCurrent) {
  return routeCurrent ? routeCurrent.params : "undefined";
}

app.controller('MainCtrl', function ($scope, $route, $timeout) {

  // console.log('$route from MainCtrl: ', $route);
  // $timeout(function() {
  //   console.log('$route from MainCtrl almost immediately later: ', $route);
  // }, 0);
  // $timeout(function() {
  //   console.log('$route from MainCtrl after one second: ', $route);
  // }, 1000);

  console.log('$route.current.params from MainCtrl: ', routeCurrentParams($route.current));
  $timeout(function() {
    console.log('$route.current.params from MainCtrl immediately: ', routeCurrentParams($route.current));
  }, 0);
  $timeout(function() {
    console.log('$route.current.params from MainCtrl after 20 milliseconds: ', routeCurrentParams($route.current));
  }, 20);
  $timeout(function() {
    console.log('$route.current.params from MainCtrl after one second: ', routeCurrentParams($route.current));
  }, 1000);

});
