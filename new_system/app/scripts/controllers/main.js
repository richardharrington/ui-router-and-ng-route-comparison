'use strict';

var app = window.app;

app.controller('MainCtrl', function ($scope, $state, $stateParams, $timeout) {

  // console.log('$state from MainCtrl: ', $state);
  // $timeout(function() {
  //   console.log('$state from MainCtrl almost immediately later: ', $state);
  // }, 0);
  // $timeout(function() {
  //   console.log('$state from MainCtrl after one second: ', $state);
  // }, 1000);

  console.log('$stateParams from MainCtrl: ', $stateParams);
  $timeout(function() {
    console.log('$stateParams from MainCtrl immediately: ', $stateParams);
  }, 0);
  $timeout(function() {
    console.log('$stateParams from MainCtrl after 20 milliseconds: ', $stateParams);
  }, 20);
  $timeout(function() {
    console.log('$stateParams from MainCtrl after one second: ', $stateParams);
  }, 1000);

});
