'use strict';

angular.module('asheSiteApp')
  .directive('embed', ($window) => {
    return {
      template: '<iframe src></iframe>',
      restrict: 'E',
      replace: true,
      scope: {
        url: '='
      },
      link: (scope, elem, attrs) => {
        $($window).on('scroll', () => {
          if($($window).scrollTop() > $(elem).offset().top - 300 && !$(elem).attr('src')) {
            $(elem).attr('src', scope.url);
          }
        })
      }
    };
  });
