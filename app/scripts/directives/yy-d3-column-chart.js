'use strict';

/**
 * @ngdoc directive
 * @name myPageApp.directive:yyD3ColumnChart
 * @description
 * # yyD3ColumnChart
 */
angular.module('myPageApp')
    .directive('yyD3ColumnChart', ['$window', '$timeout', 'd3Service', function ($window, $timeout, d3Service) {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                label: '@',
                yyOnClick: '&'
            },
            link: function postLink(scope, element, attrs) {
                d3Service.d3().then(function (d3) {

                    var svgChart = d3.select(element[0])
                        .append('svg')
                        .style('width', 500);


                    scope.render = function (data) {
                        /* svgChart.selectAll('*').remove();
                         if (!data) {
                         return;
                         }*/

                        var renderTimeout = $timeout(function () {

                            var WIDTH = 500,
                                HEIGHT = 150,
                                MARGINS = {
                                    top: 15,
                                    right: 15,
                                    bottom: 20,
                                    left: 50
                                },
                                xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(scope.data, function (d) {
                                    return d.x;
                                }), d3.max(scope.data, function (d) {
                                    return d.x;
                                })]),

                                yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(scope.data, function (d) {
                                    return d.y;
                                }), d3.max(scope.data, function (d) {
                                    return d.y;
                                })]),
                                xAxis = d3.svg.axis()
                                    .scale(xRange)
                                    .tickSize(10)
                                    .tickSubdivide(true),
                                yAxis = d3.svg.axis()
                                    .scale(yRange)
                                    .tickSize(10)
                                    .orient('left')
                                    .tickSubdivide(true);

                            svgChart.append('svg:g')
                                .attr('class', 'x axis')
                                .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
                                .call(xAxis);

                            svgChart.append('svg:g')
                                .attr('class', 'y axis')
                                .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
                                .call(yAxis);


                            var lineFunc = d3.svg.line()
                                .x(function(d) {
                                    return xRange(d.x);
                                })
                                .y(function(d) {
                                    return yRange(d.y);
                                })
                                .interpolate('linear');

                            svgChart.append('svg:path')
                                .attr('d', lineFunc(scope.data))
                                .attr('stroke', 'blue')
                                .attr('stroke-width', 2)
                                .attr('fill', 'none');
                        });
                    };

                    $window.onresize = function () {
                        scope.$apply();
                    };

                    scope.$watch(function () {
                        return angular.element($window)[0].innerWidth;
                    }, function () {
                        scope.render(scope.data);
                    });
                    //re-render chart if data source is changed
                    scope.$watch('data', function (newData) {
                        scope.render(newData);
                    }, true);


                });
            }
        };
    }]);
