'use strict';

describe('Controller: PhoneCtrl', function () {

  // load the controller's module
  beforeEach(module('phoneApp'));

  var PhoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneCtrl = $controller('PhoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhoneCtrl.awesomeThings.length).toBe(3);
  });
});
