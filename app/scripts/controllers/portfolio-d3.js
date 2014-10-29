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

        $scope.fetchData = function () {
            $http.get($scope.currentDataSource.url, {cache: $templateCache})
                .success(function (data) {
                    $scope.d3BarChartDataSet = data[0];
                    $scope.d3ColumnChartDataSet = data[1];
                })
                .error(function (data) {
                    return data || "Request failed";
                });
        };

        $scope.fetchData();

        $scope.$watch('currentDataSource', function (newData) {
            $scope.fetchData();
        });

        $scope.returnSelectedItem = function (item) {
            $scope.$apply(function () {
                $scope.currentSelectedItem = item;
            });
        };
    }]);
