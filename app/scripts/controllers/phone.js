'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:PhoneCtrl
 * @description
 * # PhoneCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('PhoneCtrl', function ($scope, $http) {
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

    $http({
      method: 'GET',
      url: 'http://anna-nr.mybluemix.net/mark'
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.contacts[5].driving = response.data.driving;
      console.log(response.data.eta - Date.now());
      $scope.contacts[5].eta = response.data.eta - Date.now();
    }, function errorCallback(response) {
      console.log(response);
    });
  });
