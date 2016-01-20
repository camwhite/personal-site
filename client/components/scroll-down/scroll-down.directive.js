'use strict';

angular.module('asheSiteApp')
  .directive('scrollDown', ($timeout, $window, smoothScroll) => {
    return {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        /*$timeout(() => {*/
          //if($($window).scrollTop() < $($window).height()) {
            //smoothScroll(elem[0])
          //}
        /*}, 6500);*/
      }
    };
  });
