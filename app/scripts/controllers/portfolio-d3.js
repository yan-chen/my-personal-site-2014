'use strict';

angular.module('myPageApp')
    .controller('PortfolioD3Ctrl', ['$http', '$templateCache', function ($scope, $http, $templateCache) {

        $scope.fetchData = function (url) {
            $http.get('data/d3_bar_chart.json', {cache: $templateCache})
                .success(function (data) {
                    return data;
                })
                .error(function (data) {
                    return data || "Request failed";
                });
            };

        $scope.url = 'data/d3_bar_chart.json';
        $scope.fetchData().then(function (data) {
            $scope.d3BarchartData = data;
        });

    }]);
