'use strict';

angular.module('myPageApp')
    .directive('yyVideoDir', ['$sce', function($sce) {
        return{
            restrict: 'EA',
            scope: {
                'videoSrc': '='
            },
            replace: true,
            template: '<iframe frameborder="0" width="560" height="315" allowfullscreen ng-src="{{videoSrc}}" class="yy-video-dir-iframe"></iframe>',
            link: function (scope) {
//                scope.trustedVideoSrc = $sce.trustAsResourceUrl(scope.videoSrc);
//                console.log("videoSrc is " + scope.trustedVideoSrc);
            }
        };
}])
;
