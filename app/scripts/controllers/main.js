'use strict';

angular.module('myPageApp')
    .controller('MainCtrl', ['$scope', '$location', 'localStorageService', '$rootScope', function ($scope, $location, localStorageService, $rootScope) {
        $scope.locale = 'en';
        $scope.changeLang = function (str) {
            $scope.locale = str;
        };

        $scope.saveToLocal = function (objectId, object) {
            localStorageService.set('yyPage-' + $rootScope.currentTab + '-' + objectId, object);
            console.log('saved to: yyPage-' + $rootScope.currentTab + '-' + objectId);
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

        $scope.isViewPortSizeSm = function () {
            if (window.innerWidth < 767) {
                return true;
            }
        };

        $(window).resize(function () {
            if (!$scope.isViewPortSizeSm()) {
                $scope.$apply($scope.isAsideVisible = false);
            }
        });
    }]);
