'use strict';

/**
 * @ngdoc service
 * @name phoneApp.jobs
 * @description
 * # jobs
 * Service in the phoneApp.
 */
angular.module('phoneApp')
  .service('jobs', function () {
    return [{
      ID: '1',
      Name: 'Mrs Smith',
      Address: '11 The Avenue DA11 0NA',
      Type: 'Service'
    },{
      ID: '2',
      Name: 'Mrs Jones',
      Address: 'Mill Bay Scarborough Lane ME1 3XU',
      Type: 'Breakdown'
    },{
      ID: '3',
      Name: 'Mr Bloggs',
      Address: 'Swan House The Causeway TW18 3BY',
      Type: 'Service'
    }];
  });
