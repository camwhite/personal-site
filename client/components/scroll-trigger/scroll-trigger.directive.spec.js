'use strict';

describe('Directive: scrollTrigger', function () {

  // load the directive's module
  beforeEach(module('asheSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-trigger></scroll-trigger>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollTrigger directive');
  }));
});
