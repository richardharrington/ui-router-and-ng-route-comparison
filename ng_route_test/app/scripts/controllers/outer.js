'use strict';

var app = window.app;

app.controller('OuterCtrl', function ($scope, $route, $timeout) {

  console.log('$route from OuterCtrl upon instantiation of the controller: ', $route);
  console.log('$route.current from OuterCtrl upon instantiation of the controller: ', $route.current);
  console.log('$route.current.params from OuterCtrl upon instantiation of the controller: ', $route.current ? $route.current.params : undefined);
  console.log('\n');

  $timeout(function() {
    console.log('$route from OuterCtrl after 0 seconds (next JavaScript event loop tick): ', $route);
    console.log('$route.current from OuterCtrl after 0 seconds (next JavaScript event loop tick): ', $route.current);
    console.log('$route.current.params from OuterCtrl after 0 seconds (next JavaScript event loop tick): ', $route.current ? $route.current.params : undefined);
    console.log('\n');
  }, 0);

  $timeout(function() {
    console.log('$route from OuterCtrl after 20 milliseconds: ', $route);
    console.log('$route.current from OuterCtrl after 20 milliseconds: ', $route.current);
    console.log('$route.current.params from OuterCtrl after 20 milliseconds: ', $route.current ? $route.current.params : undefined);
    console.log('\n');
  }, 20);

  $timeout(function() {
    console.log('$route from OuterCtrl after one second: ', $route);
    console.log('$route.current from OuterCtrl after one second: ', $route.current);
    console.log('$route.current.params from OuterCtrl after one second: ', $route.current ? $route.current.params : undefined);
    console.log('\n');
  }, 1000);

});