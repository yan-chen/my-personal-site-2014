'use strict';

/**
 * @ngdoc function
 * @name myPageApp.controller:PortfoliocalendarwidgetCtrl
 * @description
 * # PortfoliocalendarwidgetCtrl
 * Controller of the myPageApp
 */
angular.module('myPageApp')
    .controller('PortfolioCalendarWidgetCtrl', ['$scope', function ($scope) {

        $scope.currentWidgetTheme = '000000';
        $scope.setColorTheme = function (key) {
            var widgetColorThemes = {
                'primary': '78bde7',
                'success': '5cb85c',
                'info': '5BC0E0',
                'warning': 'f0ad4e',
                'danger': 'd9534f',
                'dark': '000000'
            };
            $scope.currentWidgetTheme = widgetColorThemes[key];
        };

        $scope.hexToRgba = function (hexVal, opacity) {
            return 'rgba(' + parseInt(hexVal.substr(0, 2), 16) + ',' + parseInt(hexVal.substr(2, 2), 16) + ',' + parseInt(hexVal.substr(4, 2), 16) + ',' + opacity + ')';
        };

        $scope.ppTestData = {
            daysCount: '25',
            associateCount: '3',
            cvpCount: '80'
        };

        $scope.validateDateCount = function (num) {
            $scope.ppTestData.daysCount = (num.toString().length < 2 ? '0' + num : num ).toString();
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


    }]);
