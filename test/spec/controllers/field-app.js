'use strict';

describe('Controller: FieldAppCtrl', function () {

  // load the controller's module
  beforeEach(module('phoneApp'));

  var FieldAppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FieldAppCtrl = $controller('FieldAppCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FieldAppCtrl.awesomeThings.length).toBe(3);
  });
});
