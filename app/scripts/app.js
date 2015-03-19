'use strict';

/**
 * @ngdoc overview
 * @name hydrantsDashboardApp
 * @description
 * # hydrantsDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('hydrantsDashboard', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'agsserver'
  ])
  .constant("FIREDEPTS", {
    "raleigh": {
      "name": "City of Raleigh Fire Department",
      "title": "Raleigh",
      "icon": "images/Raleigh_Fire_Department_Logo.png"
    },
    "garner": {
      "name": "Town of Garner Fire Department",
      "title": "Garner",
      "icon": "images/garner_fire_logo.jpg"
    },
    "wakeforest": {
      "name": "Town of Wake Forest Fire Department",
      "title": "Wake Forest",
      "icon": "images/wakeforest_logo.jpg"
    },
    "zebulon": {
      "name": "Town of Zebulon Fire Department",
      "title": "Zebulon",
      "icon": "images/zeb_seal.png"
    },
    "kightdale": {
      "name": "Town of Kightdale Fire Department",
      "title": "Kightdale",
      "icon": "images/kdaleseal.png"
    },
    "wendell": {
      "name": "Town of Wendell Fire Department",
      "title": "Wendell",
      "icon": "images/wendellfire6.jpg"
    },
    "rolesville": {
      "name": "Town of Rolesville Fire Department",
      "title": "Rolesville",
      "icon": "images/WakeNewHopePatch.png"
    }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/responseZone/:zone', {
        templateUrl: 'views/responsezone.html',
        controller: 'ResponsezoneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
