'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('JobCtrl', function ($scope, $stateParams, jobs)
  {
    for (var i = 0; i < jobs.length; i++) {
      if (jobs[i].ID === $stateParams.jobid) {
        $scope.ID = jobs[i].ID;
        $scope.Name = jobs[i].Name;
        $scope.Address = jobs[i].Address;
        $scope.Type = jobs[i].Type;
      }
    }

    console.log($stateParams)
  });
