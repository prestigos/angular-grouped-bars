app.run( templates );

templates.$inject = ['$templateCache'];
function templates( $templateCache ) {
  'use strict';

  $templateCache.put('templates/bar.html',
    "<div class=bar-container><div class=upper-bar><span ng-bind=title></span></div><div class=bar><div ng-transclude=ng-transclude></div></div></div>"
  );


  $templateCache.put('templates/grouped_bars.html',
    "<!DOCTYPE html><p ng-bind=title></p><div class=grouped-bars-container><div ng-transclude></div></div>"
  );


  $templateCache.put('templates/pin.html',
    "<!DOCTYPE html><div ng-style=pinStyle class=pin></div>"
  );
}