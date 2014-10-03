'use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('myPageApp'));

  var loginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      loginCtrl = $controller('loginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
