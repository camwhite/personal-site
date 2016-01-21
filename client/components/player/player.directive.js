'use strict';

angular.module('asheSiteApp')
  .directive('player', ($window) => {
    return {
      template: '<video src="/assets/videos/speakto.mp4" loop></video>',
      restrict: 'E',
      replace: true,
      link: (scope, elem, attrs) => {
        $($window).on('scroll', () => {
          if($($window).scrollTop() > $(elem).offset().top - $($window).height() + $(elem).height() && elem[0].currentTime == 0) {
            elem[0].play();
          }
        })
      }
    };
  });
