'use strict';

angular.module('myPageApp')
    .controller('PortfolioCtrl', ['$scope', function ($scope) {
        $scope.wireframeFiles = [
            {
                'fileName': 'yyPage Version #1',
                'fileType': 'pdf',
                'filePath': 'data/yy_page_v1.pdf',
                'fileThumbPath': 'data/yy_page_v1_thumb.png'
            },
            {
                'fileName': 'yyPage Version #2',
                'fileType': 'pdf',
                'filePath': 'data/yy_page_v2.pdf',
                'fileThumbPath': 'data/yy_page_v2_thumb.png'
            },
            {
                'fileName': 'Community Blog',
                'fileType': 'pdf',
                'filePath': 'data/yy_community_blog.pdf',
                'fileThumbPath': 'data/yy_community_blog_thumb.png'
            },
            {
                'fileName': 'Widget Bank Design',
                'fileType': 'video',
                'filePath': 'http://www.youtube.com/v/IAKFhjwcE_Q?rel=0',
                'fileThumbPath': 'data/usana_widgetbank_thumb.png'
            }
        ];
        $scope.setCurrentFile = function (file) {
            $scope.currentFile = file;
        };

        $scope.webComponentDemos = [
            {
                'demoName': 'AngularJS To Do List',
                'demoPath': 'views/portfolio/portfolio.todo.tpl.html',
                'demoThumbPath': 'data/yy_portfolio_todo_thumb.png'
            },
            {
                'demoName': 'Sample Widgets',
                'demoPath': 'views/portfolio/portfolio.widget.tpl.html',
                'demoThumbPath': 'data/yy_portfolio_widget_thumb.png'
            },
            {
                'demoName': 'D3 Chart (coming ...)',
                'demoPath': 'views/portfolio/portfolio.d3.tpl.html',
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
