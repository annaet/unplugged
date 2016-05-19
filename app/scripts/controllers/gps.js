'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:GpsCtrl
 * @description
 * # GpsCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('GpsCtrl', function ($scope, $http, $stateParams) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    var address = $stateParams.addr;

    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCwY6PsJaa6VVFECAhnPTJZKi3DFpb9iEE'
    }).then(function successCallback(response) {
      if (response.data.results) {
        var geo = response.data.results[0].geometry;
        $scope.map = { center: { latitude: geo.location.lat, longitude: geo.location.lng }, zoom: 8 };
        console.log($scope.map);
      }
    }, function errorCallback(response) {
      console.log(response);
    });



  });
