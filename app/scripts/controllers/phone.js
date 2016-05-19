'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:PhoneCtrl
 * @description
 * # PhoneCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('PhoneCtrl', function ($scope, $http, $interval) {
    $scope.contacts = [{
      name: 'Andy',
      driving: false
    },{
      name: 'Ben',
      driving: false
    },{
      name: 'Carol',
      driving: false
    },{
      name: 'Dave',
      driving: false
    },{
      name: 'Erin',
      driving: false
    },{
      name: 'Mark',
      driving: false
    }];

    $interval(function () {
      $http({
        method: 'GET',
        url: 'http://anna-nr.mybluemix.net/mark'
      }).then(function successCallback(response) {
        $scope.contacts[5].driving = response.data.driving;
        $scope.contacts[5].eta = response.data.eta - Date.now();
      }, function errorCallback(response) {
        console.log(response);
      });
    }, 1000);

  });
