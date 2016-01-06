'use strict';

angular.module('asheSiteApp')
.controller('MainController', ($scope, $http, $timeout) => {
  $scope.user = {};
  $scope.sent = false;
  $scope.callout = `Don't be a stranger.. I want to hear from you!`

  $scope.send = (form) => {
    if(form.$valid) {
      $http.post('api/emails', $scope.user).then(() => {
        $scope.user = {};
        $scope.sent = true;

        $timeout(() => {
          $scope.callout = `Thanks for reaching out! Look for a reply very soon :)`
        }, 1500);
      });
    }
  }
});

