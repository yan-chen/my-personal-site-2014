'use strict';

describe('Directive: yyVideoDir', function () {

  // load the directive's module
  beforeEach(module('myPageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yy-video-dir></yy-video-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the yyVideoDir directive');
  }));
});
