'use strict';

var app = window.app;

app.controller('MainCtrl', function ($scope, $state, $stateParams, $timeout) {

  console.log('$state from MainCtrl upon instantiation of the controller: ', $state);
  console.log('$stateParams from MainCtrl upon instantiation of the controller: ', $stateParams);
  console.log('\n');

  $timeout(function() {
    console.log('$state from MainCtrl after 0 seconds (next JavaScript event loop tick): ', $state);
    console.log('$stateParams from MainCtrl 0 seconds (next JavaScript event loop tick): ', $stateParams);
    console.log('\n');
  }, 0);

  $timeout(function() {
    console.log('$state from MainCtrl after 20 milliseconds: ', $state);
    console.log('$stateParams from MainCtrl after 20 milliseconds: ', $stateParams);
    console.log('\n');
  }, 20);

  $timeout(function() {
    console.log('$state from MainCtrl after one second: ', $state);
    console.log('$stateParams from MainCtrl after one second: ', $stateParams);
    console.log('\n');
  }, 1000);

});
