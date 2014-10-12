'use strict';

describe('Controller: PortfolioCalendarWidgetCtrl', function () {

  // load the controller's module
  beforeEach(module('myPageApp'));

  var PortfolioCalendarWidgetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      PortfolioCalendarWidgetCtrl = $controller('PortfolioCalendarWidgetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
