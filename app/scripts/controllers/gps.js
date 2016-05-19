'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:GpsCtrl
 * @description
 * # GpsCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('GpsCtrl', function ($scope, $http, $stateParams, $interval, jobs) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    var address = $stateParams.addr;

    console.log(jobs);

    var job = jobs[0];
    for (var key in job) {
      if (key !== 'ID') {
        var msg = new SpeechSynthesisUtterance(key);
        window.speechSynthesis.speak(msg);

        var message = job[key];
        msg = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(msg);
      }
    }

    $http({
      method: 'POST',
      url: 'http://anna-nr.mybluemix.net/mark',
      data: { driving: true }
    }).then(function successCallback(response) {
      console.log(response);
    });

    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCwY6PsJaa6VVFECAhnPTJZKi3DFpb9iEE'
    }).then(function successCallback(response) {
      if (response.data.results) {
        var geo = response.data.results[0].geometry;
        $scope.map = { center: { latitude: geo.location.lat, longitude: geo.location.lng }, zoom: 15 };
        console.log($scope.map);
      }
    }, function errorCallback(response) {
      console.log(response);
    });

    $interval(function () {
      $http({
        method: 'GET',
        url: 'http://anna-nr.mybluemix.net/mark'
      }).then(function successCallback(response) {
        var msgs = response.data.messages;
        console.log(msgs);

        for (var i = 0; i < msgs.length; ++i) {
          if (!msgs[i].read) {
            var text = msgs[i].msg;
            var msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            readMessage(msgs[i]);
          }
        }
      }, function errorCallback(response) {
        console.log(response);
      });
    }, 2000);

    var readMessage = function(text) {
      $http({
        method: 'PUT',
        url: 'http://anna-nr.mybluemix.net/readmark',
        data: text
      }).then(function successCallback(response) {
        console.log(response);
      });
    };

  });
