'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('ContactCtrl', function ($scope, $stateParams) {
    $scope.contact = $stateParams.contactid;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
