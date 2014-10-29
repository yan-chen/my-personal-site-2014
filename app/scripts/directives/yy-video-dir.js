'use strict';

angular.module('myPageApp')
    .directive('yyVideoDir', ['$sce', function ($sce) {
        return{
            restrict: 'EA',
            scope: {
                'videoSrc': '='
            },
            replace: true,
//            template: '<iframe frameborder="0" width="560" height="315" allowfullscreen ng-src="{{videoSrc}}" class="yy-video-dir-iframe"></iframe>',
            template: '  <div class="yy-video-wrapper">' +
                '<object width="100%">' +
                '<param name="movie" value="http://www.youtube.com/v/mDRYnaajUcY&hl=en&fs=1"></param>' +
                '<param name="allowFullScreen" value="true"></param>' +
                '<param name="allowscriptaccess" value="always"></param>' +
                '<embed src="{{videoSrc}}" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="100%"></embed>' +
                '</object>' +
                '</div>',
            link: function (scope) {
//                scope.trustedVideoSrc = $sce.trustAsResourceUrl(scope.videoSrc);
//                console.log("videoSrc is " + scope.trustedVideoSrc);
            }
        };
    }])
;
