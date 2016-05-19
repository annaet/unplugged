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
      Address: '11 The Avenue',
      Postcode: 'DA11 0NA',
      Appliance: 'Potterton 100c',
      Type: 'Service'
    },{
      ID: '2',
      Name: 'Mrs Jones',
      Address: 'Mill Bay, Scarborough Lane',
      Postcode: 'ME1 3XU',
      Appliance: 'Alpha CD24lpg',
      Type: 'Breakdown'
    },{
      ID: '3',
      Name: 'Mr Bloggs',
      Address: 'Lakeside House, The Causeway',
      Postcode: 'TW18 3BY',
      Appliance: 'Baxi Bermuda 97y',
      Type: 'Service'
    }];
  });
