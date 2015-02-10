'use strict';

angular.module('myPageApp')
    .controller('PersonalCtrl', ['$scope', '$modal', '$http', function ($scope, $modal, $http) {
var imageList=[];
/*
        importio.init({
            'auth': {
                'userGuid': '5abf7ccf-6587-4290-95b9-c8145c6464f6',
                'apiKey': 'nJfLaOMWny+snD+8CnozqN6JLPHmRmrd9Qbd64f4y2/2haUG+2HRmxK/Pt1SY5ftfMirY+L/22rvx3Rret6lRw==',
            },
            'host': 'import.io'
        });


        // Data and done callbacks
        var dataCallback = function (data) {
            console.log('Data received');
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                imageList.push(data[i].data);
            }
            return;
        };

        var doneCallback = function (data) {
            console.log('Successfully retrieved all images');
        };

        var doQuery = function () {
            // Query for tile yyPage Personal Images
            importio.query({
                'connectorGuids': [
                    'c65485d1-5d8c-4b0f-945a-50ad1f76841c'
                ],
                'input': {
                    'webpage/url': 'https://www.dropbox.com/sh/yspbahxrz1mvotz/AADjR0jMEaFXSdqsRAX4eO34a?dl=0'
                }
            }, {'data': dataCallback, 'done': doneCallback});
        };
        doQuery();

        $scope.loadImage=function(){
            $scope.imageList=imageList;
        };

        $scope.setCurrentImage = function (img) {
            $scope.currentImage = img;
        };

        $scope.openImgUploadModal = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'views/templates/img-upload-modal.tpl.html',
                controller: imgUploadModalCtrl,
                size: size,
                resolve: {
                    imageList: function () {
                        return $scope.imageList;
                    }
                }
            });
        };

        var imgUploadModalCtrl = function ($scope, $modalInstance, imageList) {
//            $scope.imageList = imageList;??
            $scope.save = function () {

                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
*/
    }]);
