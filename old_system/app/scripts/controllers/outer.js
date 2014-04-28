'use strict';

var app = window.app;

var routeCurrentParams = function(routeCurrent) {
  return routeCurrent ? routeCurrent.params : "undefined";
}

app.controller('OuterCtrl', function ($scope, $route, $timeout) {

  // console.log('$route from OuterCtrl: ', $route);
  // $timeout(function() {
  //   console.log('$route from OuterCtrl almost immediately later: ', $route);
  // }, 0);
  // $timeout(function() {
  //   console.log('$route from OuterCtrl after one second: ', $route);
  // }, 1000);

  console.log('$route.current.params from OuterCtrl: ', routeCurrentParams($route.current));
  $timeout(function() {
    console.log('$route from OuterCtrl immediately: ', routeCurrentParams($route.current));
  }, 0);
  $timeout(function() {
    console.log('$route from OuterCtrl after 20 milliseconds: ', routeCurrentParams($route.current));
  }, 20);
  $timeout(function() {
    console.log('$route from OuterCtrl after one second: ', routeCurrentParams($route.current));
  }, 1000);

});
