'use strict';

describe('Controller: Route1Ctrl', function () {

  // load the controller's module
  beforeEach(module('testy3App'));

  var Route1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Route1Ctrl = $controller('Route1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
