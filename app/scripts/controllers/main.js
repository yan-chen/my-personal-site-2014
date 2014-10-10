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
