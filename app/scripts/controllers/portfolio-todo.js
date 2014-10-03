'use strict';

angular.module('myPageApp')
    .controller('PortfolioTodoCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {


        $scope.toDoTabs = [
            {'title': 'Current List', 'content': 'todoCurrentList.tpl.html'},
            {'title': 'Archived List', 'content': 'todoArchivedList.tpl.html'}
        ];

        /**
         * Retrieve data from local storage if existed, if not set it to default values
         * @returns {*[]}
         */
        var setData = function () {

            var toDoList, tempArchiveList;

            if (localStorageService.get('yyPage-portfolio-todo-list') !== null) {
                toDoList = localStorageService.get('yyPage-portfolio-todo-list');
                tempArchiveList = function () {
                    var tempList = [];
                    angular.forEach(toDoList, function (todo) {
                        if (todo.isDone) {
                            tempList.unshift(todo);
                        }
                    });
                    return tempList;
                };
            } else {
                toDoList = [
                    {'description': 'Need to call ...', 'isDone': false},
                    {'description': 'Need to buy ...', 'isDone': false}
                ];
                tempArchiveList = [];
            }
            return [toDoList, tempArchiveList];
        };

        $scope.toDoList = setData()[0];
        $scope.tempArchiveList = setData()[1];


        if (localStorageService.get('yyPage-portfolio-archived-list') !== null) {
            $scope.archivedList = localStorageService.get('yyPage-portfolio-archived-list');
        } else {
            $scope.archivedList = [];
        }

        $scope.todo = {};

        /**
         * Add item todo into the beginning of the toDoList array
         * @param {Object} todo
         * @returns {{}}
         */
        $scope.addToList = function (todo) {
            $scope.toDoList.unshift(
                {
                    'description': todo.description,
                    'isDone': false
                }
            );
            $scope.todo = {};
        };

        $scope.addToTempArchiveList = function (todo) {
            if ($scope.tempArchiveList.indexOf(todo) === -1) {
                $scope.tempArchiveList.unshift(todo);
            }
            else {
                $scope.tempArchiveList.remove(todo);
            }
        };

        $scope.selectAll = function () {
            $scope.tempArchiveList = angular.copy($scope.toDoList);
        };
        $scope.unselectAll = function () {
            $scope.tempArchiveList = [];
        };

        $scope.archiveTodo = function () {
            var tempToDoList = [];
            angular.forEach($scope.toDoList, function (todo) {
                if (todo.isDone) {
                    $scope.archivedList.unshift(todo);
                }
                else {
                    tempToDoList.unshift(todo);
                }
            });
            $scope.toDoList = tempToDoList;
        };

        $scope.saveToDoLocally = function () {
            localStorageService.set('yyPage-portfolio-todo-list', $scope.toDoList);
            localStorageService.set('yyPage-portfolio-archived-list', $scope.archivedList);
        };


        $scope.clearLocalToDo = function () {
            localStorageService.remove('yyPage-portfolio-todo-list');
            localStorageService.remove('yyPage-portfolio-archived-list');
            $scope.toDoList = [
                {'description': 'Need to call ...', 'isDone': false},
                {'description': 'Need to buy ...', 'isDone': false}
            ];
            $scope.tempArchiveList = [];
            $scope.archivedList = [];
        };

        $scope.removeFromList = function (array, indexToBeRemoved) {
            array.splice(indexToBeRemoved, 1);
        };


    }]);
