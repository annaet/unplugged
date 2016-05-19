'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:GpsCtrl
 * @description
 * # GpsCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('GpsCtrl', function ($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
