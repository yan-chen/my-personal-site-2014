'use strict';

angular.module('myPageApp')
    .controller('PersonalCtrl', ['$scope','$modal', function ($scope,$modal) {
        $scope.imageList = [
            {
                'title': '14',
                'src': 'images/personal/14.jpg'
            },
            {
                'title': '1',
                'src': 'images/personal/1.jpg'
            },
            {
                'title': '2',
                'src': 'images/personal/9.jpg'
            },
            {
                'title': '13',
                'src': 'images/personal/13.jpg'
            },
            {
                'title': '10',
                'src': 'images/personal/10.jpg'
            },
            {
                'title': '9',
                'src': 'images/personal/2.jpg'
            },
            {
                'title': '21',
                'src': 'images/personal/21.jpg'
            },
            {
                'title': '3',
                'src': 'images/personal/3.jpg'
            },
            {
                'title': '22',
                'src': 'images/personal/22.jpg'
            },
            {
                'title': '12',
                'src': 'images/personal/12.jpg'
            },
            {
                'title': '8',
                'src': 'images/personal/8.jpg'
            },
            {
                'title': '19',
                'src': 'images/personal/19.jpg'
            },
            {
                'title': '11',
                'src': 'images/personal/11.jpg'
            },
            {
                'title': '4',
                'src': 'images/personal/5.jpg'
            },
            {
                'title': '18',
                'src': 'images/personal/18.jpg'
            },
            {
                'title': '5',
                'src': 'images/personal/6.jpg'
            },
            {
                'title': '17',
                'src': 'images/personal/17.jpg'
            },
            {
                'title': '6',
                'src': 'images/personal/7.jpg'
            },
            {
                'title': '7',
                'src': 'images/personal/4.jpg'
            },
            {
                'title': '15',
                'src': 'images/personal/15.jpg'
            },
            {
                'title': '16',
                'src': 'images/personal/16.jpg'
            },
            {
                'title': '20',
                'src': 'images/personal/20.jpg'
            }
        ];

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

    }]);
