'use strict';

angular.module('myPageApp')
    .controller('loginCtrl', ['$scope', '$modal', function ($scope, $modal) {

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.openLoginModal = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'views/login.html',
                controller: loginModalCtrl,
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
            });
        };
    }]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.


//var loginModalCtrl = function ($scope, $modalInstance, items, $rootScope, AUTH_EVENTS, AuthService) {
var loginModalCtrl = function ($scope, $modalInstance, items) {

    $scope.isLoginFailed = false;

    $scope.credentials = {
        username: '',
        password: ''
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

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
        $log.info('Last Logged in at: ' + new Date());
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
