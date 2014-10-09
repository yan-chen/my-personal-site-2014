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

        $scope.isTouchDevice = !!(“ontouchstart” in window);
    }]);
