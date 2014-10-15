'use strict';

describe('Directive: yyD3BarChart', function () {

  // load the directive's module
  beforeEach(module('myPageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yy-d3-bar-chart></yy-d3-bar-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the yyD3BarChart directive');
  }));
});
