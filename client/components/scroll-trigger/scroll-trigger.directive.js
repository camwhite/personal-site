'use strict';

angular.module('asheSiteApp')
  .directive('scrollTrigger', ($window) => {
    return {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        $($window).on('scroll', () => {
          if($($window).scrollTop() > $(elem).offset().top - $($window).height() && !$(elem).hasClass('active')) {
            elem.addClass('active');
          }
        })
      }
    };
  });
