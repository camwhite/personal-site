'use strict';

angular.module('asheSiteApp')
  .directive('scrollTrigger', ($window) => {
    return {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        $($window).on('scroll', () => {
          if($($window).scrollTop() > $(elem).offset().top / 2) {
            elem.addClass('active');
          }
        })
      }
    };
  });
