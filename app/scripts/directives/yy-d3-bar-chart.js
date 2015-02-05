'use strict';

/**
 * @ngdoc directive
 * @name myPageApp.directive:yyD3BarChart
 * @description
 * # yyD3BarChart
 */
angular.module('myPageApp')
    .directive('yyD3BarChart', ['$window', '$timeout', 'd3Service', function ($window, $timeout, d3Service) {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                label: '@',
                yyOnClick: '&'
            },
            link: function (scope, element, attrs) {
                d3Service.d3().then(function (d3) {

                    var renderTimeout;
                    var margin = parseInt(attrs.margin) || 20,
                        barHeight = parseInt(attrs.barHeight) || 20,
                        barPadding = parseInt(attrs.barPadding) || 5;

                    var svgChart = d3.select(element[0])
                        .append('svg')
                        .style('width', '100%');


                    scope.render = function (data) {
                        svgChart.selectAll('*').remove();
                        if (!data) {
                            return;
                        }
//                        if (renderTimeout) clearTimeout(renderTimeout);

                        renderTimeout = $timeout(function () {
                            var width = d3.select(element[0])[0][0].offsetWidth - margin,
                                height = data.length * (barHeight + barPadding) + 20,
                                color = d3.scale.category20(),
                                xScale = d3.scale.linear()
                                    .domain([0, d3.max(data, function (d) {
                                        return d.score;
                                    })])
                                    .range([0, width]);

                            svgChart.attr('height', height);

                            svgChart.selectAll('rect')
                                .data(data)
                                .enter()
                                .append('rect')
                                .on('click', function (d, i) {
                                    return scope.yyOnClick({item: d});
                                })
                                .attr('height', barHeight)
                                .attr('width', 140)
                                .attr('x', Math.round(margin / 2) + 50)
                                .attr('y', function (d, i) {
                                    return i * (barHeight + barPadding);
                                })
                                .attr('fill', function (d) {
                                    return color(d.score);
                                })
                                .transition()
                                .duration(1000)
                                .attr('width', function (d) {
                                    return xScale(d.score);
                                });

                            svgChart.selectAll('text')
                                .data(data)
                                .enter()
                                .append('text')
                                .attr('class', 'y label')
                                .attr('fill', '#000')
                                .attr('dy', '.25em') // vertical-align: middle
                                .attr('text-anchor', 'end')
                                .attr('y', function (d, i) {
                                    return i * (barHeight + barPadding) + 10;
                                })
                                .attr('x', 50)
                                .text(function (d) {
                                    return d.name;
                                });

                            /*.data(data)
                             .enter()
                             .append('text')
                             .attr('class', 'axis')
                             .attr('fill', '#000')
                             .attr('dx', '.25em') // vertical-align: middle
                             .attr('y', height)
                             .attr('x', 0)
                             .text(function (d) {
                             return '100';
                             })
                             .append('g')
                             .attr('transform', 'translate(0,30)')
                             .call(axis);;*/
                        }, 200);
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


                    scope.render(scope.data);
                });
            }};
    }]);
