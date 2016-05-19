'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('JobCtrl', function ($scope, $stateParams) {
    $scope.job = $stateParams.jobid;
    /*console.log($stateParams)*/
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
