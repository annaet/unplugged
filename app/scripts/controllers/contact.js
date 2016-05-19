'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('ContactCtrl', function ($scope, $stateParams, $http, $uibModal) {
    $scope.contact = $stateParams.contactid;

    $http({
      method: 'GET',
      url: 'http://anna-nr.mybluemix.net/' + $scope.contact
    }).then(function successCallback(response) {
      $scope.mark = response.data;
      // for (var i = 0; i < $scope.mark.messages.length; ++i) {
      //   var text = $scope.mark.messages[i];
      //   var msg = new SpeechSynthesisUtterance(text);
      //   window.speechSynthesis.speak(msg);
      // }
    }, function errorCallback(response) {
      console.log(response);
    });

    $scope.call = function() {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/voicemail.html',
        controller: 'VoicemailCtrl',
        size: 'sm',
        resolve: {
          contact: function () {
            return $scope.contact;
          }
        }
      });

      modalInstance.result.then(function () {
        var listener = new webspeech.Listener();
        listener.listen("en", function(text) {
          console.log(text);

          $http({
            method: 'POST',
            url: 'http://anna-nr.mybluemix.net/message' + $scope.contact,
            data: { messages: [text] }
          }).then(function successCallback(response) {
            console.log(response.data);
            $scope.mark = response.data;
          }, function errorCallback(response) {
            console.log(response);
          });
        });
      });
    };

  });
