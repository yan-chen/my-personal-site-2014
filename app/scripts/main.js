'use strict';

angular.module('myPageApp')
    .controller('MainCtrl', ['$scope', '$location', 'localStorageService', function ($scope, $location, localStorageService) {
        $scope.locale = 'en';
        $scope.changeLang = function (str) {
            $scope.locale = str;
        };

        $scope.saveToLocal = function (objectId, object) {
            localStorageService.set('yyPage-' + $scope.currentTab + '-' + objectId, object);
            console.log('saved to: yyPage-' + $scope.currentTab + '-' + objectId);
        };

        $scope.isAsideVisible = false;
        $scope.toggleAsideNav = function () {
            $scope.isAsideVisible = !$scope.isAsideVisible;
        };

        $scope.returnViewPortSize = function () {
            var viewPortSize;
            if (window.innerWidth < 342) {
                viewPortSize = 'xs';
            } else if (window.innerWidth < 767) {
                viewPortSize = 'sm';
            } else if (window.innerWidth < 968) {
                viewPortSize = 'md';
            } else {
                viewPortSize = 'lg';
            }
            return viewPortSize;
        };
    }]);
