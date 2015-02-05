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
        $scope.initialDataSource = $scope.dataSource[0];
        $scope.activeSeletedIndex = 0;

        $scope.fetchData = function (url) {
            $http.get(url, {cache: $templateCache})
                .success(function (data) {
                    $scope.d3BarChartDataSet = data[0];
                    $scope.d3ColumnChartDataSet= data[1];
                    $scope.d3LineChartDataSet= data[1];
                })
                .error(function (data) {
                    console.log(data || 'Request failed');
                });
        };
        $scope.setActiveSelectedIndex = function (index) {
            $scope.activeSeletedIndex = index;
        };

        $scope.fetchData($scope.initialDataSource.url);

        $scope.returnSelectedItem = function (item) {
            $scope.$apply(function () {
                $scope.currentSelectedItem = item;
            });
        };
    }]);
