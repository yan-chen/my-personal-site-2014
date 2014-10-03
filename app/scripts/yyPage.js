'use strict';

angular.module('myPageApp', [ 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate'])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
    }]);
