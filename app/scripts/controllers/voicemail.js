'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:VoicemailCtrl
 * @description
 * # VoicemailCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('VoicemailCtrl', function ($scope, $uibModalInstance, contact) {
    $scope.contact = contact;

    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
