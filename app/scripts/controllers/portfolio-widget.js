'use strict';

/**
 * @ngdoc function
 * @name myPageApp.controller:PortfoliocalendarwidgetCtrl
 * @description
 * # PortfoliocalendarwidgetCtrl
 * Controller of the myPageApp
 */
angular.module('myPageApp')
    .controller('PortfolioCalendarWidgetCtrl', function ($scope) {

        $scope.widgetColorTheme = '000000';
        $scope.ppTestData = {
            daysCount: '25',
            associateCount: '3',
            cvpCount: '80'
        };

        $scope.validateDateCount = function (num) {
            console.log((num.toString().length < 2 ? '0' + num : num ).toString());
            return ( num.toString().length < 2 ? '0' + num : num ).toString();
        };

        $scope.today = new Date();

        $scope.greeting = function (date) {
            var greetingMsg;
            if (date.getHours() >= 12) {
                greetingMsg = 'Afternoon';
            } else if (date.getHours() >= 18) {
                greetingMsg = 'Evening';
            } else {
                greetingMsg = 'Morning';
            }
            return greetingMsg;
        };


        $scope.hexToRgba = function (hexVal, opacity) {
            return 'rgba(' + parseInt(hexVal.substr(0, 2), 16) + ',' + parseInt(hexVal.substr(2, 2), 16) + ',' + parseInt(hexVal.substr(4, 2), 16) + ',' + opacity + ')';
        };

    });
