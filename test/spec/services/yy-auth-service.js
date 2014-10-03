'use strict';

describe('Service: authService', function () {

  // load the service's module
  beforeEach(module('myPageApp'));

  // instantiate service
  var authService;
  beforeEach(inject(function (authService) {
      authService = authService;
  }));

  it('should do something', function () {
    expect(!!authService).toBe(true);
  });

});
