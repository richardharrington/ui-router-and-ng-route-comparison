'use strict';

var app = window.app;

app.controller('MainCtrl', function ($scope, $state, $stateParams, $timeout) {

  var logit = function(whatTime) {
    console.log('$state from MainCtrl ' + whatTime + ': ', $state);
    console.log('$stateParams from MainCtrl ' + whatTime + ': ', $stateParams);
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

