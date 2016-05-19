'use strict';

/**
 * @ngdoc function
 * @name phoneApp.controller:FieldAppCtrl
 * @description
 * # FieldAppCtrl
 * Controller of the phoneApp
 */
angular.module('phoneApp')
  .controller('FieldAppCtrl', function ($scope, jobs) {
    $scope.jobs = jobs;
/*    ['1: Service for Mrs Smith', '2: Breakdown for Mr Jones', '3: Service for Mr Bloggs'];*/
  });
