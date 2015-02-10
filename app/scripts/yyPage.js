'use strict';

angular.module('myPageApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate', 'd3','importio'])

    .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://www.youtube.com/**'
        ]);


        $urlRouterProvider.when('', 'about-me');
        $urlRouterProvider.when('/portfolio', '/portfolio/modal-view');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('mainNav', {
                url: '/:navId',
                templateUrl: function ($stateParams) {
                    return 'views/' + $stateParams.navId + '/'+ $stateParams.navId + '.html';
                }
            })
            .state('mainNav.subNav', {
                url: '/:subNavId',
                templateUrl: function ($stateParams) {
                    return 'views/'  + $stateParams.navId + '/'+ $stateParams.navId + '.' + $stateParams.subNavId+ '.html';
                }
            })
            .state('mainNav.subNav.child', {
                url: '/:childId',
                templateUrl: function ($stateParams) {
                    return 'views/'  + $stateParams.navId + '/'+ $stateParams.navId + '.container-' + $stateParams.childId+ '.html';
                }
            })
            .state('404', {
                url: '/404',
                template: '<h3>Sorry, Page Not Found!</h3>'
            });
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.currentTab = $location.path().split('/')[1];
        });

        $rootScope.isTouchDevice = !!('ontouchstart' in window);

        importio.init({
            'auth': {
                'userGuid': '5abf7ccf-6587-4290-95b9-c8145c6464f6',
                'apiKey': 'nJfLaOMWny+snD+8CnozqN6JLPHmRmrd9Qbd64f4y2/2haUG+2HRmxK/Pt1SY5ftfMirY+L/22rvx3Rret6lRw==',
            },
            'host': 'import.io'
        });

    }]);
