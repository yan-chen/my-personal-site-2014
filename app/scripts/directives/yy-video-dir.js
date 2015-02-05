'use strict';

angular.module('myPageApp')
    .directive('yyVideoDir', [function () {
        return{
            restrict: 'EA',
            scope: {
                'videoSrc': '='
            },
            replace: true,
            //template: '<iframe frameborder="0" allowfullscreen ng-src="{{videoSrc}}" class="yy-video-dir-iframe"></iframe>',
            template: '  <div class="yy-responsive-wrapper">' +
                '<object type="application/x-shockwave-flash" data="{{videoSrc}}">' +
                '<param name="movie" value="{{videoSrc}}"></param>' +
                '<param name="allowFullScreen" value="true"></param>' +
                '<param name="allowscriptaccess" value="always"></param>' +
                '<embed ng-src="{{videoSrc}}" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></embed>' +
                '</object>' +
                '</div>',
            link: function (scope) {
//                scope.trustedVideoSrc = $sce.trustAsResourceUrl(scope.videoSrc);
//                console.log("videoSrc is " + scope.trustedVideoSrc);
            }
        };
    }])
;
