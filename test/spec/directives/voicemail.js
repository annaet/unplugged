'use strict';

describe('Directive: voicemail', function () {

  // load the directive's module
  beforeEach(module('phoneApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<voicemail></voicemail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the voicemail directive');
  }));
});
