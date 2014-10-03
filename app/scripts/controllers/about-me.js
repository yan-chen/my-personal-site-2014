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
