'use strict';

describe('Controller: PortfolioD3Ctrl', function () {

  // load the controller's module
  beforeEach(module('myPageApp'));

  var PortfolioD3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioD3Ctrl = $controller('PortfolioD3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
