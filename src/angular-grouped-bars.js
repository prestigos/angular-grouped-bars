 /* jslint node: true */
 /* global angular */
"use strict";

var app = angular.module('prestigos.groupedBars', []);

app.directive( 'groupedBars', groupedBars );
app.directive( 'barra', bar );
app.directive( 'pin', pin );

groupedBars.$inject = ['$templateCache'];
function groupedBars ( templateCache ) {
  return {
    scope:{ title: '@' },
    restrict: 'E',
    template: templateCache.get('templates/grouped_bars.html'),
    transclude: true
  };
}

bar.$inject = ['$templateCache'];
function bar ( templateCache ) {
  return{
    scope: { title: '@' },
    restrict: 'E',
    transclude: true,
    template: templateCache.get('templates/bar.html')
  };
}

pin.$inject = ['$templateCache', '$timeout'];
function pin ( templateCache, timeout ) {
  return{
    scope: {
      position: '@',
      color: '='
    },
    restrict: 'E',
    template: templateCache.get('templates/pin.html'),
    link: function( scope, elem, attrs ) {
      var parent,
        leftPosition = parseInt( scope.position );

      scope.pinStyle = {
        "background-color": scope.color
      };

      function setPinLocation () {
        parent = angular.element( elem[0].parentElement );
        scope.pinStyle.left = (parent[0].clientWidth * (leftPosition / 100));
        timeout( setPinLocation, 100 );
      }

      timeout( setPinLocation, 100);
    }
  };
}
