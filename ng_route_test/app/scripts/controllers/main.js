'use strict';

var app = window.app;

app.controller('MainCtrl', function ($scope, $route, $timeout) {

  var logit = function(whatTime) {
    console.log('$route from MainCtrl ' + whatTime + ': ', $route);
    console.log('$route.current from MainCtrl ' + whatTime + ': ', $route.current);
    console.log('$route.current.params from MainCtrl ' + whatTime +
                ': ', $route.current ? $route.current.params : undefined);
    console.log('\n');
  };

  logit('upon instantiation of the controller');

  $timeout(function() {
    logit('after 0 seconds (next JavaScript event loop tick)');
  }, 0);

  $timeout(function() {
    logit('after 20 milliseconds');
  }, 20);

  $timeout(function() {
    logit('after one second');
  }, 1000);

});
