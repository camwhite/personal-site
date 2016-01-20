'use strict';

angular.module('asheSiteApp', [
  'asheSiteApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'smoothScroll',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
