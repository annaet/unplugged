'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:PhoneCtrl
 * @description
 * # PhoneCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('PhoneCtrl', function ($scope) {
    $scope.contacts = ['Andy', 'Ben', 'Carol', 'Dave', 'Erin'];

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
