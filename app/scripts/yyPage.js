'use strict';

angular.module('myPageApp', [ 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate','d3'])

    .config(['$stateProvider', '$urlRouterProvider','$sceDelegateProvider', function ($stateProvider, $urlRouterProvider,$sceDelegateProvider) {

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://www.youtube.com/**'
        ]);


        $urlRouterProvider.when('', 'about-me');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('about-me', {
                url: '/about-me',
                templateUrl: 'views/about-me.html'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'views/portfolio.html'
            })
            .state('personal', {
                url: '/personal',
                templateUrl: 'views/personal.html'
            })
            .state('contact-me', {
                url: '/contact-me',
                templateUrl: '../views/contact-me.html'
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

    }]);
