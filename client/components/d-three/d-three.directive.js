'use strict';

angular.module('asheSiteApp')
  .directive('dThree', ($window) => {
    return {
      template: '<div id="viz"></div>',
      restrict: 'E',
      link: (scope, elem, attrs) => {
        new Visualizer(elem, $window);
      }
    };
  });

class Visualizer {
  constructor(elem, $window) {
    this.pixels = [];
    this.graph = d3.select(elem[0]);

    let delay = 0;
    for(var i = 0; i <= 5; i++) {
      this.pixels.push({
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        duration: delay
      });
      delay += 500
    }

    this.drawVisuals(this.pixels);

    let counter = 0;
    $(elem).mousemove((evt) => {
      counter++;
      if(counter % 10 == 0) {
        this.graph.select('svg').remove();
      }
      if(counter % 20 != 0) {
        return;
      }

      this.pixels = [];

      let delay = 0;
      for(var i = 0; i <= 5; i++) {
        this.pixels.push({
          top: evt.clientY / $(elem).height() * 100,
          left: evt.clientX / $(elem).width() * 100,
          duration: delay
        });
      }
      this.drawVisuals(this.pixels)
    });
  }
  drawVisuals(data) {
    this.graph.selectAll('#viz').data(data).enter().append('svg')
      .attr('width', '10')
      .attr('height', '10')
      .style('position', `absolute`)
      .style('top', (d) => `${d.top}%`)
      .style('left', (d) => `${d.left}%`)
      .style('background', (d) => `hsl(${d.top * 11}, 100%, 70%)`)
      .style('border-radius', '100%')
      .style('transform', 'translate(-50%, -50%) scale(0)')
      .style('z-index', '1')
    .transition()
      .delay((d) => d.duration)
      .duration(3000)
      .style('transform', 'translate(-50%, -50%) scale(300)')
  }
}
