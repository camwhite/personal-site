'use strict';

angular.module('asheSiteApp')
.controller('MainController', ($scope, $http) => {
  $scope.user = {};

  $scope.send = (form) => {
    if(form.$valid) {
      $http.post('api/emails', $scope.user).then(() => {
        $scope.user = {};
      });
    }
  }
});

