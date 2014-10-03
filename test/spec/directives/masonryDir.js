'use strict';

describe('Directive: yyMasonryDir', function () {

  // load the directive's module
  beforeEach(module('myPageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div yy-masonry-dir></div>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the masonry directive');
  }));
});
