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
    .directive('yyQtip',  ['$compile', '$templateCache', '$http', '$timeout', '$window', function ($compile, $templateCache, $http, $timeout, $window) {
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
    }]);