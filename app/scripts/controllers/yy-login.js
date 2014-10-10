'use strict';

angular.module('myPageApp')
    .controller('loginCtrl', ['$scope', '$modal', function ($scope, $modal) {
//var loginModalCtrl = function ($scope, $modalInstance, items, $rootScope, AUTH_EVENTS, AuthService) {


        var loginModalCtrl = function ($scope, $modalInstance, $rootScope, localStorageService) {

            $scope.credentials = {
                adminId: '',
                password: '',
                rememberMe: ''
            };
            if (localStorageService.get('previousLoggedInUser')) {
                $scope.credentials.adminId = localStorageService.get('previousLoggedInUser');
            }
            $scope.adminLogin = function (credentials) {
                $scope.isLoginFailed = false;

                if (credentials.adminId === 'yyadmin' && credentials.password === 'admin') {
                    $rootScope.isAdmin = true;
                    $rootScope.adminId = credentials.adminId;
                    $scope.$broadcast('admin logged in');
                    console.log('you are logged in as ' + credentials.adminId);
                    $modalInstance.close($scope.credentialsVerified, $scope.userName);


                    if (credentials.rememberMe) {
                        localStorageService.set('previousLoggedInUser', credentials.adminId);
                    }
                } else {
                    $scope.isLoginFailed = true;
                    localStorageService.set('previousLoggedInUser', null);
                }

            };

            /*

             $scope.login = function (credentials) {
             AuthService.login(credentials).then(function (user) {
             $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
             $scope.setCurrentUser(user);
             $scope.isLoginFailed = false;
             }, function () {
             $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
             $scope.isLoginFailed = true;
             });
             };
             */

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };



        $scope.openLoginModal = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'views/login.html',
                controller: loginModalCtrl,
                size: size,
                resolve: {}
            });

            modalInstance.result.then(function () {
            }, function () {
            });
        };
    }]);


