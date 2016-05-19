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
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider
        .otherwise('');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('phone', {
            url: '/phone',
            templateUrl: 'views/phone.html',
            controller: 'PhoneCtrl'
        })
        .state('field-app', {
            url: '/field-app',
            templateUrl: 'views/field-app.html',
            controller: 'FieldAppCtrl'
        })
        .state('contact', {
            url: '/contact/:contactid',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        });
  });
