'use strict';

/**
 * @ngdoc overview
 * @name phoneApp
 * @description
 * # phoneApp
 *
 * Main module of the application.
 */
angular
  .module('phoneApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/phone', {
        templateUrl: 'views/phone.html',
        controller: 'PhoneCtrl',
        controllerAs: 'phone'
      })
      .when('/field-app', {
        templateUrl: 'views/field-app.html',
        controller: 'FieldAppCtrl',
        controllerAs: 'fieldApp'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
