'use strict';

angular.module('myPageApp')
    .directive('yyMasonryDir', ['$timeout', function ($timeout) {
        return{
            restrict: 'EA',
            transclude: true,
            replace: true,
            template: '<div data-ng-transclude></div>',
            link: function (scope, element) {

                $timeout(function () {
                    element.masonry({
                        // options
//                        columnWidth: 200,
                        //gutter: 5,
                        itemSelector: '.masonry-item'
                    });
                }, 500);

                element.on('$destroy', function () {
                    element.masonry('destroy');
                });
            }
        };
    }]);
