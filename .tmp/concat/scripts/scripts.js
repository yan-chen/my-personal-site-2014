'use strict';

angular.module('myPageApp', [ 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate','d3'])

    .config(['$stateProvider', '$urlRouterProvider','$sceDelegateProvider', function ($stateProvider, $urlRouterProvider,$sceDelegateProvider) {

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://www.youtube.com/**'
        ]);


        $urlRouterProvider.when('', 'about-me');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('about-me', {
                url: '/about-me',
                templateUrl: 'views/about-me.html'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'views/portfolio.html'
            })
            .state('personal', {
                url: '/personal',
                templateUrl: 'views/personal.html'
            })
            .state('contact-me', {
                url: '/contact-me',
                templateUrl: '../views/contact-me.html'
            })
            .state('404', {
                url: '/404',
                template: '<h3>Sorry, Page Not Found!</h3>'
            });
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.currentTab = $location.path().split('/')[1];
        });

        $rootScope.isTouchDevice = !!('ontouchstart' in window);

    }]);

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
/**
 * Created by yanc21 on 7/31/14.
 */

'use strict';

Array.prototype.remove = function (value) {
    if (this.indexOf(value) !== -1) {
        this.splice(this.indexOf(value), 1);
        return true;
    } else {
        return false;
    }
};
'use strict';

angular.module('myPageApp')
    .controller('MainCtrl', ['$scope', '$location', 'localStorageService', '$rootScope', function ($scope, $location, localStorageService, $rootScope) {
        $scope.locale = 'en';
        $scope.changeLang = function (str) {
            $scope.locale = str;
        };

        $scope.saveToLocal = function (objectId, object) {
            localStorageService.set('yyPage-' + $rootScope.currentTab + '-' + objectId, object);
            console.log('saved to: yyPage-' + $rootScope.currentTab + '-' + objectId);
        };

        $scope.isAsideVisible = false;
        $scope.toggleAsideNav = function () {
            $scope.isAsideVisible = !$scope.isAsideVisible;
        };

        $scope.returnViewPortSize = function () {
            var viewPortSize;
            if (window.innerWidth < 342) {
                viewPortSize = 'xs';
            } else if (window.innerWidth < 767) {
                viewPortSize = 'sm';
            } else if (window.innerWidth < 968) {
                viewPortSize = 'md';
            } else {
                viewPortSize = 'lg';
            }
            return viewPortSize;
        };

        $scope.isViewPortSizeSm = function () {
            if (window.innerWidth < 767) {
                return true;
            }
        };

        $(window).resize(function () {
            if (!$scope.isViewPortSizeSm()) {
                $scope.$apply($scope.isAsideVisible = false);
            }
        });
    }]);

'use strict';

angular.module('myPageApp')
    .controller('AboutMeCtrl', ['$scope', function ($scope) {
        $scope.workHistoryEN = [
            {
                title: 'Front End Web Developer',
                company: 'USANA Health Sciences',
                companyUrl: 'http://www.usana.com/',
                companyLogo: 'images/logo_usana.png',
                location: 'Salt Lake City, UT',
                startYear: '2014',
                endYear: 'Present',
                description: 'Use HTML, CSS, AngularJS to prototype & develop web application/user interface;'
            },
            {
                title: 'Front End Web Developer',
                company: 'Cognizant Technology Solutions',
                companyUrl: 'http://www.cognizant.com/',
                companyLogo: 'images/logo_cognizant.svg',
                location: 'Draper, UT',
                startYear: '2013',
                endYear: '2014',
                description: '<ul>' +
                    '<li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li>' +
                    '<li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li>' +
                    '<li>Created UX design mockups using MockFlow based on business product requirements;</li>' +
                    '<li> Assist with UI requirement analysis by communicating with client.</li>' +
                    '</ul>'
            },
            {
                title: 'Engineering Intern',
                company: 'eBay Inc.',
                companyUrl: 'http://www.ebayinc.com/',
                companyLogo: 'images/logo_ebay.jpg',
                location: 'Draper, UT',
                startYear: '2013',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li>' +
                    '<li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li>' +
                    '</ul>'
            },
            {
                title: 'Assistant Database Administrator',
                company: 'SWCA Environmental Consultant',
                companyUrl: 'http://www.swca.com/',
                companyLogo: 'images/logo_swca.jpg',
                location: 'Salt Lake City, UT',
                startYear: '2011',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Provide maintenance and user support on existing databases of cultural resource information;</li>' +
                    '<li> Assisted the Database Administrator with designing and implementing new databases using PG Admin and Microsoft Access;</li>' +
                    '<li> Develop stand-alone MS Access databases for generating analysis reports.</li>' +
                    '</ul>'
            },
            {
                title: 'Office Assistant',
                company: 'University of Utah, Career Services',
                companyUrl: 'http://www.utah.edu/',
                companyLogo: 'images/logo_career_services.png',
                location: 'Salt Lake City, UT',
                startYear: '2010',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Created reports, entered data and helped with website content;</li>' +
                    '<li>Answered incoming phone calls, greeted and assisted students and employers.</li>' +
                    '</ul>'
            },
            {
                title: 'Technical QA Specialist for Curriculum',
                company: 'The American Academy',
                companyUrl: 'http://www.theamericanacademy.com/',
                companyLogo: 'images/logo_taa.png',
                location: 'Salt Lake City, UT',
                startYear: '2013',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Helped with converting 200 online courses into new HTML templates;</li>' +
                    '<li>Checked and tested the courses to make sure its functionality and quality are meeting the requirements.</li>' +
                    '</ul>'
            },
            {
                title: 'Customer Service Representative',
                company: 'Multiple',
                companyUrl: '',
                companyLogo: 'images/logo_csr.png',
                location: 'Salt Lake City, UT',
                startYear: '2009',
                endYear: '2010',
                description: '<ul>' +
                    '<li>Worked for 2010 Census as bilingual CSR for English & Chinese (2010)</li>' +
                    '<li>Worked for Bank of American as bilingual CSR for credit card accounts (2009)</li>' +
                    '</ul>'
            }
        ];

        $scope.workHistoryCH = [
            {
                title: '前端网页开发人员',
                company: 'USANA Health Sciences <br/>优莎娜',
                companyUrl: 'http://www.usana.com/',
                companyLogo: 'images/logo_usana.png',
                location: '犹他州，盐湖城',
                startYear: '2014',
                endYear: '现在',
                description: 'Use HTML, CSS, AngularJS to prototype & develop web application/user interface;'
            },
            {
                title: '前端网页开发人员',
                company: 'Cognizant Technology Solutions<br/>高知特信息技术公司',
                companyUrl: 'http://www.cognizant.com/',
                companyLogo: 'images/logo_cognizant.svg',
                location: '犹他州， Draper市',
                startYear: '2013',
                endYear: '2014',
                description: '<ul>' +
                    '<li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li>' +
                    '<li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li>' +
                    '<li>Created UX design mockups using MockFlow based on business product requirements;</li>' +
                    '<li> Assist with UI requirement analysis by communicating with client.</li>' +
                    '</ul>'
            },
            {
                title: '软件工程实习生',
                company: 'eBay Inc.<br/>易趣',
                companyUrl: 'http://www.ebayinc.com/',
                companyLogo: 'images/logo_ebay.jpg',
                location: '犹他州， Draper市',
                startYear: '2013',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Assisted with UI development for an internal agent application using HTML, CSS, AngularJS, Bootstrap, Git and other related technology stacks;</li>' +
                    '<li>Used Chrome DevTools to test performance of UI component created, and to debug errors;</li>' +
                    '</ul>'
            },
            {
                title: '数据库管理助手',
                company: 'SWCA Environmental Consultant<br/> SWCA 环境咨询',
                companyUrl: 'http://www.swca.com/',
                companyLogo: 'images/logo_swca.jpg',
                location: '犹他州，盐湖城',
                startYear: '2011',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Provide maintenance and user support on existing databases of cultural resource information;</li>' +
                    '<li> Assisted the Database Administrator with designing and implementing new databases using PG Admin and Microsoft Access;</li>' +
                    '<li> Develop stand-alone MS Access databases for generating analysis reports.</li>' +
                    '</ul>'
            },
            {
                title: '办公室助理',
                company: 'University of Utah, Career Services<br/>犹他大学学生就业咨询处',
                companyUrl: 'http://www.utah.edu/',
                companyLogo: 'images/logo_career_services.png',
                location: '犹他州，盐湖城',
                startYear: '2010',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Created reports, entered data and helped with website content;</li>' +
                    '<li>Answered incoming phone calls, greeted and assisted students and employers.</li>' +
                    '</ul>'
            },
            {
                title: '在线课程的技术质量保证人员',
                company: 'The American Academy',
                companyUrl: 'http://www.theamericanacademy.com/',
                companyLogo: 'images/logo_taa.png',
                location: '犹他州，盐湖城',
                startYear: '2013',
                endYear: '2013',
                description: '<ul>' +
                    '<li>Helped with converting 200 online courses into new HTML templates;</li>' +
                    '<li>Checked and tested the courses to make sure its functionality and quality are meeting the requirements.</li>' +
                    '</ul>'
            },
            {
                title: '客服人员',
                company: 'Multiple',
                companyUrl: '',
                companyLogo: 'images/logo_csr.png',
                location: '犹他州，盐湖城',
                startYear: '2009',
                endYear: '2010',
                description: '<ul>' +
                    '<li>Worked for 2010 Census as bilingual CSR for English & Chinese (2010)</li>' +
                    '<li>Worked for Bank of American as bilingual CSR for credit card accounts (2009)</li>' +
                    '</ul>'
            }
        ];
    }]);

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

'use strict';

angular.module('myPageApp')
  .controller('NavCtrl', ['$scope', function ($scope) {

  }]);

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
                'demoPath': 'views/templates/portfolio-d3.tpl.html',
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

'use strict';

/**
 * @ngdoc function
 * @name myPageApp.controller:PortfoliocalendarwidgetCtrl
 * @description
 * # PortfoliocalendarwidgetCtrl
 * Controller of the myPageApp
 */
angular.module('myPageApp')
    .controller('PortfolioCalendarWidgetCtrl', function ($scope) {

        $scope.widgetColorTheme = '000000';
        $scope.ppTestData = {
            daysCount: '25',
            associateCount: '3',
            cvpCount: '80'
        };

        $scope.validateDateCount = function (num) {
            console.log((num.toString().length < 2 ? '0' + num : num ).toString());
            return ( num.toString().length < 2 ? '0' + num : num ).toString();
        };

        $scope.today = new Date();

        $scope.greeting = function (date) {
            var greetingMsg;
            if (date.getHours() >= 12) {
                greetingMsg = 'Afternoon';
            } else if (date.getHours() >= 18) {
                greetingMsg = 'Evening';
            } else {
                greetingMsg = 'Morning';
            }
            return greetingMsg;
        };


        $scope.hexToRgba = function (hexVal, opacity) {
            return 'rgba(' + parseInt(hexVal.substr(0, 2), 16) + ',' + parseInt(hexVal.substr(2, 2), 16) + ',' + parseInt(hexVal.substr(4, 2), 16) + ',' + opacity + ')';
        };

    });

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

        $scope.fetchData = function (url) {
            var tempData = $http.get(url, {cache: $templateCache})
                .success(function (data) {
                    return data;
                })
                .error(function (data) {
                    return data || "Request failed";
                });
            return tempData
        };

        $scope.$watch('currentDataSource', function (newVal) {
            if (newVal) {
                $scope.fetchData($scope.currentDataSource.url);
            }
        });

        $scope.fetchData($scope.currentDataSource.url).then(function (response) {
            $scope.d3BarChartDataSet = response.data[0];
        });


    }]);

'use strict';

angular.module('myPageApp')
    .controller('loginCtrl', ['$scope', '$modal', function ($scope, $modal) {
//var loginModalCtrl = function ($scope, $modalInstance, items, $rootScope, AUTH_EVENTS, AuthService) {


        var loginModalCtrl = function ($scope, $modalInstance, $rootScope, localStorageService) {

            $scope.credentials = {
                adminId: '',
                password: '',
                rememberMe: ''
            };
            if (localStorageService.get('previousLoggedInUser')) {
                $scope.credentials.adminId = localStorageService.get('previousLoggedInUser');
            }
            $scope.adminLogin = function (credentials) {
                $scope.isLoginFailed = false;

                if (credentials.adminId === 'yyadmin' && credentials.password === 'admin') {
                    $rootScope.isAdmin = true;
                    $rootScope.adminId = credentials.adminId;
                    $scope.$broadcast('admin logged in');
                    console.log('you are logged in as ' + credentials.adminId);
                    $modalInstance.close($scope.credentialsVerified, $scope.userName);


                    if (credentials.rememberMe) {
                        localStorageService.set('previousLoggedInUser', credentials.adminId);
                    }
                } else {
                    $scope.isLoginFailed = true;
                    localStorageService.set('previousLoggedInUser', null);
                }

            };

            /*

             $scope.login = function (credentials) {
             AuthService.login(credentials).then(function (user) {
             $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
             $scope.setCurrentUser(user);
             $scope.isLoginFailed = false;
             }, function () {
             $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
             $scope.isLoginFailed = true;
             });
             };
             */

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };



        $scope.openLoginModal = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'views/login.html',
                controller: loginModalCtrl,
                size: size,
                resolve: {}
            });

            modalInstance.result.then(function () {
            }, function () {
            });
        };
    }]);



'use strict';

angular.module('myPageApp')
    .directive('yyMasonryDir', ['$timeout', function ($timeout) {
        return{
            restrict: 'EA',
            transclude: true,
            replace: true,
            template: '<div data-ng-transclude></div>',
            link: function (scope, element) {

                $timeout(function () {
                    element.masonry({
                        // options
//                        columnWidth: 200,
                        //gutter: 5,
                        itemSelector: '.masonry-item'
                    });
                }, 500);

                element.on('$destroy', function () {
                    element.masonry('destroy');
                });
            }
        };
    }]);

/*******************************************************
 ---------------------- yyQtip -----------------------
 *******************************************************
 This directive is using the 2.1.1 version of qTip2:
 * http://cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min.js
 * http://cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min.css
 (http://qtip2.com/download)

 To use this directive, you need to include the following values:

 Optional:
 * data-qtip-title: title string of the tooltip.
 * data-qtip-content: content string of the tooltip
 * data-skin: background color of the tooltip content (choose from plain, light, red, green and blue, default is dar)
 * data-close-button: this attribute will create a close button for the tooltip, but if a close button is created,
 you can only close the tooltip by clicking the button.
 * data-position: the position of the tooltip content in relation to the element being hovered, default is top,
 other available options are: bottom, left or right.
 * data-target: HTML element the tooltip will be positioned in relation to. default is 'element' -- the trigger, could
 be set to 'mouse' or an array containing an absolute x/y position on the page.
 * data-static: when this attribute is included, the tooltip will not follow the mouse even though target is 'mouse'.
 * data-fixed: this attribute prevent the tooltip from closing if you hover over the tooltip
 * data-solo: including this attribute will hide all other tooltips when this tooltip is enabled
 * data-qtip-show: Use this to pass in custom show values. Valid options are : click, mouseover, click mouseover
 * data-qtip-hide-spinner: Use this to hide the spinner. It defaults to show, so include this value when hiding.

 when using ajax call:
 * data-href: including this attribute and providing a path to a html page will set the content of the html page as the
 content of the tooltip
 -- when using an ajax call to get the html template, if the html page is running a search function to get details on
 that page, you need to use $emit to let yyQtip know that the content is ready. (see itemForQtip.html as example)
 -- for example:
 AJAXcalledFunction.then( function(){
        $scope.$emit('qtipContentReady');
     });
 * data-qtip-wait: this makes the yyQtip listens to $emit event, and it will show the spinner until $emit happends

 functions could be called within the directive:
 * hideQtip(): this will hide the qtip created by the element
 * -- an example use case would be having a button on the itemForQtip.html page, so that when clicked, it would cause
 * the tooltip to hide

 Example template:
 -- with no ajax call to another html page:
 <i class='anyclass' data-yy-qtip data-qtip-content='any string' data-target='mouse'>Hover me to see the tooltip title</i>
 -- with ajax call to another html page:
 <div data-yy-qtip data-href='sample.html'>Hover me</div>
 //You might want to set the element's css display to inline-block, so the tooltip wont show up at the end of the
 line (versus at the end of the paragraph)
 *******************************************************/

angular.module('myPageApp')
    .directive('yyQtip', function ($compile, $templateCache, $http, $timeout, $window) {
        return function (scope, element, attrs) {

            scope.qtipSkin = (attrs.skin ? 'qtip-' + attrs.skin : 'qtip-light');
            scope.closeButton = (attrs.closeButton !== null);
            scope.customShow = attrs.qtipShow;
            scope.hideSpinner = (attrs.qtipHideSpinner !== null);

            switch (attrs.position) {
                case 'right':
                    scope.qtipPointerPos = 'left center';
                    scope.qtipContentPos = 'right center';
                    scope.qtipTipClass = 'qtip-tip-right';
                    break;
                case 'bottom':
                    scope.qtipPointerPos = 'top left';
                    scope.qtipContentPos = 'bottom right';
                    scope.qtipTipClass = 'qtip-tip-bottom';
                    break;
                case 'left':
                    scope.qtipPointerPos = 'right center';
                    scope.qtipContentPos = 'left center';
                    scope.qtipTipClass = 'qtip-tip-left';
                    break;
                default: //top
                    scope.qtipPointerPos = 'bottom left';
                    scope.qtipContentPos = 'top right';
                    scope.qtipTipClass = 'qtip-tip-top';
                    break;
            }

            //option for creating the tooltip
            var config = ({
                content: {
                    text: function (event, api) {
                        if (attrs.href !== null) {
                            //var spinner = $compile('<div data-spinner data-spiner-text='loading...' data-search-in-progress=true style='width:70px;height:70px;'></div>')(scope)


                            if (!attrs.qtipHideSpinner) {
                                var spinner = $compile('<div><img style="display:block;margin:auto;width:70px;height:70px;" src="images/spinner_white_large.gif"/></div>')(scope);
                                api.set('content.text', spinner);
                            }

                            return function () {
                                $http.get(attrs.href, {cache: $templateCache})
                                    .success(function (data) {
                                        var htmlData = $compile(data)(scope);
                                        // scope.compiledData = htmlData; not being used at all??
                                        if (attrs.qtipWait !== null) {
                                            scope.$root.$on('qtipContentReady', function () {
                                                api.set('content.text', htmlData);

                                                //setup watches for tooltip resizing. The reposition also needs to be called when first loaded
                                                $timeout(function () {
                                                    api.reposition();    //calling this fixes one issue but breaks another. When the tooltip first displays it will be off of its intended location, this call fixes that issue. However we end up with some blink from the image resize.
                                                    scope.$watch(
                                                        function () {
                                                            return $(api.elements.content).find('div').css('height');
                                                        }, function (newVal, oldVal) {
                                                            if (newVal !== oldVal) {
                                                                api.reposition();
                                                            }
                                                        });
                                                });
                                            });
                                        } else {
                                            api.set('content.text', htmlData);

                                            //setup watches for tooltip resizing. The reposition also needs to be called when first loaded
                                            $timeout(function () {
                                                api.reposition();
                                                scope.$watch(
                                                    function () {
                                                        return $(api.elements.content).find('div').css('height');
                                                    }, function (newVal, oldVal) {
                                                        if (newVal !== oldVal) {
                                                            api.reposition();
                                                        }
                                                    });
                                            });
                                        }
                                    })
                                    .error(function (data) {
                                        var htmlData = data || 'Request failed';
                                        api.set('content.text', htmlData);
                                    });
                            };
                        } else {
                            if (element.attr('data-qtip-content') !== null) {
                                return attrs.qtipContent;
                            } else {
                                api.set('content.text', '');
                            }
                        }
                    },
                    title: function (event, api) {
                        if (element.attr('data-qtip-title') !== null) {
                            return attrs.qtipTitle;
                        } else {
                            api.set('content.title', '');
                        }
                    },
                    button: scope.closeButton
                },
                style: {
                    classes: scope.qtipSkin + ' ' + scope.qtipTipClass + ' ' + attrs.qtipClass,
                    tip: {
                        corner: true,
                        width: 20,
                        height: 10,
                        method: 'polygon',
                        border: 2
                    }
                },
                show: {
                    event: (scope.customShow !== null) ? scope.customShow : ((scope.closeButton) ? 'click mouseover' : 'click mouseover'),
                    solo: (attrs.solo !== null),
                    autofocus: 'input'
                },
                hide: {
                    event: (attrs.fixed !== null ? 'unfocus' : (scope.closeButton === true ? 'click' : 'mouseleave')),
                    delay: 300,
                    fixed: (($(this).mouseover) ? true : false),  //prevent the tooltip from hiding when set to true
                    leave: false
                },
                events: {
                    render: function (event, api) {
                        scope.hideQtip = function () {
                            api.hide();
                        };
                        scope.reposition = function () {
                            api.reposition();
                        };
                        $(api.elements.content).keyup(function (e) {
                            if (e.keyCode === 27) {
                                api.hide();
                            }
                        });
                    }
                },
                position: {
                    viewport: $window,// Keep it on-screen at all times if possible
                    target: (attrs.target ? attrs.target : element),
                    adjust: {
                        method: 'flip flip',
                        mouse: (attrs.static === null)
                    },
                    //   effect: false,
                    my: scope.qtipPointerPos,
                    at: scope.qtipContentPos
                }
            });

            //create the tooltip with option defined above
            element.qtip(config);

            scope.$on('$destroy', function () {
                $('.qtip').remove();
                element.qtip('destroy', true); // Immediately destroy all tooltips belonging to the selected elements
            });
        };
    });
'use strict';

angular.module('myPageApp')
    .directive('yyVideoDir', ['$sce', function($sce) {
        return{
            restrict: 'EA',
            scope: {
                'videoSrc': '='
            },
            replace: true,
            template: '<iframe frameborder="0" width="560" height="315" allowfullscreen ng-src="{{videoSrc}}" class="yy-video-dir-iframe"></iframe>',
            link: function (scope) {
//                scope.trustedVideoSrc = $sce.trustAsResourceUrl(scope.videoSrc);
//                console.log("videoSrc is " + scope.trustedVideoSrc);
            }
        };
}])
;

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
                onClick: '&'
            },
            link: function (scope, ele, attrs) {
                d3Service.d3().then(function (d3) {

                    var renderTimeout;
                    var margin = parseInt(attrs.margin) || 20,
                        barHeight = parseInt(attrs.barHeight) || 20,
                        barPadding = parseInt(attrs.barPadding) || 5;

                    var svg = d3.select(ele[0])
                        .append('svg')
                        .style('width', '100%');

                    $window.onresize = function () {
                        scope.$apply();
                    };

/*                    // hard-code data
                    scope.data = ;*/

                    scope.$watch(function () {
                        return angular.element($window)[0].innerWidth;
                    }, function () {
                        scope.render(scope.data);
                    });

                    scope.$watch('data', function (newData) {
                        console.log(newData)
                        scope.render(newData);
                    }, true);

                    scope.render = function (data) {
                        svg.selectAll('*').remove();

                        if (!data) {
                            return;
                        }
//                        if (renderTimeout) clearTimeout(renderTimeout);

                        renderTimeout = $timeout(function () {
                            var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                                height = data.length * (barHeight + barPadding),
                                color = d3.scale.category20(),
                                xScale = d3.scale.linear()
                                    .domain([0, d3.max(data, function (d) {
                                        return d.score;
                                    })])
                                    .range([0, width]);

                            svg.attr('height', height);

                            svg.selectAll('rect')
                                .data(data)
                                .enter()
                                .append('rect')
                                .on('click', function (d, i) {
                                    return scope.onClick({item: d});
                                })
                                .attr('height', barHeight)
                                .attr('width', 140)
                                .attr('x', Math.round(margin / 2))
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
                            svg.selectAll('text')
                                .data(data)
                                .enter()
                                .append('text')
                                .attr('fill', '#fff')
                                .attr('y', function (d, i) {
                                    return i * (barHeight + barPadding) + 15;
                                })
                                .attr('x', 15)
                                .text(function (d) {
                                    return d.name + ' (scored: ' + d.score + ')';
                                });
                        }, 200);
                    };
                    scope.render(scope.data);
                });
            }};
    }]);

'use strict';

/**
 * @ngdoc service
 * @name d3.d3Service
 * @description
 * # d3Service
 * Factory in the myPageApp.
 */
angular.module('d3',[])
    .factory('d3Service', ['$document', '$q', '$rootScope', function ($document, $q, $rootScope) {
        var d = $q.defer();

        function onScriptLoad() {
            //Load client in the browser
            $rootScope.$apply(function () {
                d.resolve(window.d3);
            });
        }

        // Create a script tag with d3 as the source
        // and call our onScriptLoad callback when it
        // has been loaded
        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.asyc = true;
        scriptTag.src = 'bower_components/d3/d3.js';
        scriptTag.onreadystatechange = function () {
            if (this.readyState === 'complete') {
                onScriptLoad();
            }
        };
        scriptTag.onload = onScriptLoad;

        var s = $document[0].getElementsByTagName('body')[0];
        s.appendChild(scriptTag);

        // Public API here
        return {
            d3: function () {
                return d.promise;
            }
        };
    }]);
