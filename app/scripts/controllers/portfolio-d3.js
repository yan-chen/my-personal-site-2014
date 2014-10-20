'use strict';

angular.module('myPageApp')
    .controller('PortfolioD3Ctrl', ['$scope', '$http', '$templateCache', function ($scope, $http, $templateCache) {
        $scope.dataSource = [
            {
                'label': 'Sample Dataset #1',
                'url': 'data/yy_portfolio_d3_data_1.json'
            },
            {
                'label': 'Sample Dataset #2',
                'url': 'data/yy_portfolio_d3_data_2.json'
            }
        ];
        $scope.currentDataSource = $scope.dataSource[0];

        $scope.fetchData = function (url) {
            var tempData = $http.get(url, {cache: $templateCache})
                .success(function (data) {
                    return data;
                })
                .error(function (data) {
                    return data || "Request failed";
                });
            return tempData
        };

        $scope.$watch('currentDataSource', function (newVal) {
            if (newVal) {
                $scope.fetchData($scope.currentDataSource.url);
            }
        });

        $scope.fetchData($scope.currentDataSource.url).then(function (response) {
            $scope.d3BarChartDataSet = response.data[0];
        });


    }]);
