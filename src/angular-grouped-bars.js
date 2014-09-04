 /* jslint node: true */
 /* global angular, Please, Rainbow */
"use strict";

var app = angular.module('prestigos.groupedBars', []);

app.directive( 'groupedBars', groupedBars );
app.directive( 'bar', bar );

groupedBars.$inject = ['$templateCache'];
function groupedBars ( templateCache ) {
  return {
    scope:{},
    restrict: 'AE',
    controller: ['$scope', function ( scope ) {
      this.semaphore = new Rainbow();
      this.semaphore.setSpectrum( '#fe0002', '#ffff01', '#45d100' );
    }]
  };
}

bar.$inject = ['$templateCache'];
function bar ( templateCache ) {
  function shadeColor(color, percent) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
  }

  return{
    scope: {
      value: '@',
      width: '='
    },
    restrict: 'AE',
    require: '^groupedBars',
    template: templateCache.get('templates/bar.html'),
    link: function( scope, elem, attrs, parent ) {
      scope.color = '#' + parent.semaphore.colorAt( scope.width );
      scope.barCss = {
        "width": scope.width + "%",
        "background-color": scope.color
      };

      scope.pointCss = {
        "color": shadeColor( scope.color, -40 ),
        "background-color": shadeColor( scope.color, -10 )
      };

      scope.message = "Hi, Parent directive";
    }
  };
}
