app.run( templates );

templates.$inject = ['$templateCache'];
function templates( $templateCache ) {
  'use strict';

  $templateCache.put('templates/bar.html',
    "<div class=bar><span ng-style=barCss><div ng-bind=value ng-style=pointCss class=point></div></span></div>"
  );
}