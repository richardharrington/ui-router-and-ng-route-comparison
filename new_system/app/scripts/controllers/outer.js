'use strict';

var app = window.app;

app.controller('OuterCtrl', function ($scope, $state, $stateParams, $timeout) {

  // console.log('$state from OuterCtrl: ', $state);
  // $timeout(function() {
  //   console.log('$state from OuterCtrl almost immediately later: ', $state);
  // }, 0);
  // $timeout(function() {
  //   console.log('$state from OuterCtrl after one second: ', $state);
  // }, 1000);

  console.log('$stateParams from OuterCtrl: ', $stateParams);
  $timeout(function() {
    console.log('$stateParams from OuterCtrl immediately: ', $stateParams);
  }, 0);
  $timeout(function() {
    console.log('$stateParams from OuterCtrl after almost 20 milliseconds: ', $stateParams);
  }, 20);
  $timeout(function() {
    console.log('$stateParams from OuterCtrl after one second: ', $stateParams);
  }, 1000);

});
