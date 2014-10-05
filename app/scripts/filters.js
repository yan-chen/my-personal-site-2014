/**
 * Created by yanc21 on 5/30/14.
 */

'use strict';

angular.module('myPageApp')
    .filter('slice', function () {
        return function (arr, start, end) {
            return (arr || []).slice(start, end);
        };
    })
    .filter('compareFilter', [function () {
        return function (input, compareValue, trueValue, falseValue) {
            return (input === compareValue) ? trueValue : falseValue;
        };
    }]);