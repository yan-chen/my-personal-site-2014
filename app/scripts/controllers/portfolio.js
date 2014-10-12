'use strict';

angular.module('myPageApp')
    .controller('PortfolioCtrl', ['$scope', function ($scope) {
        $scope.wireframeFiles = [
            {
                'fileName': 'yyPage Wireframe Version #1',
                'filePath': 'data/yy_page_v1.pdf',
                'fileThumbPath': 'data/yy_page_v1_thumb.png'
            },
            {
                'fileName': 'yyPage Wireframe Version #2',
                'filePath': 'data/yy_page_v2.pdf',
                'fileThumbPath': 'data/yy_page_v2_thumb.png'
            },
            {
                'fileName': 'Community Blog Wireframe',
                'filePath': 'data/yy_community_blog.pdf',
                'fileThumbPath': 'data/yy_community_blog_thumb.png'
            }
        ];
        $scope.setCurrentFile = function (file) {
            $scope.currentFile = file;
        };
        $scope.projects = [
            {
                'fileName': 'Widget Bank Design',
                'filePath': 'http://www.youtube.com/embed/IAKFhjwcE_Q?rel=0',
                'fileThumbPath': 'data/usana_widgetbank_thumb.png'
            }
        ];
        $scope.setCurrentProject = function (file) {
            $scope.currentProject = file;
            console.log($scope.currentProject)
        };

        $scope.webComponentDemos = [
            {
                'demoName': 'AngularJS To Do List',
                'demoPath': 'views/templates/portfolio-todo.tpl.html',
                'demoThumbPath': 'data/yy_portfolio_todo_thumb.png'
            },
            {
                'demoName': 'Sample Widgets',
                'demoPath': 'views/templates/portfolio-widget.tpl.html',
                'demoThumbPath': 'data/yy_portfolio_widget_thumb.png'
            },
            {
                'demoName': 'D3 Chart (coming ...)',
                'demoPath': '',
                'demoThumbPath': ''
            },
            {
                'demoName': 'Others (coming ...)',
                'demoPath': '',
                'demoThumbPath': ''
            }
        ];
        $scope.setCurrentDemo = function (demo) {
            $scope.currentDemo = demo;
        };

    }]);
