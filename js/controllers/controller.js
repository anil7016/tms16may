'use strict';
//date format for db
//moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


//Error Callbacj for Api.
var errorCallback = function(data) {
    notification(data['msg'], 'error');
};

//Notification message function
function notification(msg, type) {
    //#themes mint, sunset, relax, nest, metroui, semanticui, light, bootstrap-v3, bootstrap-v4
    var n = new Noty({
        theme: 'bootstrap-v4',
        layout: 'topRight',
        text: msg,
        type: type, //error,success,warning
        timeout: 4500,
        closeWith: ['click', 'button'],
    }).show();
}

function UniqueArraybyId(collection, keyname) {
    var output = [],
        keys = [];

    angular.forEach(collection, function(item) {
        var key = item[keyname];
        if (keys.indexOf(key) === -1) {
            keys.push(key);
            output.push(item);
        }
    });
    return output;
};
var openWindows = [];

function closeWindows() {
    window.localStorage.setItem("parentId", ' ');
    if (openWindows.length > 0) {
        angular.forEach(openWindows, function(i, e) {
            openWindows[e].close();
        });
        openWindows = [];
    }
}

function originalDateFormat(input) {
    var date = input.split(" ")[0].split('.');
    var time = input.split(" ")[1];

    var newDate = date[2] + '-' + date[1] + '-' + date[0];
    if (time) {
        newDate = date[2] + '-' + date[1] + '-' + date[0] + ' ' + time;
    }

    return newDate;
}

function originalDateFormatNew(input) {
    if(input == undefined){
        return false;
    }
    var dtSeparator = window.localStorage.getItem('dtSeparator');
    
    var date = input.split(" ")[0].split(dtSeparator);
    var time = input.split(" ")[1];

    if(window.localStorage.getItem('global_dateFormat') == 'DD'+dtSeparator+'MM'+dtSeparator+'YYYY'){
        var newDate = date[2] + '-' + date[1] + '-' + date[0];
    }else{
        var newDate = date[0] + '-' + date[1] + '-' + date[2];
    }
    if (time) {
        newDate = newDate + ' ' + time;
    }

    return newDate;
}

function originalDateFormatDash(input) {
    if(input == undefined){
        return false;
    }
    var dtSeparator = window.localStorage.getItem('dtSeparator');
    
    var date = input.split(" ")[0].split(dtSeparator);
    var time = input.split(" - ")[1];

    if(window.localStorage.getItem('global_dateFormat') == 'DD'+dtSeparator+'MM'+dtSeparator+'YYYY'){
        var newDate = date[2] + '-' + date[1] + '-' + date[0];
    }else{
        var newDate = date[0] + '-' + date[1] + '-' + date[2];
    }
    if (time) {
        newDate = newDate + ' ' + time;
    }

    return newDate;
}

function getAge(year, month, day) {
    var now = new Date()
    var age = now.getFullYear() - year;
    var mdif = now.getMonth() - month + 1; //0=jan   

    if (mdif < 0) {
        --age
    } else if (mdif == 0) {
        var ddif = now.getDate() - day
        if (ddif < 0) {
            --age
        }
    }
    return age
}

function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function capitalize(str) {
    strVal = '';
    str = str.split(' ');
    for (var chr = 0; chr < str.length; chr++) {
        strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
    }
    return strVal
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function date_time_format(input) {
    var d = new Date(input);
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = pad(d.getDay(), 2) + "." + pad((d.getMonth() + 1), 2) + "." + d.getFullYear();
    var time = d.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
    return (date + " " + time);
}

function TodayAfterNumberOfDays($date, $day) {
    var output;
    var days = $day;
    var date = new Date($date);
    var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    var d = new Date(res);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var finalDate = d.getFullYear()+'-'+
        (month < 10 ? '0' : '') + month +'-'+(day < 10 ? '0' : '') + day;
    return finalDate;
    /*return output = (day < 10 ? '0' : '') + day + '.' +
        (month < 10 ? '0' : '') + month + '.' +
        d.getFullYear();*/
}

function timeFormat(input) {
    var d = new Date(input);
    var time = d.toLocaleTimeString().toUpperCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
    return time;
}

function randNumber() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function stringTodate(dateString) {
    var d = new Date(dateString);
    return d;
}

function dateFormat(da) {
    var currentdateT;
    return currentdateT = pad(da.getDate(), 2) + '.' + pad((da.getMonth() + 1), 2) + '.' + da.getFullYear();
}

function dateToformat(dateString) {
    var d = new Date(dateString);
    var mm = (d.getMonth() + 1).toString();
    var dd = d.getDate().toString();
    var min = d.getMinutes().toString();
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var minChar = min.split('');
    var hour = '';
    if (d.getHours() > 12) {
        hour = d.getHours() - 12;
        return (ddChars[1] ? dd :
                "0" + ddChars[0]) + '.' + (mmChars[1] ? mm : "0" + mmChars[0]) + '.' +
            d.getFullYear() + ' ' + hour + ':' + (minChar[1] ? min : "0" + minChar[0]) +
            ' PM';
    } else {
        return (ddChars[1] ? dd : "0" + ddChars[0]) + '.' +
            (mmChars[1] ? mm : "0" + mmChars[0]) + '.' + d.getFullYear() + ' ' +
            d.getHours() + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' AM';
    }
    // return d.SubtractMonth(1);
}

function dateOnresize(dateString, delta) {
    var diff = delta._data;
    var dif_hour = diff.hours;
    var dif_min = diff.minutes;
    var dif_day = diff.days;
    var d = new Date(dateString);
    var mm = (d.getMonth() + 1).toString();
    var dd = (d.getDate() + dif_day).toString();
    var min = (d.getMinutes() + dif_min).toString();
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var minChar = min.split('');
    var new_date = '';
    var hour = d.getHours() + dif_hour;
    if (hour > 12) {
        var new_hour = hour - 12;
        new_date = (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + d.getFullYear() + ' ' + new_hour + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' PM';
    } else {
        new_date = (ddChars[1] ? dd : "0" + ddChars[0]) + '/' + (mmChars[1] ? mm : "0" + mmChars[0]) + '/' + d.getFullYear() + ' ' + hour + ':' + (minChar[1] ? min : "0" + minChar[0]) + ' AM';
    }
    return dateTostring(new_date);
}

function dateTostring(date) {
    //debugger;
    var data = date.split(" ");
    var st_date = data[0].split('/');
    var time = data[1].split(':');
    var hour = '';
    if (data[2] == 'AM') {
        hour = time[0];
    } else {
        hour = 12 + parseInt(time[0]);
    }
    var return_date = new Date(st_date[2], st_date[0] - 1, st_date[1], hour, time[1]);
    return return_date;
}

function stringTommddyy(dateString) {
    var today = new Date(dateString)
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return today = yyyy + '-' + mm + '-' + dd;
}

function getDayname(d) {
    var new_date = new Date(d);
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    // var n = weekday[new_date.getDay()];
    return n = new_date.getDay();
}

function getMonthName() {
    d = new Date();
    var n = d.getMonth();
    var str = "";
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (var i = 10; i >= 0; i--) {
        var now = new Date();
        var date = new Date(now.setMonth(now.getMonth() - i));
        var datex = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        str += "Date :" + datex + " | Month : " + monthNames[date.getMonth()] + "-" + date.getFullYear() + "\n";
    }
    return n;
}

function displayRendom(date, cell, data) {
    if (data != '' && data != undefined) {
        var curr = stringTodate(data.wh_type_value);
        var selector_date = stringTommddyy(date);
        var display_data = JSON.parse(data.wh_data);
        if (data.for_type == 1) {
            var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
            var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
            var first_date = stringTommddyy(firstday);
            var last_date = stringTommddyy(lastday);
            if (selector_date >= first_date && selector_date <= last_date) {
                angular.forEach(display_data, function(val, i) {
                    if (val.value == 1 && i == getDayname(date)) {
                        $(cell).removeClass('normal-day');
                        $(cell).addClass('working-day');
                    }
                });

            }
        } else if (data.for_type == 2) {
            var firstDay = new Date(curr.getFullYear(), curr.getMonth(), 1);
            var lastDay = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
            var first_date = stringTommddyy(firstDay);
            var last_date = stringTommddyy(lastDay);
            if (selector_date >= first_date && selector_date <= last_date) {
                angular.forEach(display_data, function(val, i) {
                    if (val.value == 1 && i == getDayname(date)) {
                        $(cell).removeClass('normal-day');
                        $(cell).addClass('working-day');
                    }
                });
            }
        } else {
            var firstDay = new Date(curr.getFullYear(), 0, 1, 0);
            var lastDay = new Date(curr.getFullYear() + 1, 0, 0);
            var first_date = stringTommddyy(firstDay);
            var last_date = stringTommddyy(lastDay);
            if (selector_date >= first_date && selector_date <= last_date) {
                angular.forEach(display_data, function(val, i) {
                    if (val.value == 1 && i == getDayname(date)) {
                        $(cell).removeClass('normal-day');
                        $(cell).addClass('working-day');
                    }
                });
            }
        }
    }
}

function getDatetime(dateString) {
    var d = new Date(dateString);
    var mm = (d.getMonth() + 1).toString();
    var dd = d.getDate().toString();
    var min = d.getMinutes().toString();
    var ss = d.getSeconds().toString();
    var mmChars = mm.split('');
    var ddChars = dd.split('');
    var minChar = min.split('');
    var ssChar = ss.split('');
    return (ddChars[1] ? dd : "0" + ddChars[0]) + '.' + (mmChars[1] ? mm : "0" + mmChars[0]) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + (minChar[1] ? min : "0" + minChar[0]) + ':' + (ssChar[1] ? ss : "0" + ssChar[0]);
}

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0)
        return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function popupWindow(id) {
    return $window.open(id, "popup", "width=1000,height=800");
}

function array_diff(array1, array2) {
    var difference = $.grep(array1, function(el) {
        return $.inArray(el, array2) < 0
    });
    return difference.concat($.grep(array2, function(el) {
        return $.inArray(el, array1) < 0
    }));;
}


function daydiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

//unique array
function uniq(a, param) {
    return a.filter(function(item, pos, array) {
        return array.map(function(mapItem) {
            return mapItem[param];
        }).indexOf(item[param]) === pos;
    })
}

//ScrollBody To Top
function scrollBodyToTop() {
    $('html, body').animate({ scrollTop: 0 }, 800);
}

function scrollToTop() {
    $('#top').animate({ scrollTop: 0 }, 500);
}

function scrollToId(id) {
    $('.md-content').animate({
        scrollTop: $("#" + id).offset().top
    }, 200);
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function pasteHtmlAtCaret(html, selectPastedContent) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(),
                node, lastNode;
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                if (selectPastedContent) {
                    range.setStartBefore(firstNode);
                } else {
                    range.collapse(true);
                }
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ((sel = document.selection) && sel.type != "Control") {
        // IE < 9
        var originalRange = sel.createRange();
        originalRange.collapse(true);
        sel.createRange().pasteHTML(html);
        if (selectPastedContent) {
            range = sel.createRange();
            range.setEndPoint("StartToStart", originalRange);
            range.select();
        }
    }
} 
function numberFormatComma(input) {
    if (input == undefined || input == 0 || input == '') {
        return '';
    } else {
        var str=input.toString();
        var numarray=str.split('.');
        var a=new Array();
        a=numarray;
        var a1=a[0];
        var n1='';
        var n2='';
        if(a[1]==undefined && a[1]!=='00'){
            a[1]='';
        }else{ 
            var n2 = ','+a[1].slice(0, 2);
            //var n2 = ','+a[1];
        }
        var n1 = a1.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        return n1 + n2;
    }
}
function numberFormatCommaToPoint(input) {
    if (input == undefined || input == 0 || input == '') {
        return '';
    } else {
        var str=input.toString();
        var numarray=str.split(',');
        var a=new Array();
        a=numarray;
        var a1=a[0];
        var n2='';
        var n1='';
        if(a[1]==undefined && a[1]!=='00'){
            a[1]='';
        }else{ var n2 = '.'+a[1].slice(0, 2); }
        //var n1 = a1.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "");
        var n1 = a1.toString().replace(/\./g, "");
        return n1 + n2;
    }
}
// to download zip file
function fileUrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
app.controller('loginController', function($scope, $log, rest, $window, $location, $cookieStore, $timeout, $route, $routeParams, $rootScope) {
    /*-------Check for login--------*/
    if ($cookieStore.get('session_iUserId') != undefined) {
        $location.path('/dashboard');
    }

    /*-------Check for login--------*/
    $scope.login = function(user, formId) {
        if (user.password == undefined) {
            notification('Please enter password.', 'warning');
            return false;
        }
        if ($("#" + formId).valid()) {
            $('#loginSpin').show();
            $timeout(function() {
                rest.path = 'authenticate';
                rest.post(user).success(function(data) {
                    $('#loginSpin').hide();
                    $window.localStorage.setItem("_auth", data.session_data.vPassword);
                    $cookieStore.put('auth', data.session_data.vPassword);
                    $cookieStore.put('session_iUserId', data.session_data.iUserId);
                    $cookieStore.put('session_vEmailAddress', data.session_data.vEmailAddress);
                    //$cookieStore.put('session_password', data.session_data.org_pass);
                    $cookieStore.put('session_iFkUserTypeId', data.session_data.iFkUserTypeId);
                    $cookieStore.put('session_holidayCountry', data.session_data.vholiday_country);
                    $window.localStorage.setItem("session_vResourceType", data.vResourceType);
                    $window.localStorage.setItem("session_iUserId", data.session_data.iUserId);
                    $window.localStorage.setItem("session_eUserStatus", data.session_data.eUserStatus);
                    $window.localStorage.setItem("session_vEmailAddress", data.session_data.vEmailAddress);
                    $window.localStorage.setItem("session_vUserName", data.session_data.vUserName);
                    $window.localStorage.setItem("session_iFkUserTypeId", data.session_data.iFkUserTypeId);
                    $window.localStorage.setItem("session_vUserFullName", data.session_data.vFirstName + " " + data.session_data.vLastName);
                    $window.localStorage.setItem("session_vProfilePic", data.session_data.vProfilePic);
                    $window.localStorage.welUser = data.session_data.vUserName.toString();
                    $rootScope.myData = data;
                    
                    //getting global dateformat
                    rest.path = 'getdateFormatByIuserId/1';
                    rest.get().success(function(data) {
                        if(data){
                            if(data.dateSeparator == '/'){
                                $window.localStorage.setItem("global_dateFormat",data.dateformat);
                                $window.localStorage.setItem("dtSeparator",data.dateSeparator);
                            }else if(data.dateSeparator == '.'){
                                data.dateformat = data.dateformat.replace(/\//g,data.dateSeparator);
                                $window.localStorage.setItem("global_dateFormat",data.dateformat);
                                $window.localStorage.setItem("dtSeparator",data.dateSeparator);
                            }else{
                                data.dateformat = data.dateformat.replace(/\//g,data.dateSeparator);
                                $window.localStorage.setItem("global_dateFormat",data.dateformat);
                                $window.localStorage.setItem("dtSeparator",data.dateSeparator);
                            }
                        }else{
                            $window.localStorage.setItem("global_dateFormat",'DD/MM/YYYY');
                            $window.localStorage.setItem("dtSeparator",'/');
                        }
                    }).error(errorCallback);

                    //getting decimalSeperator
                    rest.path = 'getDecimalSeperatorByIuserId/1';
                    rest.get().success(function(data) {
                        if(data){
                            $window.localStorage.setItem("DecimalSeparator",data.separatorChar);
                        }else{
                            $window.localStorage.setItem("DecimalSeparator",',');
                        }
                    }).error(errorCallback);

                    $location.path('/dashboard1');
                }).error(errorCallback, $('#loginSpin').hide());
            }, 1500);
        }
    };

    $scope.resetPass = function(reset, formId) {
        $scope.showLoadingIcon = false;
        if ($("#" + formId).valid()) {
            $scope.showLoadingIcon = true;
            rest.path = 'resetpassword';
            rest.post(reset).success(function(data) {
                $('#successModal').modal('show');
                if (data.status == 200) {
                    //$scope.showLoadingIcon = false;
                    $timeout(function() {
                        $location.path('/');
                    }, 3000);
                } else {
                    $scope.showLoadingIcon = false;
                }
            }).error(function(data) {
                if(data.status == 422){
                    notification(data.msg,'warning');
                    $scope.showLoadingIcon = false;
                }else{
                    errorCallback(data);
                }
            });
        }
    };
}).controller('headerController', function($uibModal, $timeout, $scope, $window, $location, $log, $interval, rest, $rootScope, $cookieStore, $route, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if ($cookieStore.get('session_iUserId') != undefined) {
        $scope.session_iUserId = $window.localStorage.session_iUserId;
        $scope.session_eUserStatus = $window.localStorage.session_eUserStatus;
        $scope.session_vEmailAddress = $window.localStorage.session_vEmailAddress;
        $scope.session_vUserName = $window.localStorage.session_vUserName;
        $scope.session_vUserFullName = $window.localStorage.session_vUserFullName;
        $scope.session_vProfilePic = $window.localStorage.session_vProfilePic;
        $scope.session_vResourceType = $window.localStorage.getItem("session_vResourceType");
        $scope.uId = $window.localStorage.getItem("session_iUserId");
        $scope.logout = function() {
            angular.forEach(["session_iUserId", "auth", "session_iFkUserTypeId", "session_vEmailAddress", "session_password", "internalUserEdit", "internalUserAdd", "jobRecentEdit", "jobRecentAdd", "session_holidayCountry","generalEdit","editInternalUser"], function(key) {
                $cookieStore.remove(key);
            });

            angular.forEach(openWindows, function(i, e) {
                openWindows[e].close();
            });
            openWindows = [];
            $window.localStorage.clear();
            $window.localStorage.clear();
            $location.path('/');
        }

    } else {
        angular.forEach(["session_iUserId", "auth", "session_iFkUserTypeId", "session_vEmailAddress", "session_password", "internalUserEdit", "internalUserAdd", "jobRecentEdit", "jobRecentAdd"], function(key) {
            $cookieStore.remove(key);
        });
        $window.localStorage.clear();
        $window.localStorage.clear();
        $location.path('/');
    }

    $scope.logout = function() {
        angular.forEach(["session_iUserId", "auth", "session_iFkUserTypeId", "session_vEmailAddress", "session_password", "internalUserEdit", "internalUserAdd", "jobRecentEdit", "jobRecentAdd", "session_holidayCountry","generalEdit","editInternalUser"], function(key) {
            $cookieStore.remove(key);
        });

        angular.forEach(openWindows, function(i, e) {
            openWindows[e].close();
        });
        openWindows = [];
        $window.localStorage.clear();
        $window.localStorage.clear();
        $location.path('/');
    }

    $scope.clearSearchBox = function() {
        angular.element('#selectedOrder').val('');
        angular.element('#clearBtn').addClass('clearBtnHide');
    }


    $scope.disableSearch = true;

    rest.path = 'getJobsFromTmsSummeryView';
    rest.get().success(function(data) {
        $rootScope.SearchJobList = data;

        rest.path = "dashboardOrderGet";
        rest.get().success(function(data) {
            $scope.projectData = data;
            var orders = [];
            $timeout(function() {
                angular.forEach($scope.projectData, function(ordersData) {
                    orders.push(ordersData.orderNumber);
                });

                angular.forEach($rootScope.SearchJobList, function(jdata) {
                    orders.push(jdata.po_number);
                });
                $scope.orderNames = orders;
                $scope.disableSearch = false;
            }, 100);

        });
    }).error(errorCallback);




    $scope.searchProject = function(selectedValue) {
        $scope.selectedOrder = selectedValue;
        var txtValue = angular.element('#selectedOrder').val()

        //If submited with enter Or click then replacing $scope.selectedOrder with txtValue
        if ($scope.selectedOrder == undefined || $scope.selectedOrder.length == 0) {
            $scope.selectedOrder = txtValue;
        }


        if ($scope.selectedOrder == undefined || $scope.selectedOrder.length == 0) {
            notification('Please enter project number Or Job Number.', 'warning');
            return false;
        } else {
            if ($scope.selectedOrder.includes('_')) {
                var isMatch = true;
                angular.forEach($rootScope.SearchJobList, function(jobsData) {
                    if (isMatch) {
                        if (jobsData.po_number === $scope.selectedOrder) {
                            $scope.goTojobId = jobsData.job_summmeryId;
                            $scope.order_id = jobsData.order_id;
                            isMatch = false;
                        }
                    }
                });
                if ($scope.goTojobId == undefined) {
                    notification('Nothing found..', 'error');
                } else {
                    if ($scope.goTojobId) {

                    }
                    rest.path = 'jobDetailchange/' + $scope.goTojobId;
                    rest.get().success(function(data) {
                        if (data) {
                            //$location.path('/job-summery-details/' + jobId);
                            $window.localStorage.projectJobChainOrderId = $scope.order_id;
                            $window.localStorage.orderID = $scope.order_id;
                            $routeParams.id = $scope.goTojobId;
                            var modalInstance = $uibModal.open({
                                animation: $scope.animationsEnabled,
                                templateUrl: 'tpl/jobEditPopup.html',
                                controller: 'jobSummeryDetailsController',
                                size: '',
                                resolve: {
                                    items: function() {
                                        return $scope.data;
                                    }
                                }
                            });
                        } else {
                            notification('This Record is deleted.', 'error');
                        }
                    }).error(errorCallback);
                }
            } else {
                var isMatch = true;
                angular.forEach($scope.projectData, function(ordersData) {
                    if (isMatch) {
                        if (ordersData.orderNumber === $scope.selectedOrder) {
                            $scope.goToOrderId = ordersData.orderId;
                            isMatch = false;
                        }
                    }
                });
                if ($scope.goToOrderId == undefined) {
                    notification('Nothing found..', 'error');
                } else {
                    if ($scope.goToOrderId) {
                        rest.path = 'order/' + $scope.goToOrderId + '/' + $window.localStorage.getItem("session_iUserId");
                        rest.get().success(function(data) {
                            // debugger;
                            $scope.orderdata = data;
                            $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                            $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                            $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                            $window.localStorage.orderNo = $scope.orderdata.order_number;
                            $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                            $window.localStorage.orderID = $scope.goToOrderId;
                            $window.localStorage.iUserId = $scope.goToOrderId;
                            $window.localStorage.userType = 3;
                            $window.localStorage.currentUserName = data.vClientName;
                            $window.localStorage.genfC = 1;

                            if ($location.path() == '/general') {
                                $route.reload();
                            } else {
                                $location.path('/general');
                            }
                            //set isNewProject to false
                            $window.localStorage.setItem("isNewProject","false");
                        }).error(errorCallback);
                        $window.localStorage.orderBlock = 1;
                    }
                }
            }
            return;
        }
    }

    $scope.menuHoverIn = function(iconId) {
        angular.element('#' + iconId).removeClass('fvIconHide').addClass('fvIconShow');
    }

    $scope.menuHoverOut = function(iconId) {
        angular.element('#' + iconId).removeClass('fvIconShow').addClass('fvIconHide');
    }



    rest.path = 'getFvMenu/' + $window.localStorage.getItem("session_iUserId");
    rest.get().success(function(data) {
        if (data.data) {
            $scope.menuJsonObj = data.data;
            $scope.menus = JSON.parse(data.data.menu_json);
        } else {
            $scope.menuJsonObj = {};
            $scope.menus = [];
        }

    }).error(errorCallback);

    //$scope.menuJsonObj = {} ;

    $scope.addToFavouriteMenu = (event) => {

        var iconElement = $(event.target).prev();
        var fvMenuUrl = iconElement.attr('href');
        var fvMenuName = iconElement.find('span').text();

        if ($scope.menus) {
            var found = false;
            angular.forEach($scope.menus, function(val, i) {
                if (!found) {
                    if (val.fvMenuName == fvMenuName && val.fvMenuUrl == fvMenuUrl) {
                        notification('Menu already added in favourite.', 'warning');
                        found = true;
                    }
                }
            })
            if (!found) {
                $scope.menus.push({ 'fvMenuUrl': fvMenuUrl, 'fvMenuName': fvMenuName });
            }
        } else {
            $scope.menus.push({ 'fvMenuUrl': fvMenuUrl, 'fvMenuName': fvMenuName });
        }

        if (!found) {
            $scope.menuJsonObj.iUserId = $window.localStorage.getItem("session_iUserId");
            $scope.menuJsonObj.menu_json = JSON.stringify($scope.menus);

            rest.path = 'saveFvMenu';
            rest.post($scope.menuJsonObj).success(function(data) {
                if (data.status == 200) {
                    notification(data.msg, 'success');
                    $scope.menus = JSON.parse(data.data.menu_json);
                }
            }).error(errorCallback);
        }
    }


    $scope.removeFromFavouriteMenu = (event) => {
        var iconElement = $(event.target).prev();
        var fvMenuUrl = iconElement.attr('href');
        
        var removeIndex;
        angular.forEach($scope.menus,function(val,i){
            if (val.fvMenuUrl === fvMenuUrl) {
                removeIndex = i;
            }
        })
       
        $scope.menus.splice(removeIndex, 1);

        $scope.menuJsonObj.iUserId = $window.localStorage.getItem("session_iUserId");
        $scope.menuJsonObj.menu_json = JSON.stringify($scope.menus);

        rest.path = 'saveFvMenu';
        rest.post($scope.menuJsonObj).success(function(data) {}).error(errorCallback);

    }

    /*Recent Activity Code start*/
    $scope.activityLimit = 17;

    $scope.loadMoreActivity = function(){
        var increamented = $scope.activityLimit +10;
        $scope.activityLimit = increamented > $scope.activityList.length ? $scope.activityList.length : increamented;
        
    }

    //recent activity
    if ($cookieStore.get('session_iUserId')) {
        $scope.dateDate = [];
        rest.path = "recentActivityGet/" + $cookieStore.get('session_iUserId');
        rest.get().success(function(data) {
            $scope.activityList = data;
            var color = ['success', 'warning', 'info', 'primary'];
            var date = new Date();
            var count = 0;

            angular.forEach(data, function(val, i) {
                //set activity side line color
                if (count == color.length) {
                    count = 0;
                }

                $scope.activityList[i].color = color[count];
                count++;

                //set recent activity date
                var a = date;
                var b = new Date(val.modified_date);
                var days = daydiff(b, a); // 1 day

                switch (days) {
                    case 0:
                        var recentDate = "Today " + timeFormat(val.modified_date);
                        break;
                    case 1:
                        var recentDate = "Yesterday " + timeFormat(val.modified_date);
                        break;
                    default:
                        var recentDate = days + " days ago.";
                }

                $timeout(function() {
                    $scope.dateDate[i] = recentDate;
                }, 100);
            });
        });
    }
    /*Recent Activity Code End*/

}).controller('dashboardController', function($scope, $window, $location, $log, $interval, rest, $rootScope, $cookieStore, $timeout, $filter, fileReader, $uibModal, $route, $routeParams, DTOptionsBuilder) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.jobfolderId = " ";
    $window.localStorage.scoopfolderId = " ";
    $window.localStorage.pId = " ";
    $window.localStorage.filemanagerUser = " ";
    $scope.welUser = $window.localStorage.getItem("session_vUserName");
    $window.localStorage.jobOrderId = " ";
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.jobstatusName = " ";
    $window.localStorage.countSt = " ";

    $scope.proejctsToDisplay = [];
        

          
    //Getting Jobs from getJobsFromTmsSummeryView
    $scope.getJobList = function() {
        rest.path = 'getJobsFromTmsSummeryView';
        rest.get().success(function(data) {
            $scope.dashboardJobList = data;
            //console.log("$scope.dashboardJobList", $scope.dashboardJobList);

            var Requested = [];
            var NewJob = [];
            var inProgerss = [];
            var readyToBeDelivered = [];
            var delivered = [];
            var completed = [];
            var pendingPo = [];

            var jobRequestesCount = 0;
            var jobInProgressCount = 0;
            var jobDueTodayCount = 0;
            var jobDueTomorrowCount = 0;
            var jobOverDueCount = 0;

            angular.forEach($scope.dashboardJobList, function(val, i) {
                val.item_id = pad(val.item_id, 3);

                if (val.ItemLanguage) {
                    val.ItemLanguage = val.ItemLanguage.split('>')[0].trim().substring(0, 3).toUpperCase() + ' > ' + val.ItemLanguage.split('>')[1].trim().substring(0, 3).toUpperCase();
                }
                if (val.po_number.length < 1) {
                    pendingPo.push(val);
                }

                if (val.item_status == 'New') {
                    NewJob.push(val);
                } else if (val.item_status == 'Requested') {
                    Requested.push(val);
                    jobRequestesCount++;
                } else if (val.item_status == 'In-progress') {
                    inProgerss.push(val);
                    jobInProgressCount++;
                } else if (val.item_status == 'Ready to be Delivered') {
                    readyToBeDelivered.push(val);
                } else if (val.item_status == 'Delivered') {
                    delivered.push(val);
                } else if (val.item_status == 'Completed') {
                    completed.push(val);
                }


                //Due date counts for jobs
                if (val.due_date.split(' ')[0] == dateFormat(new Date()).split(".").reverse().join("-")) {
                    jobDueTodayCount++;
                }
                if (val.due_date.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 1)) {
                    jobDueTomorrowCount++;
                }
                if (val.due_date.split(' ')[0] < dateFormat(new Date()).split(".").reverse().join("-")) {
                    jobOverDueCount++;
                }

            });
            $timeout(function() {
                $scope.inProgerss = inProgerss;
                $scope.jobNew = NewJob;
                $scope.readyToBeDelivered = readyToBeDelivered;
                $scope.delivered = delivered;
                $scope.completed = completed;
                $scope.pendingPo = pendingPo;

                $scope.jobRequestesCount = jobRequestesCount;
                $scope.jobInProgressCount = jobInProgressCount;
                $scope.jobDueTodayCount = jobDueTodayCount;
                $scope.jobDueTomorrowCount = jobDueTomorrowCount;
                $scope.jobOverDueCount = jobOverDueCount;
            }, 100);
        }).error(errorCallback);
    };
    
    $scope.getJobList();
    //$scope.getAllProjects();

    $scope.DtTblOption = {
        "dom": '<"pull-right"l><<t>p><"clear">'
    }
    
    /*Common Searching For All Datatables*/
    $( document ).ready(function() {
        $timeout(function() {
            $.fn.dataTableExt.oApi.fnFilterAll = function(oSettings, sInput, iColumn, bRegex, bSmart) {
                var settings = $.fn.dataTableSettings;
                for (var i = 0; i < settings.length; i++) {
                    settings[i].oInstance.fnFilter(sInput, iColumn, bRegex, bSmart);
                }
            };
            $("#jobNewTbl_wrapper .row:first").prepend('<div class="col-sm-5"><h4>New Jobs</h4></div>');
            $('#jobNewTbl_wrapper .dataTables_length').parent().removeClass('col-sm-6').addClass('col-sm-3');
            $('#jobNewTbl_filter').parent().removeClass('col-sm-6').addClass('col-sm-3');
            $("#jobNewTbl_filter").find('label').find('input').attr('id', 'Search_All');
            $('#jobNewTbl_info').parent().remove();
            $('#jobNewTbl_paginate').parent().addClass('pull-right');
            

            $('#inProgerssTbl_wrapper').children().first().parent().prepend('<h4 style="float: left;">Job in Progerss</h4>');
            $('#readyToBeDeliveredTbl_wrapper').children().first().parent().prepend('<h4 style="float: left;">Jobs Ready to be Delivered</h4>');
            $('#deliveredTbl_wrapper').children().first().parent().prepend('<h4 style="float: left;">Jobs Delivered</h4>');
            $('#completedTbl_wrapper').children().first().parent().prepend('<h4 style="float: left;">Jobs Completed</h4>');
            
            var oTablejobNewTbl = $("#jobNewTbl").dataTable();
            $("#jobNewTbl").keyup(function() {
                oTablejobNewTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTablejobNewTbl.fnFilterAll(this.value);
            });


            var oTableinProgerssTbl = $("#inProgerssTbl").dataTable();
            $("#inProgerssTbl").keyup(function() {
                oTableinProgerssTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTableinProgerssTbl.fnFilterAll(this.value);
            });

            var oTablereadyToBeDeliveredTbl = $("#readyToBeDeliveredTbl").dataTable();
            $("#readyToBeDeliveredTbl").keyup(function() {
                oTablereadyToBeDeliveredTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTablereadyToBeDeliveredTbl.fnFilterAll(this.value);
            });

            var oTabledeliveredTbl = $("#deliveredTbl").dataTable();
            $("#deliveredTbl").keyup(function() {
                oTabledeliveredTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTabledeliveredTbl.fnFilterAll(this.value);
            });

            var oTablecompletedTblcompletedTbl = $("#completedTblcompletedTbl").dataTable();
            $("#completedTblcompletedTbl").keyup(function() {
                oTablecompletedTblcompletedTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTablecompletedTblcompletedTbl.fnFilterAll(this.value);
            });

            var oTablependingPoTbl = $("#pendingPoTbl").dataTable();
            $("#pendingPoTbl").keyup(function() {
                oTablependingPoTbl.fnFilterAll(this.value);
            });
            $("#Search_All").keyup(function() {
                oTablependingPoTbl.fnFilterAll(this.value);
            });
        }, 2000);
    });
    $scope.createProject = function() {
        $window.localStorage.orderID = '';
        $window.localStorage.setItem('projectOrderName', '');
        $window.localStorage.setItem("isNewProject","true");
        $location.path('/general');
    }
    $scope.goToJobFromPOClick = function(job_summmeryId, order_id) {
        $window.localStorage.projectJobChainOrderId = order_id;
        $window.localStorage.orderID = order_id;
        $location.path('/job-summery-details/' + job_summmeryId);
    };

    $scope.goToJob = function(jobId, OrderId) {
        scrollBodyToTop();
        rest.path = 'jobDetailchange/' + jobId;
        rest.get().success(function(data) {
            if (data) {
                //$location.path('/job-summery-details/' + jobId);
                $window.localStorage.projectJobChainOrderId = OrderId;
                $window.localStorage.orderID = OrderId;
                $routeParams.id = jobId;
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'tpl/jobEditPopup.html',
                    controller: 'jobSummeryDetailsController',
                    size: '',
                    resolve: {
                        items: function() {
                            return $scope.data;
                        }
                    }
                });
            } else {
                notification('This Record is deleted.', 'error');
            }
        }).error(errorCallback);
    };

    //Project Get From DashBoard Recent Activity
    $scope.edit = function(id) {
        if (id) {
            rest.path = 'order/' + id + '/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                if (data.userName != null) {
                    $scope.orderdata = data;
                    $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                    $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                    $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                    $window.localStorage.orderNo = $scope.orderdata.order_number;
                    $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                    $window.localStorage.orderID = id;
                    $window.localStorage.iUserId = id;
                    $window.localStorage.userType = 3;
                    $window.localStorage.currentUserName = data.vClientName;
                    $window.localStorage.genfC = 1;
                    $location.path('/general');
                    $window.localStorage.orderBlock = 1;
                } else {
                    notification('Information not available', 'warning');
                }
            }).error(errorCallback);
        }
    };
    
    



    //my tasks job display
    if ($cookieStore.get('session_iUserId') != undefined) {
        rest.path = "taskJobget/" + $cookieStore.get('session_iUserId');
        rest.get().success(function(data) {
            $scope.jobTaskList = data;
        });
    }

    //mytask Redirect on job
    $scope.myTaskSent = function(jobId, OrderId) {
        $window.localStorage.projectJobChainOrderId = OrderId;
        $location.path('/job-summery-details/' + jobId);
    }

    //user Edit Recent activity
    if ($cookieStore.get('internalUserEdit') != undefined) {
        if (jQuery.type($cookieStore.get('internalUserEdit')) == "number") {
            rest.path = "userActivityGetOne/" + $cookieStore.get('internalUserEdit');
            rest.get().success(function(data) {
                $scope.UserEditActivity = data;
            });
        } else {
            rest.path = "userActivityGet";
            rest.post(jQuery.unique($cookieStore.get('internalUserEdit'))).success(function(data) {
                $scope.UserEditActivity = data;
            });
        }
    }

    //user Add Recent activity
    if ($cookieStore.get('internalUserAdd') != undefined) {
        if (jQuery.type($cookieStore.get('internalUserAdd')) == "number") {
            rest.path = "userActivityGetOne/" + $cookieStore.get('internalUserAdd');
            rest.get().success(function(data) {
                $scope.UserAddActivity = data;
            });
        } else {
            rest.path = "userActivityGet";
            rest.post($cookieStore.get('internalUserAdd')).success(function(data) {
                $scope.UserAddActivity = data;
            });
        }
    }

    //jobs Edit recent activity
    if ($cookieStore.get('jobRecentEdit') != undefined) {
        if (jQuery.type($cookieStore.get('jobRecentEdit')) != "number") {
            rest.path = "jobActivityGet";
            rest.post(jQuery.unique($cookieStore.get('jobRecentEdit'))).success(function(data) {
                var obj = [];
                angular.forEach(data, function(val, i) {
                    if (val != null) {
                        obj.push(val);
                    }
                });
                $scope.jobEditActivity = obj;
            });
        }
    }

    //jobs Add recent activity
    if ($cookieStore.get('jobRecentAdd') != undefined) {
        rest.path = "jobActivityGet";
        rest.post(jQuery.unique($cookieStore.get('jobRecentAdd'))).success(function(data) {
            //$scope.jobEditActivity = data;
            var obj = [];
            angular.forEach(data, function(val, i) {
                if (val != null) {
                    obj.push(val);
                }
            });
            $scope.jobAddActivity = obj;
        });
    }

    //highchart height set
    setInterval(function() {
        angular.element('.highcharts-container').css('height', '300px');
    }, 300);

    var date = new Date();
    var dayAftertomorrow = pad(date.getDate() + 2, 2) + '.' + pad((date.getMonth() + 1), 2) + '.' + date.getFullYear();
    var tomorrow = dateFormat(new Date(date.setDate(date.getDate() + 1)));
    var today = dateFormat(new Date());

    $scope.redirectToProject = function(id) {
        $window.localStorage.orderID = id;
        $location.path('/general');
    }
    // Admin wise data get
    if ($scope.userRight == 1) {
        rest.path = "dashboardOrderGet";
        rest.get().success(function(data) {
            // pagination
            $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 5;
            $scope.filteredTodos = data;
            $scope.makeTodos = function() {
                $scope.todos = [];
                angular.forEach($scope.filteredTodos, function(val, i) {
                    //$scope.todos.push({ , done:false});
                });
            }

            $scope.makeTodos();

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                    end = begin + $scope.numPerPage;
                $scope.adminOrderData = $scope.filteredTodos.slice(begin, end);

                $scope.projectInProgerss = 0;
                $scope.projectDilevered = 0;
                $scope.DueDateTodayCount = 0;
                $scope.DueDateTomorrowCount = 0;
                $scope.dueDayAfterTomorrowCount = 0;
                $scope.overDueDateCount = 0;
                $scope.headsUp = 0;

                angular.forEach($scope.filteredTodos, function(val, i) {
                    if (val.projectStatus == 4) {
                        $scope.projectInProgerss++;
                    }
                    $scope.projectInProgerss = $scope.projectInProgerss;

                    if (val.projectStatus == 11) {
                        $scope.projectDilevered++;
                    }
                    $scope.projectDilevered = $scope.projectDilevered;

                    if (val.DueDate.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 1)) {
                        $scope.DueDateTomorrowCount++;
                    }
                    $scope.DueDateTomorrowCount = $scope.DueDateTomorrowCount;

                    if (val.DueDate.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 2)) {
                        $scope.dueDayAfterTomorrowCount++;
                    }
                    $scope.dueDayAfterTomorrowCount = $scope.dueDayAfterTomorrowCount;

                    if (val.DueDate.split(' ')[0] == dateFormat(new Date())) {
                        $scope.DueDateTodayCount++;
                    }
                    $scope.DueDateTodayCount = $scope.DueDateTodayCount;

                    if (val.DueDate.split(' ')[0].split(".").reverse().join("-") < dateFormat(new Date()).split(".").reverse().join("-")) {
                        $scope.overDueDateCount++;
                    }
                    $scope.overDueDateCount = $scope.overDueDateCount;

                    if (val.heads_up == 1) {
                        $scope.headsUp++;
                    }
                    $scope.headsUp = $scope.headsUp;
                });

                var go;
                $scope.OverdueFilter = function(id, eID) {
                    eID = "projectScroll";
                    //angular.element('.DashboardTask').css('margin-top', '-20%');
                    $scope.dateOverdue = $filter('dateLessThenToday')($scope.adminOrderData, today);
                    scrollToId(eID);
                    angular.element('#exportable').hide();
                    angular.element('#exportable1').show();
                    angular.element('#exportExport1').show();
                    angular.element('#exportExport').hide();
                    angular.element('.DashboardTask').css('margin-top', '-5%');
                }
            });

            var order = {
                // all: 0,
                inpreparation: 0,
                assignedwaiting: 0,
                inprogress: 0,
                overdue: 0,
                delivered: 0,
                approved: 0,
                duetoday: 0,
                duetommorow: 0,
                duetoday: 0,
                duedayaftertomorrow: 0
            };

            //count status
            angular.forEach(data, function(val, i) {
                if (val.DueDate != "") {}
                if (val.itemStatus == 'In preparation') {
                    order.inpreparation += 1;
                }
                if (val.itemStatus == 'Assigned-waiting') {
                    order.assignedwaiting += 1;
                }
                if (val.itemStatus == 'In-progress') {
                    order.inprogress += 1;
                }
                /*if (val.itemStatus == 'Overdue') {
                    order.overdue += 1;
                }*/
                if (val.itemStatus == 'Delivered') {
                    order.delivered += 1;
                }
                if (val.itemStatus == 'Approved') {
                    order.approved += 1;
                }
                /*if (val.DueDate == dayAftertomorrow) {
                    order.duedayaftertomorrow += 1;
                }*/
                /*if (val.DueDate == tomorrow) {
                    order.duetommorow += 1;
                }*/
                /*if (val.DueDate == today) {
                    order.duetoday += 1;
                }*/
            });

            //count status display
            var obj = [];
            angular.forEach(order, function(val, i) {
                obj.push({ name: i, y: val });
                angular.element('#ap_' + i).text(val);
            });

            //$scope.jobChart(obj);

            $scope.adminEmpty = jQuery.isEmptyObject(data);

        });
    }

    $scope.goToProjectList = function(viewType) {
        if(viewType){
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/statusWiseProject.html',
                controller: 'statusWiseProjectController',
                size: '',
                resolve: {
                    items: function() {
                        return viewType;
                    }
                }
            });
        }
        
    };

    $scope.goToProjectViewdetail = function(viewType) {
        if(viewType){
            var modalInstance = $uibModal.open({
                //animation: $scope.animationsEnabled,
                templateUrl: 'tpl/projectViewdetailPopup.html',
                controller: 'viewProjectController',
                size: '',
                resolve: {
                    items: function() {
                        return viewType;
                    }
                }
            });
        }
        
    };


    $scope.goTocommentChat = function(viewType) {
        if(viewType){
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/commentchatPopup.html',
                controller: 'commentchatController',
                size: '',
                resolve: {
                    items: function() {
                        return viewType;
                    }
                }
            });
    
        }        

    }


    // Tab view Project List
    $scope.projectsAll= [];
    $scope.projectsInProgress= [];
    $scope.projectsDueToday= [];
    $scope.projectsDueTomorrow= [];
    $scope.projectsAssigned= [];
    $scope.projectsQaready= [];
    $scope.projectsToBeDelivered= [];
    $scope.projectsCompletedByLng= [];
    $scope.projectsToDisplay= [];

    $scope.projectsAllCount = 0;
    $scope.projectsInprogressCount = 0;
    $scope.projectsDueTodayCount = 0;
    $scope.projectsDueTomorrowCount = 0;
    $scope.projectsDeliveredCount = 0;
    $scope.projectsQaReadyCount = 0;
    $scope.projectsAssignedCount = 0;
    
    $scope.allProjectListing = function() {
        //$routeParams.id = 5;
        rest.path = "dashboardProjectsOrderGet/"+$window.localStorage.getItem("session_iUserId");
        rest.get().success(function(data) {
            angular.forEach(data,function(val,i){
                val.progrss_precentage = -1;
                $scope.projectsAll = data;
                if(val.items){
                    angular.forEach(val.items,function(val2,i2){
                        if(val2.source_lang){
                            data[i].items[i2].source_lang  = JSON.parse(val2.source_lang);
                            data[i].items[i2].target_lang = JSON.parse(val2.target_lang);
                        }else{
                            var newData = { sourceLang:'',dataNgSrc:'',alt:'' };
                            data[i].items[0].source_lang = newData;
                            data[i].items[0].target_lang = newData;
                        }
                    });
                }else{
                    var newData = { sourceLang:'',dataNgSrc:'',alt:'' };
                    data[i].items[0].source_lang = newData;
                    data[i].items[0].target_lang = newData;
                }
                /*angular.forEach(val.items,function(val2,i2){
                    val2.source_lang = JSON.parse(val2.source_lang);
                    val2.target_lang = JSON.parse(val2.target_lang);
                });*/
                
                var cmtcolor = '#337ab7';
                var cmtval = data[i].comment[0].comment_status;
                if(cmtval > 0 && val.comment_id > 0){
                    cmtcolor = 'red';
                }
                if(cmtval == 0 && val.comment_id > 0){
                    cmtcolor = 'green';
                }
                val.comment = cmtcolor;
                
                $scope.projectsAllCount++;
                if(val.projectStatus == 12){
                    val.progrss_precentage = 0;
                    $scope.projectsAssigned.push(val);
                    $scope.projectsAssignedCount++;
                }
                if(val.projectStatus == 4){
                    val.progrss_precentage = 25;
                    $scope.projectsInProgress.push(val);
                    $scope.projectsInprogressCount++;
                }
                if(val.projectStatus == 13){
                    val.progrss_precentage = 50;
                    $scope.projectsCompletedByLng.push(val);
                    //$scope.projectsInprogressCount++;
                }
                if(val.projectStatus == 14){
                    val.progrss_precentage = 75;
                    $scope.projectsQaready.push(val);
                    $scope.projectsQaReadyCount++;
                }
                if(val.projectStatus == 15){
                    val.progrss_precentage = 100;
                    $scope.projectsToBeDelivered.push(val);
                    $scope.projectsDeliveredCount++;
                }
                if(val.DueDate.split(' ')[0] == dateFormat(new Date()).split(".").reverse().join("-")){
                    $scope.projectsDueToday.push(val);
                    $scope.projectsDueTodayCount++;
                }
                if (val.DueDate.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 1)) {
                    $scope.projectsDueTomorrow.push(val);
                    $scope.projectsDueTomorrowCount++;
                }
                if(val.heads_up == 1){
                    $scope.projectsToDisplay.push(val);
                }
                
            });
            //console.log("allproj",$scope.projectsAll);
            
        });
    };
    $scope.allProjectListing();

     $scope.goTojobsList = function(jobStatus,count) {
        if(count == 0){
            notification("Nothing jobs available in "+jobStatus+".","warning");
            return false;
        }
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/statusWiseJobs.html',
            controller: 'statusWiseJobsController',
            size: '',
            resolve: {
                items: function() {
                    return jobStatus;
                }
            }
        });
    };
    $scope.namePrezip = function(name) {
        //console.log('namee',name);
        $window.localStorage.setItem('itemClientName',name);
    }    
    $scope.orderCheck = function(id, eID, inPrepare) {
        eID = "projectScroll";
        $scope.orderItem = {};
        angular.element('.DashboardTask').css('margin-top', '-20%');
        switch (id) {
            case "In preparation":
                $scope.itemStatus = id;
                $scope.orderItem.itemStatus = $scope.itemStatus;
                $scope.ordersData = true;
                $scope.OrList = "In preparation";
                $scope.inprogressColapse = false;
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                break;
            case "Assigned-waiting":
                $scope.itemStatus = id;
                $scope.orderItem.itemStatus = $scope.itemStatus;
                $scope.ordersData = true;
                $scope.OrList = "Assigned-waiting";
                $scope.inprogressColapse = false;
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                break;
            case "In-progress":
                $scope.itemStatus = id;
                $scope.orderItem.itemStatus = $scope.itemStatus;
                $scope.ordersData = true;
                $scope.OrList = "In-progress";
                $scope.inprogressColapse = true;
                if (inPrepare == undefined || inPrepare == false) {
                    $scope.inprogressColapse = true;
                    angular.element('.DashboardTask').css('margin-top', '0%');
                } else {
                    $scope.inprogressColapse = false;
                    angular.element('.DashboardTask').css('margin-top', '-20%');
                }
                break;
            case "Overdue":
                $scope.itemStatus = id;
                $scope.orderItem.DueDate = today;
                $scope.ordersData = true;
                $scope.OrList = "Overdue";
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                angular.element('.DashboardTask').css('margin-top', '0%');
                break;
            case "Delivered":
                $scope.itemStatus = id;
                $scope.orderItem.itemStatus = $scope.itemStatus;
                $scope.ordersData = true;
                $scope.OrList = "Delivered";
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                $scope.inprogressColapse = false;
                scrollToId(eID);
                break;
            case "Approved":
                $scope.itemStatus = id;
                $scope.orderItem.itemStatus = $scope.itemStatus;
                $scope.ordersData = true;
                $scope.OrList = "Approved";
                $scope.inprogressColapse = false;
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                break;
            case "Due-today":
                var today = dateFormat(new Date());
                $scope.itemStatus = id;
                $scope.orderItem.DueDate = today;
                $scope.ordersData = true;
                $scope.OrList = "Due-today";
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                angular.element('.DashboardTask').css('margin-top', '0%');
                break;
            case "Due-tomorrow":
                $scope.itemStatus = id;
                $scope.orderItem.DueDate = tomorrow;
                $scope.ordersData = true;
                $scope.OrList = "Due-tomorrow";
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                angular.element('.DashboardTask').css('margin-top', '0%');
                break;
            case "Due-day-after-tomorrow":
                $scope.itemStatus = id;
                $scope.orderItem.DueDate = dayAftertomorrow;
                $scope.ordersData = true;
                $scope.OrList = "Due-day-after-tomorrow";
                angular.element('#exportable').show();
                angular.element('#exportable1').hide();
                angular.element('#exportExport1').hide();
                angular.element('#exportExport').show();
                scrollToId(eID);
                angular.element('.DashboardTask').css('margin-top', '0%');
                break;
        }
    }

    // freelance job wise data get
    if ($window.localStorage.session_iUserId && $scope.userRight == 2) {
        rest.path = 'freelanceJob/' + $window.localStorage.session_iUserId;
        rest.get().success(function(data) {
            $scope.jobList = data;
            $scope.freelanceEmpty = jQuery.isEmptyObject(data);
            var allStatus = [];
            var Requested = [];
            var aw = [];
            var ip = [];
            var Delivered = [];
            var Approved = [];
            angular.forEach(data, function(val, i) {
                if (val.item_status) {
                    allStatus.push(val.item_status);
                }

                if (val.item_status == 'Requested') {
                    Requested.push(val.item_status);
                }
                if (val.item_status == 'Assigned-waiting') {
                    aw.push(val.item_status);
                }

                if (val.item_status == 'In-progress') {
                    ip.push(val.item_status);
                }

                if (val.item_status == 'Delivered') {
                    Delivered.push(val.item_status);
                }

                if (val.item_status == 'Approved') {
                    Approved.push(val.item_status);
                }
            });

            //job assign count
            $scope.allCount = allStatus.length;
            $scope.RequestedCount = Requested.length;
            $scope.awCount = aw.length;
            $scope.ipCount = ip.length;
            $scope.Delivered = Delivered.length;
            $scope.Approved = Approved.length;
        }).error(errorCallback);
    }

    //job action like all, request etc
    $scope.highlightSearch = "All";
    $scope.sortJob = function(action, eID) {
        switch (action) {
            case "All":
                $scope.highlightSearch = "All";
                $route.reload();
                break;
            case "Requested":
                $scope.jobRow = "Requested";
                $scope.highlightSearch = "Requested";
                break;
            case "Assigned-waiting":
                $scope.jobRow = "Assigned-waiting";
                $scope.highlightSearch = "Assigned-waiting";
                break;
            case "In_progress":
                $scope.jobRow = "In-progress";
                $scope.highlightSearch = "In_progress";
                break;
            case "Delivered":
                $scope.jobRow = "Delivered";
                $scope.highlightSearch = "Delivered";
                break;
            case "Approved":
                $scope.jobRow = "Approved";
                $scope.highlightSearch = "Approved";
                break;
            case "Calculated":
                $scope.jobRow = "";
                $scope.highlightSearch = "Calculated";
                break;
        }
        scrollToId(eID);
    }

    $scope.statusAction = function(action, item) {
        if ($.isEmptyObject(item) != true) {
            switch (action) {
                case "Export to excel":
                    if ($scope.userRight == 1) {
                        var blob = new Blob([document.getElementById('exportable').innerHTML], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                        });
                        saveAs(blob, "project-status-report.xls");
                    } else {
                        var blob = new Blob([document.getElementById('exportableRecord').innerHTML], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                        });
                        saveAs(blob, "project-Jobs-status-report.xls");
                    }
                    break;
            }
        }
    }
    $scope.statusAction1 = function(action, item) {
        if ($.isEmptyObject(item) != true) {
            switch (action) {
                case "Export to excel1":
                    if ($scope.userRight == 1) {
                        var blob = new Blob([document.getElementById('exportable1').innerHTML], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                        });
                        saveAs(blob, "project-status-report.xls");
                    } else {
                        var blob = new Blob([document.getElementById('exportable1').innerHTML], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                        });
                        saveAs(blob, "project-Jobs-status-report.xls");
                    }
                    break;
            }
        }

    }

    $scope.userOpenClose = function(id) {
        if (id == 'open') {
            $scope.userOpen = true;
            $window.localStorage.filemanagerUser = "";
        } else {
            $scope.userOpen = false;
            $window.localStorage.filemanagerUser = "";
        }
    }

    //chart user dashboard
    $scope.jobChart = function(data) {
        var chart = new Highcharts.Chart({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                renderTo: 'container'
            },
            title: {
                text: '',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                    },
                    colors: ['#C581EE', '#67C8FF', '#FFA200', '#FFA200', '#51E039', '#22A61D'],
                    showInLegend: true,
                    center: ['50%', '50%']
                },
            },
            series: [{
                showInLegend: false,
                name: 'Percent',
                colorByPoint: true,
                data: data
            }]
        });
    }

    $scope.sideNav = function() {
        angular.element('#rightMenu').fadeToggle();
    }

    angular.element('#holidaysLoading').css('dispaly','block');
    $scope.countryHolidayGet = function() {
        //$scope.countryListHoliday = country;
        $scope.countryListHoliday = ['norway','sweden','denmark','finland'];
        //National Holiay List current date to higher date get
        var currentYear = new Date().getFullYear();

        var upcomming = [];
        var ongoing = [];

        angular.forEach($scope.countryListHoliday, function(val, i) {
            rest.path = "holidayGet/" + val;
            rest.get().success(function(data) {
                angular.forEach(data, function(val, i) {
                    var currentDate = new Date;
                    var holiday = new Date(val[0] + ' ' + currentYear);

                    if (currentDate <= holiday) {
                        var dayMon = val[0].split(' ');
                        var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                        upcomming.push({
                            'date': fullDate,
                            'holidayName': val[2],
                            'holidayStatus': val[3]
                        });
                    } else {
                        var dayMon = val[0].split(' ');
                        var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                        ongoing.push({
                            'date': fullDate,
                            'holidayName': val[2],
                            'holidayStatus': val[3]
                        });
                    }
                });

                $scope.upcommingList = upcomming;
                $scope.ongoingList = ongoing.reverse();
                $scope.upLength = $scope.upcommingList.length;
                $scope.onLength = $scope.ongoingList.length;
            }).error(errorCallback);
        })
        //return false;
    }
    $scope.countryHolidayGet();
    $timeout(function() {
        $('#holidaysLoading').addClass('hide');
    },200);
    /*if (!$cookieStore.get('session_holidayCountry')) {
        $scope.country = "Bulgaria";
        $scope.countryListHoliday.push({ 'Cname': $scope.country });
        $scope.countryHolidayGet("Bulgaria");
    } else {
        $scope.countryHolidayGet(JSON.parse($cookieStore.get('session_holidayCountry')));
    }*/

    //holiday Status wise show
    $scope.holidayStatus = function(status) {
        if (status == "Upcoming") {
            $timeout(function() {
                angular.element('.holidayTab2').removeClass('holidayTabActive');
                angular.element('.holidayTab1').addClass('holidayTabActive');
            }, 100);
            $scope.holidayShow = false;
        } else {
            angular.element('.holidayTab2').addClass('holidayTabActive');
            angular.element('.holidayTab1').removeClass('holidayTabActive');
            $scope.holidayShow = true;
        }
    }

    $scope.holidayStatus("Upcoming");

    $scope.jobDiscussion = (orderId)=> {
        $location.path('discussion/' + orderId);
    }

    $scope.viewProject = (orderId) =>{
        $location.path('/viewProject/'+orderId);
    }

    $scope.editProject = function(id) {
        if (id) {
            rest.path = 'order/' + id + '/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                if (data.userName != null) {
                    $scope.orderdata = data;
                    
                    $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                    $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                    $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                    $window.localStorage.orderNo = $scope.orderdata.order_number;
                    $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                    $window.localStorage.orderID = id;
                    $window.localStorage.iUserId = id;
                    $window.localStorage.userType = 3;
                    $window.localStorage.currentUserName = data.vClientName;
                    $window.localStorage.genfC = 1;

                    //set isNewProject to false
                    $window.localStorage.setItem("isNewProject","false");

                    $location.path('/general');
                    $window.localStorage.orderBlock = 1;
                    /*$timeout(function() {
                        $scope.cancel();
                    },500);*/
                } else {
                    notification('Information not available', 'warning');
                    }
            }).error(errorCallback);
        }
        
    };

$timeout(function() {
    //jQuery.fn.init('.projecttable input[type="search"]').attr( {"placeholder" : " Search", "id":"new-serach", "class":"form-control input-sm rounded"} );

    $(".projecttable #DataTables_Table_0_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_0_filter .searchicn').addClass("sicon1")
        }else{
          $('.projecttable #DataTables_Table_0_filter .searchicn').removeClass("sicon1")
        }
    });
    $(".projecttable #DataTables_Table_1_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_1_filter .searchicn').addClass("sicon2")
        }else{
          $('.projecttable #DataTables_Table_1_filter .searchicn').removeClass("sicon2")
        }
    });
    $(".projecttable #DataTables_Table_2_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_2_filter .searchicn').addClass("sicon3")
        }else{
          $('.projecttable #DataTables_Table_2_filter .searchicn').removeClass("sicon3")
        }
    });
    $(".projecttable #DataTables_Table_3_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_3_filter .searchicn').addClass("sicon4")
        }else{
          $('.projecttable #DataTables_Table_3_filter .searchicn').removeClass("sicon4")
        }
    });
    $(".projecttable #DataTables_Table_4_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_4_filter .searchicn').addClass("sicon5")
        }else{
          $('.projecttable #DataTables_Table_4_filter .searchicn').removeClass("sicon5")
        }
    });
    $(".projecttable #DataTables_Table_5_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_5_filter .searchicn').addClass("sicon6")
        }else{
          $('.projecttable #DataTables_Table_5_filter .searchicn').removeClass("sicon6")
        }
    });
    $(".projecttable #DataTables_Table_6_filter input[type='search']").keyup(function() {
        if ($(this).val().length) {
          $('.projecttable #DataTables_Table_6_filter .searchicn').addClass("sicon7")
        }else{
          $('.projecttable #DataTables_Table_6_filter .searchicn').removeClass("sicon7")
        }
    });
    
},500);   

/*$scope.dtOptions = {
  "pageLength"  : 100,
  'dom': 'frtilp',
  "oLanguage": {
      "sSearch": ' _INPUT_' //search
    },
  'scrollX': true,  
  'scrolly': true,  
};*/
$scope.dtOptions = DTOptionsBuilder.newOptions().
                    //withOption('scrollY', '100%').
                    //withOption('scrollX', '100%').
                    withOption('responsive', true).
                    withOption('oLanguage', {
                                  "sSearch": '<i class="fa fa-search searchicn" aria-hidden="true"></i> _INPUT_ ',
                                  "sSearchPlaceholder": "Search",
                                }).
                    withOption('pageLength', 100).
                   // withOption('scrollCollapse', true).
                    withOption('dom', 'frtilp');


}).controller('usertypeController', function($scope, $log, $location, rest, $window, $rootScope, $route, $routeParams) {
    rest.path = 'usertype';
    rest.get().success(function(data) {
        $scope.usertype = data;
        $scope.usertypeEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.saveType = function(formId) {
        if (angular.element("#" + formId).valid()) {
            rest.path = 'saveusertype';
            rest.post($scope.type).success(function(data) {
                notification('Record inserted successfully', 'success');
                $route.reload();
            }).error(errorCallback);
        }
    };

    $scope.updateType = function(formId, id) {
        if (angular.element("#" + formId).valid()) {
            rest.path = 'updateusertype/' + id;
            rest.post($scope.type).success(function(data) {
                notification('Record updeted successfully', 'success');
                $route.reload();
            }).error(errorCallback);
        };
    }

    $scope.getType = function(id, eID) {
        rest.path = 'usertype/' + id;
        rest.get().success(function(data) {
            $scope.type = data;
            $scope.type.iResourceType = $scope.type.iResourceType.toString();
        }).error(errorCallback);
        scrollToTop();
    }

    $scope.deleteType = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteType/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };


}).controller('knowledgeCalendarController', function($rootScope, $scope, $log, $location, rest, $window, $cookieStore, $timeout, $route, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    
    $scope.dateMatch = function(startD, endD) {
        var start = originalDateFormatNew(startD);
        var end = originalDateFormatNew(endD);
        
        if (startD != undefined && endD != undefined || start && end) {
            start = moment(start).format('YYYY-MM-DD');
            end = moment(end).format('YYYY-MM-DD');
            if (end < start) {
                console.log('true');
                $scope.calendar.event_enddate = "";
                notification('Lowest date not allowed', "warning");
                angular.element('#endDate').val('');
            }
        }
    }

    //get all event
    rest.path = "knowledgeEventGetAll";
    rest.get().success(function(data) {
        $scope.eventList = data;
        angular.forEach($scope.eventList,function(val,i){
            val.event_enddate = moment(val.event_enddate).format($window.localStorage.getItem('global_dateFormat'));
            val.event_startdate = moment(val.event_startdate).format($window.localStorage.getItem('global_dateFormat'));
        });
    });

    //save and update event
    $scope.save = function(formId) {
        if (angular.element('#' + formId).valid()) {
             $scope.calendar.event_startdate = angular.element('#StartDate').val();
            $scope.calendar.event_enddate = angular.element('#endDate').val();
            var start = originalDateFormatNew($scope.calendar.event_startdate);
            var end = originalDateFormatNew($scope.calendar.event_enddate);
            if (start != undefined && end != undefined) {
                start = moment(start).format('YYYY-MM-DD');
                end = moment(end).format('YYYY-MM-DD');
                if (end < start) {
                    $scope.calendar.event_enddate = "";
                    notification('Lowest date not allowed', "warning");
                    angular.element('#endDate').val('');
                    return false;
                }
            }
            var startTime = '00:00:00'
            var endTime = '23:59:59'

            if ($scope.calendar.event_id) {
                $routeParams.id = $scope.calendar.event_id;
                rest.path = "knowledgeEventUpdate";
                
                var dtSeparator = window.localStorage.getItem('dtSeparator');
                if(window.localStorage.getItem('global_dateFormat') == 'DD'+dtSeparator+'MM'+dtSeparator+'YYYY'){
                    $scope.calendar.event_startdate = originalDateFormatNew($scope.calendar.event_startdate);
                    $scope.calendar.event_startdate = $scope.calendar.event_startdate + ' '+startTime;
                    
                    $scope.calendar.event_enddate = originalDateFormatNew($scope.calendar.event_enddate);
                    $scope.calendar.event_enddate = $scope.calendar.event_enddate + ' '+endTime;
                }else{
                    $scope.calendar.event_startdate = moment($scope.calendar.event_startdate).format('YYYY-MM-DD');
                    $scope.calendar.event_startdate = $scope.calendar.event_startdate + ' '+startTime;
                    
                    $scope.calendar.event_enddate = moment($scope.calendar.event_enddate).format('YYYY-MM-DD');
                    $scope.calendar.event_enddate = $scope.calendar.event_enddate + ' '+endTime;    
                }

                rest.put($scope.calendar).success(function(data) {
                    notification('Record updeted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                var dtSeparator = window.localStorage.getItem('dtSeparator');
                if(window.localStorage.getItem('global_dateFormat') == 'DD'+dtSeparator+'MM'+dtSeparator+'YYYY'){
                    $scope.calendar.event_startdate = originalDateFormatNew($scope.calendar.event_startdate);
                    $scope.calendar.event_startdate = $scope.calendar.event_startdate + ' '+startTime;
                    
                    $scope.calendar.event_enddate = originalDateFormatNew($scope.calendar.event_enddate);
                    $scope.calendar.event_enddate = $scope.calendar.event_enddate + ' '+endTime;
                }else{
                    $scope.calendar.event_startdate = moment($scope.calendar.event_startdate).format('YYYY-MM-DD');
                    $scope.calendar.event_startdate = $scope.calendar.event_startdate + ' '+startTime;
                    
                    $scope.calendar.event_enddate = moment($scope.calendar.event_enddate).format('YYYY-MM-DD');
                    $scope.calendar.event_enddate = $scope.calendar.event_enddate + ' '+endTime;    
                }
                rest.path = "knowledgeEventSave";
                rest.post($scope.calendar).success(function(data) {
                    notification('Record inserted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    //get selected event
    $scope.getEvent = function(id, eID) {
        rest.path = "knowledgeEventGetOne/" + id;
        rest.get().success(function(data) {
            $scope.calendar = data;
            /*$scope.calendar.event_startdate = dateFormat(new Date(data.event_startdate));
            $scope.calendar.event_enddate = dateFormat(new Date(data.event_enddate));*/

            $scope.calendar.event_startdate = moment($scope.calendar.event_startdate).format($window.localStorage.getItem('global_dateFormat'));
            $scope.calendar.event_enddate = moment($scope.calendar.event_enddate).format($window.localStorage.getItem('global_dateFormat'));
        });
        scrollToTop();
    }

    //delete event
    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = "knowledgeEventDelete/" + id;
                rest.delete().success(function(data) {
                    notification('Record deleted successfully', 'success');
                    $route.reload();
                })
            }
        });
    }

}).controller('jobSummeryDetailsController', function($interval,$uibModalInstance, $scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $scope.DetailId = $window.localStorage.projectJobChainOrderId;
    $window.localStorage.jobfolderId = $routeParams.id;
    $window.localStorage.pId = " ";
    $window.localStorage.jobstatusName = " ";
    $scope.dateFormatGlobal = $window.localStorage.getItem('global_dateFormat');

    if ($scope.DetailId) {
        rest.path = 'jobSummeryDetailsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            console.log("data-2", data);

            $scope.jobdetail = data[0];
            var srcLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[0]).sourceLang;
            var trgLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[1]).sourceLang;
            $scope.jobdetail.ItemLanguage = srcLang + ' > ' + trgLang;

            $scope.dueDate = $scope.jobdetail.due_date;
            $scope.jobdetail.due_date = moment($scope.jobdetail.due_date).format($scope.dateFormatGlobal+' '+'HH:mm');
            
            if ($scope.jobdetail.price) {
                //$scope.itemPriceUni = JSON.parse($scope.jobdetail.price);

                    $scope.itemPriceUni[$scope.jobdetail.job_summmeryId]= JSON.parse($scope.jobdetail.price);
                    for(var j=0;j<$scope.itemPriceUni[$scope.jobdetail.job_summmeryId].length;j++){
                        $scope.itemPriceUni[$scope.jobdetail.job_summmeryId][j].itemTotal = numberFormatComma($scope.itemPriceUni[$scope.jobdetail.job_summmeryId][j].itemTotal);
                    }
        
            }
            if ($scope.jobdetail.total_price.length == 0) {
                angular.element('#totalItemPrice').text('0.0');
            } else {

                //angular.element('#totalItemPrice').text(data.total_price);
            }
            console.log('$scope.itemPriceUni-',$scope.itemPriceUni);
            /*if (isNaN(Date.parse($scope.jobdetail.due_date))) {
                $timeout(function() {
                    var date = new Date();
                    var currentdateT;
                    currentdateT = pad(date.getDate(), 2) + '.' + pad((date.getMonth() + 1), 2) + '.' + date.getFullYear()

                        +
                        ' ' + date.getHours() + ':' + date.getMinutes();
                    $scope.jobdetail.due_date = currentdateT;
                }, 300);
            }*/

            $cookieStore.put('editJobact', data[0]);
            if (data[0].order_id) {
                rest.path = 'jobItemQuantityget/' + data[0].order_id + '/' + $scope.jobdetail.item_id;
                rest.get().success(function(data) {
                    if (data) {
                        rest.path = 'getClientCurrency/' + data.contact_person;
                        rest.get().success(function(data) {
                            $scope.clientCurrency = data.client_currency.split(',')[0];
                            $scope.clientCurrencySymbole = data.client_currency.split(',')[1];
                        })
                        $scope.totalPrice = data.total_amount;
                        if(data.price){
                            $scope.itemList = JSON.parse(data.price);
                        }else{
                            $scope.itemList = "";
                        }
                        $scope.pricelistJobEmpty = jQuery.isEmptyObject($scope.itemList);
                    }
                })
            }
            $timeout(function() {
                $("#scoopId > [value=" + $scope.jobdetail.item_id + "]").attr("selected", "true");
            }, 600);
        }).error(errorCallback);

        rest.path = 'jobitemsGet/' + $scope.DetailId;
        rest.get().success(function(data) {
            $scope.jobitList = data;
        });
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.jumptoItem = function() {
        $window.localStorage.orderID = $scope.DetailId;
        //set isNewProject to false
        $window.localStorage.setItem("isNewProject","false");
        $location.path('/items');
        $scope.cancel();
    }
    /*$scope.cancel = function() {
        $uibModalInstance.close();
    }*/

    $scope.backtojobSummery = function() {
        $location.path('jobs-detail/' + $scope.DetailId);
    }

    $scope.jobsumResource = function(resourceName, jobSummeryId) {
        rest.path = 'jobsummeryResourceMail/' + resourceName + '/' + jobSummeryId;
        rest.get().success(function(data) {
            notification('Mail send successfully', 'success');
            $route.reload();
        }).error(errorCallback);
    }

    //dispaly jobdetails data
    if ($routeParams.id) {
        //jobsummeryGet
        rest.path = 'jobSummeryDetailsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.jobdetail = data[0];
            //$scope.jobdetail.due_date = moment($scope.jobdetail.due_date).format($scope.dateFormatGlobal+' '+'HH:mm');
            var due_timeval = $scope.jobdetail.due_date.split(" ")[1];
            var due_timeval = due_timeval.substring(0, 5);
            $scope.jobdetail.due_date = moment($scope.jobdetail.due_date).format($window.localStorage.getItem('global_dateFormat'));
            angular.element('#due_time').val(due_timeval);
            if($scope.jobdetail.due_date == '0000-00-00 00:00:00' || $scope.jobdetail.due_date == 'Invalid date'){
                angular.element('#duedate').val('0000.00.00');
                angular.element('#due_time').val('00:00');
            }
            
            /*var time = $scope.jobdetail.due_date.split(' ')[1].split(':');
            time = time[0] + ':' + time[1];
            $timeout(function() {
                $scope.jobdetail.due_date = $scope.jobdetail.due_date.split(' ')[0].split('-').reverse().join('.') + ' ' + time;
            }, 100);*/

            var srcLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[0]).sourceLang;
            var trgLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[1]).sourceLang;
            $scope.jobdetail.ItemLanguage = srcLang + ' > ' + trgLang;
            /*if (isNaN(Date.parse($scope.jobdetail.due_date))) {
                $timeout(function() {
                    var date = new Date();
                    var currentdateT;
                    currentdateT = pad(date.getDate(), 2) + '.' + pad((date.getMonth() + 1), 2) + '.' + date.getFullYear() +
                        ' ' + date.getHours() + ':' + date.getMinutes();
                    $scope.jobdetail.due_date = currentdateT;
                }, 300);
            }*/
            if ($scope.jobdetail.work_instruction) {
                $scope.wrInstruct = JSON.parse($scope.jobdetail.work_instruction);
            }

            $scope.jobdetail.ItemLanguage = data[0].ItemLanguage;
            $scope.jobdetail.created_date = data[0].created_date;
            angular.element('#itemStatus').select2('val', data[0].item_status);
            angular.element('#contactPerson').select2('val', data[0].contact_person);
            angular.element('#resources').select2('val', data[0].resource);

            //count file
            if (data) {
                rest.path = 'filefolderstget/' + data[0].fmanager_id + '/' + $routeParams.id;
                rest.get().success(function(data) {
                    var sourceFile = [];
                    var targetFile = [];
                    angular.element('.sourceC').text(data.source);
                    angular.element('.targteC').text(data.target);
                }).error(errorCallback);
            }
            if ($scope.jobdetail.master_job_id) {
                rest.path = "selectWorkInstruction/" + $scope.jobdetail.master_job_id;
                rest.get().success(function(data) {
                    var cont = [];
                    var obj = [];
                    angular.forEach(data, function(val, i) {
                        var obj = {
                            'id': val.w_id + ',' + val.w_source,
                            'text': val.w_source
                        };
                        cont.push(obj);
                    });
                    angular.element('#work_instruction').select2({
                        allowClear: true,
                        data: cont
                    });
                })
            }
            if ($scope.jobdetail.master_job_id) {
                rest.path = "selectWorkInstructs" ;
                rest.get().success(function(data) {
                    var cont = [];
                    var obj = [];
                    angular.forEach(data, function(val, i) {
                        var obj = {
                            'id': val.id + ',' + val.instruct_name,
                            'text': val.instruct_name
                        };
                        cont.push(obj);
                    });
                    angular.element('#work_instructs').select2({
                        allowClear: true,
                        data: cont
                    });
                })
            }
        }).error(errorCallback);
    }

    $scope.autoJobOn = function(id) {
        rest.path = 'jobSummeryDetailsAutoChangeon/' + $routeParams.id + '/' + id;
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    $scope.autoJobOff = function(id) {
        rest.path = 'jobSummeryDetailsAutoChangeoff/' + $routeParams.id + '/' + id;
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    rest.path = 'masterPriceitemgetFromPriceList';
    rest.get().success(function(data) {
        $scope.masterPrice = data;
        console.log("$scope.masterPrice", $scope.masterPrice);
    }).error(errorCallback);

    rest.path = 'childPriceitemget';
    rest.get().success(function(data) {
        $scope.childPrice = data;
        //console.log("$scope.childPrice", $scope.childPrice);
    }).error(errorCallback);
    // Change job price
    $scope.itemPriceUni = [];
    //change jobitem price module
    $scope.changeItemField = function(id,index,parentIndex,itemChng=0) {
        var quantity = $scope.itemPriceUni[id][index].quantity;
        var itemPrice = $scope.itemPriceUni[id][index].itemPrice;
        var itemTtl = $scope.itemPriceUni[id][index].itemTotal;
        var itemAmt = $scope.itemPriceUni[id][index].amtSum;
        if(!quantity || !itemPrice){
            quantity = 0;
            itemPrice = 0;
        }
        if(!itemTtl){
            itemTtl = 0;
        }
        //$scope.itemPriceUni[id][index].itemTotal = numberFormatComma(itemTtl);
        itemPrice = numberFormatCommaToPoint(itemPrice);
        if(itemPrice == ''){
           itemPrice =0; 
        }
        var price = quantity * parseFloat(itemPrice);
        var oldPrice1 = $scope.itemPriceUni[id][index].itemTotal;
        if(!oldPrice1){
            var oldPrice = 0;
        }else{
            var oldPrice = numberFormatCommaToPoint(oldPrice1);
            
            /*if(oldPrice1.toString().includes(',')==true){
                var oldPrice = numberFormatCommaToPoint(oldPrice1);
            }else{
                var oldPrice = oldPrice1;
            }*/
        }
        
        if(itemChng>0){
            price = numberFormatCommaToPoint(itemTtl);
            if(!price){
                price=0;
            }
            //oldPrice = amtTotal;    
            if (typeof itemAmt !== 'undefined'){
                var oldPrice = $scope.itemPriceUni[id][index].amtSum;
            }
            if (typeof itemAmt === 'undefined'){
                var oldPrice = quantity * parseFloat(itemPrice);
            }
        }
        if(!oldPrice){
           oldPrice =0; 
        }
        //var total = $scope.jobdetail[parentIndex].total_price;
        var total = $scope.jobdetail.total_price;
        var totalPrice = (parseFloat(total) + parseFloat(price)) - parseFloat(oldPrice);
        
        //$scope.itemPriceUni[id][index].itemTotal = numberFormatComma(price2);
        if(itemChng>0){
            $scope.itemPriceUni[id][index].itemTotal = itemTtl;
        }else{
            //$scope.itemPriceUni[id][index].itemTotal = price;
            $scope.itemPriceUni[id][index].itemTotal = numberFormatComma(price);
        }
        $scope.itemPriceUni[id][index].amtSum = price;
        //$scope.jobdetail[parentIndex].total_price = totalPrice;
        $scope.jobdetail.total_price = totalPrice;
    }

    $scope.itemQuentityDelete = function(id,index,parentIndex) {
        
        var totalPrice1 = $scope.jobdetail.total_price;
        var totalPrice = totalPrice1.toFixed(2);
        
        var price1 = $scope.itemPriceUni[id][index].itemTotal;
        
        var price = numberFormatCommaToPoint(price1);
        
        if (totalPrice == price) {
           $scope.jobdetail.total_price = 0;
        } else {
           var total = totalPrice - price;
           $scope.jobdetail.total_price = total;
        }
        
        $scope.itemPriceUni[id].splice(index, 1);
    }
    // end job price
    
    $scope.savejobDetail = function(formId) {
        if ($routeParams.id) {
            $scope.jobdetail.due_date = angular.element('#duedate').val();
            
            $scope.jobdetail.description = $scope.jobdetail.jobDesc;
            delete $scope.jobdetail['jobDesc'];

            //Error message if job due date is greater then project due date.
            /*if (originalDateFormat($scope.jobdetail.due_date).split(' ')[0] > originalDateFormat($scope.jobdetail.ProjectDueDate).split(' ')[0]) {
                notification('Due date should be less then project due date.', 'warning');
                return false;
            }*/
            var obj = [];
            $('[id^=work_name]').each(function(i,v) {
                //var dateTime = $(this).find('time')[0].innerText;
                console.log('iii',i);
                console.log('vvvv',v.innerText);
                obj.push({
                        work_id: i,
                        work_name: v.innerText
                    });
            });
            /*var obj1 = [];
            for (var i = 0; i < angular.element('[id^=work1_]').length; i++) {
                var workId = angular.element('#work_id' + i).text();
                var workName = angular.element('#work_name' + i).text();
                    obj1.push({
                        work_id: workId,
                        work_name: workName
                    });
                console.log('insertid',i);
            }*/
            $scope.work_instruction = JSON.stringify(obj);
            $scope.jobdetail.work_instruction = $scope.work_instruction;
            console.log('jobdata',$scope.jobdetail);
            
            var itemPriceUnit = [];
                    itemPriceUnit = $scope.itemPriceUni[$scope.jobdetail.job_summmeryId];
                    if(itemPriceUnit){
                        for(var j=0;j<itemPriceUnit.length;j++){
                            itemPriceUnit[j].itemTotal = numberFormatCommaToPoint(itemPriceUnit[j].itemTotal);
                        }
                    }
                    $scope.jobdetail.price = JSON.stringify(itemPriceUnit);
                    delete $scope.jobdetail['itemPrice'];
                    delete $scope.jobdetail['quantity'];
            
// end - jobprices 

            if ($scope.jobdetail.contact_person == '') {
                notification('Please select project manager', 'warning');
                return false;
            }


            if ($scope.jobdetail.due_date == '0000-00-00 00:00:00' || $scope.jobdetail.due_date == '0000-00-00') {
                notification('Please select due date', 'warning');
                return false;
            }
            
            
            //$scope.jobdetail.due_date = originalDateFormatNew($scope.jobdetail.due_date);
            //$scope.jobdetail.due_date = moment($scope.jobdetail.due_date).format('YYYY-MM-DD HH:mm:ss');
            $scope.jobdetail.due_date = $scope.jobdetail.due_date.split(' ')[0].split('.').reverse().join('-');
            //console.log('$scope.jobdetail.due_date',$scope.jobdetail.due_date);
            $scope.jobdetail.due_date = $scope.jobdetail.due_date;
            var due_timevl1 = angular.element('#due_time').val();
            //console.log('due_timevl1',due_timevl1);
            $scope.jobdetail.due_date = moment($scope.jobdetail.due_date + ' ' +due_timevl1).format("YYYY-MM-DD HH:mm");
            //console.log('date-time',$scope.jobdetail.due_date);

            //job start recent activity store in cookie
            var arr1 = $.map($scope.jobdetail, function(el) {
                return el;
            });
            var arr2 = $.map($cookieStore.get('editJobact'), function(el) {
                return el;
            });

            if (array_diff(arr1, arr2) != "") {
                var obj = [];
                if ($cookieStore.get('jobRecentEdit') != undefined) {
                    angular.forEach($cookieStore.get('jobRecentEdit'), function(val, i) {
                        obj.push(val);
                    });
                }
                obj.push($routeParams.id);
                $cookieStore.put('jobRecentEdit', obj);
                $cookieStore.remove('editJobact')
            }

            if ($scope.jobdetail.resource != '' && $scope.jobdetail.item_status == 'New') {
                $scope.jobdetail.item_status = 'In-progress';
            }
            delete $scope.jobdetail['ProjectDueDate'];

            $routeParams.id;
            rest.path = 'jobSummeryJobDetailsUpdate';
            rest.put($scope.jobdetail).success(function(data) {
                //log file start
                $scope.logMaster = {};
                $scope.logMaster.log_type_id = $scope.jobdetail.order_id;
                $scope.logMaster.task_id = $routeParams.id;
                if (!$scope.jobdetail.po_number) {
                    $scope.logMaster.log_title = $scope.jobdetail.tmp_po_number;
                } else {
                    $scope.logMaster.log_title = $scope.jobdetail.po_number;
                }
                $scope.logMaster.log_type = "update";
                $scope.logMaster.log_status = "task";
                $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                rest.path = "saveLog";
                rest.post($scope.logMaster).success(function(data) {});
                //log file end
                //$location.path('jobs-detail/' + $scope.DetailId);
                notification('Job successfully updated.', 'success');
                $uibModalInstance.dismiss('cancel');
                $route.reload();
            }).error(errorCallback);
        }
    }
    $scope.filemanagerSource = function(name) {
        if ($routeParams.id) {
            // var obj = [];

            // for (var i = 0; i < angular.element('[id^=work1_]').length; i++) {
            //     var workId = angular.element('#work_id' + i).text();
            //     var workName = angular.element('#work_name' + i).text();
            //     obj.push({
            //         work_id: workId,
            //         work_name: workName
            //     });
            // }

            // $scope.work_instruction = JSON.stringify(obj);
            // $scope.jobdetail.work_instruction = $scope.work_instruction;
            // $routeParams.id;
            // rest.path = 'jobSummeryJobDetailsUpdate';
            // rest.put($scope.jobdetail).success(function(data) {
            closeWindows();
            $window.localStorage.ItemClient = '';
            var ItemcodeNumber = angular.element('#itemCode').text();
            //var ItemClient = angular.element('.itemClient').text();
            $window.localStorage.ItemcodeNumber = ItemcodeNumber;
            // start to get downloaded folder name with client name
            rest.path = 'customer/' + $window.localStorage.orderID;
            rest.get().success(function(res) {
                $scope.customer = res;
                if (res) {
                    rest.path = 'client/' + $scope.customer.client;
                    rest.get().success(function(cData) {
                        $scope.directClientData = cData
                        $window.localStorage.ItemClient = $scope.directClientData.vUserName;
                    }).error(function(data, error, status) {});
                }
            })
            // end
            //$window.localStorage.ItemClient = ItemClient;
            
            var filemanagerPopup = $window.open('#/filemanager/' + name, "popup", "width=1000,height=650");
            filemanagerPopup.addEventListener("beforeunload", function() {
                localStorage['parentId'] = ' ';
                return false;
            }, false);
            openWindows.push(filemanagerPopup);
            // }).error(errorCallback);
        }
    }

    var getCountJobFolder = function(){
        var count = $window.localStorage.getItem("sourceFolderCount");
        if(!count){
            count = 0;
        }
        var type = $window.localStorage.getItem("jobFoldertype");
        var id = $window.localStorage.getItem("jobfolderId");

        if(type){
            if(type == 'source'){
                $('#popSourceCount').text(count);
            }if(type == 'target'){
                $('#popTargetCount').text(count);
            }
        }
    }
    $interval(getCountJobFolder,1000);

    $scope.jobsumemailResource = function(resourceName, jobSummeryId) {
        if (!resourceName || !jobSummeryId) {
            notification('Resource not selected', 'warning');
        } else {
            $window.localStorage.ResourceMsg = resourceName;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/jobresourcemsg.html',
                controller: 'jobResourceMsgController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
        }
    }

    $scope.removeWorkIns = function(id) {
        var len = angular.element('[id^=work1_]').length;
        $('#work1_' + id).remove();
        /*if (id == len - 1) {
            $('#work1_' + id).remove();
        } else {
            notification('Delete from last record', 'warning');
        }*/
    }



    $scope.assignPoToJob = function(job_id, tmp_po) {
        var obj = {
            "po_number": tmp_po
        }
        $routeParams.id = job_id;
        rest.path = 'assignPoToJob';
        rest.put(obj).success(function(data) {
            $scope.jobdetail.po_number = tmp_po;
            angular.element('#tmp_po_number').hide();
            angular.element('#po_number').show();
        }).error(errorCallback);
    }

}).controller('filemanagerController', function($interval,$scope, $log, $location, fileReader, rest, $uibModal, $window, $rootScope, $timeout, $route, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.breadcrums = [''];
    $scope.statusName = $window.localStorage.jobstatusName;
    $scope.statussource = $routeParams.id;
    var FilesLength;
    //popup close
    // serachTextBox Animation
    $scope.searchBox = function() {
        angular.element('#fileSearchBox').addClass('animationtextBox');
    }

    // onClick upload button hideShow uploadContainer
    $scope.uploadbtn = function() {
        angular.element('#uploadContainer').toggleClass('hideShowClass');
    }
    $scope.popupCloseFile = function() {

        $window.close();
    }
    //Final File upload
    $scope.finalupload = function() {
        var obj = {
            "item_status": "Overdue"
        }
        $routeParams.id = $rootScope.jobId;
        rest.path = 'updateJobSummeryItemStatus';
        rest.put(obj).success(function(data) {
            $window.close();
        }).error(errorCallback);
    }

    $scope.getJobRootFileCount = function(){
        var id = $window.localStorage.getItem("jobFolderRoot");
        var type = $window.localStorage.getItem("jobFoldertype");
        var externalResourceUserId = null;
        
        rest.path = 'filefolderGet/' + id + '/' + type + '/' + externalResourceUserId;
        rest.get().success(function(data) {
            $window.localStorage.setItem("sourceFolderCount",data.length);
        }).error(errorCallback);
    }

    //project root get display front
    if ($window.localStorage.orderID && $window.localStorage.jobfolderId == " " && $window.localStorage.countSt == " ") {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'filefrontroot/' + $window.localStorage.orderID + '/' + $routeParams.id;
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($window.localStorage.orderID != " " && $window.localStorage.jobfolderId && $window.localStorage.countSt == " " && $scope.userRight == '1') {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'jobfilefrontroot/' + $window.localStorage.orderID + '/' + $window.localStorage.jobfolderId + '/' + $routeParams.id;
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data[0].fmanager_id);

                //setting variable for jobfilecounter
                $window.localStorage.setItem("jobFolderRoot", data[0].fmanager_id);                
                $window.localStorage.setItem("jobFoldertype",$routeParams.id);                
                
                $interval($scope.getJobRootFileCount, 1000);
                
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($window.localStorage.orderID != " " && $window.localStorage.jobfolderId && $scope.userRight == '2') {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'jobfileuserfrontroot/' + $window.localStorage.jobfolderId + '/' + $routeParams.id;
            rest.get().success(function(data) {
                $window.localStorage.pId = data[0].fmanager_id;
                $window.localStorage.setItem("parentId", data[0].fmanager_id);

                //setting variable for jobfilecounter for freelancer project detail
                $window.localStorage.setItem("jobFolderRoot", data[0].fmanager_id);                
                $window.localStorage.setItem("jobFoldertype",$routeParams.id);                
                
                $interval($scope.getJobRootFileCount, 1000);
                $route.reload();
            }).error(errorCallback);
        }
    }

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                $scope.filesize = bytesToSize(file.size);
                $scope.filename = file.name;
                $scope.filetype = file.type;
                var t = $scope.filename.split('.');
                var type = t.pop();
                $scope.typefile = type;
                $scope.imgshow = false;
                $scope.imageSrc = result;
            });
    };

    //file insert data
    var uploadObj;
    $timeout(function() {
        uploadObj = $("#multipleupload").uploadFile({
            multiple: true,
            dragDrop: true,
            fileName: "myfile",
            acceptFiles: "png",
            showPreview: true,
            previewHeight: "100px",
            previewWidth: "100px",
            maxFileCount: 5,
            maxFileSize: 15*1024*1024,
            showDelete: true,
            autoSubmit: false,
            uploadStr: "Select",
            onLoad: function(obj) {},
            afterUploadAll: function(obj) {
                notification('Files uploaded successfully', 'success');
                $timeout(function() {
                    $route.reload();
                }, 500);

            },
            onCancel: function(files, pd) {
                $timeout(function() {
                    var filenameContains = angular.element('.ajax-file-upload-filename').text();
                    var length = angular.element("[class^='upimg']").length;
                    angular.forEach(angular.element("[class^='upimg']"), function(res, i) {
                        var upClassName = angular.element("[class^='upimg']")[i].className = 'upimg' + length;
                        length--;
                    })
                }, 100);

            },
            onSuccess: function(files, data, xhr, pd) {
                var filenameContains = $(".ajax-file-upload-filename:contains('" + files[0] + "')");
                var fileType = files[0].substring(files[0].lastIndexOf(".") + 1, files[0].length);
                var fileDivText = $(".ajax-file-upload-filename:contains('" + files[0] + "')").text();
                if (fileDivText) {
                    var dataU = $('.upimg' + fileDivText.charAt(0)).text();
                }
                var size = fileDivText.substring(fileDivText.lastIndexOf(".") - 4, fileDivText.length).trim();
                var regExp = /\(([^)]+)\)/;
                var getFileSize = regExp.exec(size);
                $scope.name = dataU;
                $scope.f_id = 1;
                $scope.parent_id = $window.localStorage.getItem("parentId");
                if ($scope.filedata == undefined || $scope.filedata == " " || $scope.filedata == null) {
                    $scope.filedata = {};
                }
                $scope.role_id = $scope.userRight;
                $scope.filedata.role_id = $scope.role_id;
                $scope.filedata.name = $scope.name;
                $scope.filedata.f_id = $scope.f_id;
                $scope.filedata.parent_id = $scope.parent_id;
                $scope.filedata.filename = files[0];
                $scope.filedata.filetype = fileType;
                $scope.filedata.size = getFileSize[1];

                rest.path = 'fileAdd';
                rest.post($scope.filedata).success(function(data) {}).error(errorCallback);
            },
            onSelect: function(files) {
                var isFilesAvailable = angular.element('.ajax-file-upload-container').css('border', '1px dotted #ddd');
                angular.forEach(files, function(val, i) {
                    fileReader.readAsDataUrl(files[i], $scope).then(function(result) {
                        var data = result;
                        var txt = $(".ajax-file-upload-filename:contains('" + files[i].name + "')");
                        var fileExtension = files[i].name.substr((files[i].name.lastIndexOf('.') + 1));
                        if (txt) {
                            var fullTxt = $(".ajax-file-upload-filename:contains('" + files[i].name + "')").text();
                            $('<div class="upimg' + fullTxt.charAt(0).toString() + '" style="display:none">' + data + '</div>').insertAfter(".ajax-file-upload-filename:contains('" + files[i].name + "')");
                        }
                        /*if (fileExtension != 'jpg' && fileExtension != 'png' && fileExtension != 'gif') {
                            var previewContainer = $('.upimg' + fullTxt.charAt(0).toString()).parent().children(':first-child');
                            previewContainer.css('display', 'block', 'margin-left', '40px');
                            previewContainer.css('margin-left', '55px');
                            var DefaultImgPath = "assets/img/file_icon/fileicon.png";
                            previewContainer.attr('src', DefaultImgPath);
                        }*/
                        if (fileExtension != 'jpg' && fileExtension != 'png' && fileExtension != 'gif' && fileExtension != 'svg') {
                            var previewContainer = $('.upimg' + fullTxt.charAt(0).toString()).parent().children(':first-child');
                            previewContainer.css('display', 'block', 'margin-left', '40px');
                            previewContainer.css('margin-left', '55px');
                            var DefaultImgPath = "assets/img/file_icon/fileicon.png";
                            if(fileExtension == 'docx' || fileExtension == 'doc'){ 
                               DefaultImgPath = "assets/img/file_icon/doc.png"; 
                            }
                            if(fileExtension == 'xlsx' || fileExtension == 'xlsm' ||  fileExtension == 'xls' || fileExtension == 'csv'){ 
                               DefaultImgPath = "assets/img/file_icon/xls.png"; 
                            }
                            if(fileExtension == 'pdf'){ 
                               DefaultImgPath = "assets/img/file_icon/pdf.png"; 
                            }
                            if(fileExtension == 'ppt'){ 
                               DefaultImgPath = "assets/img/file_icon/ppt.png"; 
                            }
                            if(fileExtension == 'zip' || fileExtension == 'gz'  || fileExtension == 'rar'){ 
                               DefaultImgPath = "assets/img/file_icon/zip.png"; 
                            }
                            if(fileExtension == 'mp3' || fileExtension == 'wav'  || fileExtension == 'wma'){ 
                               DefaultImgPath = "assets/img/file_icon/mp3.png"; 
                            }
                            if(fileExtension == 'mp4' || fileExtension == 'wmv'  || fileExtension == 'avi'  || fileExtension == '3gp'  || fileExtension == 'mov'  || fileExtension == 'vob'){ 
                               DefaultImgPath = "assets/img/file_icon/video.png"; 
                            }
                            if(fileExtension == 'txt' || fileExtension == 'html'  || fileExtension == 'htm'  || fileExtension == 'js'  || fileExtension == 'css'  || fileExtension == 'vob'  || fileExtension == 'sql'  || fileExtension == 'tiff'  || fileExtension == 'ttf'){ 
                               DefaultImgPath = "assets/img/file_icon/video.txt"; 
                            }
                            previewContainer.attr('src', DefaultImgPath);
                        }


                    });
                });

                return true; //to allow file submission.
            },
        });
    }, 100);

    $scope.addToCopy = function(fid) {
        var chkForClass = angular.element('#' + fid).hasClass('activeselect');
        var alreadyInCopy = false;
        if (chkForClass == false) {
            angular.forEach($scope.copyfile, function(value, key) {
                if (value.id == fid) {
                    alreadyInCopy = true;
                }
            });
            if (alreadyInCopy) {
                alert('File already copied');
                angular.element('#' + fid).addClass('activeselect');
            } else {
                angular.element('#' + fid).addClass('activeselect');
                /*$scope.copyfile.push({
                    id: fid
                });*/
            }
        } else if (chkForClass == true) {
            angular.element('#' + fid).removeClass('activeselect');
            angular.forEach($scope.copyfile, function(value, key) {
                if (value.id == fid) {
                    $scope.copyfile.splice(key, 1);
                    angular.element('#' + fid).removeClass('activeselect');
                }
            });
            angular.element('#files_count').text($scope.copyfile.length);
        }
    }
    $scope.clearCopy = function() {
        if ($scope.copyfile.length == 0) {
            $.each($('file'), function() {
                if (angular.element('#' + this.id).hasClass('activeselect')) {
                    angular.element('#' + this.id).removeClass('activeselect')
                }
            });
            angular.element('#files_count').text('0');
            $scope.copyfile = [];
        } else {
            angular.forEach($scope.copyfile, function(value, key) {
                angular.element('#' + value.id).removeClass('activeselect');
            });
            $scope.copyfile = [];
            angular.element('#files_count').text('0');
        }

    }


    // Keyboard keypress Event for File Manager
    $(window).keydown(function(event) {
        if (event.ctrlKey && event.keyCode == 86) { //CTRL + V

            if ($scope.copyfile.length > 0 && angular.element('#files_count').text() != 0) {
                angular.forEach($scope.copyfile, function(value, key) {
                    value.parent = $window.localStorage.getItem("parentId");
                });
                $scope.showLoder = true;
                $scope.copyfile = JSON.stringify($scope.copyfile);
                $routeParams.id = JSON.parse($scope.copyfile)[0].id;
                rest.path = 'fileManagerPaste';
                rest.put($scope.copyfile).success(function(data) {
                    $scope.copyfile = [];
                    $route.reload();
                }).error(errorCallback);
            } else {
                notification('No selected Files', 'warning');
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } else if (event.ctrlKey && event.keyCode == 65) { //CTRL + A Key Event
            FilesLength = angular.element('file').length;
            if (FilesLength > 0) {
                $scope.copyfile = [];
                $.each($('file'), function() {
                    angular.element('#' + this.id).addClass('activeselect');
                    $scope.copyfile.push({
                        id: this.id
                    });
                });
                angular.element('#files_count').text($scope.copyfile.length);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } else if (event.ctrlKey && event.keyCode == 67) { //CTRL + C Key Event
            FilesLength = angular.element('file').length;
            $scope.copyfile = [];
            if (FilesLength > 0) {
                $.each($('file'), function() {
                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                        $scope.copyfile.push({
                            id: this.id
                        });
                    }
                });
                angular.element('#files_count').text($scope.copyfile.length);
                //notification('Files copied.','warning');
            }
            event.preventDefault();
            event.stopPropagation();
        } else if (event.keyCode == 46) { //Delete Key Event
            FilesLength = angular.element('file').length;
            if (FilesLength > 0) {
                $.each($('file'), function() {
                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                        $scope.showLoder = true;
                        angular.element('#' + this.id).removeClass('activeselect');
                        var folderId = this.id;
                        var image = angular.element('#' + this.id).text();
                        rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                        rest.delete().success(function(data) {
                            $scope.copyfile = [];
                            $timeout(function() {
                                $route.reload();
                            }, 100);
                        })
                    }
                });
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } //else if(event.keyCode == 8){//Backspace Key event
        //     var eventElement = $(event.target)[0].id;
        //     if(eventElement == 'fileSearchBox'){

        //     }else{
        //         $scope.higherlevelFolder($window.localStorage.getItem("parentId"));
        //         event.preventDefault();
        //         event.stopImmediatePropagation();
        //     }
        // }
    });

    $scope.showLoder = false;
    // Delete all selected files
    $scope.deleteSelected = function() {
        var FilesLength = angular.element('file').hasClass('activeselect');
        if (FilesLength) {
            bootbox.confirm("Are you sure you want to delete?", function(result) {
                if (result == true) {
                    $scope.copyfile = [];
                    FilesLength = angular.element('file').hasClass('activeselect');
                    if (FilesLength) {
                        $.each($('file'), function() {
                            if (angular.element('#' + this.id).hasClass('activeselect')) {
                                $scope.copyfile.push({
                                    id: this.id
                                });
                            }
                        });
                        $scope.copyfile = JSON.stringify($scope.copyfile);
                        $routeParams.id = JSON.parse($scope.copyfile)[0].id
                        $scope.showLoder = true;
                        rest.path = 'filemanagerfolderDeleteMultiple';
                        rest.put($scope.copyfile).success(function(data) {
                            $route.reload();
                        })
                    }
                } else {
                    $.each($('file'), function() {
                        if (angular.element('#' + this.id).hasClass('activeselect')) {
                            angular.element('#' + this.id).removeClass('activeselect');
                        }
                    });
                    $scope.copyfile = [];
                    angular.element('#files_count').text($scope.copyfile.length);
                }
            });
        } else {
            notification('No files selected', 'warning');
        }
    }

    // Upload button click will start uploading uploadObj 
    $scope.uploadClick = function() { //uploadObj
        var isFilesAvailable = angular.element('.ajax-file-upload-container').html().toString().length;
        if (isFilesAvailable > 0) {
            uploadObj.startUpload();
        } else {
            notification('No Files Selected.', 'warning');
        }
    }

    //file root parent and high levelset
    if ($window.localStorage.getItem("parentId") != 0) {
        var id = $window.localStorage.getItem("parentId");
        rest.path = 'fileparentNameGet/' + id;
        rest.get().success(function(data) {
            if (data.parent_id == 0) {
                $scope.roothigher = false;
            } else {
                if ($scope.userRight == 2 && $window.localStorage.pId == $window.localStorage.getItem("parentId") || $window.localStorage.countSt != " ") {
                    $scope.roothigher = false;
                } else if ($scope.userRight != 2) {
                    $scope.roothigher = true;
                }
            }

            if ($scope.userRight == 2) {
                if (data.name == '_out' || data.name == '_in') {
                    if (data.name == '_out')
                        $scope.parentName = 'From BeConnected';
                    else
                        $scope.parentName = 'To BeConnected';
                } else {
                    $scope.parentName = data.name;
                }
            } else {
                $scope.parentName = data.name;
            }
        }).error(errorCallback);
    }

    if ($window.localStorage.getItem("parentId") != " ") {
        var id = $window.localStorage.getItem("parentId");
        var externalResourceUserId = null;
        rest.path = 'filefolderGet/' + id + '/' + $routeParams.id + '/' + externalResourceUserId;
        //rest.path = 'filefolderGet/' + id + '/' + $routeParams.id;
        rest.get().success(function(data) {
            // $scope.displayfolder = data;
            // $scope.headerfilename(id);
            $timeout(function() {
                $scope.displayfolder = data;

                //Change ItemFolder Name to item001 -> Files-001
                angular.forEach($scope.displayfolder, function(val, i) {
                    if (val.item_id != 0) {
                        var ItemNo;
                        ItemNo = val.name.match(/\d+$/);
                        if (ItemNo) {
                            $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                        }
                    }
                })

                $scope.headerfilename(id);

                // context-menu for file paste
                $scope.menuOptionsPaste = [
                    ['Paste', function($itemScope) {
                        angular.forEach($scope.copyfile, function(value, key) {
                            value.parent = $window.localStorage.getItem("parentId");
                        });
                        $scope.copyfile = JSON.stringify($scope.copyfile);
                        $routeParams.id = JSON.parse($scope.copyfile)[0].id;
                        rest.path = 'fileManagerPaste';
                        rest.put($scope.copyfile).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);

                    }, function($itemScope, $event, modelValue) {
                        if ($itemScope.copyfile.length > 0) {
                            return true;
                        } else {
                            return false
                        }
                    }],

                    ['Refresh', function($itemScope) {
                        $route.reload();
                    }],
                ];

                // context-menu for folder
                $scope.menuOptionsFolder = [
                    ['Open', function($itemScope) {
                        $scope.findfile($itemScope.display.fmanager_id, $itemScope.display.name);
                    }],

                    ['Download', function($itemScope) {
                            var folderId = $itemScope.display.fmanager_id;
                            var ItemcodeNumber = $window.localStorage.ItemcodeNumber;
                            var ItemClient = $window.localStorage.ItemClient;
                            ItemcodeNumber = (ItemcodeNumber == undefined) ? "" : ItemcodeNumber+'_';
                            var ItemClient = (ItemClient == undefined) ? "" : ItemClient+'_';

                            var preFolderName = ItemcodeNumber+ItemClient; 
                            
                            var tmsfolder = preFolderName+$itemScope.display.name;
                            if(!tmsfolder){
                                tmsfolder = 'tms';
                            }
                            if (folderId != undefined) {
                                $scope.showLoder = true;
                                    rest.path = 'filemanagerfolderDownload/' + folderId ;
                                    console.log('nosuc');
                                    rest.get().success(function(data) {
                                        console.log('a');
                                        $scope.downloadAllfile = data;
                                        console.log('allfile',$scope.downloadAllfile);
                                        var zipdwnld = new JSZip();
                                        var fileUrls = [];
                                        var folderArr = [];
                                        var fileIndex = 0;
                                        
                                        angular.forEach($scope.downloadAllfile,function(val,i){
                                            if(val.ext!=''){
                                                var fimg = val.name;
                                                //zipdwnld.file(fimg, "uploads/fileupload/"+fimg);
                                                //fileList.push("uploads/fileupload/"+fimg);
                                                var fimgUrl = "uploads/fileupload/"+fimg;
                                                if(fileUrlExists(fimgUrl)){
                                                    fileUrls.push({
                                                        'parent_id':val.parent_id,
                                                        'full_url':fimgUrl,
                                                        'file_name':fimg,
                                                        'folderurl_dir':val.folderurl,
                                                    });
                                                }
                                            }
                                            var fmid = 0;
                                            if(val.ext==''){
                                                var foldername = val.name;
                                                var fmid = val.fmanager_id;
                                                //zipdwnld.folder(foldername);
                                                folderArr.push({
                                                    'fmanager_id':val.fmanager_id,
                                                    'folder_name':val.name,
                                                    'folderurl_dir':val.folderurl,
                                                });
                                            }

                                            /*if(val.childfile){
                                                angular.forEach(val.childfile,function(val2,i2){
                                                    //console.log(val2.name);
                                                    //console.log('childdata',val2);
                                                    var prntId = 1;
                                                    if(val2.ext!=''){
                                                        var fimg2 = val2.name;
                                                        //fileList.push("uploads/fileupload/"+fimg2);
                                                        var fimgUrl2 = "uploads/fileupload/"+fimg2;
                                                        if(fileUrlExists(fimgUrl2)){
                                                            fileUrls.push(
                                                                {
                                                                'parent_id':val2.parent_id,
                                                                'full_url':fimgUrl2,
                                                                'file_name':val2.name
                                                                });
                                                        }
                                                    }
                                                    if(fimg2){
                                                        //zipdwnld.file(fimg2, "uploads/fileupload/"+fimg2);
                                                    }
                                                    if(val2.ext==''){
                                                        var foldername2 = val2.name;
                                                        //zipdwnld.folder(foldername2);
                                                        folderArr.push({
                                                            'fmanager_id':val2.fmanager_id,
                                                            'folder_name':val2.name,
                                                        });
                                                    }
                                                });
                                                //$scope.childData = val2;
                                            }*/
                                        })
                                        // files download
                                        //console.log('fileUrls',fileUrls);
                                        //console.log('folder-data',folderArr);
                                        var file_count = 0;
                                        fileUrls.forEach(function(url){
                                            JSZipUtils.getBinaryContent(url.full_url, function (err, data) {
                                              if(err) {
                                                 throw err; 
                                              }
                                              var folderName = '';
                                              folderArr.forEach(function(folders){
                                                /*if(folders.fmanager_id == url.parent_id){
                                                    folderName = folders.folder_name+'/';
                                                }else{
                                                    zipdwnld.folder(folders.folder_name);
                                                }*/
                                                zipdwnld.folder(folders.folderurl_dir);
                                              });
                                              //console.log('folder',folderName);
                                                
                                               file_count++;
                                                if (data != null) {
                                                   //zipdwnld.file(folderName+url.file_name, data,  {binary:true});
                                                   zipdwnld.file(url.folderurl_dir+url.file_name, data,  {binary:true});
                                                   
                                                   if (file_count == fileUrls.length) {
                                                         zipdwnld.generateAsync({type:'blob'}).then(function(content) {
                                                            saveAs(content, tmsfolder+".zip");
                                                         }).then(function() {
                                                            $scope.showLoder = false;
                                                            $route.reload();
                                                        });
                                                         $timeout(function() {
                                                            $scope.showLoder = false;
                                                            //$route.reload();
                                                         },10000);   
                                                    }
                                                }
                                         
                                            });
                                        });

                                        $timeout(function() {
                                            if(fileUrls.length == 0 && folderArr.length>0){
                                                folderArr.forEach(function(folders){
                                                    zipdwnld.folder(folders.folder_name);
                                                    zipdwnld.folder(folders.folderurl_dir);
                                                });
                                                zipdwnld.generateAsync({type:'blob'}).then(function(content) {
                                                    saveAs(content, tmsfolder+".zip");
                                                }).then(function() {
                                                    $scope.showLoder = false;
                                                    $route.reload();
                                                });
                                            }
                                        },1000);
                                            
                                    })
                                    $timeout(function() {
                                        $scope.showLoder = false;
                                    },10000);
                                
                            }
                            
                        }],

                        ['Delete', function($itemScope) {
                            bootbox.confirm("Are you sure you want to delete this folder?", function(result) {
                                var folderId = $itemScope.display.fmanager_id;
                                var image = $itemScope.display.name;
                                if (folderId != undefined) {
                                    $scope.showLoder = true;
                                    if (result == true) {
                                        rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                        rest.delete().success(function(data) {
                                            $scope.copyfile = [];
                                            $route.reload();
                                        })
                                    } else {
                                        $scope.showLoder = false;
                                    }
                                }
                            });
                        }],

                    ['Rename', function($itemScope) {
                        var newName = prompt("Please enter name");
                        if (newName) {
                            var folderId = $itemScope.display.fmanager_id;
                            var image = $itemScope.display.name;
                            if (folderId != undefined) {
                                if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                                    $scope.folderData = {};
                                }
                                $scope.name = newName;
                                $scope.image = image;
                                $scope.folderData.name = $scope.name;
                                $scope.folderData.image = $scope.image;
                                $routeParams.id = folderId;

                                rest.path = 'fileManagerUpdate';
                                rest.put($scope.folderData).success(function(data) {
                                    $route.reload();
                                }).error(errorCallback);
                            }
                        }

                    }],
                ];

                // context-menu for files
                $scope.menuOptionsFiles = [
                    ['Download', function($itemScope) {
                        var a = document.createElement('a');
                        document.body.appendChild(a);
                        a.download = $itemScope.display.name;
                        a.href = $("#download" + $itemScope.display.fmanager_id).attr('href');
                        a.click();
                    }],

                    ['Delete', function($itemScope) {
                        bootbox.confirm("Are you sure you want to delete?", function(result) {
                            if (result == true) {
                                $scope.copyfile = [];
                                FilesLength = angular.element('file').hasClass('activeselect');
                                if (FilesLength) {
                                    $.each($('file'), function() {
                                        if (angular.element('#' + this.id).hasClass('activeselect')) {
                                            $scope.copyfile.push({
                                                id: this.id
                                            });
                                        }
                                    });
                                    $scope.copyfile = JSON.stringify($scope.copyfile);
                                    $routeParams.id = JSON.parse($scope.copyfile)[0].id
                                    $scope.showLoder = true;
                                    rest.path = 'filemanagerfolderDeleteMultiple';
                                    rest.put($scope.copyfile).success(function(data) {
                                        $scope.copyfile = [];
                                        $route.reload();
                                    })
                                } else {
                                    var folderId = $itemScope.display.fmanager_id;
                                    var image = $itemScope.display.name;
                                    if (folderId != undefined) {
                                        $scope.showLoder = false;
                                        if (result == true) {
                                            rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                            rest.delete().success(function(data) {
                                                $scope.copyfile = [];
                                                $route.reload();
                                            })
                                        }
                                    }
                                }
                            } else {
                                $.each($('file'), function() {
                                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                                        angular.element('#' + this.id).removeClass('activeselect');
                                    }
                                });
                                $scope.copyfile = [];
                            }
                        });
                    }],

                    ['Rename', function($itemScope) {
                        $.each($('file'), function() {
                            if (angular.element('#' + this.id).hasClass('activeselect')) {
                                angular.element('#' + this.id).removeClass('activeselect');
                            }
                        });
                        $timeout(function() {
                            var newName = prompt("Please enter name");
                            if (newName) {
                                var folderId = $itemScope.display.fmanager_id;
                                var image = $itemScope.display.name;
                                if (folderId != undefined) {
                                    if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                                        $scope.folderData = {};
                                    }
                                    $scope.name = newName;
                                    $scope.image = image;
                                    $scope.folderData.name = $scope.name;
                                    $scope.folderData.image = $scope.image;
                                    $routeParams.id = folderId;

                                    rest.path = 'fileManagerUpdate';
                                    rest.put($scope.folderData).success(function(data) {
                                        $route.reload();
                                    }).error(errorCallback);
                                }
                            }

                        }, 100);
                    }],

                    ['Copy', function($itemScope) {
                        angular.forEach($scope.copyfile, function(value, key) {
                            angular.element('#' + value.id).removeClass('activeselect');
                        });
                        FilesLength = angular.element('file').hasClass('activeselect');
                        if (FilesLength) {
                            $.each($('file'), function() {
                                if (angular.element('#' + this.id).hasClass('activeselect')) {
                                    $scope.copyfile.push({
                                        id: this.id
                                    });
                                    angular.element('#' + this.id).addClass('activeselect');
                                    angular.element('#files_count').text($scope.copyfile.length);
                                }
                            });
                            angular.forEach($scope.copyfile, function(value, key) {
                                angular.element('#' + value.id).addClass('activeselect');
                            });
                        } else {
                            var alreadyInCopy = false;
                            angular.forEach($scope.copyfile, function(value, key) {
                                if (value.id == $itemScope.display.fmanager_id) {
                                    alreadyInCopy = true;
                                }
                            });
                            if (alreadyInCopy) {
                                angular.forEach($scope.copyfile, function(value, key) {
                                    angular.element('#' + value.id).addClass('activeselect');
                                });
                                alert('File already copied');
                                angular.element('#' + $itemScope.display.fmanager_id).addClass('activeselect');
                            } else {
                                $scope.copyfile = [];
                                angular.element('#' + $itemScope.display.fmanager_id).addClass('activeselect');
                                $scope.copyfile.push({
                                    id: $itemScope.display.fmanager_id
                                });
                                angular.element('#files_count').text($scope.copyfile.length);
                            }
                        }
                    }],

                    ['Properties', function($itemScope) {
                        var fileName = $itemScope.display.name;
                        var fileSize = $itemScope.display.size;
                        var fileExt = $itemScope.display.ext;
                        var FileCreatedDate = $itemScope.display.created_date;
                        var propertyHtml = '<div class="alert" style="word-wrap: break-word;">' +
                            '<strong>Name&nbsp;:&nbsp;</strong>&nbsp;' + fileName + '<br><br>' +
                            '<strong>Size&nbsp;:&nbsp;</strong>' + fileSize + '<br><br>' +
                            '<strong>Extention&nbsp;:&nbsp;</strong>' + fileExt + '<br><br>' +
                            '<strong>Created Date&nbsp;:&nbsp;</strong>' + moment(FileCreatedDate).format($window.localStorage.getItem('global_dateFormat')+' '+'HH:mm:ss') +
                            '</div>';
                        $('#propertyModal').find('.modal-body').html(propertyHtml);
                        $('#propertyModal').modal('show');
                    }],
                ];
            }, 200);
        }).error(errorCallback);
    } else {
        rest.path = 'fileManagerGet';
        rest.get().success(function(data) {
            $scope.displayfolder = data;
            //Change ItemFolder Name to item001 -> Files-001
            angular.forEach($scope.displayfolder, function(val, i) {
                if (val.item_id != 0) {
                    var ItemNo;
                    ItemNo = val.name.match(/\d+$/);
                    if (ItemNo) {
                        $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                    }
                }
            })

            $window.localStorage.setItem("parentId", $scope.displayfolder[0].parent_id);
        }).error(errorCallback);
    }

    $scope.mkdir = function() {
        var folderName = prompt("Please enter folder name");
        if (folderName) {
            var id = $window.localStorage.getItem("parentId");
            var role = $scope.userRight;
            rest.path = 'Newfoldermake/' + id + '/' + folderName + '/' + role;
            rest.get().success(function(data) {
                $route.reload();
            }).error(errorCallback);
        }

    }

    /*$scope.foldertree = function(id) {
        console.log('iddd==',id);
        $('.ftr'+id).hide();                
    }*/
    //nested file
    $scope.findfile = function(id, name) {
        var externalResourceUserId = null;

        rest.path = 'filefolderGet/' + id + '/' + $routeParams.id + '/' + externalResourceUserId;

        rest.get().success(function(data) {
            $scope.displayfolder = data;

            //Change ItemFolder Name to item001 -> Files-001
            angular.forEach($scope.displayfolder, function(val, i) {
                if (val.item_id != 0) {
                    var ItemNo;
                    ItemNo = val.name.match(/\d+$/);
                    if (ItemNo) {
                        $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                    }
                }
            })

            $scope.headerfilename(id);

        }).error(errorCallback);
    }

    $scope.headerfilename = function(id, name) {
        if (id == 0 || id == 'null' || id == 'undefined') {
            $scope.rootshow = false;
        } else {
            $scope.rootshow = true;
        };

        $scope.folid = id;
        $window.localStorage.setItem("parentId", $scope.folid);
    }

    // redirect to higher level directiory or file
    $scope.higherlevelFolder = function(id) {
        var externalResourceId = null;
        rest.path = 'higherfolderGet/' + id + '/' + externalResourceId;
        //rest.path = 'higherfolderGet/' + id;
        rest.get().success(function(data) {
            $scope.displayfolder = data.data;
            var fid = [];
            var fname = [];
            if (data.info.parent_id == 0) {
                $scope.rootshow = false;
            }
            angular.forEach(data.data, function(val, i) {
                fid = val.parent_id;
                fname = val.name;
            })


            //Change ItemFolder Name to item001 -> Files-001
            angular.forEach($scope.displayfolder, function(val, i) {
                if (val.item_id != 0) {
                    var ItemNo;
                    ItemNo = val.name.match(/\d+$/);
                    if (ItemNo) {
                        $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                    }
                }
            })
            // call headerfilename() to fill id in folderlevel up
            $scope.headerfilename(fid);
            $window.localStorage.setItem("parentId", fid);

        }).error(errorCallback);
    }

    //change file manager action
    $scope.changefolderAction = function(action) {
        switch (action) {
            case "Rename as":
                $scope.renameshow = true;
                break;
            case "New folder":
                $scope.renameshow = false;
                break;
            case "Delete":
                $scope.renameshow = false;
                break;
        }
    }

    // file manager action rename,delete,cut etc.
    $scope.folderAction = function(action, name) {
        switch (action) {
            case "Rename as":
                for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                    var folderId = angular.element('#folderCheckdata' + i).val();
                    var image = angular.element('#folderCheckfile' + i).val();
                    if (folderId != undefined) {
                        if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                            $scope.folderData = {};
                        }
                        $scope.name = name;
                        $scope.image = image;
                        $scope.folderData.name = $scope.name;
                        $scope.folderData.image = $scope.image;
                        $routeParams.id = folderId;
                        rest.path = 'fileManagerUpdate';
                        rest.put($scope.folderData).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
                break;
            case "New folder":
                if (name) {
                    var id = $window.localStorage.getItem("parentId");
                    var role = $scope.userRight;
                    rest.path = 'Newfoldermake/' + id + '/' + name + '/' + role;
                    rest.get().success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Enter Folder Name', 'information');
                }
                break;
            case "Delete":
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                        var folderId = angular.element('#folderCheckdata' + i).val();
                        var image = angular.element('#folderCheckfile' + i).val();
                        if (folderId != undefined) {
                            if (result == true) {
                                rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                rest.delete().success(function(data) {
                                    $route.reload();
                                }).error(errorCallback);
                            }
                        }
                    }
                });
                break;
        }
    }

    //file or directory paste
    $scope.copyfile = [];
    $scope.folderCopy = function() {
        for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
            var folderId = angular.element('#folderCheckdata' + i).val();
            if (folderId != undefined) {
                $scope.copyfile.push({
                    id: folderId
                });
            }
        }
    }

    //copy directory or file paste
    $scope.folderPaste = function() {
        for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
            var folderId = angular.element('#folderCheckdata' + i).val();
            if (folderId != undefined) {
                $scope.copyfiles = JSON.stringify($scope.copyfile);
                $routeParams.id = folderId;
                rest.path = 'fileManagerPaste';
                rest.put($scope.copyfiles).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    //All and selected directory delete
    $scope.folderDelete = function() {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                var folderId = angular.element('#folderCheckdata' + i).val();
                var image = angular.element('#folderCheckfile' + i).val();
                if (folderId != undefined) {
                    if (result == true) {
                        rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                        rest.delete().success(function(data) {
                            $route.reload();
                        })
                    }
                }
            }
        });
    }

    $scope.folderAct = false;

    //folder check on action display
    $scope.folderSelect = function() {
        var bool = 0;
        for (var i = 0; i < angular.element('[class^=fcheck1]').length; i++) {
            if (angular.element('.fcheck1' + i).is(':checked') == true) {
                bool += 1;
            }
        }
        if (bool > 0) {
            $scope.folderAct = true;
        } else {
            $scope.folderAct = false;
        }
    }

    //Freelance folder check on action display
    $scope.folderSelectFr = function() {
        var bool = 0;
        for (var i = 0; i < angular.element('[class^=fcheck]').length; i++) {
            if (angular.element('.fcheck' + i).is(':checked') == true) {
                bool += 1;
            }
        }
        if (bool > 0) {
            $scope.folderAct = true;
        } else {
            $scope.folderAct = false;
        }
    }

}).controller('filemanagerCtrl', function($scope, $log, $location, fileReader, rest, $uibModal, $window, $rootScope, $timeout, $route, $routeParams,$interval) {
    $scope.clientId = $window.localStorage.getItem("contactclientId");
    $scope.userId = $window.localStorage.getItem("contactUserId");
    $scope.userIdInternal = $window.localStorage.getItem("internal");
    $scope.IndirectClientId = $window.localStorage.getItem("IndirectClientId");
    $scope.copyfile = [];
    var FilesLength;
    //popup close
    $scope.popupCloseFile = function() {
        $window.localStorage.setItem("contactclientId", "");
        $window.localStorage.setItem("contactUserId", "");
        $window.localStorage.setItem("internal", "");
        $window.localStorage.setItem("IndirectClientId", "");
        $window.close();
    }

    // serachTextBox Animation
    $scope.searchBox = function() {
        angular.element('#fileSearchBox').addClass('animationtextBox');
    }

    // onClick upload button hideShow element
    $scope.uploadbtn = function() {
        var id = $window.localStorage.getItem("parentId");
        if ($window.sessionStorage.getItem("ExternalUserId") != null) {
            rest.path = 'checkDefaultFolderProjectExternal/' + id;
            rest.get().success(function(data) {
                if (data == 200) {
                    notification('You can not upload files here.', 'error');
                } else {
                    angular.element('#uploadContainer').toggleClass('hideShowClass');
                }
            }).error(errorCallback);
        } else {
            angular.element('#uploadContainer').toggleClass('hideShowClass');
        }
        $('.ajax-upload-dragdrop:eq(1)').hide();
    }
    
    if($scope.clientId != null){
        if($scope.clientId.trim().length == 0){
            $scope.clientId = $window.localStorage.getItem("contactclientIdNew");
        }
    }
    $scope.getScoopItemFileCount = function(){
        var id = $window.localStorage.getItem("scoopFolderRoot");
        
        rest.path = 'getFilestotal/' + id;
        rest.get().success(function(data) {
        if(data){
            $scope.Filestotal = data[0].totalfile;
            $window.localStorage.setItem("scoopFolderCount",data[0].totalfile);
        }
            //angular.element('#filescount' + val.itemId).text($scope.Filestotal);
        }).error(errorCallback);        
    }
    //project root get display front
    if ($routeParams.id == 'client' && $scope.clientId != "") {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'Clientfilefront/' + $scope.clientId + '/' + 'direct';
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $window.localStorage.setItem("rootId", data.fmanager_id + '_directclient');
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($routeParams.id == 'user' && $scope.userId != "") {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'Userfilefront/' + $scope.userId; //External
            $window.sessionStorage.setItem("ExternalUserId", $scope.userId);

            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $window.localStorage.setItem("rootId", data.fmanager_id + '_externalresource');
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($routeParams.id == 'internal' && $scope.userId != "") {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'Userfilefront/' + $scope.userIdInternal; //Internal
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $window.localStorage.setItem("rootId", data.fmanager_id + '_internalresource');
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($routeParams.id == 'IndirectClient' && $scope.IndirectClientId != "") {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = 'Clientfilefront/' + $scope.IndirectClientId + '/' + 'indirect';
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $window.localStorage.setItem("rootId", data.fmanager_id + '_indirectclient');
                $route.reload();
            }).error(errorCallback);
        }
    } else if ($routeParams.id == 'item' && $window.localStorage.ItemFolderid) {
        if ($window.localStorage.getItem("parentId") == undefined || $window.localStorage.getItem("parentId") == 0) {
            rest.path = "Itemfilefront/" + $window.localStorage.orderID + '/' + $window.localStorage.ItemFolderid;
            rest.get().success(function(data) {
                $window.localStorage.setItem("parentId", data.fmanager_id);
                $route.reload();
            }).error(errorCallback);
        }
    }

    if($window.localStorage.ItemFolderid){
        //console.log('itemfolderid',$window.localStorage.ItemFolderid);
        $window.localStorage.setItem("scoopFolderRoot", $window.localStorage.ItemFolderid);                
        //$interval($scope.getScoopItemFileCount,1000);            
    }

        
    $scope.chkfilesize = 0;
    $scope.chkfiletotal = [];
    $scope.allFilesArr = [];
    var allFilesArr = [];
                
    var uploadObj;
    $timeout(function() {
        uploadObj = $("#multipleupload").uploadFile({
            multiple: true,
            dragDrop: true,
            dragDropStr: "<span class='spandragdrop'><b>Drag & Drop Files</b></span>",
            fileName: "myfile",
            acceptFiles: "png",
            showPreview: true,
            previewHeight: "35px",
            previewWidth: "35px",
            maxFileCount: 5,
            maxFileSize: 15*1024*1024,
            showDelete: true,
            autoSubmit: false,
            serialize:false,
            uploadStr: "<span class='fa fa-upload' style='color:#FFF;font-size:30px;'> </span>",
            onLoad: function(obj) {},
            /*afterUploadAll: function(obj) {
                //debugger
                notification('Files uploaded successfully', 'success');
                $timeout(function() {
                    angular.element('.ajax-file-upload-progress').css('display', 'none');
                    //$route.reload();
                }, 100);
                $timeout(function() {
                    $route.reload();
                    $scope.is_settimeout = 1;
                }, 5000);
            },*/
            onCancel: function(files, pd) {
                $timeout(function() {
                    var filenameContains = angular.element('.ajax-file-upload-filename').text();
                    var length = angular.element("[class^='upimg']").length;
                    angular.forEach(angular.element("[class^='upimg']"), function(res, i) {
                        var upClassName = angular.element("[class^='upimg']")[i].className = 'upimg' + length;
                        length--;
                    })
                }, 100);

            },
            onSubmit:function(files)
            {
                $("#eventsmessage").html($("#eventsmessage").html()+"<br/>Submitting:"+JSON.stringify(files));
                //return false;
                //console.log('ulpoada==',files);
            },

            onSuccess: function(files, data, xhr, pd) {
                //debugger;
                console.log('sucfile',files);
                angular.forEach(files, function(val, i) {
                    var filenameContains = $(".ajax-file-upload-filename:contains('" + files[i] + "')");
                    var fileType = files[i].substring(files[i].lastIndexOf(".") + 1, files[i].length);
                    var fileDivText = $(".ajax-file-upload-filename:contains('" + files[i] + "')").text();
                    if (fileDivText) {
                        var dataU = $('.upimg' + fileDivText.charAt(0)).text();
                    }
                    
                    var size = fileDivText.substring(fileDivText.lastIndexOf(".") - 4, fileDivText.length).trim();
                    var regExp = /\(([^)]+)\)/;
                    var getFileSize = regExp.exec(size);
                    $scope.name = dataU;
                    $scope.f_id = 1;
                    $scope.parent_id = $window.localStorage.getItem("parentId");
                    if ($scope.filedata == undefined || $scope.filedata == " " || $scope.filedata == null) {
                        $scope.filedata = {};
                    }
                    console.log('$ssize',files[i]);
                    $scope.role_id = $scope.userRight;
                    $scope.filedata.role_id = $scope.role_id;
                    $scope.filedata.name = $scope.name;
                    $scope.filedata.f_id = $scope.f_id;
                    $scope.filedata.parent_id = $scope.parent_id;
                    $scope.filedata.filename = files[0];
                    $scope.filedata.filetype = fileType;
                    $scope.filedata.size = '100 kb';
                    $scope.chkfilesize = '100 kb';

                    var allFiles = {
                        role_id: $scope.role_id,
                        name: $scope.filedata.name,
                        f_id: 1,
                        parent_id: $scope.filedata.parent_id,
                        filename: $scope.filedata.filename,
                        filetype: $scope.filedata.filetype,
                        size: $scope.filedata.size
                    };
                });    

                /*var filenameContains = $(".ajax-file-upload-filename:contains('" + files[0] + "')");
                var fileType = files[0].substring(files[0].lastIndexOf(".") + 1, files[0].length);
                var fileDivText = $(".ajax-file-upload-filename:contains('" + files[0] + "')").text();
                if (fileDivText) {
                    var dataU = $('.upimg' + fileDivText.charAt(0)).text();
                }
                
                var size = fileDivText.substring(fileDivText.lastIndexOf(".") - 4, fileDivText.length).trim();
                var regExp = /\(([^)]+)\)/;
                var getFileSize = regExp.exec(size);
                $scope.name = dataU;
                $scope.f_id = 1;
                $scope.parent_id = $window.localStorage.getItem("parentId");
                if ($scope.filedata == undefined || $scope.filedata == " " || $scope.filedata == null) {
                    $scope.filedata = {};
                }
                $scope.role_id = $scope.userRight;
                $scope.filedata.role_id = $scope.role_id;
                $scope.filedata.name = $scope.name;
                $scope.filedata.f_id = $scope.f_id;
                $scope.filedata.parent_id = $scope.parent_id;
                $scope.filedata.filename = files[0];
                $scope.filedata.filetype = fileType;*/
                //$scope.filedata.size = getFileSize[1];
                //$scope.chkfilesize = getFileSize[1];
                /*$scope.filedata.size = '100 kb';
                $scope.chkfilesize = '100 kb';*/

                //rest.path = 'fileAdd';
                //debugger;
                //console.log("$scope.filedata",$scope.filedata);
                var filelength = angular.element("[class^='upimg']").length;
                
                console.log('length',filelength);
                var allFiles = {
                    role_id: $scope.role_id,
                    name: $scope.filedata.name,
                    f_id: 1,
                    parent_id: $scope.filedata.parent_id,
                    filename: $scope.filedata.filename,
                    filetype: $scope.filedata.filetype,
                    size: $scope.filedata.size
                };
                $scope.allFilesArr.push(allFiles);
                console.log('alldata',$scope.allFilesArr);        
                console.log('$scope.filedata',$scope.filedata);        
                //console.log('allFilesArr-length',$scope.allFilesArr.length);        
                rest.path = 'fileAdd';
                    
                if(filelength == $scope.allFilesArr.length){
                    rest.post($scope.allFilesArr).success(function(data) { 
                        //debugger;
                        $timeout(function() {
                            if(data.status == 200){
                                notification('Files uploaded successfully', 'success');
                                $timeout(function() {
                                    $route.reload();
                                }, 100);
                            }else{
                                notification('Some files not uploaded!', 'success');
                                $timeout(function() {
                                    $route.reload();
                                }, 100);
                            }

                        console.log('uploader data',data);
                            
                        },500);    
                         

                    }).error(errorCallback);
                }    
                // previous code
                /*rest.post($scope.filedata).success(function(data) {

                }).error(errorCallback);*/
                // update when all files upload
                /*if(data.status == 200){
                    $scope.chkfiletotal.push({id:data.status});
                    var totalitem = $scope.chkfiletotal.length;
                    if(totalitem == filelength){
                        notification('Files uploaded successfully', 'success');
                        $timeout(function() {
                            $route.reload();
                        }, 100);
                    }else{
                        //notification('not uplaoded', 'success');
                        $route.reload();
                    }
                }*/
                jQuery('.ajax-file-upload-red').html('<i class="fa fa-close"></i>');

            },
            onSelect: function(allfiles) {
                console.log('files',allfiles);
                var files = allfiles;
                var isFilesAvailable = angular.element('.ajax-file-upload-container').css('border', '1px dotted #ddd');
                angular.forEach(files, function(val, i) {
                    fileReader.readAsDataUrl(files[i], $scope).then(function(result) {
                        var data = result;
                        var txt = $(".ajax-file-upload-filename:contains('" + files[i].name + "')");
                        //console.log('txt',txt);
                        var fileExtension = files[i].name.substr((files[i].name.lastIndexOf('.') + 1));
                        if (txt) {
                            var fullTxt = $(".ajax-file-upload-filename:contains('" + files[i].name + "')").text();
                            $('<div class="upimg' + fullTxt.charAt(0).toString() + '" style="display:none">' + data + '</div>').insertAfter(".ajax-file-upload-filename:contains('" + files[i].name + "')");
                        }
                        if (fileExtension != 'jpg' && fileExtension != 'png' && fileExtension != 'gif' && fileExtension != 'svg') {
                            var previewContainer = $('.upimg' + fullTxt.charAt(0).toString()).parent().children(':first-child');
                            previewContainer.css('display', 'block', 'margin-left', '40px');
                            previewContainer.css('margin-left', '55px');
                            var DefaultImgPath = "assets/img/file_icon/fileicon.png";
                            if(fileExtension == 'docx' || fileExtension == 'doc'){ 
                               DefaultImgPath = "assets/img/file_icon/doc.png"; 
                            }
                            if(fileExtension == 'xlsx' || fileExtension == 'xlsm'  || fileExtension == 'xls' || fileExtension == 'csv'){ 
                               DefaultImgPath = "assets/img/file_icon/xls.png"; 
                            }
                            if(fileExtension == 'pdf'){ 
                               DefaultImgPath = "assets/img/file_icon/pdf.png"; 
                            }
                            if(fileExtension == 'ppt'){ 
                               DefaultImgPath = "assets/img/file_icon/ppt.png"; 
                            }
                            if(fileExtension == 'zip' || fileExtension == 'gz'  || fileExtension == 'rar'){ 
                               DefaultImgPath = "assets/img/file_icon/zip.png"; 
                            }
                            if(fileExtension == 'mp3' || fileExtension == 'wav'  || fileExtension == 'wma'){ 
                               DefaultImgPath = "assets/img/file_icon/mp3.png"; 
                            }
                            if(fileExtension == 'mp4' || fileExtension == 'wmv'  || fileExtension == 'avi'  || fileExtension == '3gp'  || fileExtension == 'mov'  || fileExtension == 'vob'){ 
                               DefaultImgPath = "assets/img/file_icon/video.png"; 
                            }
                            if(fileExtension == 'txt' || fileExtension == 'html'  || fileExtension == 'htm'  || fileExtension == 'js'  || fileExtension == 'css'  || fileExtension == 'vob'  || fileExtension == 'sql'  || fileExtension == 'tiff'  || fileExtension == 'ttf'){ 
                               DefaultImgPath = "assets/img/file_icon/video.txt"; 
                            }
                            previewContainer.attr('src', DefaultImgPath);
                        }
                            jQuery('.ajax-file-upload-cancel').html('<i class="fa fa-close"></i>');

                    });
                });

                return true; //to allow file submission.
            },
        }); 
        $('.ajax-upload-dragdrop:eq(1)').hide();
        jQuery('.ajax-file-upload-cancel').html('<i class="fa fa-close"></i>');
        jQuery('.ajax-file-upload-red').html('<i class="fa fa-close"></i>');

        //angular.element('.ajax-file-upload-cancel').html('test')
        $scope.IsVisible = false;
        $scope.foldertree = function(id,parent_id) {
            //angular.element('.ftr'+id).toggleClass('hideShowClass');
            var isopenFolder = 0;
            //if($('.ftr'+id).is(":hidden")){
            if($('.ft'+parent_id+id).is(":hidden")){
                //$('.ftr'+id).show();
                $('.ft'+parent_id+id).show();
                isopenFolder =1;
            }
            if(isopenFolder==0){
                //$('.ftr'+id).hide();
                $('.ft'+parent_id+id).hide();
            }
        }
        $scope.foldertreeChild = function(id,parent_id) {
            
            var isopenFolderChld = 0;
            if($('.nch'+parent_id+id).is(":hidden")){
                $('.nch'+parent_id+id).show();
                isopenFolderChld =1;
            }
            if(isopenFolderChld==0){
                $('.nch'+parent_id+id).hide();
            }
        }

    }, 1000);
    
    $timeout(function() {
        $('.ajax-upload-dragdrop:eq(1)').hide();
    }, 500);

    $timeout(function() {
        $scope.addToDownload = function(fimg) {
            const a = document.createElement('a');
            a.download = fimg;
            a.href = 'uploads/fileupload/'+fimg;
            a.click();
        }
    },500);    


    $scope.addToCopy = function(fid){
        var chkForClass = angular.element('#' + fid).hasClass('activeselect');
        var alreadyInCopy = false;
        if (chkForClass == false) {
            angular.forEach($scope.copyfile, function(value, key) {
                if (value.id == fid) {
                    alreadyInCopy = true;
            
                }
            });
            if (alreadyInCopy) {
                alert('File already copied');
                angular.element('#' + fid).addClass('activeselect');
            } else {
                angular.element('#' + fid).addClass('activeselect');
                $scope.copyfile.push({
                    id: fid
                });
                //angular.element('#files_count').text($scope.copyfile.length);
            
            }
        } else if (chkForClass == true) {
            angular.element('#' + fid).removeClass('activeselect');
            angular.forEach($scope.copyfile, function(value, key) {
                if (value.id == fid) {
                    $scope.copyfile.splice(key, 1);
                    angular.element('#' + fid).removeClass('activeselect');
                }
            });
            //angular.element('#files_count').text($scope.copyfile.length);
        }
        angular.element('#files_count').text($scope.copyfile.length);
        $scope.is_setint = 1;
    }
    $scope.clearCopy = function() {
        if ($scope.copyfile.length == 0) {
            $.each($('file'), function() {
                if (angular.element('#' + this.id).hasClass('activeselect')) {
                    angular.element('#' + this.id).removeClass('activeselect')
                }
            });
            angular.element('#files_count').text('0');
            $scope.copyfile = [];
        } else {
            angular.forEach($scope.copyfile, function(value, key) {
                angular.element('#' + value.id).removeClass('activeselect');
            });
            $scope.copyfile = [];
            angular.element('#files_count').text('0');
        }

    }


    // Keyboard keypress Event fo File Manager
    $(window).keydown(function(event) {
        if (event.ctrlKey && event.keyCode == 86) { //CTRL + V
            if ($scope.copyfile.length > 0 && angular.element('#files_count').text() != 0) {
                angular.forEach($scope.copyfile, function(value, key) {
                    value.parent = $window.localStorage.getItem("parentId");
                });
                $scope.showLoder = true;
                $scope.copyfile = JSON.stringify($scope.copyfile);
                $routeParams.id = JSON.parse($scope.copyfile)[0].id;
                rest.path = 'fileManagerPaste';
                rest.put($scope.copyfile).success(function(data) {
                    $scope.copyfile = [];
                    $route.reload();
                }).error(errorCallback);
            } else {
                notification('No selected Files', 'warning');
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } else if (event.ctrlKey && event.keyCode == 65) { //CTRL + A Key Event
            FilesLength = angular.element('file').length;
            if (FilesLength > 0) {
                $scope.copyfile = [];
                $.each($('file'), function() {
                    angular.element('#' + this.id).addClass('activeselect');
                    $scope.copyfile.push({
                        id: this.id
                    });
                });
                angular.element('#files_count').text($scope.copyfile.length);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } else if (event.ctrlKey && event.keyCode == 67) { //CTRL + C Key Event
            FilesLength = angular.element('file').length;
            $scope.copyfile = [];
            if (FilesLength > 0) {
                $.each($('file'), function() {
                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                        $scope.copyfile.push({
                            id: this.id
                        });
                    }
                });
                angular.element('#files_count').text($scope.copyfile.length);
                //notification('Files copied.','warning');
            }
            event.preventDefault();
            event.stopPropagation();
        } else if (event.keyCode == 46) { //Delete Key Event
            FilesLength = angular.element('file').length;
            if (FilesLength > 0) {
                $.each($('file'), function() {
                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                        $scope.showLoder = true;
                        angular.element('#' + this.id).removeClass('activeselect');
                        var folderId = this.id;
                        var image = angular.element('#' + this.id).text();
                        rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                        rest.delete().success(function(data) {
                            $scope.copyfile = [];
                            $timeout(function() {
                                $route.reload();
                            }, 100);
                        })
                    }
                });
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        } //else if(event.keyCode == 8){//Backspace Key event
        //     var eventElement = $(event.target)[0].id;
        //     if(eventElement == 'fileSearchBox'){

        //     }else{
        //         $scope.higherlevelFolder($window.localStorage.getItem("parentId"));
        //         event.preventDefault();
        //         event.stopImmediatePropagation();
        //     }
        // }
    });


    $scope.showLoder = false;

    // Delete all selected files
    $scope.deleteSelected = function() {
        FilesLength = angular.element('file').hasClass('activeselect');
        if (FilesLength) {
            bootbox.confirm("Are you sure you want to delete?", function(result) {
                if (result == true) {
                    $scope.copyfile = [];
                    FilesLength = angular.element('file').hasClass('activeselect');
                    if (FilesLength) {
                        $.each($('file'), function() {
                            if (angular.element('#' + this.id).hasClass('activeselect')) {
                                $scope.copyfile.push({
                                    id: this.id
                                });
                            }
                        });
                        $scope.copyfile = JSON.stringify($scope.copyfile);
                        $routeParams.id = JSON.parse($scope.copyfile)[0].id
                        $scope.showLoder = true;
                        rest.path = 'filemanagerfolderDeleteMultiple';
                        rest.put($scope.copyfile).success(function(data) {
                            $route.reload();
                        })
                    }
                } else {
                    $.each($('file'), function() {
                        if (angular.element('#' + this.id).hasClass('activeselect')) {
                            angular.element('#' + this.id).removeClass('activeselect');
                        }
                    });
                    $scope.copyfile = [];
                    angular.element('#files_count').text($scope.copyfile.length);
                }
            });
        } else {
            notification('No files selected', 'warning');
        }
    }

    // Upload button click will start uploading uploadObj 
    $scope.uploadClick = function() { //uploadObj
        var isFilesAvailable = angular.element('.ajax-file-upload-container').html().toString().length;
        if (isFilesAvailable > 0) {
            uploadObj.startUpload();
        } else {
            notification('No Files Selected.', 'warning');
        }
    }
    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope).then(function(result) {
            if (file.size > 15000000) {
                notification('Please select file less than 15 MB.', 'warning');
                return false;
            } else {
                $scope.filesize = bytesToSize(file.size);
                $scope.filename = file.name;

                $scope.filetype = file.type;
                var t = $scope.filename.split('.');
                var type = t.pop();
                $scope.typefile = type;
                $scope.imgshow = false;
                $scope.imageSrc = result;
            }
        });
    };

    //file insert
    $scope.uploadFile = function(data) {
        if (data) {
            $scope.name = data;

            $scope.filename = angular.element('#filename').text();
            $scope.filetype = angular.element('#filetype').text();
            $scope.size = angular.element('#filesize').text();
            $scope.f_id = 1;
            $scope.parent_id = $window.localStorage.getItem("parentId");
            if ($scope.filedata == undefined || $scope.filedata == " " || $scope.filedata == null) {
                $scope.filedata = {};
            }
            $scope.role_id = $scope.userRight;
            $scope.filedata.role_id = $scope.role_id;
            $scope.filedata.name = $scope.name;
            $scope.filedata.f_id = $scope.f_id;
            $scope.filedata.parent_id = $scope.parent_id;
            $scope.filedata.filename = $scope.filename;
            $scope.filedata.filetype = $scope.filetype;
            $scope.filedata.size = $scope.size;
            rest.path = 'fileAdd';


        } else {
            notification('Please Select filedata', 'information');
        }
    }
    $scope.rootfolder = $window.localStorage.getItem("parentId");
    //file root parent and high levelset
    if ($window.localStorage.getItem("parentId") != 0 && $window.localStorage.getItem("parentId") != undefined) {
        var id = $window.localStorage.getItem("parentId");
        rest.path = 'fileparentNameGet/' + id;
        rest.get().success(function(data) {
            if (data.parent_id == 0) {
                $scope.roothigher = false;
            } else {
                $scope.roothigher = true;
            }
            $scope.parentName = data.name;
        }).error(errorCallback);
    }
    var is_setint = 0;
    $timeout(function() {
        
        //var setintrvl = setInterval(function() {
         if ($window.localStorage.getItem("parentId") != " " && $window.localStorage.getItem("parentId") != undefined) {
            var id = $window.localStorage.getItem("parentId");
            var externalResourceUserId = null;
            if ($window.sessionStorage.getItem("ExternalUserId") != null) {
                var externalResourceUserId = $window.sessionStorage.getItem("ExternalUserId");
            }
            
            rest.path = 'filefolderGet/' + id + '/' + $routeParams.id + '/' + externalResourceUserId;
            console.log('id',id);
            rest.get().success(function(data) {
                $timeout(function() {
                    $scope.displayfolder = data;
                    console.log('displayfolder-data',$scope.displayfolder);
                    //Change ItemFolder Name to item001 -> Files-001
                    angular.forEach($scope.displayfolder, function(val, i) {
                        $scope.displayfolder[i].countchild = val.categories.length;
                        $scope.displayfolder[i].name= val.name.toString(); 
                        if (val.item_id != 0) {
                            var ItemNo;
                            ItemNo = val.name.match(/\d+$/);
                            if (ItemNo) {
                                $scope.displayfolder[i].name = 'Files-' + ItemNo[0];
                            }
                        }
                    })

                    // $timeout(function() {
                    //  var exProjectFolderId = '';
                    //  var keepGoing = true;
                    //  angular.forEach($scope.displayfolder,function(val,i){
                    //      if(keepGoing){
                    //          if(val.is_ex_project_folder == 1){
                    //        exProjectFolderId = val.fmanager_id;
                    //    }
                    //    if(val.is_project_folder == 1){

                    //        
                    //        val.parent_id = exProjectFolderId;
                    //        
                    //    }
                    //    keepGoing = false;
                    //      }
                    //  })
                    // },100);

                    $scope.headerfilename(id);

                    // context-menu for file paste
                    $scope.menuOptionsPaste = [
                        ['Paste', function($itemScope) {
                            angular.forEach($scope.copyfile, function(value, key) {
                                value.parent = $window.localStorage.getItem("parentId");
                            });
                            $scope.copyfile = JSON.stringify($scope.copyfile);
                            $routeParams.id = JSON.parse($scope.copyfile)[0].id;
                            rest.path = 'fileManagerPaste';
                            rest.put($scope.copyfile).success(function(data) {
                                $route.reload();
                            }).error(errorCallback);

                        }, function($itemScope, $event, modelValue) {
                            if ($itemScope.copyfile.length > 0) {
                                return true;
                            } else {
                                return false
                            }
                        }],

                        ['Refresh', function($itemScope) {
                            $route.reload();
                        }],
                    ];

                    $timeout(function() {
                        var smenu=0;
                        $scope.menuRclkID ='';
                              
                        var setintrvlMenu = setInterval(function() {
                            $( "folder, file" ).contextmenu(function(e) {
                              //alert($(this).attr('menuoptionIdName'));
                              $scope.menuRclkID ='';
                              var ele = $(this).attr('menuoptionIdName');
                              if(ele){
                                var eleProperty = ele.substring(
                                    ele.lastIndexOf(",[") + 2 , 
                                    ele.lastIndexOf("],")
                                );
                                var filename = ele.substring( 
                                    ele.lastIndexOf("],")+2
                                );
                                $scope.menuRclkID = ele.split(',')[0];  
                                $scope.menuRclkfileExt = eleProperty.split(',')[0];  
                                $scope.menuRclkfileDate = eleProperty.split(',')[1];  
                                $scope.menuRclkfileSize = eleProperty.split(',')[2];  
                                $scope.menuRclkName = filename;  
                              }
                              if(ele==0){
                                $scope.menuRclkID ='';
                              }
                              //alert($scope.menuRclkID);
                              if(smenu == 100){
                                clearInterval(setintrvlMenu);
                              }
                              //console.log(smenu);
                              ++smenu;
                                //event.preventDefault();
                                //event.stopImmediatePropagation();  
                            });
                        },200);
                    },1000);

                    // context-menu for folder
                    $scope.menuOptionsFolder = [
                        ['Open', function($itemScope) {
                            $scope.findfile($itemScope.display.fmanager_id, $itemScope.display.name);
                        }],

                        ['Download', function($itemScope) {
                            var ItemcodeNumber = $window.localStorage.ItemcodeNumber;
                            var ItemClient = $window.localStorage.ItemClient;
                            ItemcodeNumber = (ItemcodeNumber == undefined) ? "" : ItemcodeNumber+'_';
                            ItemClient = (ItemClient == undefined) ? "" : ItemClient+'_';

                            var preFolderName = ItemcodeNumber+ItemClient; 
                            if($scope.menuRclkID){
                                var folderId = $scope.menuRclkID;
                                var tmsfolder = preFolderName+$scope.menuRclkName;
                            }else{
                                var folderId = $itemScope.display.fmanager_id;
                                var tmsfolder = preFolderName+$itemScope.display.name;
                            }
                            
                            if(!tmsfolder){
                                tmsfolder = 'TMS_';
                            }
                            if (folderId != undefined) {
                                $scope.showLoder = true;
                                    rest.path = 'filemanagerfolderDownload/' + folderId ;
                                    rest.get().success(function(data) {
                                        $scope.downloadAllfile = data;
                                        console.log('allfile',$scope.downloadAllfile);
                                        var zipdwnld = new JSZip();
                                        var fileUrls = [];
                                        var folderArr = [];
                                        var parentFolderArr = [];
                                        var fileIndex = 0;
                                        angular.forEach($scope.downloadAllfile,function(val,i){
                                            if(val.ext!=''){
                                                var fimg = val.name;
                                                //zipdwnld.file(fimg, "uploads/fileupload/"+fimg);
                                                //fileList.push("uploads/fileupload/"+fimg);
                                                var fimgUrl = "uploads/fileupload/"+fimg;
                                                if(fileUrlExists(fimgUrl)){
                                                    fileUrls.push(
                                                        {
                                                        'parent_id':val.parent_id,
                                                        'full_url':fimgUrl,
                                                        'file_name':fimg,
                                                        'folderurl_dir':val.folderurl,
                                                        });
                                                }
                                            }
                                            var fmid = 0;
                                            if(val.ext==''){
                                                var foldername = val.name;
                                                var fmid = val.fmanager_id;
                                                folderArr.push({
                                                    'fmanager_id':val.fmanager_id,
                                                    'folder_name':val.name,
                                                    'folderurl_dir':val.folderurl,
                                                });

                                                //zipdwnld.folder(foldername);
                                            }

                                            //console.log(val.childfile);
                                            /*if(val.childfile){
                                                angular.forEach(val.childfile,function(val2,i2){
                                                    var prntId = 1;
                                                    if(fmid == val2.fmanager_id){
                                                        //console.log('foldername-'+fmid,foldername);
                                                    }
                                                    if(val2.ext!=''){
                                                        var fimg2 = val2.name;
                                                        //fileList.push("uploads/fileupload/"+fimg2);
                                                        var fimgUrl2 = "uploads/fileupload/"+fimg2;
                                                        if(fileUrlExists(fimgUrl2)){
                                                            fileUrls.push(
                                                                {
                                                                    'parent_id':val2.parent_id,
                                                                    'full_url':fimgUrl2,
                                                                    'file_name':val2.name,
                                                                    'folderurl_dir':val2.folderurl
                                                                });
                                                        }
                                                    }
                                                    if(fimg2){
                                                        //zipdwnld.file(fimg2, "uploads/fileupload/"+fimg2);
                                                    }
                                                    if(val2.ext==''){
                                                        var foldername2 = val2.name;
                                                        //zipdwnld.folder(foldername2);
                                                        folderArr.push({
                                                            'fmanager_id':val2.fmanager_id,
                                                            'folder_name':val2.name,
                                                            'folderurl_dir':val2.folderurl
                                                        });
                                                    }
                                                });
                                                //$scope.childData = val2;
                                            }*/
                                            
                                        })

                                        //console.log('fileUrls',fileUrls);
                                        //console.log('folderArr',folderArr);
                                        // files download
                                        var file_count = 0;
                                        fileUrls.forEach(function(url){
                                            JSZipUtils.getBinaryContent(url.full_url, function (err, data) {
                                              if(err) {
                                                 throw err;
                                                 $scope.showLoder = false;
                                              }

                                              var folderName = '';
                                              folderArr.forEach(function(folders){
                                                /*if(folders.fmanager_id == url.parent_id){
                                                    folderName = folders.folder_name+'/';
                                                }else{
                                                    zipdwnld.folder(folders.folder_name);
                                                }*/
                                                zipdwnld.folder(folders.folderurl_dir);
                                              });
                                              //console.log('folder',folderName);
                                                
                                               file_count++;
                                                if (data != null) {
                                                   //console.log('count',file_count);
                                                   zipdwnld.file(url.folderurl_dir+url.file_name, data,  {binary:true});
                                                   
                                                   if (file_count == fileUrls.length) {
                                                         zipdwnld.generateAsync({type:'blob'}).then(function(content) {
                                                            saveAs(content, tmsfolder+".zip");
                                                         }).then(function() {
                                                            $scope.showLoder = false;
                                                            $route.reload();
                                                         });
                                                         $timeout(function() {
                                                            $scope.showLoder = false;
                                                            //$route.reload();
                                                         },10000);   
                                                    }
                                                }
                                         
                                            });
                                        });

                                        $timeout(function() {
                                            if(fileUrls.length == 0 && folderArr.length>0){
                                                folderArr.forEach(function(folders){
                                                    zipdwnld.folder(folders.folderurl_dir);
                                                });
                                                zipdwnld.generateAsync({type:'blob'}).then(function(content) {
                                                    saveAs(content, tmsfolder+".zip");
                                                }).then(function() {
                                                    $scope.showLoder = false;
                                                    $route.reload();
                                                });
                                                //$scope.showLoder = false;
                                            }
                                        },1000);
                                    })
                                    $timeout(function() {
                                        $scope.showLoder = false;
                                    },10000);
                            }
                            
                        }],

                        ['Delete', function($itemScope) {
                            if ($itemScope.display.is_default_folder == 1) {
                                notification('You can not delete default folders', 'warning');
                            } else {
                                bootbox.confirm("Are you sure you want to delete this folder?", function(result) {
                                    //var folderId = $itemScope.display.fmanager_id;
                                    //var image = $itemScope.display.name;
                                    if($scope.menuRclkID){
                                        var folderId = $scope.menuRclkID;
                                        var image = $scope.menuRclkName;
                                    }else{
                                        var folderId = $itemScope.display.fmanager_id;
                                        var image = $itemScope.display.name;
                                    }
                                    if (folderId != undefined) {
                                        $scope.showLoder = true;
                                        if (result == true) {
                                            rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                            rest.delete().success(function(data) {
                                                $scope.copyfile = [];
                                                $route.reload();
                                            })
                                        } else {
                                            $scope.showLoder = false;
                                        }
                                    }
                                });
                            }
                        }],

                        ['Rename', function($itemScope) {
                            if ($itemScope.display.is_default_folder == 1) {
                                notification('You can rename default folders', 'warning');
                            } else {
                                var newName = prompt("Please enter name");
                                if (newName) {
                                    if($scope.menuRclkID){
                                        var folderId = $scope.menuRclkID;
                                        var image = $scope.menuRclkName;
                                    }else{
                                        var folderId = $itemScope.display.fmanager_id;
                                        var image = $itemScope.display.name;
                                    }
                                    if (folderId != undefined) {
                                        if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                                            $scope.folderData = {};
                                        }
                                        $scope.name = newName;
                                        $scope.image = image;
                                        $scope.folderData.name = $scope.name;
                                        $scope.folderData.image = $scope.image;
                                        $routeParams.id = folderId;

                                        rest.path = 'fileManagerUpdate';
                                        rest.put($scope.folderData).success(function(data) {
                                            $route.reload();
                                        }).error(errorCallback);
                                    }
                                }
                            }

                        }],
                    ];

                    // context-menu for files
                    $scope.menuOptionsFiles = [
                        ['Download', function($itemScope) {
                            if($scope.menuRclkID){
                                //console.log('subdownload',$scope.menuRclkID);
                                var fileID = $scope.menuRclkID;
                                var fileName = $scope.menuRclkName;
                            }else{
                                var fileID = $itemScope.display.fmanager_id;
                                var fileName = $itemScope.display.name;
                            }
                            /*var a = document.createElement('a');
                            document.body.appendChild(a);
                            console.log('download=filename',$scope.menuRclkName);
                            console.log('atag',a);
                        
                            a.download = fileName;
                            a.href = $("#download" + fileID).attr('href');
                            a.click();*/
                            const a = document.createElement('a');
                            a.download = fileName;
                            a.href = 'uploads/fileupload/'+fileName;
                            a.click();
                            $timeout( function(){
                                $scope.menuRclkID ='';
                                $scope.menuRclkName ='';
                            },500);
                            
                        }],

                        ['Delete', function($itemScope) {
                            bootbox.confirm("Are you sure you want to delete?", function(result) {
                                if (result == true) {
                                    $scope.copyfile = [];
                                    FilesLength = angular.element('file').hasClass('activeselect');
                                    console.log('delete',FilesLength);
                                        
                                    if (FilesLength) {
                                        $.each($('file'), function() {
                                            if (angular.element('#' + this.id).hasClass('activeselect')) {
                                                $scope.copyfile.push({
                                                    id: this.id
                                                });
                                            }
                                        });
                                        $scope.copyfile = JSON.stringify($scope.copyfile);
                                        $routeParams.id = JSON.parse($scope.copyfile)[0].id
                                        $scope.showLoder = true;
                                        rest.path = 'filemanagerfolderDeleteMultiple';
                                        rest.put($scope.copyfile).success(function(data) {
                                            $scope.copyfile = [];
                                            $route.reload();
                                        })
                                    } else {
                                        if($scope.menuRclkID){
                                            var folderId = $scope.menuRclkID;
                                            var image = $scope.menuRclkName;
                                        }else{    
                                            var folderId = $itemScope.display.fmanager_id;
                                            var image = $itemScope.display.name;
                                        }
                                        if (folderId != undefined) {
                                            $scope.showLoder = false;
                                            if (result == true) {
                                                rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                                rest.delete().success(function(data) {
                                                    $scope.copyfile = [];
                                                    $route.reload();
                                                })
                                            }
                                        }
                                    }
                                } else {
                                    $.each($('file'), function() {
                                        if (angular.element('#' + this.id).hasClass('activeselect')) {
                                            angular.element('#' + this.id).removeClass('activeselect');
                                        }
                                    });
                                    $scope.copyfile = [];
                                }
                            });
                        }],

                        ['Rename', function($itemScope) {
                            $.each($('file'), function() {
                                if (angular.element('#' + this.id).hasClass('activeselect')) {
                                    angular.element('#' + this.id).removeClass('activeselect');
                                }
                            });
                            $timeout(function() {
                                var newName = prompt("Please enter name");
                                if (newName) {
                                    if($scope.menuRclkID){
                                        var folderId = $scope.menuRclkID;
                                        var image = $scope.menuRclkName;
                                    }else{    
                                        var folderId = $itemScope.display.fmanager_id;
                                        var image = $itemScope.display.name;
                                    }
                                    if (folderId != undefined) {
                                        if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                                            $scope.folderData = {};
                                        }
                                        $scope.name = newName;
                                        $scope.image = image;
                                        $scope.folderData.name = $scope.name;
                                        $scope.folderData.image = $scope.image;
                                        $routeParams.id = folderId;

                                        rest.path = 'fileManagerUpdate';
                                        rest.put($scope.folderData).success(function(data) {
                                            $route.reload();
                                        }).error(errorCallback);
                                    }
                                } //else{
                                // notification('Please enter Name', 'information');
                                //}
                            }, 100);
                        }],

                        ['Copy', function($itemScope) {
                            angular.forEach($scope.copyfile, function(value, key) {
                                angular.element('#' + value.id).removeClass('activeselect');
                            });
                            FilesLength = angular.element('file').hasClass('activeselect');
                            console.log('a');
                            if (FilesLength) {
                                console.log('b');
                            
                                $.each($('file'), function() {
                                    if (angular.element('#' + this.id).hasClass('activeselect')) {
                                        $scope.copyfile.push({
                                            id: this.id
                                        });
                                        angular.element('#' + this.id).addClass('activeselect');
                                        angular.element('#files_count').text($scope.copyfile.length);
                                    }
                                });
                                angular.forEach($scope.copyfile, function(value, key) {
                                    angular.element('#' + value.id).addClass('activeselect');
                                });
                            } else {
                                console.log('c');
                                if($scope.menuRclkID){
                                    var folderId2 = $scope.menuRclkID;
                                }else{    
                                    var folderId2 = $itemScope.display.fmanager_id;
                                }
                                var alreadyInCopy = false;
                                angular.forEach($scope.copyfile, function(value, key) {
                                    if (value.id == folderId2) {
                                        alreadyInCopy = true;
                                    }
                                });
                                if (alreadyInCopy) {
                                    console.log('d');
                            
                                    angular.forEach($scope.copyfile, function(value, key) {
                                        angular.element('#' + value.id).addClass('activeselect');
                                    });
                                    alert('File already copied');
                                    angular.element('#' + $itemScope.display.fmanager_id).addClass('activeselect');
                                } else {
                                    console.log('e');
                            
                                    if($scope.menuRclkID){
                                        var folderId = $scope.menuRclkID;
                                        var image = $scope.menuRclkName;
                                    }else{    
                                        var folderId = $itemScope.display.fmanager_id;
                                        var image = $itemScope.display.name;
                                    }
                                    $scope.copyfile = [];
                                    angular.element('#' + folderId).addClass('activeselect');
                                    $scope.copyfile.push({
                                        id: folderId
                                    });
                                    angular.element('#files_count').text($scope.copyfile.length);
                                    $timeout(function(){
                                        $scope.menuRclkID = '';
                                    },500);
                                }
                            }
                        }],

                        ['Properties', function($itemScope) {
                            if($scope.menuRclkID){
                                var fileName = $scope.menuRclkName;
                                var fileSize = $scope.menuRclkfileSize;
                                var fileExt = $scope.menuRclkfileExt;
                                var FileCreatedDate = $scope.menuRclkfileDate;
                            
                            }else{    
                                var fileName = $itemScope.display.name;
                                var fileSize = $itemScope.display.size;
                                var fileExt = $itemScope.display.ext;
                                var FileCreatedDate = $itemScope.display.created_date;
                            }
                            var propertyHtml = '<div class="alert" style="word-wrap: break-word;">' +
                                '<strong>Name&nbsp;:&nbsp;</strong>&nbsp;' + fileName + '<br><br>' +
                                '<strong>Size&nbsp;:&nbsp;</strong>' + fileSize + '<br><br>' +
                                '<strong>Extention&nbsp;:&nbsp;</strong>' + fileExt + '<br><br>' +
                                '<strong>Created Date&nbsp;:&nbsp;</strong>' + moment(FileCreatedDate).format($window.localStorage.getItem('global_dateFormat')+' '+'HH:mm:ss') +
                                '</div>';
                            $('#propertyModal').find('.modal-body').html(propertyHtml);
                            $('#propertyModal').modal('show');

                            $timeout(function(){
                                $scope.menuRclkID ='';
                            });
                        }],
                    ];
                }, 200);
            }).error(errorCallback);
        } else {
            rest.path = 'fileManagerGet';
            rest.get().success(function(data) {
                $scope.displayfolder = data;
                //Change ItemFolder Name to item001 -> Files-001
                angular.forEach($scope.displayfolder, function(val, i) {
                    if(val.categories){
                        $scope.displayfolder[i].countchild = val.categories.length;
                    }
                    $scope.displayfolder[i].name = val.name.toString(); 
                        
                    if (val.item_id != 0) {
                        var ItemNo;
                        ItemNo = val.name.match(/\d+$/);
                        if (ItemNo) {
                            $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                        }
                    }
                })

                $window.localStorage.setItem("parentId", $scope.displayfolder[0].parent_id);
            }).error(errorCallback);
        }

            ++is_setint;
            if(is_setint == 2){
                //clearInterval(setintrvl);    
            }
            
        //},3000);
    
    },1000);
    
    //nested file
    $scope.findfile = function(id, name) {
        var externalResourceUserId = null;
        if ($window.sessionStorage.getItem("ExternalUserId") != null) {
            var externalResourceUserId = $window.sessionStorage.getItem("ExternalUserId");
        }
        rest.path = 'filefolderGet/' + id + '/' + $routeParams.id + '/' + externalResourceUserId;
        rest.get().success(function(data) {
            $scope.displayfolder = data;

            //Change ItemFolder Name to item001 -> Files-001
            angular.forEach($scope.displayfolder, function(val, i) {
                $scope.displayfolder[i].countchild = val.categories.length;
                $scope.displayfolder[i].name= val.name.toString(); 
                        
                if (val.item_id != 0) {
                    var ItemNo;
                    ItemNo = val.name.match(/\d+$/);
                    if (ItemNo) {
                        $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                    }
                }
            })
            $scope.headerfilename(id);
        }).error(errorCallback);
    }

    $scope.headerfilename = function(id, name) {
        if (id == 0 || id == 'null' || id == 'undefined') {
            $scope.rootshow = false;
        } else {
            $scope.rootshow = true;
        };
        $scope.folid = id;
        $window.localStorage.setItem("parentId", $scope.folid);
    }

    // redirect to higher level directiory or file

    $scope.GetRootFolderName = function() {
        var rootId = $window.localStorage.getItem("rootId");
        $routeParams.id = rootId;

        rest.path = 'getRootFolder';
        rest.put(rootId).success(function(data) {
            $scope.rootFolderName ='';
            if(data != null){
                $scope.rootFolderName = data.name;
            }
            
        }).error(errorCallback);
    }
    $scope.GetRootFolderName();
    // redirect to higher level directiory or file
    $scope.higherlevelFolder = function(id) {
        var externalResourceId = null;
        if ($window.sessionStorage.getItem("ExternalUserId") != null) {
            var externalResourceId = $window.sessionStorage.getItem("ExternalUserId");
        }

        $scope.rootInfo = $window.localStorage.getItem("parentId");
        $routeParams.id = id;
        rest.path = 'isParent';
        rest.put($scope.rootInfo).success(function(data) {
            if (data.client_id == 0 && data.in_client_id == 0 && data.user_id == 0) {
                rest.path = 'higherfolderGet/' + id + '/' + externalResourceId;
                rest.get().success(function(data) {
                    $scope.showLoder = true;
                    $scope.displayfolder = data.data;
                    console.log('$scope.folderup',$scope.displayfolder);
                    var fid = [];
                    var fname = [];
                    if (data.info.parent_id == 0) {
                        $scope.rootshow = false;
                    }
                    angular.forEach(data.data, function(val, i) {
                        
                        fid = val.parent_id;
                        fname = val.name;
                    })

                    //Change ItemFolder Name to item001 -> Files-001
                    angular.forEach($scope.displayfolder, function(val, i) {
                        $scope.displayfolder[i].countchild = val.categories.length;
                        console.log('$scope.displayfolder[i].countchild',$scope.displayfolder[i].countchild);
                        $scope.displayfolder[i].name= val.name.toString(); 
                        
                        if (val.item_id != 0) {
                            var ItemNo;
                            ItemNo = val.name.match(/\d+$/);
                            if (ItemNo) {
                                $scope.displayfolder[i].name = 'Files-' + ItemNo[0];

                            }
                        }
                    })

                    // if (externalResourceId != 'null') {
                    //     rest.path = 'checkRootFromFiles/' + fid + '/' + externalResourceId;
                    //     rest.get().success(function(data) {
                    //         if (data == 404) {
                    //             $scope.headerfilename(fid);
                    //             $window.localStorage.setItem("parentId", fid);
                    //             $window.localStorage.setItem("ProjectParent",false);
                    //         } else {
                    //             $scope.headerfilename(data[0].fmanager_id);
                    //             $window.localStorage.setItem("parentId", data[0].fmanager_id);
                    //             $window.localStorage.setItem("ProjectParent",'true');
                    //         }
                    //     }).error(errorCallback);
                    // }
                    $scope.headerfilename(fid);
                    $window.localStorage.setItem("parentId", fid);
                    $scope.showLoder = false;
                }).error(errorCallback);
            } else {
                // if($window.localStorage.getItem("ProjectParent") == 'true' && externalResourceUserId){
                //     rest.path = 'filefolderGet/' + $window.localStorage.getItem("parentId") + '/' + $routeParams.id + '/' + externalResourceUserId;
                //     rest.get().success(function(data) {
                //         $scope.displayfolder = data;
                //         $scope.headerfilename(id);
                //         $window.localStorage.setItem("ProjectParent",false);
                //     }).error(errorCallback);
                // }else{
                notification('You are in root directory.', 'warning');
                //}
            }
        }).error(errorCallback);

    }

    //change file manager action
    $scope.changefolderAction = function(action) {
        switch (action) {
            case "Rename as":
                $scope.renameshow = true;
                break;
            case "New folder":
                $scope.renameshow = false;
                break;
            case "Delete":
                $scope.renameshow = false;
                break;
        }
    }
    $scope.mkdir = function() {
        var id = $window.localStorage.getItem("parentId");
        if ($window.sessionStorage.getItem("ExternalUserId") != null) {
            rest.path = 'checkDefaultFolderProjectExternal/' + id;
            rest.get().success(function(data) {
                if (data == 200) {
                    notification('You can not create folder here.', 'error');
                } else {
                    var folderName = prompt("Please enter folder name");
                    if (folderName) {
                        var id = $window.localStorage.getItem("parentId");
                        var role = $scope.userRight;
                        rest.path = 'Newfoldermake/' + id + '/' + folderName + '/' + role;
                        rest.get().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            }).error(errorCallback);
        } else {
            var folderName = prompt("Please enter folder name");
            if (folderName) {
                var id = $window.localStorage.getItem("parentId");
                var role = $scope.userRight;
                rest.path = 'Newfoldermake/' + id + '/' + folderName + '/' + role;
                rest.get().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    // file manager action rename,delete,cut etc.
    $scope.folderAction = function(action, name) {
        switch (action) {
            case "Rename as":
                for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                    var folderId = angular.element('#folderCheckdata' + i).val();
                    var image = angular.element('#folderCheckfile' + i).val();
                    if (folderId != undefined) {
                        if ($scope.folderData == undefined || $scope.folderData == null || $scope.folderData == "") {
                            $scope.folderData = {};
                        }
                        $scope.name = name;
                        $scope.image = image;
                        $scope.folderData.name = $scope.name;
                        $scope.folderData.image = $scope.image;
                        $routeParams.id = folderId;
                        rest.path = 'fileManagerUpdate';
                        rest.put($scope.folderData).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
                break;
            case "New folder":
                if (name) {
                    var id = $window.localStorage.getItem("parentId");
                    var role = $scope.userRight;
                    rest.path = 'Newfoldermake/' + id + '/' + name + '/' + role;
                    rest.get().success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Enter Folder Name', 'information');
                }
                break;
            case "Delete":
                bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                    for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                        var folderId = angular.element('#folderCheckdata' + i).val();
                        var image = angular.element('#folderCheckfile' + i).val();
                        if (folderId != undefined) {
                            if (result == true) {
                                rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                                rest.delete().success(function(data) {
                                    $route.reload();
                                }).error(errorCallback);
                            }
                        }
                    }
                });
                break;
        }
    }

    //file or directory paste
    $scope.folderCopy = function() {
        for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
            var folderId = angular.element('#folderCheckdata' + i).val();
            if (folderId != undefined) {
                $scope.copyfile.push({
                    id: folderId
                });
            }
        }
    }

    //copy directory or file paste
    $scope.folderPaste = function() {

        for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
            var folderId = angular.element('#folderCheckdata' + i).val();
            if (folderId != undefined) {
                $scope.copyfiles = JSON.stringify($scope.copyfile);
                $routeParams.id = folderId;
                rest.path = 'fileManagerPaste';
                rest.put($scope.copyfiles).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    //All and selected directory delete
    $scope.folderDelete = function() {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
                var folderId = angular.element('#folderCheckdata' + i).val();
                var image = angular.element('#folderCheckfile' + i).val();
                if (folderId != undefined) {
                    if (result == true) {
                        rest.path = 'filemanagerfolderDelete/' + folderId + '/' + image;
                        rest.delete().success(function(data) {
                            $route.reload();
                        })
                    }
                }
            }
        });
    }

    $scope.folderAct = false;

    //folder check on action display
    $scope.folderSelect = function() {
        var bool = 0;
        for (var i = 0; i < angular.element('[id^=fcheck]').length; i++) {
            if (angular.element('#fcheck' + i).is(':checked') == true) {
                bool += 1;
            }
        }
        if (bool > 0) {
            $scope.folderAct = true;
        } else {
            $scope.folderAct = false;
        }
    }

}).controller('orderstatusReportController', function($scope, $log, $location, $route, rest, $routeParams, $window, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.iUserId = "";

    var Dateobject = [];
    for (var i = 11; i >= 0; i--) {
        var now = new Date();
        var date = new Date(now.setMonth(now.getMonth() - i));
        var datex = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        var str = pad(date.getMonth() + 1, 2) + "-" + date.getFullYear();
        Dateobject.push({
            id: str
        });
    }

    //export to excel
    $scope.exportData = function(action) {
        switch (action) {
            case "result":
                var blob = new Blob([document.getElementById('exportable').innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Order-status-report.xls");
                break;
            case "month":
                var blob = new Blob([document.getElementById('itemExport').innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Order-month-status-report.xls");
                break;
            case "projectType":
                var blob = new Blob([document.getElementById('ProjectTypeexport').innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Order-Project-Type-status-report.xls");
                break;
            case "customers":
                var blob = new Blob([document.getElementById('customersExports').innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Order-customers-status-report.xls");
                break;
        }
    };

    //current year get
    $scope.date = new Date();
    var year = $scope.date.getFullYear();
    $scope.Currentyear = year.toString().substr(2, 2);
    //get contact person by customers
    $scope.getContact = function(id, element) {
        $routeParams.id = id;
        rest.path = 'contact';
        rest.model().success(function(data) {
            var cont = [];
            angular.forEach(data.data, function(val, i) {
                var obj = {
                    'id': val.iContactId,
                    'text': val.vFirstName + ' ' + val.vLastName
                };
                cont.push(obj);
            });
            angular.element('#' + element).select2({
                allowClear: true,
                data: cont
            });
        }).error(errorCallback);
    };

    //status oreder report find
    $scope.statusReportsearch = function(frmId, eID) {
        if ($scope.orderReport == undefined || $scope.orderReport == null || $scope.orderReport == "") {
            notification('Please Select option', 'information');
        } else {
            rest.path = 'statusorderReportFind';
            rest.get().success(function(data) {
                $scope.statusResult = data['data'];
                $scope.Dateobject = Dateobject;
                $scope.statusInfo = data['info'];
                $scope.statusProjectType = data['Typeinfo'];
                $scope.statusCustomerType = data['customerType'];
                $scope.totalItemAmout = 0;
                var result = [];

                //Month Chart start
                angular.forEach($scope.Dateobject, function(val, i) {
                    angular.forEach($scope.statusInfo, function(value, j) {
                        $timeout(function() {
                            for (var k = 0; k < angular.element('[id^=masterQDate]').length; k++) {
                                var QuentityDate = angular.element('#masterQDate' + k).text();
                                var obj = [];
                                obj.push(QuentityDate);
                                if (value.QuentityDate == QuentityDate) {
                                    if (val.id == value.QuentityDate) {
                                        $scope.totalItemAmout += value.TotalAmount;
                                        var prn = $scope.totalItemAmout * 12 / 100;
                                        $scope.totalItemAvg = prn;
                                        angular.element('#itemAmount' + i).text(value.TotalAmount);
                                    } else {

                                    }
                                }
                            }
                        }, 100);
                    })
                })

                var obj = [];
                $timeout(function() {
                    var dupQuentity = [];
                    for (var k = 0; k < angular.element('[id^=masterQDate]').length; k++) {
                        var QuentityDate = angular.element('#masterQDate' + k).text();
                        dupQuentity.push(QuentityDate);
                    }

                    for (var i = 0; i < 12; i++) {
                        var itemDate = angular.element('#itemDate' + i).text();
                        if (jQuery.inArray(itemDate, dupQuentity) == -1) {
                            angular.element('#itemAmount' + i).text(0);
                        }
                    }

                    $scope.checkOrderItem = angular.element('.orderRClass').length;
                    for (var i = 0; i < angular.element('[id^=itemAmount]').length; i++) {
                        var item = angular.element('#itemAmount' + i).text();
                        var itemTotal = angular.element('#totalItemAmout').text();
                        if (item != "") {
                            obj.push(parseInt(item));
                            var total = parseFloat(item) * 100 / parseFloat(itemTotal);
                            total.toFixed(2) == 'NaN' ? angular.element('#itemShare' + i).text('0.0%') : angular.element('#itemShare' + i).text(total.toFixed(2) + '%');
                        } else {
                            obj.push(0);
                            angular.element('#itemAmount' + i).text(0);
                            angular.element('#itemShare' + i).text('0.0%');
                        }
                    }
                    $scope.addItemGraph(obj);
                }, 500);
                //Month Chart end

                //project type chart start
                $scope.ProjectTypetotal = 0;
                $timeout(function() {
                    for (var i = 0; i < angular.element('[id^=projectTypeName]').length; i++) {
                        var amount = angular.element('#projectTypeAmount' + i).text();
                        var totalType = angular.element('[id^=projectTypeName]').length;
                        $scope.projectAverage = totalType;
                        $scope.ProjectTypetotal += parseInt(amount);
                        $scope.ProjectTypeAverage = $scope.ProjectTypetotal * totalType / 100;
                    }
                    var type = [];
                    for (var i = 0; i < angular.element('[id^=projectTypeName]').length; i++) {
                        var amount = angular.element('#projectTypeAmount' + i).text();
                        var total = parseFloat(amount) * 100 / $scope.ProjectTypetotal;
                        var projectTypeName = angular.element('#projectTypeName' + i).text();
                        angular.element('#projectTypeShare' + i).text(total.toFixed(2) + '%');
                        type.push([projectTypeName, parseFloat(total)]);
                    }
                    $scope.projectTypeGraph(type);
                }, 500);
                //project type chart end

                //customers chart start
                $scope.CustomersTypeTotal = 0;
                $timeout(function() {
                    for (var i = 0; i < angular.element('[id^=CustomersName]').length; i++) {
                        var amount = angular.element('#CustomersAmount' + i).text();
                        $scope.CustomersTypeTotal += parseFloat(amount);
                        $scope.TotalCustomer = angular.element('[id^=CustomersName]').length;
                        $scope.customersAverage = parseFloat($scope.CustomersTypeTotal) * parseFloat($scope.TotalCustomer) / 100;
                        if (isNaN($scope.customersAverage)) {
                            $scope.customersAverage = 0;
                        }
                    }

                    var custType = [];
                    for (var i = 0; i < angular.element('[id^=CustomersName]').length; i++) {
                        var amount = angular.element('#CustomersAmount' + i).text();
                        if (isNaN($scope.CustomersTypeTotal)) {
                            $scope.CustomersTypeTotal = 0;
                        }
                        var total = parseFloat(amount) * 100 / parseFloat($scope.CustomersTypeTotal);
                        if (isNaN(total)) {
                            total = 0;
                        }
                        var customerTypeName = angular.element('#CustomersName' + i).text();
                        angular.element('#customersShare' + i).text(total.toFixed(2) + '%');
                        custType.push([customerTypeName, parseFloat(total.toFixed(2))]);
                    }
                    $scope.CustomerTypeChart(custType);
                }, 500)
            })
            //scrollToId(eID);
            scrollToId(eID)
        }
    }

    //items total graph
    var chart;
    $scope.addItemGraph = function(statInfo) {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'monthChart',
                type: 'column',
                height: 400,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    viewDistance: 25,
                    depth: 40,
                },
                marginTop: 80,
                marginRight: 40
            },
            plotOptions: {
                column: {
                    depth: 40,
                    stacking: true,
                    grouping: false
                }
            },
            title: {
                text: 'Total (Orders)/Month (' + $scope.Dateobject[0].id + ' - ' + $scope.Dateobject[11].id + ') '
            },
            xAxis: {
                categories: [$scope.Dateobject[0].id, $scope.Dateobject[1].id, $scope.Dateobject[2].id, $scope.Dateobject[3].id, $scope.Dateobject[4].id, $scope.Dateobject[5].id, $scope.Dateobject[6].id, $scope.Dateobject[7].id, $scope.Dateobject[8].id, $scope.Dateobject[9].id, $scope.Dateobject[10].id, $scope.Dateobject[11].id]
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Month (' + $scope.Dateobject[0].id + ' - ' + $scope.Dateobject[11].id + ')'
                }
            },
            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    depth: 40
                }
            },
            series: []
        });

        var odata = [{
            data: statInfo,
            stack: 0
        }];

        angular.forEach(odata, function(item, itemNo) {
            chart.addSeries({
                data: item.data,
                stack: item.stack
            }, false);
        });
        chart.redraw();
    }

    //project type graph
    $scope.projectTypeGraph = function(type) {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'projectTyp',
                type: 'pie',
                height: 300,
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                },
            },
            title: {
                text: 'Total (Orders)/Project Types (' + $scope.Dateobject[0].id + ' - ' + $scope.Dateobject[11].id + ') '
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: type
            }]
        });
    }

    //customers Chart
    $scope.CustomerTypeChart = function(cType) {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'CustomerType',
                type: 'pie',
                height: 300,
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Total (Orders)/Customers (' + $scope.Dateobject[0].id + ' - ' + $scope.Dateobject[11].id + ') '
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Customers',
                data: cType
            }]
        });
    }

    //Display serach remove
    $scope.reseteSearch = function() {
        $route.reload();
    }

    //redirect to customer page
    $scope.customerOrder = function(id) {
        rest.path = 'order/' + id;
        rest.get().success(function(data) {
            // debugger;
            $scope.orderdata = data;
            $window.localStorage.orderNo = $scope.orderdata.order_number;
            $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
            $window.localStorage.orderID = id;
            $window.localStorage.iUserId = id;
            $window.localStorage.userType = 3;
            $window.localStorage.currentUserName = data.vClientName;
            $location.path('/project-customer');
        }).error(errorCallback);
    };

    //serch data action
    $scope.statucOrderAction = function(action) {
        switch (action) {
            case "Change project status":
                $scope.projectStatus = true;
                $scope.itemStatus = false;
                break;
            case "Change item status":
                $scope.itemStatus = true;
                $scope.projectStatus = false;
                break;
            case "Remove selection":
                $scope.projectStatus = false;
                $scope.itemStatus = false;
                break;
            case "Export to excel":
                $scope.projectStatus = false;
                $scope.itemStatus = false;
                break;
            case "Select all":
                $scope.projectStatus = false;
                $scope.itemStatus = false;
                break;
        }
    }

    //search data action
    $scope.statusAction = function(action) {
        switch (action) {
            case "Change project status":
                var projectStatus = angular.element('#projectStatusdata').val();
                for (var i = 0; i < angular.element('[id^=orderCheckData]').length; i++) {
                    var orderselect = $('#orderCheck' + i).is(':checked') ? 'true' : 'false';
                    if (orderselect == 'true') {
                        var orderId = angular.element('#orderCheckData' + i).val();
                        $routeParams.id = orderId;
                        rest.path = 'ordersearchProjectStatusUpdate/' + $routeParams.id + '/' + projectStatus;
                        rest.get().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
                break;
            case "Change item status":
                var itemStatus = angular.element('#itemStatusdata').val();
                for (var i = 0; i < angular.element('[id^=orderCheckData]').length; i++) {
                    var orderselect = $('#orderCheck' + i).is(':checked') ? 'true' : 'false';
                    if (orderselect == 'true') {
                        var orderId = angular.element('#orderCheckData' + i).val();
                        $routeParams.id = orderId;
                        rest.path = 'ordersearchItemStatusUpdate/' + $routeParams.id + '/' + itemStatus;
                        rest.get().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
                break;
            case "Remove selection":
                break;
            case "Export to excel":
                var blob = new Blob([document.getElementById('exportable').innerHTML], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
                saveAs(blob, "Order-status-report.xls");
                $route.reload();
                break;
            case "Select all":
                $scope.checkdata = "ordercheck";
                break;
        }
    }

    //select field clear
    $scope.clearCode = function(frmId, action) {
        switch (action) {
            case "companyCode":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.companyCode = '';
                    angular.element('#companyCode1').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "customer":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.customer = '';
                    angular.element('#customer1').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "contactPerson":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.contactPerson = '';
                    angular.element('#conatct-person').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "itemStatus":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.itemStatus = '';
                    angular.element('#itemStatus').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "projectStatus":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.projectStatus = '';
                    angular.element('#projectStatus').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "projectType":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.projectType = '';
                    angular.element('#projectType').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "sourceLanguage":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.sourceLanguage = '';
                    angular.element('#sourceLanguage').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
            case "targetLanguage":
                if ($scope.orderReport != undefined) {
                    $scope.orderReport.targetLanguage = '';
                    angular.element('#targetLanguage').select2('val', '');
                    angular.forEach($scope.orderReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.orderReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.orderReport)) {
                        $scope.statusResult = '';
                        $scope.orderReport = undefined;
                        $scope.checkOrderItem = undefined;
                    }
                }
                break;
        }
    }

}).controller('resourcesController', function($scope, $log, $location, $route, fileReader, rest, $uibModal, $window, $rootScope, $routeParams, $cookieStore, $timeout, $filter) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    //country holiday get
    $scope.countryHolidayGet = function(country) {
        //National Holiay List current date to higher date get
        var currentYear = new Date().getFullYear();
        rest.path = "holidayGet/" + country;
        rest.get().success(function(data) {
            var upcomming = [];
            var ongoing = [];

            angular.forEach(data, function(val, i) {
                var currentDate = new Date;
                var holiday = new Date(val[0] + ' ' + currentYear);
                if (currentDate <= holiday) {
                    var dayMon = val[0].split(' ');
                    var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                    upcomming.push({
                        'date': fullDate,
                        'holidayName': val[2],
                        'holidayStatus': val[3]
                    });
                } else {
                    var dayMon = val[0].split(' ');
                    var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                    ongoing.push({
                        'date': fullDate,
                        'holidayName': val[2],
                        'holidayStatus': val[3]
                    });
                }
            });

            $scope.upcommingList = upcomming;
            $scope.ongoingList = ongoing.reverse();
            $scope.upLength = $scope.upcommingList.length;
            $scope.onLength = $scope.ongoingList.length;
        }).error(errorCallback);
    }

    if (!$cookieStore.get('session_holidayCountry')) {
        $scope.countryHolidayGet("Bulgaria");
    } else {
        $scope.countryHolidayGet($cookieStore.get('session_holidayCountry'));
    }

    //holiday Status wise show
    $scope.holidayStatus = function(status) {
        if (status == "Upcoming") {
            $timeout(function() {
                angular.element('.holidayTab2').removeClass('holidayTabActive');
                angular.element('.holidayTab1').addClass('holidayTabActive');
            }, 100);
            $scope.holidayShow = false;
        } else {
            angular.element('.holidayTab2').addClass('holidayTabActive');
            angular.element('.holidayTab1').removeClass('holidayTabActive');
            $scope.holidayShow = true;
        }
    }

    $scope.holidayStatus("Upcoming");



    // Resource Type Start
    rest.path = 'usertype';
    rest.get().success(function(data) {
        $scope.usertype = data;
        $scope.usertypeEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.saveType = function(formId) {
        if (angular.element("#" + formId).valid()) {
            rest.path = 'saveusertype';
            rest.post($scope.type).success(function(data) {
                notification('Record inserted successfully', 'success');
                $route.reload();
            }).error(errorCallback);
        }
    };

    $scope.updateType = function(formId, id) {
        if (angular.element("#" + formId).valid()) {
            rest.path = 'updateusertype/' + id;
            rest.post($scope.type).success(function(data) {
                notification('Record updeted successfully', 'success');
                $route.reload();
            }).error(errorCallback);
        };
    }

    $scope.getType = function(id, eID) {
        rest.path = 'usertype/' + id;
        rest.get().success(function(data) {
            $scope.type = data;
            $scope.type.iResourceType = $scope.type.iResourceType.toString();
        }).error(errorCallback);
        var eleHeight = elmYPosition(eID)
        $('.md-content').animate({ scrollTop: eleHeight }, 200);
        //scrollToId(eID);
    }

    $scope.deleteType = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteType/' + id;
                rest.delete().success(function(data) {
                    notification('Record updeted deleted successfully.', 'success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };
    // Resource Type END

    // Resource Status START

    rest.path = 'statustype/1';
    rest.get().success(function(data) {
        $scope.userStatus = data;
        $scope.userstatusEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getStatus = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'userstatus';
        rest.model().success(function(data) {
            $scope.status = data;
        }).error(errorCallback);

        var eleHeight = elmYPosition(eID)
        $('.md-content').animate({ scrollTop: eleHeight }, 200);
        //scrollToId(eID);
    }

    $scope.saveStatus = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.status.status_id) {
                $routeParams.id = $scope.status.status_id;
                rest.path = 'userstatus';
                rest.put($scope.status).success(function() {
                    notification('Record updeted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                $scope.status.status_type = 1;
                rest.path = 'userstatus';
                rest.post($scope.status).success(function(data) {
                    notification('Record inserted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteStatusModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'userstatus/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };
    // Resource Status END

    // Resource position START
    rest.path = 'GetuserPosition';
    rest.get().success(function(data) {
        $scope.userPosition = data;
    }).error(errorCallback);

    $scope.getPosition = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'GetuserPosition';
        rest.model().success(function(data) {
            $scope.position = data;
        }).error(errorCallback);


        var eleHeight = elmYPosition(eID)
        $('.md-content').animate({ scrollTop: eleHeight }, 200);
        //scrollToId(eID);
    }

    $scope.savePosition = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.position.position_id) {
                $routeParams.id = $scope.position.position_id;
                rest.path = 'userPosition';
                rest.put($scope.position).success(function() {
                    notification('Record updated successfully', 'success');
                    $route.reload();
                    $timeout(function() {
                        var eleHeight = elmYPosition('position');
                        $('.md-content').animate({ scrollTop: eleHeight }, 500);
                    }, 500);
                }).error(errorCallback);
            } else {
                if ($scope.position.status == undefined) {
                    $scope.position.status = '0';
                }

                rest.path = 'userPosition';
                rest.post($scope.position).success(function(data) {
                    notification('Record inserted successfully', 'success');
                    $route.reload();
                    $timeout(function() {
                        var eleHeight = elmYPosition('position');
                        $('.md-content').animate({ scrollTop: eleHeight }, 500);
                    }, 500);
                }).error(errorCallback);
            }
        }
    };

    $scope.deletePositionModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'userPosition/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };
    // Resource position END


}).controller('userController', function($scope, $log, $location, $route, fileReader, rest, $uibModal, $window, $rootScope, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.setItem("contactUserId", " ");
    $window.localStorage.setItem("contactPersonId", " ");
    $window.localStorage.setItem("priceListClientId", " ");
    $window.localStorage.setItem("useriResourceType", " ");


    $scope.addUser = function(id) {
        if (id == 2) {
            $window.localStorage.setItem("externalPricelistId", " ");
            $window.localStorage.setItem("ShowuserName", " ");
            $window.localStorage.setItem("contactPersonId", " ");
            $window.localStorage.setItem("useriResourceType", 2);
            $location.path('/user-profile');
        } else {
            $window.localStorage.setItem("useriResourceType", 1);
            $location.path('/internal');
        }
    }

    rest.path = 'user/' + $routeParams.id;
    rest.get().success(function(data) {
        $scope.userlist = data.data;
    }).error(errorCallback);

    $window.localStorage.iUserId = "";
    $window.localStorage.resourceType = "";
    $window.localStorage.currentUserName = ""
    $window.localStorage.userType = 1;
    $window.localStorage.resourceType = $routeParams.id;
    $window.localStorage.priority = "resource";
    $rootScope.uType = 1;

    if ($routeParams.id == '1') {
        $scope.updatedBy = $window.localStorage.getItem("session_iUserId");
        rest.path = 'userUpdate_Byid';
        rest.put($scope.updatedBy).success(function(data) {}).error(errorCallback);
    } else {
        $scope.updatedBy = $window.localStorage.getItem("session_iUserId");
        rest.path = 'userUpdate_Byid';
        rest.put($scope.updatedBy).success(function(data) {}).error(errorCallback);
    }

    if ($routeParams.id == '1')
        $scope.btn_resource_add = false;
    else
        $scope.btn_resource_add = true;

    $scope.deleteUser = function(id, image, userName, iFkUserTypeId) {
        bootbox.confirm("Are you sure you want to delete this resource.?<br/><strong>Please note that all information in this resource profile will be deleted.</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteUser/' + id + '/' + image;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = userName;
                    $scope.logMaster.log_type = "delete";
                    if (iFkUserTypeId == 1) {
                        $scope.logMaster.log_status = "internal_res";
                    } else {
                        $scope.logMaster.log_status = "external_res";
                    }
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.workingHour = function(id, table, type) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageId", id);
        $routeParams.messageTable = table;
        $routeParams.messageType = type;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };
}).controller('viewInternaldetailController', function($scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.loginUserId = $window.localStorage.getItem("session_iUserId");
    $scope.viewFileManagerInternal = function(id) {
        closeWindows();
        $window.localStorage.setItem("internal", id);
        var userFilePopupInternal = $window.open('#/filemanage/internal', "popup", "width=2000,height=750");
        userFilePopupInternal.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            return false;
        }, false);
        openWindows.push(userFilePopupInternal);
    };


    $scope.changeUserStatus = function(currentStatus) {
        console.log("currentStatus", currentStatus);

        if (currentStatus == 3) {
            currentStatus = 4;
        }else if(currentStatus != 3){
            currentStatus = 3;
        }
        console.log("currentStatus", currentStatus);
        //return false;

        var data = {
            eUserStatus: currentStatus
        }
        rest.path = 'changeUserStatus';
        rest.put(data).success(function(res) {
            if (res.status == 200) {
                $scope.userprofiledata.eUserStatus = currentStatus;
                notification(res.msg, 'success');
            }
        }).error(errorCallback);
    }


    if ($routeParams.id) {
        rest.path = 'viewExternalget/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.userprofiledata = data;
            console.log("$scope.userprofiledata", $scope.userprofiledata);
            var CountryCode = JSON.parse(data.iMobile).countryTitle;
            var displayCode = '(+' + CountryCode.split('+')[1] + ')';
            $scope.userprofiledata.iMobile = displayCode + ' ' + JSON.parse(data.iMobile).mobileNumber;
            $scope.Age = getAge($scope.userprofiledata.dtBirthDate.split('-')[0],
                $scope.userprofiledata.dtBirthDate.split('-')[1],
                $scope.userprofiledata.dtBirthDate.split('-')[2]
            );
            $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format($window.localStorage.getItem('global_dateFormat'));
        }).error(errorCallback);
    }
    $scope.deleteUser = function(id, image, userName, iFkUserTypeId) {
        bootbox.confirm("Are you sure you want to delete this resource.?<br/><strong>Please note that all information in this resource profile will be deleted.</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteUser/' + id + '/' + image;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = userName;
                    $scope.logMaster.log_type = "delete";
                    if (iFkUserTypeId == 1) {
                        $scope.logMaster.log_status = "internal_res";
                    } else {
                        $scope.logMaster.log_status = "external_res";
                    }
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('user/' + iFkUserTypeId);
                }).error(errorCallback);
            }
        });
    };
    $scope.emailSent = function(id, table, type) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageId", id);
        $routeParams.messageTable = table;
        $routeParams.messageType = type;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

}).controller('messageController', function($scope, $log, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.bccShow = function() {
        $scope.bccshow = true;
    }
    $scope.ccHideShow = function() {
        angular.element('#ccHideShow').toggleClass('none');
    }
    $scope.bccHideShow = function() {
        angular.element('#bccHideShow').toggleClass('none');
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $timeout(function() {
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').remove();
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').remove();
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').remove();
    }, 500);

    rest.path = 'emailSigngetdata';
    rest.get().success(function(data) {
        angular.element('.selected-items-box').bind('click', function(e) {
            e.stopPropagation();
            angular.element('.multiple-select-wrapper .list').toggle('slideDown');
        });
        angular.element('.multiple-select-wrapper .list').bind('click', function(e) {
            e.stopPropagation();
        });
        angular.element(document).bind('click', function() {
            angular.element('.multiple-select-wrapper .list').slideUp();
        });
        $scope.Airlines = data;
        $scope.getSelectedItemsOnly = function(item) {
            return item.selected;
        };
    });
    $scope.mailToSecondaryEmail = $routeParams.toSecondaryEmail;
    if ($routeParams.messageId && $routeParams.messageTable == "internal" || $routeParams.messageTable == "External") {
        rest.path = 'messageUserOneget/' + $routeParams.messageId;
        rest.get().success(function(data) {
            $scope.message = data.data;
            $scope.messageEmailSign = data.info;
            //$scope.message.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.info.sign_detail + '</br><img src="' + data.info.sign_image + '" width="100px"></div>';
            $scope.message.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.info.sign_detail + '</div>';
        }).error(errorCallback);
    }

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope).then(function(result) {
            $scope.fileAttatchName = file.name;
            $scope.attachementfile = result;
        });
    };

    if ($routeParams.messageId && $routeParams.messageTable == 'direct') {
        rest.path = 'clientMessageGet/' + $routeParams.messageId;
        rest.get().success(function(data) {
            $scope.message = data;
        }).error(errorCallback);
    }

    if ($routeParams.messageId && $routeParams.messageTable == 'indirect') {
        rest.path = 'clientIndirectMessageGet/' + $routeParams.messageId;
        rest.get().success(function(data) {
            $scope.message = data;
        }).error(errorCallback);
    }

    if ($window.localStorage.getItem("messageClientTable") == 'direct') {
        rest.path = 'clients';
        rest.get().success(function(data) {
            /*var valueData = [];
            $scope.clientlist = data;

            angular.forEach(data, function(value, key) {
                var obj = {
                    'id': value.vEmailAddress,
                    'text': value.vEmailAddress
                };
                valueData.push(obj);
            });
            angular.element('#message-cc').select2({
                allowClear: true,
                data: valueData,
                multiple: true
            });
            angular.element('#message-bcc').select2({
                allowClear: true,
                data: valueData,
                multiple: true
            });*/
            if (data) {
                rest.path = 'clientDirectMessageEmailIdGet';
                rest.get().success(function(data) {
                    $scope.message.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.sign_detail + '</div>';
                    //$scope.message.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.sign_detail + '</br><img src="' + data.sign_image + '" width="100px"></div>';
                }).error(errorCallback);
            }
        }).error(errorCallback);

        $scope.ok = function(formid, message) {
            var data = {
                "file": $scope.attachementfile,
                "data": message
            };

            if (angular.element("#" + formid).valid()) {
                angular.element('.signimgdata').remove();
                $routeParams.id = $window.localStorage.getItem("messageClientId");
                var a = angular.element("#emailSignId").val();
                rest.path = 'sendClientMessage';
                rest.put(data).success(function(data) {
                    notification('Mail send successfully', 'success');
                }).error(errorCallback);
                $timeout(function() {
                    $uibModalInstance.close(data);
                    $route.reload();
                }, 1000)
            }
        };
    }

    if ($window.localStorage.getItem("messageClientTable") == 'indirect') {
        rest.path = 'clientlistindirect_show';
        rest.get().success(function(data) {
            var valueData = [];
            $scope.clientlist = data;
            angular.forEach(data, function(value, key) {
                var obj = {
                    'id': value.vEmailAddress,
                    'text': value.vEmailAddress
                };
                valueData.push(obj);
            });

            angular.element('#message-cc').select2({
                allowClear: true,
                data: valueData,
                multiple: true
            });

            angular.element('#message-bcc').select2({
                allowClear: true,
                data: valueData,
                multiple: true
            });
        }).error(errorCallback);
    }

    if ($window.localStorage.getItem("messageClientTable") == 'indirect') {
        $scope.ok = function(formid, message) {
            var data = {
                "file": $scope.attachementfile,
                "data": message
            };
            if (angular.element("#" + formid).valid()) {
                $routeParams.id = $window.localStorage.getItem("messageClientId");
                rest.path = 'sendClientIndirectMessage';
                rest.put(data).success(function(data) {
                    notification('Mail send successfully', 'success');
                }).error(errorCallback);
                $timeout(function() {
                    $uibModalInstance.close(data);
                    $route.reload();
                }, 1000)
            }
        };
    }

    if ($routeParams.messageTable == 'internal' || $routeParams.messageTable == 'External') {
        if ($routeParams.messageType == '1') {
            rest.path = 'clientlistindirectGet/' + $routeParams.messageType;
            rest.get().success(function(data) {
                var valueData = [];
                $scope.clientlist = data.data;
                angular.forEach(data.data, function(value, key) {
                    var obj = {
                        'id': value.vEmailAddress,
                        'text': value.vEmailAddress
                    };
                    valueData.push(obj);
                });
                angular.element('#message-cc').select2({
                    allowClear: true,
                    data: valueData,
                    multiple: true
                });
                angular.element('#message-bcc').select2({
                    allowClear: true,
                    data: valueData,
                    multiple: true
                });
            }).error(errorCallback);
        }

        if ($routeParams.messageType == '2') {
            rest.path = 'userExternalGet/' + $routeParams.messageType;
            rest.get().success(function(data) {
                var valueData = [];
                $scope.clientlist = data.data;
                angular.forEach(data.data, function(value, key) {
                    var obj = {
                        'id': value.vEmailAddress,
                        'text': value.vEmailAddress
                    };
                    valueData.push(obj);
                });
                angular.element('#message-cc').select2({
                    allowClear: true,
                    data: valueData,
                    multiple: true
                });
                angular.element('#message-bcc').select2({
                    allowClear: true,
                    data: valueData,
                    multiple: true
                });
            }).error(errorCallback);
        }

        $scope.ok = function(formid, message) {
            var data = {
                "file": $scope.attachementfile,
                "data": message
            };
            if ($routeParams.toSecondaryEmail != undefined) {
                data.data.vEmailAddress = data.data.vSecondaryEmailAddress;
            }

            if (angular.element("#" + formid).valid()) {
                $routeParams.id = $window.localStorage.getItem("messageId");
                rest.path = 'sendMessage';
                rest.put(data).success(function(data) {
                    notification('Mail send successfully', 'success');
                }).error(errorCallback);
                $timeout(function() {
                    $uibModalInstance.close(data);
                    $route.reload();
                }, 1000);
            }
        };
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}).controller('viewExternaldetailController', function($cookieStore, $scope, $window, $compile, $timeout, $uibModal, $log, rest, $route, $rootScope, $routeParams, $location) {;
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.loginUserId = $window.localStorage.getItem("session_iUserId");
    $routeParams.userTypeId = 1;
    $window.localStorage.iUserId = $routeParams.id;
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.ContactPersonName = $window.localStorage.getItem("contactPersonId");
    $scope.user_Id = $window.localStorage.getItem("ShowuserId");
    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.overAllshow = true;


     $scope.changeUserStatus = function(currentStatus) {
        console.log("currentStatus", currentStatus);

        if (currentStatus == 3) {
            currentStatus = 4;
        }else if(currentStatus != 3){
            currentStatus = 3;
        }
        console.log("currentStatus", currentStatus);
        //return false;

        var data = {
            eUserStatus: currentStatus
        }
        rest.path = 'changeUserStatus';
        rest.put(data).success(function(res) {
            if (res.status == 200) {
                $scope.viewExternalCommunicational.eUserStatus = currentStatus;
                notification(res.msg, 'success');
            }
        }).error(errorCallback);
    }

    //new rating
    $scope.newfeedback = function(scrollToNew) {
        $scope.overAllshow = false;
        $scope.newFeedBack = false;
        $scope.rate = {};
        angular.element('#job_id').select2('val', " ");
        $scope.totalRate = "";
        $scope.rate.carryOut = "";
        $timeout(function() {
            scrollToId(scrollToNew);
        }, 100);
    }

    //view rating
    $scope.viewfeedback = function(scrollToView) {
        $scope.overAllshow = false;
        $scope.newFeedBack = true;
        $scope.rate = {};
        angular.element('#job_id').select2('val', " ");
        $scope.totalRate = "";
        $scope.rate.carryOut = "";
        $timeout(function() {
            scrollToId(scrollToView);
        }, 100);
    }

    $scope.overallFeedback = function() {
        $scope.overAllshow = true;
        $scope.getOverAllRate();
    }

    //overall rating
    $scope.getOverAllRate = function() {
        rest.path = "resourceAssets/" + $window.localStorage.iUserId;
        rest.get().success(function(data) {
            var language = 0;
            var specialist = 0;
            var technical = 0;
            var deadlines = 0;
            var flexibility = 0;

            angular.forEach(data, function(val, key) {
                if (val.language)
                    language += parseInt(val.language);
                if (val.specialist)
                    specialist += parseInt(val.specialist);
                if (val.technical)
                    technical += parseInt(val.technical);
                if (val.deadlines)
                    deadlines += parseInt(val.deadlines);
                if (val.flexibility)
                    flexibility += parseInt(val.flexibility);
            });

            var totalRate = parseInt(language) + parseInt(specialist) + parseInt(technical) + parseInt(deadlines) + parseInt(flexibility);

            $scope.overAllRate = {
                "language": Math.ceil(parseInt(language) * 5 / totalRate),
                "specialist": Math.ceil(parseInt(specialist) * 5 / totalRate),
                "technical": Math.ceil(parseInt(technical) * 5 / totalRate),
                "deadlines": Math.ceil(parseInt(deadlines) * 5 / totalRate),
                "flexibility": Math.ceil(parseInt(flexibility) * 5 / totalRate)
            }

            var Total = 0;
            var count = 0;

            angular.forEach($scope.overAllRate, function(val, key) {
                if (val) {
                    Total += parseInt(val) * 20;
                    count++;
                }
            });

            $scope.overAlltotalRate = Math.ceil(Total / count);
            $scope.displayRate = parseInt($scope.overAlltotalRate);
            $window.localStorage.UseroverallRate = $scope.displayRate;
            if ($scope.displayRate > 0) {
                angular.element('#overAllRateDisplay').attr('data-percent', $scope.displayRate);
                $(".progress-bar1").loading();
            } else {
                angular.element('#overAllRateDisplay').attr('data-percent', '0');
                $(".progress-bar1").loading();
            }

        });
    }

    $scope.getOverAllRate();

    //$scope.currentDate = Date();
    $scope.model = {
        basic: 0,
        readonly: 2.5,
        readonly_enables: true,
        minMaxStep: 0,
        pristine: 3,
        resetable: 1,
        heightWidth: 1.5,
        callbacks: 5,
        custom: 4,
    };

    $scope.calculateRate = function() {
        var Total = 0;
        var count = 0;
        angular.forEach($scope.rate, function(val, i) {
            if (i == 'language' || i == 'specialist' || i == 'technical' || i == 'deadlines' || i == 'flexibility') {
                if (val != 0 && val != "") {
                    Total += val * 20;
                    count++;
                }
            }
        });
        $scope.totalRate = Math.ceil(Total / count);
    }

    $scope.resetResource = function() {
        $route.reload();
        $timeout(function() {
            $("ul.nav-tabs").find(`[index='8']`).find('a:first').triggerHandler('click');
        }, 1000);
    }

    if ($window.localStorage.iUserId) {
        rest.path = "resourceAssets/" + $window.localStorage.iUserId;
        rest.get().success(function(data) {
            $scope.setactive = true;
            $scope.assetsOpt = data;
        });
    }

    $scope.selectAsset = function(id, jobid) {
        var assetId = id.split(',')[1];
        $scope.totalRate = "";
        if (assetId != undefined) {
            if (jobid) {
                rest.path = "resourceAssetsGetOne/" + assetId + "/" + jobid;
                rest.get().success(function(data) {
                    $scope.rate = data;
                    if (data) {
                        angular.element('#job_id').select2('val', data.job_id);
                        $scope.rate.period = data.period + ',' + data.resourceId;
                        $scope.totalRate = data.totalRate;
                        $scope.rate.carryOut = data.vUserName;
                    } else {
                        notification("No rating", 'warning');
                    }
                }).error(errorCallback);
            } else {
                notification("Please select job", "warning");
            }
        } else {
            $scope.rate = {};
            $scope.rate.period = id;
            $scope.totalRate = '0.0';
            $scope.setactive = true;
        }
    }
    $scope.loginUserName = $window.localStorage.getItem("session_vUserName");
    $scope.newResource = function(frmId, jobID) {
        console.log("jobID", jobID);
        console.log("frmId", frmId);
        var fromDate = $('#StartDate').val();
        var toDate = $('#endDate').val();
        if(!fromDate || !toDate){
            notification('Please select date range','warning')
            return false;
        }

        fromDate = moment(originalDateFormatNew(fromDate)).format('YYYY-MM-DD');
        toDate = moment(originalDateFormatNew(toDate)).format('YYYY-MM-DD');
        $scope.rate.period = fromDate+'^'+toDate;
        //console.log("fromDate", fromDate);return false;
        if ($window.localStorage.iUserId) {
            if (angular.element('#' + frmId).valid()) {
                if ($scope.rate.period != undefined) {
                    if ($scope.totalRate) {
                        $scope.iUserId = $window.localStorage.iUserId;
                        $scope.rate.iUserId = $scope.iUserId;
                        $scope.rate.carryOut = $window.localStorage.getItem("session_iUserId");
                        $scope.rate.totalRate = $scope.totalRate;
                        $scope.rate.job_id = angular.element('#job_id').val();
                        rest.path = "resourceAssets";
                        rest.post($scope.rate).success(function(data) {
                            if(data.status == 403){
                                notification(data.msg,'error');
                            }
                            $route.reload();
                            /*$timeout(function() {
                                $("ul.nav-tabs").find(`[index='8']`).find('a:first').triggerHandler('click');
                            }, 1000);*/
                        }).error(errorCallback);
                    }
                }
            }
        } else {
            notification('Please create user', 'warning');
        }
    }

    rest.path = 'getExternalUserJobs/'+$routeParams.id;
    rest.get().success(function(data) {

        var prType = [];
        angular.forEach(data, function(value, key) {
            var obj = {
                id: value.job_summmeryId,
                text: value.po_number
            };
            prType.push(obj);
        });
        $timeout(function() {
            $('#job_id').select2({
                allowClear: true,
                data: prType
            });
        },200);

    }).error(function(data, error, status) {});

    $scope.viewfeedbackPoup = function(){
        var dataObj = {
            userId:$routeParams.id,
            userName :$('.profileTitleh').text()
        };
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/viewfeedbackPoup.html',
            controller: 'viewfeedbackPoupController',
            size: '',
            resolve: {
                items: function() {
                    return dataObj;
                }
            }
        });
    }

    $scope.assetsCurrentDate = function(fromD, toD) {
        var from = moment(fromD, "DD/MM/YYYY");
        var to = moment(toD, "DD/MM/YYYY");
        if (fromD && toD) {
            if (to >= from) {
                $scope.currentDate = fromD + ' - ' + toD;
            } else {
                $scope.toDate = '';
                notification('Lowest date not allowed', "warning");
            }
        }
    }
    $scope.viewFileManager = function(id) {
        closeWindows();
        $window.localStorage.setItem("contactUserId", id);
        //var userFilePopup = $window.open('#/filemanage/user', "popup", "width=2000,height=750");
        var userFilePopup = $window.open('#/filemanage/user', "popup", "width=780,height=750");
        userFilePopup.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            return false;
        }, false);
        openWindows.push(userFilePopup);
    };
    $scope.emailSent = function(id, table, type, toSecondaryEmail) {
        $routeParams.messageId = id;
        $routeParams.toSecondaryEmail = toSecondaryEmail;
        $window.localStorage.setItem("messageId", id);
        $routeParams.messageTable = table;
        $routeParams.messageType = type;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

    if ($routeParams.id) {
        rest.path = 'viewExternalget/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.viewExternalCommunicational = data;
            console.log("$scope.viewExternalCommunicational", $scope.viewExternalCommunicational);
            //Display Mobile Number
            var CountryCode = JSON.parse(data.iMobile).countryTitle;
            var displayCode = '(+' + CountryCode.split('+')[1] + ')';
            $scope.viewExternalCommunicational.iMobile = displayCode + ' ' + JSON.parse(data.iMobile).mobileNumber;

            //Count Age
            $scope.Age = getAge($scope.viewExternalCommunicational.dtBirthDate.split('-')[0],
                $scope.viewExternalCommunicational.dtBirthDate.split('-')[1],
                $scope.viewExternalCommunicational.dtBirthDate.split('-')[2]
            );

            $scope.viewExternalCommunicational.dtCreatedDate = moment($scope.viewExternalCommunicational.dtCreatedDate).format($window.localStorage.getItem('global_dateFormat'));
            $scope.viewExternalCommunicational.dtBirthDate = moment($scope.viewExternalCommunicational.dtBirthDate).format($window.localStorage.getItem('global_dateFormat'));

            var address = [];

            angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                angular.element('#' + val.id).html(val.value);
                address.push(val.value);
            });
            angular.element('#address1').text($.grep(address, Boolean).join(', '));
        }).error(errorCallback);

        rest.path = 'PriceListExternalEditgetone/' + $routeParams.id;
        rest.get().success(function(data) {
            if (data) {
                $scope.price = data;
                var currency = data.currancy_id.split(',');
                $scope.currencySymbol = currency[1];
                $scope.currencyCode = currency[0];
                $routeParams.Iuser_Id = $scope.price.iuserId;
                $scope.translate = JSON.parse(data['translation']);
                $scope.proofreading = JSON.parse(data['proofreading']);
                $scope.tep = JSON.parse(data['tep']);
            }
        })
    }

    if ($routeParams.id && $routeParams.userTypeId) {
        rest.path = 'getUserProperty/' + $routeParams.id + '/' + $routeParams.userTypeId;
        rest.get().success(function(data) {
            $scope.propList = data;
        }).error(errorCallback);
    }

    if ($routeParams.id) {
        rest.path = 'contactExternalget/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.contactList1 = data;
        }).error(errorCallback);
    }

    if ($routeParams.id) {
        rest.path = 'getuserpaymentdata/' + $routeParams.id;
        rest.get().success(function(data) {
            if (data) {
                $scope.payment = JSON.parse(data.vPaymentInfo);
                $scope.bank = JSON.parse(data.vBankInfo);
            }

        }).error(errorCallback);
    }

    $scope.ContactPersonName = $window.localStorage.getItem("contactPersonId");
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.user_Id = $window.localStorage.setItem("ShowuserId", $scope.user_cId);
    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;
    $scope.animationsEnabled = true;
    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    $scope.deleteUser = function(id, image, userName, iFkUserTypeId) {
        bootbox.confirm("Are you sure you want to delete this resource.?<br/><strong>Please note that all information in this resource profile will be deleted.</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteUser/' + id + '/' + image;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = userName;
                    $scope.logMaster.log_type = "delete";
                    if (iFkUserTypeId == 1) {
                        $scope.logMaster.log_status = "internal_res";
                    } else {
                        $scope.logMaster.log_status = "external_res";
                    }
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('user/' + iFkUserTypeId);
                }).error(errorCallback);
            }
        });
    };
    $scope.Calender = function() {
        $scope.calender = false;
        $scope.workinghours = false;
    }

    $scope.Working = function() {
        $scope.calender = true;
        $scope.workinghours = true;
    }

    $scope.deleteEvent = function(id) {
        bootbox.confirm("Are you sure you want to delete this Leave?<br/>", function(result) {
            if (result == true) {
                rest.path = 'deleteEvent/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.init = function() {
        // debugger;
        if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
            rest.path = 'events/' + $window.localStorage.iUserId;
            rest.get().success(function(data) {}).error(errorCallback);
        }
    };

    $scope.init();
    $scope.init = function() {
        if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
            rest.path = 'workinghour/' + $window.localStorage.iUserId;
            rest.get().success(function(data) {
                $scope.data = data;
                if (data) {
                    $scope.wh_data_forfront = JSON.parse(data.wh_data);
                }
            }).error(errorCallback);
        }
    };

    $scope.init();
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that calls a function on every view switch */
    $scope.eventsF = function(start, end, timezone, callback) {
        callback($scope.eventsList);
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function(date, jsEvent, view, size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/addEvent.html',
            controller: 'addEventController',
            size: size,
            resolve: {
                items: function() {
                    return date;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $route.reload();
        });
    };

    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
        var start_date = dateOnresize(event.start._i, delta);
        var end_date = dateOnresize(event.end._i, delta);
        $scope.eventData = {
            start: start_date,
            end: end_date,
            title: event.title,
            user_id: event.user_id,
            updated_by: $window.localStorage.session_iUserId
        };
        $routeParams.id = event.event_id;
        rest.path = 'events';
        rest.put($scope.eventData).success(function(data) {

        }).error(errorCallback);
    };

    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
        var sr = dateToformat(event.start._i);
        var start_date = dateTostring(sr);
        var end_date = dateOnresize(event.end._i, delta);
        $scope.eventData = {
            start: start_date,
            end: end_date,
            title: event.title,
            user_id: event.user_id,
            updated_by: $window.localStorage.session_iUserId
        };
        $routeParams.id = event.event_id;
        rest.path = 'events';
        rest.put($scope.eventData).success(function(data) {
            $route.reload();
        }).error(errorCallback);
    };

    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources, source) {
        var canAdd = 0;
        angular.forEach(sources, function(value, key) {
            if (sources[key] === source) {
                sources.splice(key, 1);
                canAdd = 1;
            }
        });
        if (canAdd === 0) {
            sources.push(source);
        }
    };

    /* remove event */
    $scope.remove = function(index) {
        $scope.events.splice(index, 1);
    };
    /* Change View */
    $scope.changeView = function(view, calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
        $timeout(function() {
            if (uiCalendarConfig.calendars[calendar]) {
                uiCalendarConfig.calendars[calendar].fullCalendar('render');
                uiCalendarConfig.calendars[calendar].fullCalendar('rerenderEvents');
            }
        });
    };
    /* Render Tooltip */
    $scope.eventRender = function(event, element, view) {
        element.attr({
            'tooltip': event.title,
            'tooltip-append-to-body': true
        });
        $compile(element)($scope);
    };
    
    /* day click */
    $scope.dayClick = function(event, element, view) {
        if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/addEvent.html',
                controller: 'addEventController',
                size: '',
                resolve: {
                    items: function() {
                        return event;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
                $route.reload();
            });
        } else {
            notification('Please Create User', 'warning');
        }
    };
    /* add working hour */
    $scope.workingHour = function() {
        if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/addWorkinghour.html',
                controller: 'workingHourController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem) {
                // debugger;
                $scope.selected = selectedItem;
                $route.reload();
            });
        } else {
            notification('Please Create User', 'warning');
        }
    };

    $scope.cellColor = function(date, cell) {
        $(cell).removeClass('ui-widget-content');
        $(cell).addClass('normal-day');
        $timeout(function() {
            displayRendom(date, cell, $scope.data);
        }, 800);
    };

    /* config object */
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            header: {
                left: '',
                center: 'prev title next',
                right: 'today month,agendaWeek,agendaDay'
            },
            buttonIcons: {
                prev: 'left-single-arrow',
                next: 'right-single-arrow'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            dayClick: $scope.dayClick,
            dayRender: $scope.cellColor,
        }
    };
    $scope.calEventsExt = [];
    $scope.eventsList = [];
    if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
        $routeParams.id = $window.localStorage.iUserId;
        rest.path = 'userevents';
        rest.model().success(function(data) {
            angular.forEach(data, function(val, i) {
                $scope.eventsList.push({
                    event_id: val.event_id,
                    title: val.title,
                    start: stringTodate(val.start),
                    end: stringTodate(val.end)
                });
            });
        }).error(errorCallback);
    }
    /* event sources array */
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.eventsList];
    $scope.saveCalendarExternal = function(id) {

    }

}).controller('communicationController', function($scope, $log, $location, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal, $cookieStore, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.setItem("contactUserId", $routeParams.id);
    angular.element('.help-block').css('display', 'none');
    $scope.dateFormatGlobal = $window.localStorage.getItem('global_dateFormat');
    $scope.isValidMobileNumber = false;
    
    /* Mobile Validation START */
    var telInput = $("#iMobile"),errorMsg = $("#error-msg"),validMsg = $("#valid-msg");
        

    var reset = function() {
      telInput.removeClass("error");
      errorMsg.addClass("hide");
      validMsg.addClass("hide");
    };

    telInput.blur(function() {
      reset();
      $timeout(function() {
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
                console.log('validNum');
                $scope.isValidMobileNumber = true;
                validMsg.removeClass("hide");
                $('#error-msg').addClass('hide');
            } else {
                console.log('invalidNum');
                $scope.isValidMobileNumber = false;
                $('#error-msg').removeClass('hide');
            }
          }
      },200);
    });

    telInput.on("keyup change", reset);
    /* Mobile Validation END */


    $timeout(function() {
        $scope.redirectToUserViewId = $routeParams.id;
    }, 100);

    // margin Css for datepicker
    $('#endDate').click(function() {
        var d = $('.bootstrap-datetimepicker-widget');
        if (d) {
            $('.bootstrap-datetimepicker-widget').css("bottom", "auto");
        }
    });

    //RandomPassword Generate
    $scope.getRandomPassword = function() {
        $scope.userprofiledata.vPassword = randomPassword(10)
    }

    //Change Input Type
    $scope.changeInputType = function() {
        var type = angular.element('#vPassword').attr('type');
        if (type == 'password') {
            angular.element('#vPassword').attr('type', 'text');
        } else {
            angular.element('#vPassword').attr('type', 'password');
        }
    }


    $scope.cityTimezone = function(id) {
        var city = id.split(',')[0];
        rest.path = "cityTimeZoneget/" + city;
        rest.get().success(function(data) {
            if (data != false) {

                if ($scope.userprofiledata == undefined || $scope.userprofiledata == null || $scope.userprofiledata == "") {
                    $scope.userprofiledata = {};
                }

                $scope.userprofiledata.vTimeZoneCity = data.timeZoneCity;
                $scope.userprofiledata.vTimeZone = data.timeZone;
                //    $timeout(function () {
                //     $scope.$apply(function () {
                //         $scope.userprofiledata.vTimeZone = data;
                //     });
                // }, 100);
            }
        });
    }

    $scope.checkfirstname = function() {
        if ($scope.userprofiledata.iUserId) {
            var checkd = $scope.userprofiledata.vFirstName + ' ' + $scope.userprofiledata.vLastName
            if ($window.localStorage.admminusername != checkd) {
                notification('Username Successfully changed', 'success');
            }
        }
    }

    $scope.checklastname = function() {
        if ($scope.userprofiledata.iUserId) {
            var checkd = $scope.userprofiledata.vFirstName + ' ' + $scope.userprofiledata.vLastName;
            if ($window.localStorage.admminusername != checkd) {
                notification('Username Successfully changed', 'success');
            }
        }
    }

    $scope.notesWarning = function() {
        var checkNotes = $scope.userprofiledata.tMemo;
        if ($window.localStorage.notewarning != checkNotes && checkNotes != " ") {
            notification(checkNotes, 'information');
        }
    }

    $scope.contactAddExternal = function(id) {
        var contactA = [];
        angular.element("[id^=contact_]").each(function(i, val) {
            contactA.push({
                id: val.id,
                value: val.value
            });
        });
        $scope.info = JSON.stringify(contactA);
        rest.path = 'ContactAdd/' + $scope.contactUserId;
        rest.put($scope.info).success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }
    if ($routeParams.id != undefined) {
        rest.path = 'getProfile';
        rest.model().success(function(data) {
            $scope.userprofiledata = data;
            $window.localStorage.iUserId = data.iUserId;
            $window.localStorage.setItem("externalPricelistId", data.iUserId);
            $window.localStorage.currentUserName = data.vFirstName + " " + data.vLastName;
            $scope.currentUserName = $window.localStorage.currentUserName;
            $scope.imgshow = true;
            
            $scope.isValidMobileNumber = true;
            if (data.dtBirthDate) {
                var dob = data.dtBirthDate.split("-");
            }
            var flagTitle = JSON.parse(data.iMobile).countryTitle;
            var flagClass = JSON.parse(data.iMobile).countryFlagClass;
            var Ccode = flagClass.split(' ')[1];
            var CcodeNum = flagTitle.split(':')[1].trim();
            
            var FinalMobileNum = CcodeNum+JSON.parse(data.iMobile).mobileNumber;
            
            $timeout(function() {
                $('#iMobile').intlTelInput("setNumber", FinalMobileNum);
            },100);
            
            
            

            
            
            $window.localStorage.admminusername = $scope.userprofiledata.vUserName;
            $window.localStorage.notewarning = $scope.userprofiledata.tMemo;
            
            $('#iGender').select2('val', data.iGender);

            if ($scope.userprofiledata.freelancer == 'translation') {
                $window.localStorage.setItem("contactPersonId", 'translation');
            }

            $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format($scope.dateFormatGlobal);

            if (data.address1Detail) {
                angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            if (data.address2Detail) {
                angular.forEach(JSON.parse(data.address2Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            $cookieStore.put('editInternalUser', $scope.userprofiledata);
            rest.path = 'getProfile/' + data.created_by;
            rest.get().success(function(result) {
                $scope.CreatedBy = result.vFirstName + ' ' + result.vLastName;
            }).error(errorCallback);

        }).error(errorCallback);
    } else {
        rest.path = 'getProfile/' + $window.localStorage.session_iUserId;
        rest.get().success(function(result) {
            $scope.CreatedBy = result.vFirstName + ' ' + result.vLastName;
        }).error(errorCallback);
        $scope.userprofiledata = {};

        rest.path = 'userProfileNumber/' + $window.localStorage.getItem("useriResourceType");
        rest.get().success(function(data) {
            $scope.userprofiledata.iResourceNumber = pad(data, 4);
        });

        //$scope.userprofiledata.vPassword = makeid();

        var currentdate = new Date();
        $scope.userprofiledata.dtCreationDate = getDatetime(currentdate);
    }
    if ($routeParams.id) {
        $scope.info = {};
        $scope.info.updatedBy_id = $window.localStorage.getItem("session_iUserId");
        $scope.info.updated_id = $routeParams.id;
        rest.path = 'internalResourceCheck'
        rest.post($scope.info).success(function(data) {
            $scope.UpdateUserName = data.UserName;
            $scope.user_Id = $routeParams.id;
            $window.localStorage.setItem("ShowuserId", $scope.user_Id);

            //var a = $window.localStorage.setItem("ShowuserName", data.UserName);
            var a = $window.localStorage.setItem("ShowuserName",'you');
            $window.localStorage.setItem("session_internalResourceUpdatedId", data.UserId);
        }).error(errorCallback);
    }

    setInterval(function() {
        if ($scope.user_name == null) {
            $scope.user_name = $window.localStorage.getItem("ShowuserName");
        }
    }, 100);

    $scope.uType = $window.localStorage.userType;
    $scope.resourceType = $window.localStorage.resourceType;

    if ($scope.resourceType == '1') {
        $scope.externalResource = true;
        $scope.iresource = false;
    } else {
        $scope.iresource = true;
    }

    $scope.checkusername = function() {
        rest.path = 'checkusername';
        rest.post($scope.userprofiledata.vUserName).success(function(data) {}).error(errorCallback);
    };

    $scope.checkemailaddress = function() {
        rest.path = 'checkemailaddress';
        rest.post($scope.userprofiledata.vEmailAddress).success(function(data) {}).error(errorCallback);
    };

    $scope.userTypes = true;
    $scope.sourceType = function(type, element) {
        rest.path = 'typebyresource/' + type;
        rest.get().success(function(data) {
            $scope.userTypes = false;
            var userType = [];
            angular.forEach(data, function(val, i) {
                userType.push({
                    id: val.iTypeId,
                    text: val.vType
                });
            });
            angular.element('#' + element).select2({
                allowClear: true,
                data: userType
            });
        }).error(errorCallback);
    };

    $scope.setUsername = function(value) {
        if ($scope.userprofiledata.vLastName) {
            if (value != undefined) {
                $scope.userprofiledata.vUserName = value + ' ' + $scope.userprofiledata.vLastName;
            } else {
                $scope.userprofiledata.vUserName = $scope.userprofiledata.vLastName;
            }
        } else {
            $scope.userprofiledata.vUserName = value;
        }
    };

    $scope.setUsername2 = function(value) {
        if ($scope.userprofiledata.vFirstName) {
            if (value != undefined) {
                $scope.userprofiledata.vUserName = $scope.userprofiledata.vFirstName + ' ' + value;
            } else {
                $scope.userprofiledata.vUserName = $scope.userprofiledata.vFirstName;
            }
        } else {
            $scope.userprofiledata.vUserName = value;
        }
    };
    $scope.ConfirmPass = function(pwd1, pwd2) {
        if (!pwd1) {
            angular.element('#vPass').focus();
            angular.element('#cPass').val('');
        }
        if (pwd1 != undefined && pwd2 != undefined) {
            if (pwd2 != pwd1) {
                angular.element('#passNotMatch').show();
                angular.element('#passMatch').hide();
            } else {
                angular.element('#passMatch').show();
                angular.element('#passNotMatch').hide();
                $timeout(function() {
                    angular.element('#passMatch').fadeOut(3000);
                }, 500);
            }
        }
    }

    rest.path = 'usertype';
    rest.get().success(function(data) {
        $scope.userTypes = data;
    }).error(errorCallback);

    if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
        $routeParams.id = $window.localStorage.iUserId;
    }



    // ----------------save image section ------------------//
    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                if (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif') {
                    $scope.imgshow = false;
                    $scope.imageSrc = result;
                } else {
                    notification("Please select image", "error");
                }
            });
    };

    $scope.saveUserProfileExternal = function(formId, ContactPersonId) {
        if (ContactPersonId == 'translation') {
            $window.localStorage.setItem("contactPersonId", 'translation');
        } else {
            $window.localStorage.setItem("contactPersonId", 'freelancer');
        }
        if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
            var $oldUser_id = $window.localStorage.getItem("session_internalResourceUpdatedId");
            var $recentUser_id = $window.localStorage.getItem("session_iUserId");

            if ($recentUser_id != $oldUser_id) {
                $scope.userprofiledata.iEditedBy = $window.localStorage.getItem("session_internalResourceUpdatedId");
            } else {
                $scope.userprofiledata.iEditedBy = 0;
            }

            if ($scope.userprofiledata.iUserId) {
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                $scope.userprofiledata.address1Detail = JSON.stringify(address1);
                $scope.userprofiledata.address2Detail = JSON.stringify(address2);

                // ---------address over -----------------//
                var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').attr('class');


                var mobile = angular.element('#iMobile').val();
                var phone = angular.element('#iphone').val();

                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.modified_by = $cookieStore.get('session_iUserId');
                $scope.userprofiledata.modified_by = $scope.modified_by;

                $scope.userprofiledata.dtBirthDate = $('#dtBirthDate').val();
                $scope.userprofiledata.dtBirthDate = originalDateFormatNew($scope.userprofiledata.dtBirthDate);
                $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format('YYYY-MM-DD');


                $scope.userprofiledata.iMobile = JSON.stringify(countryObj);
                $scope.userprofiledata.vPhoneNumber = phone;
                $scope.userprofiledata.image = $scope.imageSrc;
                
                rest.path = 'saveuserprofileexternel';
                rest.put($scope.userprofiledata).success(function(data) {
                    $window.localStorage.currentUserName = data.userData.vFirstName + " " + data.userData.vLastName;
                    //log file start
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $routeParams.id;
                    $scope.logMaster.log_title = $scope.userprofiledata.vUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "external_res";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end

                    var frell = data.userData.freelancer;
                    $window.localStorage.setItem("contactUserId", data.userData.iUserId);
                    if (frell == 'freelancer') {
                        //$location.path('/calender');
                        $location.path('/properties');
                    } else {
                        $location.path('/user-contact-person');
                    }
                }).error(function(data) {
                        var flagTitle = JSON.parse($scope.userprofiledata.iMobile).countryTitle;
                        var flagClass = JSON.parse($scope.userprofiledata.iMobile).countryFlagClass;
                        var Ccode = flagClass.split(' ')[1];
                        var CcodeNum = flagTitle.split(':')[1].trim();
                        
                        var FinalMobileNum = CcodeNum+JSON.parse($scope.userprofiledata.iMobile).mobileNumber;
                        
                        $timeout(function() {
                            $('#iMobile').intlTelInput("setNumber", FinalMobileNum);
                        },100);
                        notification(data['msg'], 'error');
                    });
            } else {
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });
                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });
                $scope.userprofiledata.address1Detail = JSON.stringify(address1);
                $scope.userprofiledata.address2Detail = JSON.stringify(address2);
                // ---------address over -----------------//
                $scope.userprofiledata.image = $scope.imageSrc;
                $scope.userprofiledata.created_by = $window.localStorage.session_iUserId;
                var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').attr('class');


                var mobile = angular.element('#iMobile').val();
                var phone = angular.element('#iphone').val();

                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                var mobile = angular.element('#iMobile').val();
                var phone = angular.element('#iphone').val();
                $scope.userprofiledata.iMobile = JSON.stringify(countryObj);
                $scope.userprofiledata.vPhoneNumber = phone;
                $scope.userprofiledata.org_pass = $scope.userprofiledata.vPassword;

                $scope.userprofiledata.dtBirthDate = $('#dtBirthDate').val();
                $scope.userprofiledata.dtBirthDate = originalDateFormatNew($scope.userprofiledata.dtBirthDate);
                $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format('YYYY-MM-DD');

                rest.path = 'saveuserprofileexternelS';
                rest.post($scope.userprofiledata).success(function(data) {
                    $window.localStorage.iUserId = data.iUserId;

                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = data.iUserId;
                    $scope.logMaster.log_title = $scope.userprofiledata.vUserName;
                    $scope.logMaster.log_type = "add";
                    $scope.logMaster.log_status = "external_res";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end

                    $window.localStorage.setItem("externalPricelistId", data.iUserId);
                    $window.localStorage.currentUserName = data.userData.vFirstName + " " + data.userData.vLastName;
                    $window.localStorage.setItem("contactUserId", data.userData.iUserId);
                    $scope.UserId = $window.localStorage.setItem("priceListClientId", data.iUserId);
                    var frell = data.userData.freelancer;
                    if (frell == 'freelancer') {
                        //$location.path('/calender');
                        $location.path('/properties');
                    } else {
                        $location.path('/user-contact-person');
                    }
                }).error(function(data) {
                        var flagTitle = JSON.parse($scope.userprofiledata.iMobile).countryTitle;
                        var flagClass = JSON.parse($scope.userprofiledata.iMobile).countryFlagClass;
                        var Ccode = flagClass.split(' ')[1];
                        var CcodeNum = flagTitle.split(':')[1].trim();
                        
                        var FinalMobileNum = CcodeNum+JSON.parse($scope.userprofiledata.iMobile).mobileNumber;
                        
                        $timeout(function() {
                            $('#iMobile').intlTelInput("setNumber", FinalMobileNum);
                        },100);
                        notification(data['msg'], 'error');
                    });
            }
        }
    };
    
    
    $scope.saveUserProfileInternal = function(formId, redirectWithSave) {
        if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
            if ($scope.userprofiledata.iUserId) {

                // ---------------address only -----------------//
                $scope.userprofiledata.image = $scope.imageSrc;
                var $oldUser_id = $window.localStorage.getItem("session_internalResourceUpdatedId");
                var $recentUser_id = $window.localStorage.getItem("session_iUserId");

                if ($recentUser_id != $oldUser_id) {
                    $scope.userprofiledata.iEditedBy = $window.localStorage.getItem("session_internalResourceUpdatedId");
                } else {
                    $scope.userprofiledata.iEditedBy = 0;
                }
                var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').attr('class');


                var mobile = angular.element('#iMobile').val();
                var phone = angular.element('#iphone').val();

                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "placeHolder" : $('#iMobile').attr('placeholder'),
                    "mobileNumber": mobile
                }

                var mobileData = JSON.stringify(countryObj);
                $scope.userprofiledata.iMobile = mobileData;

                $scope.userprofiledata.vPhoneNumber = phone;
                

                //user start recent activity store in cookieStore
                if ($cookieStore.get('editInternalUser') != undefined) {
                    var arr1 = $.map($scope.userprofiledata, function(el) {
                        return el;
                    });
                    var arr2 = $.map($cookieStore.get('editInternalUser'), function(el) {
                        return el;
                    });

                    if (array_diff(arr1, arr2) != "") {
                        var obj = [];
                        if ($cookieStore.get('internalUserEdit') != undefined) {
                            angular.forEach($cookieStore.get('internalUserEdit'), function(val, i) {
                                obj.push(val);
                            });
                        }
                        obj.push($scope.userprofiledata.iUserId);
                        $cookieStore.put('internalUserEdit', obj);
                        $cookieStore.remove('editInternalUser')
                    }
                }

                $scope.userprofiledata.dtBirthDate = angular.element('#dtBirthDate').val();
                $scope.userprofiledata.dtBirthDate = originalDateFormatNew($scope.userprofiledata.dtBirthDate);
                $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format('YYYY-MM-DD');
                
                rest.path = 'saveuserprofileinternal';
                rest.put($scope.userprofiledata).success(function(data) {

                    $window.localStorage.currentUserName = data.userData.vFirstName + " " + data.userData.vLastName;
                    if ($window.localStorage.session_iUserId == data.userData.iUserId) {
                        $window.localStorage.session_vProfilePic = data.userData.vProfilePic;
                        var picUrlAfterUpdate = 'uploads/profilePic/' + data.userData.vProfilePic;
                        $('#profileImgLogin').attr('src', picUrlAfterUpdate);
                    }

                    //
                    $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format($window.localStorage.getItem('global_dateFormat'));

                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $routeParams.id;
                    $scope.logMaster.log_title = $scope.userprofiledata.vUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "internal_res";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    
                    //Setting Mobile field after saved.
                    var flagTitle = JSON.parse($scope.userprofiledata.iMobile).countryTitle;
                    var flagClass = JSON.parse($scope.userprofiledata.iMobile).countryFlagClass;
                    
                    $('#iMobile').val(JSON.parse($scope.userprofiledata.iMobile).mobileNumber)
                    
                    var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').prop('title', flagTitle);
                    var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').prop('class', flagClass);

                    if (redirectWithSave != undefined && redirectWithSave == 1) {
                        setTimeout(function() {
                            notification('Information updated successfully...', 'success')
                            $location.path('/user/1');
                        }, 500);
                    } else {
                        setTimeout(function() {
                            notification('Information updated successfully...', 'success');
                        }, 500);
                    }
                }).error(errorCallback);
            } else {
                /*delete $scope.userprofiledata["cPassword"];*/
                // --------address only -----------------//
                $scope.userprofiledata.image = $scope.imageSrc;
                $scope.userprofiledata.created_by = $window.localStorage.session_iUserId;
                var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').attr('class');


                var mobile = angular.element('#iMobile').val();
                var phone = angular.element('#iphone').val();

                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.userprofiledata.iMobile = JSON.stringify(countryObj);
                $scope.userprofiledata.vPhoneNumber = phone;
                
                $scope.userprofiledata.dtBirthDate = angular.element('#dtBirthDate').val();
                $scope.userprofiledata.dtBirthDate = originalDateFormatNew($scope.userprofiledata.dtBirthDate);
                $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format('YYYY-MM-DD');

                rest.path = 'saveuserprofileinternal';
                rest.post($scope.userprofiledata).success(function(data) {
                    $window.localStorage.iUserId = data.iUserId;
                    $window.localStorage.setItem("internalUserFileMangerId",data.iUserId)
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = data.iUserId;
                    $scope.logMaster.log_title = $scope.userprofiledata.vUserName;
                    $scope.logMaster.log_type = "add";
                    $scope.logMaster.log_status = "internal_res";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $scope.userprofiledata.dtBirthDate = moment($scope.userprofiledata.dtBirthDate).format($window.localStorage.getItem('global_dateFormat'));
                    var obj = [];
                    if ($cookieStore.get('internalUserEdit') != undefined) {
                        angular.forEach($cookieStore.get('internalUserEdit'), function(val, i) {
                            obj.push(val);
                        });
                    }
                    obj.push(data.iUserId);
                    $cookieStore.put('internalUserAdd', obj);
                    $window.localStorage.currentUserName = data.userData.vFirstName + " " + data.userData.vLastName;
                    
                    //Setting Mobile field after saved.
                    var flagTitle = JSON.parse($scope.userprofiledata.iMobile).countryTitle;
                    var flagClass = JSON.parse($scope.userprofiledata.iMobile).countryFlagClass;
                    
                    $('#iMobile').val(JSON.parse($scope.userprofiledata.iMobile).mobileNumber)
                    
                    var countryCodeData = angular.element('#iMobile').parent().find('.selected-flag').prop('title', flagTitle);
                    var countryClass = angular.element('#iMobile').parent().find('.selected-flag').find('.iti-flag').prop('class', flagClass);

                    if (redirectWithSave != undefined && redirectWithSave == 1) {
                        setTimeout(function() {
                            notification('Information added successfully and registration email send to email.', 'success')
                            $location.path('/user/1');
                        }, 500);
                    } else {
                        setTimeout(function() {
                            notification('Information added successfully and registration email send to email.', 'success');
                            //$route.reload();
                        }, 500);
                    }
                    $location.path('/internal/'+data.iUserId);
                }).error(errorCallback);
            }
        }
    };
    $scope.userInternalFileManager = function(id, formId) {
        var fmanagerInternal = $window.localStorage.getItem("internalUserFileMangerId");
        
        if($routeParams.id == undefined && !fmanagerInternal){
            notification('Please create resource.','warning');
        }else{
            if(fmanagerInternal !=null && fmanagerInternal.trim().length != 0){
                id = fmanagerInternal;
            }else{
                id = $routeParams.id;
            }
            rest.path = 'getUserUsingId/'+id;
            rest.get().success(function(data){
                if(!data){
                    notification('Please create resource.','warning');
                }else{
                    if(id == data.iUserId){
                        closeWindows();
                        $window.localStorage.setItem("internal", data.iUserId);
                        var userPopupInternal = $window.open('#/filemanage/internal', "popup", "width=2000,height=750");
                        userPopupInternal.addEventListener("beforeunload", function() {
                            localStorage['parentId'] = ' ';
                            localStorage.removeItem('internalUserFileMangerId');
                            return false;
                        }, false);
                        openWindows.push(userPopupInternal);
                    }else{
                        notification('File Manager not available for this resource.','warning');
                    }
                }
                console.log("data", data);
            }).error(errorCallback);
        }
    };
    
    $scope.userExternalFilemanagter = function(id, formId) {
        if($routeParams.id == undefined){
            notification('Please create resource.','warning');
        }else{
            rest.path = 'getUserUsingId/'+id;
            rest.get().success(function(data){
                if(id == data.iUserId){
                    $window.localStorage.setItem("contactUserId",id);
                    closeWindows();
                    var userPopup = $window.open('#/filemanage/user', "popup", "width=2000,height=750");
                    userPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    openWindows.push(userPopup);
                }else{
                    notification('File Manager not available for this resource.','warning');
                }
            }).error(errorCallback);
        }
    }

    $scope.workingHour = function(id, table, type) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageId", id);
        $routeParams.messageTable = table;
        $routeParams.messageType = type;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

}).controller('contactController', function($scope, $log, $location, $route, rest, $window, $routeParams, $uibModal, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.user_Id = $window.localStorage.getItem("contactUserId");
    angular.element('.help-block').css('display', 'none');
    $scope.isValidMobileNumber = false;
    $timeout(function() {
        $scope.redirectToClientViewId = $window.localStorage.iUserId;
    }, 100);

    /* Mobile Validation START */
    $timeout(function() {
        var telInput = $("#iphone"),errorMsg = $("#error-msg"),validMsg = $("#valid-msg");
        var reset = function() {
          telInput.removeClass("error");
          errorMsg.addClass("hide");
          validMsg.addClass("hide");
        };

        telInput.blur(function() {
          reset();
          $timeout(function() {
            if ($.trim(telInput.val())) {
                if (telInput.intlTelInput("isValidNumber")) {
                    console.log('validNum');
                    $scope.isValidMobileNumber = true;
                    validMsg.removeClass("hide");
                    $('#error-msg').addClass('hide');
                } else {
                    console.log('invalidNum');
                    $scope.isValidMobileNumber = false;
                    $('#error-msg').removeClass('hide');
                }
              }
          },200);
        });

        telInput.on("keyup change", reset);
    },200);
    /* Mobile Validation END */

    $scope.saveExContact = function(formId, contact) {
        if (contact) {
            var countryCodeData = angular.element('#iphone').parent().find('.selected-flag').attr('title');
            var countryClass = angular.element('#iphone').parent().find('.selected-flag').find('.iti-flag').attr('class');
            var mobile = angular.element('#iphone').val();
            var countryObj = {
                "countryTitle": countryCodeData,
                "countryFlagClass": countryClass,
                "mobileNumber": mobile
            }

            $scope.contact.vPhone = JSON.stringify(countryObj);
            if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
                if ($scope.contact.iContactId) {
                    rest.path = 'contactExternalUpdate/' + $scope.contact.iContactId;
                    rest.post($scope.contact).success(function(data) {
                        $location.path('/properties');
                    }).error(errorCallback);
                } else {
                    rest.path = 'contactExternalsave/' + $window.localStorage.getItem("contactUserId");
                    rest.post(contact).success(function(data) {
                        $location.path('/properties');
                    }).error(errorCallback);
                }
            }else{
                    notification('Please fill valid information', 'warning');
            }
        } else {
            //$location.path('/calender');
            $location.path('/properties');
        }
    }
    $scope.generalEmail = function(id) {
        if (id != undefined && id != " " && id != null) {
            $window.localStorage.generalMsg = id;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/generalmsg.html',
                controller: 'generalmsgController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
        } else {
            notification('Please Add Email', 'warning');
        }
    }
    $scope.saveExternalContact = function(formId, contact) {
        
        if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
            var countryCodeData = angular.element('#iphone').parent().find('.selected-flag').attr('title');
            var countryClass = angular.element('#iphone').parent().find('.selected-flag').find('.iti-flag').attr('class');
            var mobile = angular.element('#iphone').val();
            var countryObj = {
                "countryTitle": countryCodeData,
                "countryFlagClass": countryClass,
                "mobileNumber": mobile
            }
            
            $scope.contact.vPhone = JSON.stringify(countryObj);

            if ($scope.contact.iContactId) {
                rest.path = 'contactExternalUpdate/' + $scope.contact.iContactId;
                rest.post($scope.contact).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'contactExternalsave/' + $window.localStorage.getItem("contactUserId");
                rest.post(contact).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }/*else{
                notification('Please fill valid information', 'warning');
        }*/
        
        
    }

    $scope.editUserContact = function(id) {
        rest.path = 'contactExternalEdit/' + id;
        rest.get().success(function(data) {
            $scope.contact = data;
            
            var flagTitle = JSON.parse(data.vPhone).countryTitle;
            var flagClass = JSON.parse(data.vPhone).countryFlagClass;
            var Ccode = flagClass.split(' ')[1];
            var CcodeNum = flagTitle.split(':')[1].trim();
            var FinalMobileNum = CcodeNum+JSON.parse(data.vPhone).mobileNumber;
            
            $timeout(function() {
                $('#iphone').intlTelInput("setNumber", FinalMobileNum);
                $scope.isValidMobileNumber = true;
            },100);
            scrollToId('contact-form');
        }).error(errorCallback);
    }
    if ($window.localStorage.getItem("contactUserId")) {
        if ($window.localStorage.getItem("contactUserId").trim().length > 0) {
            rest.path = 'contactExternalget/' + $window.localStorage.getItem("contactUserId");
            rest.get().success(function(data) {
                $scope.contactList1 = data;
                $scope.contactExternalEmpty = jQuery.isEmptyObject(data);
            }).error(errorCallback);
        }
    }

    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;
    if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
        $routeParams.id = $window.localStorage.iUserId;
    }

    if ($routeParams.id) {
        rest.path = 'contact';
        rest.model().success(function(data) {
            $scope.contactlist = data.data;
            $scope.contactDirectEmpty = jQuery.isEmptyObject(data.data);
        }).error(errorCallback);
    }

    $scope.editContact = function(id) {
        rest.path = 'editcontact/' + id;
        rest.get().success(function(data) {
            $scope.contact = data;
            var flagTitle = JSON.parse(data.vPhone).countryTitle;
            var flagClass = JSON.parse(data.vPhone).countryFlagClass;
            var Ccode = flagClass.split(' ')[1];
            var CcodeNum = flagTitle.split(':')[1].trim();
            var FinalMobileNum = CcodeNum+JSON.parse(data.vPhone).mobileNumber;
            
            $timeout(function() {
                $('#iphone').intlTelInput("setNumber", FinalMobileNum);
                $scope.isValidMobileNumber = true;
            },100);
            scrollToId('contact-form');
        }).error(errorCallback);
    };

    $scope.saveContact = function(formId, id) {
        if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
            var countryCodeData = angular.element('#iphone').parent().find('.selected-flag').attr('title');
            var countryClass = angular.element('#iphone').parent().find('.selected-flag').find('.iti-flag').attr('class');
            var mobile = angular.element('#iphone').val();
            var countryObj = {
                "countryTitle": countryCodeData,
                "countryFlagClass": countryClass,
                "mobileNumber": mobile
            }
            $scope.contact.vPhone = JSON.stringify(countryObj);
            if ($scope.contact.iContactId) {
                rest.path = 'contactsave/' + $scope.contact.iContactId;
                rest.post($scope.contact).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_title = $scope.currentUserName;
                    $scope.logMaster.log_type_id = $scope.contact.iClientId;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    if (id == 2) {
                        $location.path('/price-list');
                    }
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($routeParams.id) {
                    $scope.contact.iClientId = $routeParams.id;
                   
                    rest.path = 'contactsave';
                    rest.post($scope.contact).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_title = $scope.currentUserName;
                        $scope.logMaster.log_type_id = $scope.contact.iClientId;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "direct_cli";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        if (id == 2) {
                            $location.path('/price-list');
                        }
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Please create User', 'warning');
                    $route.reload();
                }
            }
        } else if (id == 2) {

            $location.path('/price-list');
        }
    };

    $scope.deleteContact = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'contactdelete/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.deleteExternalContact = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteExternalContact/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('propController', function($timeout, $scope, $log, $location, $route, fileReader, rest, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.ContactPersonName = $window.localStorage.getItem("contactPersonId");
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;

    $timeout(function() {
        $scope.redirectToCViewId = $window.localStorage.iUserId;
    }, 100);

    if ($scope.currentUserName == 'undefined undefined') {
        $scope.currentUserName = 'undefined';
    }
    $scope.user_Id = $window.localStorage.getItem("contactUserId");
    if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
        $routeParams.id = $window.localStorage.iUserId;
    }

    $scope.loadValue = function(id, element) {
        $scope.propertyData.value_id = '';
        $scope.show_value = true;
        rest.path = 'searchByCreteria/' + id + '/' + $routeParams.id + '/' + $window.localStorage.userType;
        rest.get().success(function(data) {
            var valueData = [];
            angular.forEach(data, function(value, key) {
                var obj = {
                    'id': value.value_id,
                    'text': value.value_name.toString()
                };
                valueData.push(obj);
            });
            angular.element('#' + element).select2({
                allowClear: true,
                data: valueData,
                multiple: true
            });
        }).error(function(data, error, status) {});
    };

    if ($routeParams.id != '' && $routeParams.id != undefined && $window.localStorage.userType) {
        rest.path = 'getUserProperty/' + $routeParams.id + '/' + $window.localStorage.userType;
        rest.get().success(function(data) {
            $scope.propList = data;
            $scope.propLisEmpty = jQuery.isEmptyObject(data);
        }).error(errorCallback);

        rest.path = 'getAddinfo/' + $routeParams.id + '/' + $window.localStorage.userType;
        rest.get().success(function(data) {
            $scope.addtional = data;
        }).error(errorCallback);
    }

    $scope.getProperty = function(id, element) {
        $scope.show_value = true;
        rest.path = 'getUserProperty/' + id;
        rest.get().success(function(data) {
            var data2 = $.extend({}, data);
            $scope.propId = data2[0].id;
            $('#property-index').select2('val', data2[0].property_id);
            $scope.propertyData = data2[0];
            rest.path = 'propertyvalues/' + data2[0].property_id;
            rest.get().success(function(data) {
                var valueData = [];
                var arrId = [];
                angular.forEach(data, function(value, key) {
                    var obj = {
                        'id': value.value_id,
                        'text': value.value_name
                    };
                    arrId.push(value.value_id);
                    valueData.push(obj);
                });
                angular.element('#' + element).select2({
                    allowClear: true,
                    data: valueData,
                    multiple: true,
                });
            }).error(errorCallback);
        }).error(errorCallback);
    };

    $scope.deleteProperty = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteUserProperty/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.saveProperty = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.propertyData.id) {
                $routeParams.id = $scope.propertyData.id;

                rest.path = 'userProperty';
                rest.put($scope.propertyData).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $scope.propertyData.user_id;
                    $scope.logMaster.log_title = $window.localStorage.currentUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "external_res";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($routeParams.id) {
                    $scope.propertyData.user_id = $routeParams.id;
                    $scope.propertyData.type = $window.localStorage.userType;
                    rest.path = 'userProperty';
                    rest.post($scope.propertyData).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $scope.propertyData.user_id;
                        $scope.logMaster.log_title = $window.localStorage.currentUserName;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "external_res";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Please create User', 'warning')
                    $route.reload();
                }
            }
        }
    };

    $scope.saveAddinfo = function(formId) {

        if (angular.element("#" + formId).valid()) {
            if ($scope.addtional.add_id) {
                $routeParams.id = $scope.addtional.add_id;
                rest.path = 'additionalinfo';
                rest.put($scope.addtional).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($routeParams.id) {
                    $scope.addtional.user_id = $routeParams.id;
                    $scope.addtional.user_type = $window.localStorage.userType;
                    rest.path = 'additionalinfo';
                    rest.post($scope.addtional).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Please create User', 'warning');
                    $route.reload();
                }
            }
        }
    };

    $scope.savePropretyExternal = function(id) {
        $location.path('/price-list1');
    }

}).controller('pricelistController', function($scope, $log, $location, $route, rest, $routeParams, $window, $timeout,$filter) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.clientPriceId = $window.localStorage.getItem("clientpricelistdataId");
    $scope.inputCounter = 1;
    $scope.traninputCounter = 1;
    $scope.proofinputCounter = 1;
    $scope.tpinputCounter = 1;
    $scope.ExternalPricelistId = $window.localStorage.getItem("externalPricelistId");
    $scope.ContactPersonName = $window.localStorage.getItem("contactPersonId");
    $scope.UserId = $window.localStorage.getItem("priceListClientId");
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;
    console.log("$scope.currentUserName", $scope.currentUserName);
    $scope.user_Id = $window.localStorage.getItem("contactUserId");

    $scope.baseQuentity = [];
    $scope.basePrice = [];
    $scope.baseTotal = [];

    $timeout(function() {
        $scope.redirectToClientViewId = $window.localStorage.iUserId;
    }, 100);

    angular.element('.panel-heading').css('background-color', 'white');
    if ($scope.uType == 2) {
        $scope.pricePageId = 1;
    } else {
        $scope.pricePageId = 2;
    }

    $("#chkAll").click(function() {
        if ($("#chkAll").is(':checked')) {
            var data = ['Finance', 'General', 'General-Agricalture', 'General Art and Culture', 'General-Beauty-Fashion-Make-up',
                'General Bussiness', 'General Casino & Poker', 'General Entertainment', 'IT-Search Engine Optimization (SEO)', 'IT-Software', 'IT-Software (UI)', 'Legal', 'Legal Patents', 'Medical', 'Medical CLinical Trials', 'Medical Dentisty', 'Medical Health Care',
                'Technical', 'Technical Automotive', 'Technical Chemistry', 'Technical Electronics', 'Technical Engineering'
            ];
            var dataArray = [];
            $.each(data, function(i, e) { dataArray.push({ "id": i, "text": e }); });
            $("#specialization").select2("data", dataArray, true);
        } else {
            $("#specialization").select2('val', '');
        }
    });

    $scope.saveandNext = function() {
        if ($scope.uType != 2) {

            $location.path('/payment');
        } else {

            $location.path('/payment_client');
        }
    }

    $scope.newCustomer = function() {
        $('#price-List-form')[0].reset();
        $scope.customerPriceList = true;
        $scope.customerPrice = {};
        $scope.customerPrice.price_name = $scope.currentUserName + ' | '; //TRA|PRF-
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        angular.element('#price_currency').select2('val', '');
        angular.element('#calculation_basis').select2('val', '');
        angular.element('#rounding_proc').select2('val', '');
        angular.element('#specialization').select2('val', '');
        $scope.customerPriceId = false;
        $scope.planedQuaTotal = "";
        $scope.planedHourTotal = "";
        $scope.baseQuentity = [];
        $scope.basePrice = [];
        $timeout(function() {
            angular.element('#minimumCharge').val('');
        }, 100);
    }

    angular.element('.customerPriceTable th:eq(2)').css('border-left', 'solid 1');

    angular.element('.priceTable th').mouseover(function() {
        $(this).css('cursor', 'pointer');
    });

    rest.path = 'masterPriceitemgetFromPriceList';
    rest.get().success(function(data) {
        $scope.masterPrice = data;
        console.log("$scope.masterPrice", $scope.masterPrice);
    }).error(errorCallback);

    rest.path = 'childPriceitemget';
    rest.get().success(function(data) {
        $scope.childPrice = data;
        //console.log("$scope.childPrice", $scope.childPrice);
    }).error(errorCallback);

    $scope.itemLanguage = function(item) {
        var a = item.source_lang.split(',');
        angular.forEach(a, function(val, i) {});
    }

    angular.element('body').on('click', '.priceLPrice', function() {
        angular.element('.priceLPrice').removeClass('rowactivate');
        angular.element(this).addClass('rowactivate');
    });

    $scope.removePriceLanguage = function(id) {
        if (angular.element('[id^=priceLanguageID]').length - 1 == id) {
            angular.element('#priceLanguageID' + id).remove();
        } else {
            notification('Delete from last record', 'warning');
        }
    }

    $scope.sendPriceLanguage = function(id) {
        var specialization = angular.element('#specialization').select2('data');
        if (!specialization) {
            notification('Please select specialization.', 'warning');
            return;
        }
        var language = angular.element('#priceLanguageID' + id).text();
        angular.element('body').find('.setPriceLanguage').text(language);
        var customerPriceName = angular.element('#customerPriceName').val();
        var chkNameAfterPipeSymbole = customerPriceName[customerPriceName.length - 2];
        if (chkNameAfterPipeSymbole == "|") {
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;

            $scope.customerPrice.price_name = $scope.customerPrice.price_name + newLanguage + ' | ' + specialization.text;
        } else {
            var customerPriceName = angular.element('#customerPriceName').val();
            var oldName = customerPriceName.split('|');
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;
            var specialization = angular.element('#specialization').select2('data');
            $scope.customerPrice.price_name = oldName[0].trim() + ' | ' + newLanguage + ' | ' + specialization.text;
        }
    }

    $scope.removeBasePrice = function(id) {
        $scope.priceBasiList.splice(id, 1);
    }

    $scope.basePriceCheck = function(id) {
        var daynamicClass = angular.element('#basePriceCheck' + id).attr('class').split(' ')[1];
        var oldClass = 'fa-check';
        var newClass = 'fa-times';
        if (daynamicClass == newClass) {
            angular.element('#basePriceCheck' + id).addClass(oldClass);
            angular.element('#basePriceCheck' + id).removeClass(daynamicClass);
        } else if (daynamicClass == oldClass) {
            angular.element('#basePriceCheck' + id).removeClass(oldClass);
            angular.element('#basePriceCheck' + id).addClass(newClass);
        }
    }

    $scope.customerChange = function(id) {
        rest.path = 'customerpriceGetOne/' + id;
        rest.get().success(function(data) {
            $scope.customerPrice = data;
            angular.element('#price_currency').select2('val', data.price_currency);
            angular.element('#calculation_basis').select2('val', data.calculation_basis);
            angular.element('#rounding_proc').select2('val', data.rounding_proc);
            var check = false;
            var getComma = /,/;
            if (getComma.test(data.specialization) == true) {
                check = true;
            } else {
                check = false;
            }
            angular.element('#specialization').select2('val', check ? data.specialization.split(',') : data.specialization);
            $scope.priceBasiList = JSON.parse(data.price_basis);
            $scope.priceLanguageList = JSON.parse(data.price_language);
            $scope.baseQuentity = [];
            $scope.basePrice = [];
            var quantity = 0;
            var standard = 0;
            angular.forEach(JSON.parse(data.price_basis), function(val, i) {
                $scope.baseQuentity[i] = val.baseQuentity;
                $scope.basePrice[i] = val.basePrice;
                if (val.baseQuentity) {
                    quantity += parseInt(val.baseQuentity);
                }
                if (val.standardTime) {
                    standard += parseInt(val.standardTime);
                }

            });
            $scope.planedHourTotal = standard;
            $scope.planedQuaTotal = quantity;
        }).error(errorCallback);
        $scope.customerPriceList = true;
    }

    $scope.removecustomerPriceId = function() {
        $scope.customerPrice = {};
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        $route.reload();
    };

    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            var setPriceLanguage = angular.element('.setPriceLanguage').text();
            if (setPriceLanguage == 'Change prices') {
                if (angular.element('[id^=priceLanguageID]').length > 0) {
                    $('#priceLanguageID0').css('border', '1px solid red');
                    $('#priceLanguageID0').addClass('face');

                    $timeout(function() {
                        $('#priceLanguageID0').removeClass('face');
                        $('#priceLanguageID0').css('border', '0px solid red');
                    }, 3000);

                    notification('Please set language', 'warning');
                    return false;
                } else {
                    $('.itemList').css('border', '1px solid red');
                    $('.itemList').addClass('face');

                    $timeout(function() {
                        $('.itemList').removeClass('face');
                        $('.itemList').css('border', '0px solid red');
                    }, 3000);

                    notification('Please select language combination.', 'warning');
                    return false;
                }

            }
            if ($scope.customerPrice.price_list_id) {
                if ($scope.currentUserName == undefined || !$scope.currentUserName) {
                    notification('Please create user', 'warning');
                    return false;
                }
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }
                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();

                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }

                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                $routeParams.id = $scope.customerPrice.price_list_id;
                rest.path = "customerpriceUpdate";
                rest.put($scope.customerPrice).success(function(data) {
                    notification('Price list successfully updated', 'success');
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            } else {
                if ($scope.currentUserName == undefined || !$scope.currentUserName) {
                    notification('Please create user', 'warning');
                    return false;
                }
                if (setPriceLanguage == 'Change prices') {
                    if (angular.element('[id^=priceLanguageID]').length > 0) {
                        $('#priceLanguageID0').css('border', '1px solid red');
                        $('#priceLanguageID0').addClass('face');

                        $timeout(function() {
                            $('#priceLanguageID0').removeClass('face');
                            $('#priceLanguageID0').css('border', '0px solid red');
                        }, 3000);

                        notification('Please set language', 'warning');
                        return false;
                    } else {
                        $('.itemList').css('border', '1px solid red');
                        $('.itemList').addClass('face');

                        $timeout(function() {
                            $('.itemList').removeClass('face');
                            $('.itemList').css('border', '0px solid red');
                        }, 3000);

                        notification('Please select language combination.', 'warning');
                        return false;
                    }
                }
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }

                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();
                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }
                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                rest.path = "customerpriceSave";
                rest.post($scope.customerPrice).success(function(data) {
                    notification('Price list successfully saved', 'success');
                    $scope.customerPrice.price_list_id = data.LastIsertedData.price_list_id;
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            }
        }
    }

    angular.element('.topMenu').click(function() {
        angular.element('.topMenu').removeClass('topMenu-Active');
        angular.element(this).addClass('topMenu-Active');
        if (angular.element(this).text().trim() == 'Planned time') {
            $scope.plannedTime = true;
        } else {
            $scope.plannedTime = false;
        }
    });
    
    $scope.basePriceOtyChnage = function(id) {
        $scope.baseTotal[id] = $scope.baseQuentity[id] * parseFloat($scope.basePrice[id]);
    }
    
    /*Used For Dynamically added element STRAT*/
    $scope.basePriceChnage = function(id, data) {
        var val = angular.element('#basepriceQuantity' + id).val();
        if (data && val.length > 0) {
            var mul = parseFloat(val) * parseFloat(data);
            mul = $filter('customNumber')(mul);
            angular.element('#baseWaiting' + id).text(mul);
        } else {
            angular.element('#baseWaiting' + id).text('0');
        }
    }

    $scope.basePriceQuantityChnage = function(id, data) {
        var val = angular.element('#basePrice' + id).val();
        if (data && val.length > 0) {
            var mul = parseFloat(val) * parseFloat(data);
            mul = $filter('customNumber')(mul);
            angular.element('#baseWaiting' + id).text(mul);
        } else {
            angular.element('#baseWaiting' + id).text('0');
        }
    }
    /*Used For Dynamically added element END*/

    $scope.copyCustomer = function(id) {
        if (id) {
            rest.path = 'customerpriceListCopy/' + id;
            rest.get().success(function(data) {
                $scope.customerChange(data.id);
            });
        } else {
            notification("please select option", "warning");
        }
    }

    $scope.masterChildDropDown = function() {
        $scope.pricesArray = [];
        $timeout(function() {
            angular.forEach($scope.masterPrice,function(val,i){
                var obj1 ={
                    id:'',
                    text:val.name,
                    children : []
                }

                $scope.pricesArray.push(obj1); 
            })
            console.log("$scope.pricesArray", $scope.pricesArray);


            angular.forEach($scope.masterPrice,function(v,i){
                angular.forEach($scope.childPrice,function(val1,i1){
                    if(v.master_price_id == val1.master_price_id){
                        var obj2 ={
                            id:val1.child_price_id,
                            text:val1.name
                        }

                        $scope.pricesArray[i].children.push(obj2); 
                    }
                })
            })

        },2000);
        
        $('#priceUnit').select2({
            multiple: true,
            allowClear: true,
            placeholder: "Select price..",
            data: $scope.pricesArray,
            query: function(options) {
                var selectedIds = options.element.select2('val');
                console.log("selectedIds", selectedIds);
                var selectableGroups = $.map(this.data, function(group) {
                    var areChildrenAllSelected = true;
                    $.each(group.children, function(i, child) {
                        if (selectedIds.indexOf(child.id) < 0) {
                            areChildrenAllSelected = false;
                            return false; // Short-circuit $.each()
                        }
                   });
                    return !areChildrenAllSelected ? group : null;
                });
                options.callback({ results: selectableGroups });
            }
        }).on('select2-selecting', function(e) {
            var $select = $(this);
            if (e.val == '') {
                e.preventDefault();
                $select.select2('data', $select.select2('data').concat(e.object.children));
                $select.select2('close');
            }
        });
    }

    $timeout(function() {
        $scope.masterChildDropDown();
    },200);

    $scope.basePriceAdd = function(){
        var selectedPrices = $('#priceUnit').val();
        if(!$scope.priceBasiList.length || $scope.priceBasiList == undefined){
            $scope.priceBasiList = [];
        }
        if(selectedPrices){
            var check = false;
            var getComma = /,/;
            if (getComma.test(selectedPrices) == true) {
                check = true;
            } else {
                check = false;
            }
            if(check){
                var selectedPricesArray = selectedPrices.split(',')
                console.log("selectedPricesArray", selectedPricesArray);
                angular.forEach(selectedPricesArray,function(val,i){
                    rest.path = 'childpriceGetOne/' + val;
                    rest.get().success(function(data) {
                        var exists = false;
                        angular.forEach($scope.priceBasiList,function(val1,i1){
                            if(val1.basePriceUnit == data.name){
                                exists = true;
                            }
                        })

                        if(!exists){
                            var newPriceObj = {
                                basePrice: data.rate,
                                basePriceUnit: data.name,
                                basePricecheck: 1,
                                baseQuentity: "1",
                                standardTime: ""
                            };
                            $scope.baseQuentity[$scope.priceBasiList.length] = 1;
                            $scope.basePrice[$scope.priceBasiList.length] = data.rate;
                            $scope.priceBasiList.push(newPriceObj);
                            //$('#priceUnit').val('');
                            $("#priceUnit").select2("val", "");
                        }
                        /*angular.forEach($scope.priceBasiList,function(val1,i1){
                            if(val1.basePriceUnit == data.name){
                                var newPriceObj = {
                                    basePrice: data.rate,
                                    basePriceUnit: data.name,
                                    basePricecheck: 1,
                                    baseQuentity: "1",
                                    standardTime: ""
                                };
                                $scope.baseQuentity[$scope.priceBasiList.length] = 1;
                                $scope.basePrice[$scope.priceBasiList.length] = data.rate;
                                $scope.priceBasiList.push(newPriceObj);
                                //$('#priceUnit').val('');
                                $("#priceUnit").select2("val", "");
                            }else{
                                console.log(data.name);
                            }
                        })*/
                    }).error(errorCallback);
                })
            }else{
                rest.path = 'childpriceGetOne/' + selectedPrices;
                rest.get().success(function(data) {
                    var exists = false;
                    angular.forEach($scope.priceBasiList,function(val,i){
                        if(val.basePriceUnit == data.name){
                            exists = true;
                        }
                    })

                    if(!exists){
                        var newPriceObj = {
                            basePrice: data.rate,
                            basePriceUnit: data.name,
                            basePricecheck: 1,
                            baseQuentity: "1",
                            standardTime: ""
                        };
                        $scope.baseQuentity[$scope.priceBasiList.length] = 1;
                        $scope.basePrice[$scope.priceBasiList.length] = data.rate;
                        $scope.priceBasiList.push(newPriceObj);
                        //$('#priceUnit').val('');
                        $("#priceUnit").select2("val", "");
                    }else{
                        notification('Prices already exists.','warning');
                    }

                }).error(errorCallback);
            }
        }else{
            notification('Please select prices.','warning');
        }

    }
}).controller('paymentController', function($scope, $log, $location, $route, fileReader, rest, $window, $routeParams, $timeout, $interval) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.ContactPersonName = $window.localStorage.getItem("contactPersonId");
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;
    $scope.clientId = $window.localStorage.getItem("priceListClientId");
    $scope.user_Id = $window.localStorage.getItem("contactUserId");
    if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
        $routeParams.id = $window.localStorage.iUserId;
    } else {
        $routeParams.id = $scope.clientId;
    }

    $scope.displaybankOption = false;
    $scope.displayPaypalOption = false;
    $timeout(function() {
        $scope.redirectToPayClientViewId = $window.localStorage.iUserId;
    }, 100);

    if ($routeParams.id != ' ' && $routeParams.id != undefined) {
        rest.path = 'getuserpayment/' + $routeParams.id + '/' + $window.localStorage.userType;
        rest.get().success(function(data) {
            if (data == null) {
                $scope.paymentData = {};
            } else {
                $scope.paymentData = data;
            }
            if (data != null) {
                $scope.payment = JSON.parse(data.vPaymentInfo);
                $scope.vatCount($scope.payment);
                $scope.bank = JSON.parse(data.vBankInfo);
                
                if($scope.bank.payment_method =='Bank Transfer'){
                    $scope.displaybankOption = true;
                    $scope.displayPaypalOption = false;
                }else{
                    $scope.displaybankOption = false;
                    $scope.displayPaypalOption = true;
                }
                
                $timeout(function() {
                    $('#currencyCoded').select2('data', {id: $scope.bank.currency_code, text: $scope.bank.currency_code.split(',')[0]});
                },500);

                //angular.element('#currencyCoded').val($scope.bank.currency_code);
            }else{
                $scope.vatCount('paymentDataNotAvailble');
            }

        }).error(errorCallback);
    } else {
        $scope.paymentData = {};
        $scope.notRootParamsId = true;
    }

    if ($scope.clientId != " ") {
        $routeParams.id = $scope.clientId;
        rest.path = 'getClientpayment/' + $routeParams.id;
        rest.get().success(function(data) {
            if (data == null) {
                $scope.paymentData = {};
            } else {
                $scope.paymentData = data;
            }

            if (data != null) {
                if (data.vPaymentInfo) {
                    $scope.payment = JSON.parse(data.vPaymentInfo);
                }
                $scope.vatCount($scope.payment);
                if (data.vBankInfo) {
                    $scope.bank = JSON.parse(data.vBankInfo);
                }
            }
        }).error(errorCallback);
    }

    $scope.savePaymentdirect = function(formId, type) {
        if(!$scope.payment.country_code || !$scope.payment.tax_id){
            notification('please enter vat number','warning');
            return false
        }
        if ($scope.clientId != " ") {
            if (angular.element("#" + formId).valid()) {
                var validVatNo = angular.element("#vatResponseFormTable tr td:first-child").find('span').hasClass('validStyle');
                // if(validVatNo){
                if ($scope.paymentData.iPaymentId != '' && $scope.paymentData.iPaymentId != undefined) {
                    $scope.payament_data = {};
                    $routeParams.id = $scope.clientId;
                    $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                    $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);

                    rest.path = 'paymentdirectUpdate/' + $routeParams.id + '/' + $window.localStorage.userType;
                    rest.post($scope.payament_data).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $scope.clientId;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "direct_cli";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        notification('saved successfully', 'success');
                        $location.path('/login-detail');
                    }).error(errorCallback);
                } else {
                    if ($routeParams.id != '' && $routeParams.id != undefined) {
                        $scope.payament_data = {};
                        $scope.payament_data.iClientId = $scope.clientId;
                        $scope.payament_data.iType = $window.localStorage.userType;
                        $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                        $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);
                        rest.path = 'paymentsave';
                        rest.post($scope.payament_data).success(function(data) {
                            //log file start 
                            $scope.logMaster = {};
                            $scope.logMaster.log_type_id = $scope.clientId;
                            $scope.logMaster.log_type = "update";
                            $scope.logMaster.log_status = "direct_cli";
                            $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                            rest.path = "saveLog";
                            rest.post($scope.logMaster).success(function(data) {});
                            notification('saved successfully', 'success');
                            $location.path('/login-detail');
                        }).error(errorCallback);
                        /*notification('saved successfully', 'success');
                        $location.path('/login-detail');*/
                    }
                }
                // }else{
                //     notification('Please enter valid vat number','error');
                // }
            }
        } else {
            notification('Please create User', 'warning');
            $route.reload();
        }

    }

    $scope.savePayment = function(formId, type) {
         
        if (angular.element("#" + formId).valid()) {
            if ($scope.currentUserName == undefined || !$scope.currentUserName) {
                notification('Please create user', 'warning');
                return false;
            }
            var validVatNo = angular.element("#vatResponseFormTable tr td:first-child").find('span').hasClass('validStyle');
            var Norwegian = angular.element("#true").text();
            if (validVatNo || Norwegian == 'true') {
                if ($scope.paymentData.iPaymentId != '' && $scope.paymentData.iPaymentId != undefined) {
                    $scope.payament_data = {};
                    if($scope.bank.payment_method == 'Bank Transfer'){
                        $scope.bank.paypal_address = '';
                    }else{
                        $scope.bank.bank_name = '';
                        $scope.bank.address = '';
                        $scope.bank.holder_name = '';
                        $scope.bank.currency_code = '';
                        $scope.bank.iban = '';
                        $scope.bank.bic = '';
                        $scope.bank.bank_code = '';
                    }
                    $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                    $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);
                    $scope.payament_data.iUserId = $window.localStorage.iUserId;


                    //console.log("$scope.payament_data", $scope.payament_data);return false;
                    rest.path = 'paymentsave/' + $routeParams.id + '/' + $window.localStorage.userType;
                    rest.post($scope.payament_data).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $window.localStorage.iUserId;
                        $scope.logMaster.log_title = $window.localStorage.currentUserName;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "external_res";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        // log file end
                        notification('saved successfully', 'success');
                        $timeout(function() {
                            $route.reload();
                        }, 200);
                        $location.path('/user/2');
                    }).error(errorCallback);
                } else {
                    if ($routeParams.id != '' && $routeParams.id != undefined) {
                        $scope.payament_data = {};
                        if($scope.bank.payment_method == 'Bank Transfer'){
                            $scope.bank.paypal_address = '';
                        }else{
                            $scope.bank.bank_name = '';
                            $scope.bank.address = '';
                            $scope.bank.holder_name = '';
                            $scope.bank.currency_code = '';
                            $scope.bank.iban = '';
                            $scope.bank.bic = '';
                            $scope.bank.bank_code = '';
                        }
                        $scope.payament_data.iUserId = $routeParams.id;
                        $scope.payament_data.iType = $window.localStorage.userType;
                        $scope.payament_data.vPaymentInfo = JSON.stringify($scope.payment);
                        $scope.payament_data.vBankInfo = JSON.stringify($scope.bank);
                        rest.path = 'paymentsave';
                        //console.log("$scope.payament_data", $scope.payament_data);return false;
                        rest.post($scope.payament_data).success(function(data) {
                            //log file start 
                            $scope.logMaster = {};
                            $scope.logMaster.log_type_id = $window.localStorage.iUserId;
                            $scope.logMaster.log_title = $window.localStorage.currentUserName;
                            $scope.logMaster.log_type = "update";
                            $scope.logMaster.log_status = "external_res";
                            $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                            rest.path = "saveLog";
                            rest.post($scope.logMaster).success(function(data) {});
                            // log file end

                            notification('saved successfully', 'success');
                            $timeout(function() {
                                $route.reload();
                            }, 200);
                            $location.path('/user/2');
                        }).error(errorCallback);
                    } else {
                        notification('Please create User', 'warning');
                        $route.reload();
                    }
                }
            } else {
                notification('Please enter valid vat number', 'error');
            }

        }
    };

    //LU26375245
    //vat number api
    
    $scope.vatCount = function(payment) {
        console.log("payment", payment);
        if(payment == 'paymentDataNotAvailble'){
            angular.element('#vatLoader').css('display','none');
            return false;
        }
        if(payment == undefined || !payment || !payment.tax_id){
            angular.element('#vatLoader').css('display','none');
            return false;
        }

        if(payment.tax_id.length < 3){
            angular.element('#vatLoader').css('display','none');
            notification('Please enter more then three character.', 'warning');
            return false;
        }
        angular.element('#vatLoader').css('display','block');
        payment.country_code = payment.tax_id.substring(0, 2).toUpperCase();
        payment.tax_id = payment.tax_id.substring(2, 15);
        if (payment.country_code && payment.tax_id) {
            rest.path = "getVatcount/" + payment.country_code + '/' + payment.tax_id;
            rest.get().success(function(data) {
                if (data.From == 'europa') {
                    $scope.payment.country_code = payment.country_code;
                    if(data){
                        if(data.data){
                            $scope.payment.tax_id = payment.country_code + payment.tax_id;
                            $scope.vatList = data.data.substring(12250, 13222);
                        }
                    }

                    if ($scope.vatList.length > 0) {
                        angular.element('.vatNumberValid').html($scope.vatList);
                        angular.element('.invalidStyle').text('No, invalid VAT number');
                        $scope.blockVat = true;
                        angular.element('#vatResponseFormTable').addClass('table');
                        angular.element('#vatResponseFormTable').addClass('table-bordered');
                    } else {
                        notification('Unable to get vat information, please try again.', 'warning');
                        angular.element('.vatNumberValid').html('');
                    }
                    angular.element('#vatLoader').css('display','none');
                } else {
                    if (data.data != null && data.data != undefined && data.data != '' && data.data.status !=400) {
                        var response = '';
                        response += '<div id="true" style="display:none">true</div>';
                        response += '<table class="table table-bordered table-striped">';
                        response += '<tbody>';
                        response += '<tr>';
                        response += '<th>Member State</th>';
                        response += '<td>' + data.data.forretningsadresse.landkode + '</td>';
                        response += '</tr>';
                        response += '<tr>';
                        response += '<th>VAT Number</th>';
                        response += '<td>' + data.data.forretningsadresse.landkode + ' ' + data.data.organisasjonsnummer + '</td>';
                        response += '</tr>';
                        response += '<tr>';
                        response += '<th>Name</th>';
                        response += '<td>' + data.data.navn + '</td>';
                        response += '</tr>';
                        response += '</tr>';
                        response += '<tr>';
                        response += '<th>Address</th>';

                        if (data.data.forretningsadresse.postnummer) {
                            response += '<td>' + data.data.forretningsadresse.adresse + ' - ' + data.data.forretningsadresse.postnummer + ', ' + data.data.forretningsadresse.land + '.</td>';
                        } else {
                            response += '<td>' + data.data.forretningsadresse.adresse + ' - ' + data.data.forretningsadresse.poststed + ', ' + data.data.forretningsadresse.land + '.</td>';
                        }

                        response += '</tr>';
                        response += '</tbody>';
                        response += '</table>';
                        angular.element('.vatNumberValid').html(response);
                        $scope.payment.country_code = payment.country_code;
                        $scope.payment.tax_id = payment.country_code + payment.tax_id;
                        angular.element('#vatLoader').css('display','none');
                    }else if(!data.data){
                        notification('Unable to get vat information, please try again.', 'warning');
                        $scope.payment.country_code = payment.country_code;
                        $scope.payment.tax_id = payment.country_code + payment.tax_id;
                        angular.element('.vatNumberValid').html(' ');
                        angular.element('#true').text('false');
                        angular.element('#vatLoader').css('display','none');
                    }else if(data.data.status == 400){
                        notification(data.data.message, 'warning');
                        $scope.payment.country_code = payment.country_code;
                        $scope.payment.tax_id = payment.country_code + payment.tax_id;
                        angular.element('.vatNumberValid').html(' ');
                        angular.element('#true').text('false');
                        angular.element('#vatLoader').css('display','none');
                    }else{
                        notification('Unable to get vat information, please try again.', 'warning');
                        $scope.payment.country_code = payment.country_code;
                        $scope.payment.tax_id = payment.country_code + payment.tax_id;
                        angular.element('.vatNumberValid').html(' ');
                        angular.element('#true').text('false');
                        angular.element('#vatLoader').css('display','none');
                    }
                }
            }).error(errorCallback);
        }

        //resource payment vate last td remove
        $timeout(function() {
            angular.element('#vatResponseFormTable').addClass('table');
            angular.element('#vatResponseFormTable').addClass('table-bordered');
            angular.element("table tr").eq(7).remove();
            if (angular.element("table tr").eq(2).children()[2]) {
                angular.element("table tr").eq(2).children()[2].remove();
            }
            var date = dateFormat(new Date(angular.element("table tr").eq(4).find('td:last').text()));
            var time = angular.element("table tr").eq(4).find('td:last').text().split(' ')[1];
            angular.element("table tr").eq(4).find('td:last').text(date + ' ' + time);
            angular.element("#vatResponseFormTable tr td:first-child").css('font-weight', 'bold');
            angular.element("#vatResponseFormTable");
        }, 3500);
    }

    if($scope.notRootParamsId){
        $scope.vatCount('paymentDataNotAvailble');
    }
    //vat edit 
    $scope.vatEdit = function() {
        $scope.blockVat = false;
    }

    $scope.paymentChange = function(){
        var selectedMethod = $('#paymentMethod').val().split(':')[1];
        if(selectedMethod ==='Bank Transfer'){
            $scope.displaybankOption = true;
            $scope.displayPaypalOption = false;
        }else{
            $scope.displaybankOption = false;
            $scope.displayPaypalOption = true; 
        }
    }

}).controller('clientController', function($scope, $log, $location, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("priceListClientId", " ");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.clientnamec = "";

    $scope.adddClient = function(id) {
        if (id == 1) {
            $window.localStorage.setItem("priceListClientId", " ");
            $window.localStorage.setItem("ShowuserName", " ");
            $window.localStorage.setItem("clientpricelistdataId", "1");
            $location.path('/client-profile');
        } else {
            $location.path('/client-profile1');
        }
    }

    rest.path = 'client/' + $routeParams.id;
    $window.localStorage.iUserId = "";
    $window.localStorage.resourceType = "";
    $window.localStorage.currentUserName = "";
    $window.localStorage.userType = 2;
    $window.localStorage.priority = "customer";
    $rootScope.uType = 2;
    rest.path = 'clients';
    rest.get().success(function(data) {
        //$scope.clientlist = data;
    }).error(errorCallback);

    $scope.deleteClient = function(id) {
        bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteClient/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    if ($routeParams.id == '1') {
        $scope.UpdatedId = $window.localStorage.getItem("session_iUserId");
        rest.path = 'basicClientUpdated';
        rest.put($scope.UpdatedId).success(function(data) {
            $location.path('/client/1');
        }).error(errorCallback);

        rest.path = 'clients';
        rest.get().success(function(data) {
            $scope.clientlist = data;
            angular.forEach($scope.clientlist, function(obj) {
                obj.clientCountry = JSON.parse(obj['address1Detail'])[3].value;
            });
        }).error(errorCallback);
        
        $scope.deleteClient = function(id) {
            bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
                if (result == true) {
                    rest.path = 'deleteClient/' + id;
                    rest.delete().success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
            });
        };
    } else {
        $scope.UpdatedId = $window.localStorage.getItem("session_iUserId");
        rest.path = 'IndirectClientUpdated';
        rest.put($scope.UpdatedId).success(function(data) {
            $location.path('/client/2');
        }).error(errorCallback);

        rest.path = 'clientlistindirect_show';
        rest.get().success(function(data) {
            $scope.clientlistindirect = data;
        }).error(errorCallback);

        $scope.deleteclientindirect = function(id) {
            bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
                if (result == true) {
                    rest.path = 'deleteClientindirect/' + id;
                    rest.delete().success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
            });
        };
    }

    $scope.deleteIndirect = function(id, clientName) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteClientindirect/' + id;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = clientName;
                    $scope.logMaster.log_type = "delete";
                    $scope.logMaster.log_status = "indirect_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.deleteDirect = function(id, image, clientName) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'clientdelete/' + id + '/' + image;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = clientName;
                    $scope.logMaster.log_type = "delete";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    if ($routeParams.id == '1')
        $scope.btn_client = true;
    else
        $scope.btn_client = false;

    $scope.workingHour = function(id, table) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageClientId", id);
        $routeParams.messageTable = table;
        $window.localStorage.setItem("messageClientTable", table);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

}).controller('viewdirectdetailController', function($scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams, $log) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.viewFileManager = function(id) {
        closeWindows();
        $window.localStorage.setItem("contactclientId", id);
        var clientPopup = $window.open('#/filemanage/client', "popup", "width=2000,height=750");
        clientPopup.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            return false;
        }, false);
        openWindows.push(clientPopup);
    };

    // $scope.edc = function(){
    //     $location.path('/wizard');
    //     $routeParams.id = 1;
    // }

    if ($routeParams.id) {
        rest.path = 'viewdirectdataget/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.info = data;
            
            // rest.path = 'getTaxName/' + $scope.info.vTextType;
            // rest.get().success(function(data) {
            //     $scope.info.vTextType = data.tax_name;
            // }).error(errorCallback);
            if (data.address1Detail) {
                angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                    angular.element('#' + val.id).html(val.value);
                });
            }

            angular.element('#iBussinessDeveloper').html(data.iBussinessDeveloper);
            var CountryCode = JSON.parse(data.vPhone).countryTitle;
            var displayCode = '(+' + CountryCode.split('+')[1] + ')';
            $scope.info.vPhone = displayCode + ' ' + JSON.parse(data.vPhone).mobileNumber;
            if (data.Invoice.length > 0) {
                angular.forEach(JSON.parse(data.Invoice), function(val, i) {
                    angular.element('#' + val.selectInvoice).text(val.invoice);
                });
                $scope.email = JSON.parse(data.Invoice);
            }

            $scope.address1 = JSON.parse(data.address1Detail);
            $scope.address2 = JSON.parse(data.address2Detail);
            $scope.info.dtCreationDate = moment($scope.info.dtCreationDate).format($window.localStorage.getItem('global_dateFormat'));
        }).error(errorCallback);



        rest.path = 'viewcontactdirectEdit/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.contactlist = data;
        }).error(errorCallback);

        rest.path = 'getClientpayment/' + $routeParams.id;
        rest.get().success(function(data) {

            if (data == null) {
                $scope.paymentData = {};
            } else {
                $scope.paymentData = data;
            }
            if (data != null) {
                if (data.vBankInfo) {
                    $scope.bank = JSON.parse(data.vBankInfo);
                }
                $scope.payment = JSON.parse(data.vPaymentInfo);
            }

        }).error(errorCallback);

        rest.path = 'clientdirect_login_details/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.clientlist1 = data;
        }).error(errorCallback);

        rest.path = 'PriceListDirectEditgetone/' + $routeParams.id;
        rest.get().success(function(data) {
            if (data) {
                $scope.price = data;
                var currency = data.currancy_id.split(',');
                $scope.currencySymbole = currency[1];
                $scope.currencyCode = currency[0];
                $scope.translate = JSON.parse(data['translation']);
                $scope.proofreading = JSON.parse(data['proofreading']);
                $scope.tep = JSON.parse(data['tep']);
            }
        })
    }

    $scope.hideShowPassField = function($index){
        console.log("$index", $index);
        if($('#passShow'+$index).hasClass('hiddenField')){
            $('#passShow'+$index).removeClass('hiddenField');
        }else{
            $('#passShow'+$index).addClass('hiddenField');
        }
        if($('#passHide'+$index).hasClass('hiddenField')){
            $('#passHide'+$index).removeClass('hiddenField');
        }else{
            $('#passHide'+$index).addClass('hiddenField');
        }
    }

    $scope.emailSent = function(id, table) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageClientId", id);
        $routeParams.messageTable = table;
        $window.localStorage.setItem("messageClientTable", table);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    }

    $scope.generalEmail = function(id) {
        if (id != undefined && id != " " && id != null) {
            $window.localStorage.generalMsg = id;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/generalmsg.html',
                controller: 'generalmsgController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
        } else {
            notification('Please Add Email', 'warning');
        }
    };
    $scope.deleteDirect = function(id, image, clientName) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'clientdelete/' + id + '/' + image;
                rest.delete().success(function(data) {
                    if (data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = id;
                        $scope.logMaster.log_title = clientName;
                        $scope.logMaster.log_type = "delete";
                        $scope.logMaster.log_status = "direct_cli";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        $location.path('/client/1');
                    } else {
                        notification('You can not delete this client.', 'error');
                    }
                }).error(errorCallback);
            }
        });
    };
}).controller('viewIndirectdetailController', function($scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.viewFileManager = function(id) {
        closeWindows();
        $window.localStorage.setItem("IndirectClientId", id);
        var userFilePopup = $window.open('#/filemanage/IndirectClient', "popup", "width=2000,height=750");
        userFilePopup.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            localStorage['IndirectClientId'] = ' ';
            return false;
        }, false);
        openWindows.push(userFilePopup);
    };

    $scope.deleteIndirect = function(id, clientName) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteClientindirect/' + id;
                rest.delete().success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = id;
                    $scope.logMaster.log_title = clientName;
                    $scope.logMaster.log_type = "delete";
                    $scope.logMaster.log_status = "indirect_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('/client/2');
                }).error(errorCallback);
            }
        });
    };
    if ($routeParams.id) {
        rest.path = 'client_indirect_update/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.info = data;
        }).error(errorCallback);
    }
}).controller('indirectclientController', function($timeout, $scope, $log, $location, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("contactclientId", " ");
    angular.element('.help-block').css('display', 'none');

    $timeout(function() {
        $scope.redirectToClientViewId = $routeParams.id;
    }, 100);

    rest.path = "IndirectCustomerFileCheck";
    rest.get().success(function(data) {
        angular.element('.fileId').text(data);
    })

    if ($routeParams.id) {
        $scope.info = {};
        $scope.info.updatedBy_id = $window.localStorage.getItem("session_iUserId");
        $scope.info.updated_id = $routeParams.id;
        rest.path = 'clientIndirectCheck'
        rest.post($scope.info).success(function(data) {
            $scope.UpdateClientName = data.updatedBy_name;
            $window.localStorage.setItem("session_iUpdatedId", data.updatedBy_id);
        })
    }

    $scope.info = {};
    var currentdate = new Date();

    //$scope.info.vClientNumber = randNumber();

    if (!$routeParams.id) {
        rest.path = "clientProfileNumber/2";
        rest.get().success(function(data) {
            $scope.info.vClientNumber = pad(data, 3);
        });
    }

    $scope.info.dtCreationDate = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    $scope.saveClientIndiarect = function(formId) {
        if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
            $routeParams.id = $window.localStorage.iUserId;
        }

        if (angular.element("#" + formId).valid()) {
            if ($scope.info.iClientId) {
                // $routeParams.id = $window.localStorage.iUserId;
                $scope.UpdatedId = $window.localStorage.getItem("session_iUpdatedId");
                $scope.userId = $window.localStorage.getItem("session_iUserId");
                if ($scope.UpdatedId != $scope.userId) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedId");
                } else {
                    $scope.info.iEditedBy = 0;
                }

                rest.path = 'clientupdateindirect';
                rest.put($scope.info).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $scope.info.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "indirect_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('/client/2');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }
                $scope.fileId = angular.element('.fileId').text();
                $scope.info.fileId = $scope.fileId;
                rest.path = 'clientsaveindirect';
                rest.post($scope.info).success(function(data) {
                    $window.localStorage.setItem("IndirectClientId", data.iClientId);

                    //log file start
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = data.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "add";
                    $scope.logMaster.log_status = "indirect_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});

                    $location.path('/client/2');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
        $routeParams.id = $window.localStorage.iUserId;
    }

    if ($routeParams.id) {
        rest.path = 'client_indirect_update/' + $routeParams.id;
        rest.get().success(function(data) {
            $window.localStorage.setItem("IndirectClientId", data.iClientId);

            $scope.session_vUserName = $window.localStorage.getItem("session_iUserName");
            $scope.info = data;
        }).error(errorCallback);
    }

    $scope.directoryIndirectFolder = function(frmId,iClientIdIndirect) {
        console.log("iClientIdIndirect", iClientIdIndirect);
        var id;
        if(iClientIdIndirect == 'undefined' || iClientIdIndirect == undefined){
            notification('Please create account.','warning');
            return false;
        }
        var indirectClientFid = $window.localStorage.getItem("IndirectClientId");
        
        if($routeParams.id == undefined && !indirectClientFid || indirectClientFid == undefined || indirectClientFid == 'undefined'){
            notification('Please create account.','warning');
        }else{
            if(indirectClientFid !=null && indirectClientFid.trim().length != 0){
                id = indirectClientFid;
            }else{
                id = $routeParams.id;
            }
            if(id == null || id == 'undefined'){
                notification('Please create account.','warning');
                return false;
            }
                
            rest.path = 'client_indirect_update/'+id;
            rest.get().success(function(data){
                console.log("data", data);
                if(!data){
                    notification('Please create resource.','warning');
                }else{
                    
                    if(id == data.iClientId){
                        $window.localStorage.setItem("IndirectClientId",iClientIdIndirect);
                        closeWindows();
                        var IndirectClientPopup = $window.open('#/filemanage/IndirectClient', "popup", "width=2000,height=750");
                        IndirectClientPopup.addEventListener("beforeunload", function() {
                            localStorage['parentId'] = ' ';
                            return false;
                        }, false);
                        openWindows.push(IndirectClientPopup);
                    }else{
                        notification('File Manager not available for this account.','warning');
                    }
                }
            }).error(errorCallback);
        }
        //$window.localStorage.setItem("IndirectClientId");
        /*if (angular.element("#" + frmId).valid()) {
            if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                $routeParams.id = $window.localStorage.iUserId;
            }

            if ($scope.info.iClientId) {
                $scope.UpdatedId = $window.localStorage.getItem("session_iUpdatedId");
                $scope.userId = $window.localStorage.getItem("session_iUserId");
                if ($scope.UpdatedId != $scope.userId) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedId");
                } else {
                    $scope.info.iEditedBy = 0;
                }
                rest.path = 'clientupdateindirect';
                rest.put($scope.info).success(function(data) {
                    closeWindows();
                    var IndirectClientPopup = $window.open('#/filemanage/IndirectClient', "popup", "width=2000,height=750");
                    IndirectClientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    openWindows.push(IndirectClientPopup);
                }).error(errorCallback);
            } else {
                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }
                $scope.fileId = angular.element('.fileId').text();
                $scope.info.fileId = $scope.fileId;

                rest.path = 'clientsaveindirect';
                rest.post($scope.info).success(function(data) {
                    closeWindows();
                    $window.localStorage.setItem("IndirectClientId", data.iClientId);

                    var IndirectClientPopup = $window.open('#/filemanage/IndirectClient', "popup", "width=2000,height=750");
                    IndirectClientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    openWindows.push(IndirectClientPopup);
                }).error(errorCallback);
            }
        } else {
            notification('Please fill information', 'warning');
        }*/
    }

}).controller('basicinfoController', function($scope, $log, $location, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal, $cookieStore, $timeout, $translate,$filter) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.getItem("ShowuserName", "");
    $window.localStorage.setItem("clientpricelistdataId", " ");
    $scope.dateFormatGlobal = $window.localStorage.getItem("global_dateFormat");
    $scope.isValidMobileNumber = false;
    $timeout(function() {
        if ($window.localStorage.iUserId.length > 0) {
            $scope.redirectToClientViewId = '#/viewdirect/' + $window.localStorage.iUserId;
        } else {
            $scope.redirectToClientViewId = '#/client/1';
        }
    }, 100);

    $timeout(function() {
        $scope.UpdateClientName = $window.localStorage.getItem("ShowuserName");
        $scope.showEditedByName = false;
        if ($routeParams.id) {
            $scope.showEditedByName = true;
        }
    }, 500);


    $scope.comapanyBranchError = function() {
        angular.element('.comapanyBranch').remove();
    }

    angular.element('.help-block').css('display', 'none');

    if ($routeParams.id) {
        $window.localStorage.setItem("contactclientId", $routeParams.id);
    }

    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.invoiceClassget = function(classname) {
        $scope.invoiceC = $window.document.getElementsByClassName(classname).length;
        if ($scope.invoiceC == 2) {
            $scope.invoice = true;
        }
    }


    $scope.clientNotes = function() {
        var clientnote = $scope.info.tMemo;
        if ($window.localStorage.clientnotice != clientnote && clientnote != undefined) {
            notification(clientnote, 'information');
        }
    }

    $scope.removeinvoice = function(id) {
        var invoiceLength = angular.element("[id^=invoiceCou]").length - 1;
        if (invoiceLength == id) {
            angular.element("#invoiceCou" + id).remove();
        } else {
            notification("Please delete from last record", "warning");
        }
    }
    if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
        $routeParams.id = $window.localStorage.iUserId;
    }

    if ($routeParams.id != '' && $routeParams.id != undefined) {
        $window.localStorage.iUserId = $routeParams.id;
        rest.path = 'client';
        rest.model().success(function(data) {
            $scope.imgshow = true;
            $scope.isNewClient = false;
            $scope.info = data;

            $window.localStorage.clientnamec = $scope.info.vUserName;
            $window.localStorage.clientnotice = $scope.info.tMemo;
            $window.localStorage.setItem("priceListClientId", $scope.info.iClientId);
            angular.element('#vProjectCoordinator').select2('data', { id: $scope.info.vProjectCoordinator });
            angular.element('#vProjectManager').select2('data', { id: $scope.info.vProjectManager });
            angular.element('#vQASpecialist').select2('data', { id: $scope.info.vQASpecialist });
            angular.element('#currencyCode').select2('data', { text: $scope.info.client_currency.split(',')[0] });
            


            console.log("data", data);
            var flagTitle = JSON.parse(data.vPhone).countryTitle;
            var flagClass = JSON.parse(data.vPhone).countryFlagClass;
            var Ccode = flagClass.split(' ')[1];
            var CcodeNum = flagTitle.split(':')[1].trim();
            console.log("CcodeNum", CcodeNum);
            var FinalMobileNum = CcodeNum+JSON.parse(data.vPhone).mobileNumber;
            
            $timeout(function() {
                $('#userphone').intlTelInput("setNumber", FinalMobileNum);
                $scope.isValidMobileNumber = true;
            },100);
            /*var flagTitle = JSON.parse(data.vPhone).countryTitle;
            var flagClass = JSON.parse(data.vPhone).countryFlagClass;

            $timeout(function() {
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').prop('title', flagTitle);
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').prop('class', flagClass);
            }, 500);

            $scope.info.vPhone = JSON.parse(data.vPhone).mobileNumber.trim();*/
            $scope.currentUserName = $window.localStorage.currentUserName = data.vUserName;

            if (data.address1Detail) {
                angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            if (data.address2Detail) {
                angular.forEach(JSON.parse(data.address2Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            if (data.Invoice) {
                angular.forEach(JSON.parse(data.Invoice), function(val, i) {
                    angular.element('#' + val.selectInvoice).val(val.invoice);
                });

                $scope.email = JSON.parse(data.Invoice);
                for (var k = 0; k < $scope.email.length; k++) {
                    var Counter = k + 1;
                }

                if (Counter != " ") {
                    $scope.inputCounter = Counter;
                } else {
                    $scope.inputCounter = 1;
                }
            }

            $scope.address1 = JSON.parse(data.address1Detail);
            $scope.address2 = JSON.parse(data.address2Detail);
        }).error(errorCallback);
    } else {
        $scope.info = {};
        $scope.isNewClient = true;
        var currentdate = new Date();
        rest.path = "clientProfileNumber/1";
        rest.get().success(function(data) {
            $scope.info.vClientNumber = pad(data, 3);
            $scope.displayCreatorName = $window.localStorage.getItem("session_vUserName");
            $scope.info.created_id = $window.localStorage.getItem("session_iUserId");
        });
        
        $scope.info.dtCreationDate = currentdate;
    }
    if ($routeParams.id) {
        $scope.info = {};
        $scope.info.updatedBy_id = $window.localStorage.getItem("session_iUserId");
        $scope.info.updated_id = $routeParams.id;
        rest.path = 'clientBasicIdCheck';
        rest.post($scope.info).success(function(data) {
            $window.localStorage.setItem("ShowuserName", data.UpdatedBy_name);
            $window.localStorage.setItem("session_iUpdatedBasicClientId", data.UpdatedBy_id);
        }).error(errorCallback);
    }

    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;

    $scope.customerType = [{
        name: 'Direct Customer',
        value: 'Direct Customer'
    }, {
        name: 'Direct/Indirect Customer',
        value: 'Direct/Indirect Customer'
    }, {
        name: 'indirect customer',
        valumme: 'indirect customer'
    }];

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                if (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif') {
                    $scope.imgshow = false;
                    $scope.imageSrc = result;
                } else {
                    notification("Please select image", "error");
                }
            });
    };

    $scope.copytoship = function() {
        if ($scope.address1 != undefined && $scope.address1 != '') {
            $scope.address2 = $scope.address1;
            $scope.info.vAddress2 = $scope.info.vAddress1;
            angular.forEach($scope.address1, function(val, i) {
                angular.element('#address2_' + val.id).val(val.value);
            });
        }
    };

    $scope.checkemailaddress = function(data) {
        rest.path = 'checkclient';
        rest.post(data).success(function(data) {}).error(errorCallback);
    };



    $scope.inputCounter = [];
    $scope.inputCounter = 1;


    $scope.name = 'Please try entering something and click Add button';
    /* Mobile Validation START */
    $timeout(function() {
        var telInput = $("#userphone"),errorMsg = $("#error-msg"),validMsg = $("#valid-msg");
        var reset = function() {
          telInput.removeClass("error");
          errorMsg.addClass("hide");
          validMsg.addClass("hide");
        };

        telInput.blur(function() {
          reset();
          $timeout(function() {
            if ($.trim(telInput.val())) {
                if (telInput.intlTelInput("isValidNumber")) {
                    console.log('validNum');
                    $scope.isValidMobileNumber = true;
                    validMsg.removeClass("hide");
                    $('#error-msg').addClass('hide');
                } else {
                    console.log('invalidNum');
                    $scope.isValidMobileNumber = false;
                    $('#error-msg').removeClass('hide');
                }
              }
          },200);
        });

        telInput.on("keyup change", reset);
    },200);
    /* Mobile Validation END */

    $scope.saveClientProfile = function(formId) {

        if (angular.element("#" + formId).valid() && $scope.isValidMobileNumber) {
            if ($scope.info.iClientId) {
                $scope.info.image = $scope.imageSrc;
                if ($scope.info.vPhone == "" || $scope.info.vPhone == undefined || $scope.info.vPhone.length == 0) {
                    notification('Please enter mobile number', 'warning');
                    return false;
                }
                var p = angular.element('#userphone').val();
                $scope.info.vPhone = p;
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                for (var j = 0; j < angular.element("[id^=selectEmail_opetion_]").length; j++) {
                    var a = angular.element("#selectEmail_opetion_" + j).val();
                    var b = angular.element("#selectEmail_invoice_" + j).val();
                    if (a == '--Select Invoice--' && b != '') {
                        notification('Please select email option', 'warning');
                        angular.element("#selectEmail_opetion_" + j).focus().select();
                        return false;
                    }
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.info.vPhone = JSON.stringify(countryObj);

                $scope.modified_id = $cookieStore.get('session_iUserId');
                $scope.info.modified_id = $scope.modified_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);

                // ---------address over -----------------//

                $scope.updatedBy_id = $window.localStorage.getItem("session_iUserId");
                $scope.Edited_id = $window.localStorage.getItem("session_iUpdatedBasicClientId");

                if ($scope.Edited_id != $scope.updatedBy_id) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedBasicClientId");
                } else {
                    $scope.info.iEditedBy = 0;
                }

                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)
                $scope.info.dtCreationDate = $filter('globalDtFormat')($scope.info.dtCreationDate);
                $scope.info.dtCreationDate = originalDateFormatNew($scope.info.dtCreationDate);
                $scope.info.dtCreationDate = moment($scope.info.dtCreationDate).format('YYYY-MM-DD HH:mm:ss');
                rest.path = 'clientsave';
                rest.put($scope.info).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $scope.info.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('/contact-person');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }
                if ($scope.info.vPhone == "" || $scope.info.vPhone == undefined || $scope.info.vPhone.length == 0) {
                    notification('Please enter mobile number', 'warning');
                    return false;
                }

                var p = angular.element('#userphone').val();
                $scope.info.vPhone = p;

                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];
                for (var l = 0; l < angular.element("[id^=selectEmail_opetion_]").length; l++) {
                    var a = angular.element("#selectEmail_opetion_" + l).val();
                    var b = angular.element("#selectEmail_invoice_" + l).val();
                    if (a == '--Select Invoice--' && b != '') {
                        notification('Please select email option', 'warning');
                        angular.element("#selectEmail_opetion_" + j).focus().select();
                        return false;
                    }
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.created_id = $cookieStore.get('session_iUserId');
                $scope.info.created_id = $scope.created_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);

                $scope.info.vCodeRights = $scope.info.vCodeRights;
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)

                $scope.info.dtCreationDate = $filter('globalDtFormat')($scope.info.dtCreationDate);
                $scope.info.dtCreationDate = originalDateFormatNew($scope.info.dtCreationDate);
                $scope.info.dtCreationDate = moment($scope.info.dtCreationDate).format('YYYY-MM-DD HH:mm:ss');
                // ---------address over -----------------//
                rest.path = 'clientsave';
                $scope.info.vClientNumber = $scope.info.vClientNumber.replace(/^0+/, '');

                //console.log("$scope.info", $scope.info);return false;
                rest.post($scope.info).success(function(data) {
                    console.log("dataCC", data.clientData.vUserName);
                    $window.localStorage.iUserId = data.iClientId;
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = data.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "add";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});

                    $window.localStorage.setItem("contactclientId", data.iClientId);
                    $window.localStorage.setItem("contactclientIdNew",data.iClientId);
                    $window.localStorage.setItem("priceListClientId", data.iClientId);
                    $window.localStorage.setItem("currentUserName", data.clientData.vUserName);
                    $location.path('/contact-person');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteInvoice = function(id) {
        if (angular.element(".test-count").length != 1)
            angular.element("#test-test").remove();
    }

    $scope.directClientFilemanager = function(id, frmId) {
        var fmanagerClient = $window.localStorage.getItem("clientFileMangerId");
        
        if($routeParams.id == undefined && !fmanagerClient){
            notification('Please create client.','warning');
        }else{
            if(fmanagerClient !=null && fmanagerClient.trim().length != 0){
                id = fmanagerClient;
            }else{
                id = $routeParams.id;
            }
            rest.path = 'client/'+id;
            rest.get().success(function(data){
                if(!data){
                    notification('Please create client.','warning');
                }else{
                    if(id == data.iClientId){
                        closeWindows();
                        $window.localStorage.setItem("contactclientId",id);
                        $window.localStorage.setItem("contactclientIdNew",id);
                        closeWindows();
                        var clientPopup = $window.open('#/filemanage/client', "popup", "width=1000,height=650");
                        clientPopup.addEventListener("beforeunload", function() {
                            localStorage['parentId'] = ' ';
                            localStorage['contactclientId'] = '';
                            return false;
                        }, false);
                    }else{
                        notification('File Manager not available for this client.','warning');
                    }
                }
                console.log("data", data);
            }).error(errorCallback);
        }
        /*if (angular.element('#' + frmId).valid()) {
            if ($scope.info.iClientId) {
                $scope.info.image = $scope.imageSrc;
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                for (var j = 0; j < angular.element("[id^=selectEmail_opetion_]").length; j++) {
                    var a = angular.element("#selectEmail_opetion_" + j).val();
                    var b = angular.element("#selectEmail_invoice_" + j).val();
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }
                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.modified_id = $cookieStore.get('session_iUserId');
                $scope.info.modified_id = $scope.modified_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);
                // ---------address over -----------------//

                $scope.info.vCodeRights = $scope.info.vCodeRights
                $scope.updatedBy_id = $window.localStorage.getItem("session_iUserId");
                $scope.Edited_id = $window.localStorage.getItem("session_iUpdatedBasicClientId");

                if ($scope.Edited_id != $scope.updatedBy_id) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedBasicClientId");
                } else {
                    $scope.info.iEditedBy = 0;
                }
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)
                rest.path = 'clientsave';
                rest.put($scope.info).success(function(data) {
                    closeWindows();
                    var clientPopup = $window.open('#/filemanage/client', "popup", "width=1000,height=650");
                    clientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    openWindows.push(clientPopup);
                    $route.reload();
                }).error(errorCallback);
            } else {

                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];
                for (var l = 0; l < angular.element("[id^=selectEmail_opetion_]").length; l++) {
                    var a = angular.element("#selectEmail_opetion_" + l).val();
                    var b = angular.element("#selectEmail_invoice_" + l).val();
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }

                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }
                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.created_id = $cookieStore.get('session_iUserId');
                $scope.info.created_id = $scope.created_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);
                $scope.info.vCodeRights = $scope.info.vCodeRights;
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)
                // ---------address over -----------------//
                rest.path = 'clientsave';
                rest.post($scope.info).success(function(data) {
                    $window.localStorage.iUserId = data.iClientId;
                    $window.localStorage.setItem("contactclientId", data.iClientId);
                    $window.localStorage.setItem("priceListClientId", data.iClientId);
                    var clientPopup = $window.open('#/filemanage/client', "popup", "width=1000,height=650");
                    clientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    $route.reload();
                }).error(errorCallback);
            }
        } else {
            notification('Please fill information.', 'warning');
        }*/

    }
    $scope.workingHour = function(id, table) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageClientId", id);
        $routeParams.messageTable = table;
        $window.localStorage.setItem("messageClientTable", table);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

}).controller('clientLoginController', function($scope, $log, $location, $route, rest, $window, $rootScope, $routeParams, $timeout, $interval) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.currentUserName = $window.localStorage.currentUserName;
    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    angular.element('.help-block').css('display', 'none');

    $timeout(function() {
        $scope.redirectToClientViewId = $window.localStorage.iUserId;
    }, 100);

    // debugger;
    if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
        $routeParams.id = $window.localStorage.iUserId;
    }

    if ($routeParams.id) {
        $window.localStorage.userType = 2;
        $window.localStorage.priority = "customer";
        $rootScope.uType = 2;
        rest.path = 'clientdirect_login_details/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.clientlist1 = data;
            $scope.contactLoginEmpty = jQuery.isEmptyObject(data);
            angular.forEach(data, function(val, i) {
                var obj = '';

                for (var j = 0; j < val.vPassword.toString().length; j++) {
                    obj += "*";
                }

                $timeout(function() {
                    angular.element('#passwordLength' + i).text(obj);
                }, 100);
            });

        }).error(errorCallback);
    }

    $scope.getclientEdit = function(id) {
        rest.path = 'clientdirect_login_getone/' + id;
        rest.get().success(function(data) {
            $scope.clientlist = data;
        }).error(errorCallback);
    }

    $scope.deletelogindetail = function(id) {
        bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteClient/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

    $scope.saveLogin = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.clientlist.iClientId) {
                $routeParams.id = $scope.clientlist.iClientId;

                rest.path = 'update_directclientlogin';
                rest.put($scope.clientlist).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $scope.clientlist.iUserId;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    //$location.path('client/1');
                    notification('Updated successfully.', 'success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($window.localStorage.iUserId != undefined && $window.localStorage.iUserId != '') {
                    $routeParams.id = $window.localStorage.iUserId;
                }

                if ($routeParams.id) {
                    $scope.clientlist.iUserId = $routeParams.id;
                    rest.path = 'directclientlogin';
                    rest.post($scope.clientlist).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $scope.clientlist.iUserId;
                        $scope.logMaster.log_type = "create";
                        $scope.logMaster.log_status = "direct_cli";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        //$location.path('client/1');
                        notification('Created successfully.', 'success');
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    notification('Please create user.', 'warning');
                }
            }
        }
    };

    $scope.deleteClient = function(id) {
        bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteClient/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('jobstatusReportController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.clientnamec = "";

    //export to excel
    $scope.exportData = function() {
        var count = 0;
        for (var i = 0; i <= angular.element('[id^=orderCheckData]').length; i++) {
            if ($("#orderCheck" + i).prop('checked') == true) {
                count++;
            }
        }
        if (count == 0) {
            notification('Please select record to export', 'information');
        }
        if (count > 0) {
            for (var i = 0; i <= angular.element('[id^=orderCheckData]').length; i++) {
                if ($("#orderCheck" + i).prop('checked') == true) {
                    $("#Export_" + i).show()
                } else {
                    $("#Export_" + i).hide()
                }
            }
            var blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "Jobs-status-report.xls");
            $scope.jobstatusReportsearch();
        }

    };

    //current year get
    $scope.date = new Date();
    var year = $scope.date.getFullYear();
    $scope.Currentyear = year.toString().substr(2, 2);

    //Job report search start
    $scope.jobstatusReportsearch = function(frmId, eID) {

        if ($scope.jobReport == undefined || $scope.jobReport == null || $scope.jobReport == "") {
            notification('Please Select option', 'information');
        } else if (jQuery.isEmptyObject($scope.jobReport) == true) {
            notification('Please Select option', 'information');
            $route.reload();
        } else {
            rest.path = 'statusJobReportFind';
            rest.get().success(function(data) {
                $scope.statusResult = data;
                console.log("$scope.statusResult", $scope.statusResult);
            })
            scrollToId(eID);
        }
    }

    $scope.reseteSearch = function(frmId) {
        $route.reload();
    }

    //serch data action
    $scope.statucOrderAction = function(action) {
        switch (action) {
            case "Change status to":
                $scope.jobStatus = true;
                break;
            case "Remove selection":
                $scope.jobStatus = false;
                break;
            case "Export to excel":
                $scope.jobStatus = false;
                break;
            case "Select all":
                $scope.jobStatus = false;
                break;
        }
    }

    //search data action
    $scope.statusAction = function(action) {
        switch (action) {
            case "Change status to":
                var jobStatus = angular.element('#jobStatusdata').val();
                for (var i = 0; i < angular.element('[id^=orderCheckData]').length; i++) {
                    var jobselect = angular.element('#orderCheck' + i).is(':checked') ? 'true' : 'false';
                    if (jobselect == 'true') {
                        var jobId = angular.element('#orderCheckData' + i).val();
                        $routeParams.id = jobId;
                        rest.path = 'jobsearchStatusUpdate/' + $routeParams.id + '/' + jobStatus;
                        rest.get().success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
                break;
            case "Remove selection":
                bootbox.confirm("Are you sure you want to delete?", function(result) {
                    for (var i = 0; i < angular.element('[id^=orderCheckData]').length; i++) {
                        var jobselect = angular.element('#orderCheck' + i).is(':checked') ? 'true' : 'false';
                        if (jobselect == 'true') {
                            var jobId = angular.element('#orderCheckData' + i).val();
                            if (result == true) {
                                rest.path = 'jobsearchStatusDelete/' + jobId;
                                rest.delete().success(function(data) {
                                    $route.reload();
                                }).error(errorCallback);
                            }
                        }
                    }
                });
                break;
            case "Export to excel":
                var count = 0;
                for (var i = 0; i <= angular.element('[id^=orderCheckData]').length; i++) {
                    if ($("#orderCheck" + i).prop('checked') == true) {
                        count++;
                    }
                }
                if (count == 0) {
                    notification('Please select record to export', 'information');
                }
                if (count > 0) {
                    for (var i = 0; i <= angular.element('[id^=orderCheckData]').length; i++) {
                        if ($("#orderCheck" + i).prop('checked') == true) {
                            $("#Export_" + i).show()
                        } else {
                            $("#Export_" + i).hide()
                        }
                    }
                    var blob = new Blob([document.getElementById('exportable').innerHTML], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                    });
                    saveAs(blob, "Jobs-status-report.xls");
                    $scope.jobstatusReportsearch();
                }
                break;
            case "Select all":
                $scope.checkdata = "ordercheck";
                break;
        }
    }

    //mail contactpreson and resources
    $scope.jobsumResource = function(resourceName, jobSummeryId) {
        $window.localStorage.ResourceMsg = resourceName;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/jobresourcemsg.html',
            controller: 'jobResourceMsgController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
    }

    //remove job search 
    $scope.clearCode = function(frmId, action) {
        switch (action) {
            case "companyCode":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.companyCode = '';
                    angular.element('#companyCode1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "contactPerson":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.contactPerson = '';
                    angular.element('#contactPerson1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "resource":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.resource = '';
                    angular.element('#resource1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "customer":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.customer = '';
                    angular.element('#customer1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "serviceGroup":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.serviceGroup = '';
                    angular.element('#serviceGroup1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "projectType":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.projectType = '';
                    angular.element('#projectType1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "jobStatus":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.jobStatus = '';
                    angular.element('#jobStatus1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "itemStatus":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.itemStatus = '';
                    angular.element('#itemStatus1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "userTypes":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.orderTypes = '';
                    angular.element('#userTypes1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "sourceLanguage":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.sourceLanguage = '';
                    angular.element('#sourceLanguage1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "targetLanguage":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.targetLanguage = '';
                    angular.element('#targetLanguage1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
        }
    }

}).controller('invoiceInternalController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $route, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.getData = function() {
        rest.path = "viewAllInvoice1/save";
        rest.get().success(function(data) {
            $scope.invoiceList = data;
            console.log("$scope.invoiceList", $scope.invoiceList);
            $scope.invoiceStatus = [];
            for (var i = 0; i < data.length; i++) {
                $scope.invoiceStatus[i] = true;
            }
        }).error(errorCallback);
    }

    $scope.getData();

    $scope.invoiceCheck = function(status, id, statusId) {
        var obj = [];
        obj.push({
            "Invoice_cost"  : $scope.invoiceList[id].Invoice_cost,
            "paid_amount"   : $scope.invoiceList[id].paid_amount,
            "statusId"      : statusId
        });
        for (var i = 0; i < $scope.invoiceStatus.length; i++) {
            $scope.invoiceStatus[i] = true;
        }

        if (status == "Paid") {
            // var modalInstance = $uibModal.open({
            //     animation: $scope.animationsEnabled,
            //     templateUrl: 'tpl/invoiceAmount.html',
            //     controller: 'invoiceAmountController',
            //     size: '',
            //     resolve: {
            //         items: function() {
            //             return obj;
            //         }
            //     }
            // });
            // modalInstance.result.then(function(selectedItem) {
            //     $route.reload();
            // });
        } else {
            $scope.invoiceStatus[id] = false;
        }
    }

    $scope.invoiceStatusChange = function(status, id, statusId) {
        var obj = [];
        obj.push({
            "Invoice_cost": $scope.invoiceList[(id - 1)].Invoice_cost,
            "paid_amount": $scope.invoiceList[(id - 1)].paid_amount,
            "statusId": statusId
        });

        if (status == "Paid") {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/invoiceAmount.html',
                controller: 'invoiceAmountController',
                size: '',
                resolve: {
                    items: function() {
                        return obj;
                    }
                }
            });
            modalInstance.result.then(function(selectedItem) {
                $route.reload();
            });
        } else {
            $scope.invoice = {};
            $scope.invoice.invoice_status = status;
            $scope.invoice.paid_amount = " ";
            $routeParams.id = statusId;
            rest.path = "invoiceStatusChange";
            rest.put($scope.invoice).success(function(data) {
                $route.reload();
            });
        }
    }
}).controller('invoiceShowController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $cookieStore, $route, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    
    $scope.invoicePaid = function(frmId) {
        var obj = {
            "Invoice_cost": $scope.invoiceList[0].Invoice_cost,
            "paid_amount": $scope.invoiceList[0].paid_amount,
            "statusId": $scope.invoiceList[0].invoice_id,
            "Currency": $scope.invoiceList[0].Currency
        };
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/invoiceAmount.html',
            controller: 'invoiceAmountController',
            size: '',
            resolve: {
                items: function() {
                    return obj;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $route.reload();
        });
    }

    if ($routeParams.id) {
        rest.path = "invoiceViewOne/" + $routeParams.id;
        rest.get().success(function(data) {
            $scope.invoiceDetail = data[0];
            
            $scope.invoiceDetail.invoice_date = moment($scope.invoiceDetail.invoice_date).format($window.localStorage.getItem('global_dateFormat'));
            
            rest.path = "getUserDataById/" + $scope.invoiceDetail.freelanceId;
            rest.get().success(function(dataUser) {
                //$scope.userData = dataUser.userData;
                $scope.userPaymentData = dataUser.userPaymentData;
                var vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                $scope.vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                //$scope.currencyType = vBankInfo.currency_code.split(',')[1];
                $scope.currencyType = vBankInfo.currency_code;

                $scope.currencyPaymentMethod = vBankInfo.payment_method;
                if ($scope.currencyPaymentMethod == 'Bank Transfer') {
                    $timeout(function() {
                        $("#Bank").prop('checked', true);
                    }, 100);

                } else {
                    $timeout(function() {
                        $("#Paypal").prop('checked', true);
                    }, 100);
                }

                $scope.invoiceDetail.payment = $scope.currencyPaymentMethod;

            }).error(errorCallback);

            $scope.invoiceList = data;
            
            $scope.invoiceDetail.paymentDueDate = TodayAfterNumberOfDays(data[0].created_date, data[0].number_of_days);
            
            $scope.invoiceDetail.paymentDueDate = $scope.invoiceDetail.paymentDueDate.split('.').reverse().join('-');
            $scope.invoiceDetail.paymentDueDate = moment($scope.invoiceDetail.paymentDueDate).format($window.localStorage.getItem('global_dateFormat'));


            var mobileNo = JSON.parse($scope.invoiceDetail.freelancePhone).mobileNumber;
            var countryCode = JSON.parse($scope.invoiceDetail.freelancePhone).countryTitle;
            $scope.invoiceDetail.freelancePhone = '(' + countryCode.split(':')[1].trim() + ')' + ' ' + mobileNo;

            var mobileNo1 = JSON.parse($scope.invoiceDetail.companyPhone).mobileNumber;
            var countryCode1 = JSON.parse($scope.invoiceDetail.companyPhone).countryTitle;
            $scope.invoiceDetail.companyPhone = '(' + countryCode1.split(':')[1].trim() + ')' + ' ' + mobileNo1;

            $scope.grandTotal = 0;
            angular.forEach($scope.invoiceList,function(val,i){
                if(val.item){
                    angular.forEach(val.item,function(v,i){
                        $scope.grandTotal += v.itemTotal;
                    })         
                }
            })
        }).error(errorCallback);
    }

    $scope.invoiceCancel = function(frmId) {
        var obj = {
            "invoice_status": "Cancel"
        };
        $routeParams.id = $scope.invoiceDetail.invoice_id;
        rest.path = "invoiceStatusChange";
        rest.put(obj).success(function(data) {
            $location.path("/invoice-data");
        });
    }
    $scope.save = function(frmId, invoiceType) {
        if ($scope.invoiceD == undefined || $scope.invoiceD == null || $scope.invoiceD == "") {
            $scope.invoiceData = {};
        }

        rest.path = "invoiceUpdate/" + $routeParams.id;
        rest.get().success(function(data) {
            $location.path('/invoice-detail');
        });
    }

    $scope.printIt = function(number) {
        console.log("number", number);

        var btnPaid = angular.element('#btnPaid');
        var btnMarkAsCancel = angular.element('#btnMarkAsCancel');
        var btnSave = angular.element('#btnSave');
        var btnDraft = angular.element('#btnDraft');
        var btnCancel = angular.element('#btnCancel');

        angular.element('#btnPaid').hide();
        angular.element('#btnMarkAsCancel').hide();
        angular.element('#btnSave').hide();
        angular.element('#btnDraft').hide();
        angular.element('#btnCancel').hide();

        kendo.drawing.drawDOM($("#exportable")).then(function(group) {
            group.options.set("font", "8px DejaVu Sans");
            /*group.options.set("pdf", {
                margin: {
                    left   : "40mm",
                    top    : "0mm",
                    right  : "40mm",
                    bottom : "0mm"
                }
            });*/
            kendo.drawing.pdf.saveAs(group, number + ".pdf");
        });

        $timeout(function() {
            angular.element('#btnPaid').show();
            angular.element('#btnMarkAsCancel').show();
            angular.element('#btnSave').show();
            angular.element('#btnDraft').show();
            angular.element('#btnCancel').show();
            /*$("#toAddEleAfterDwonload").before(btnPaid);
            $("#toAddEleAfterDwonload").before(btnMarkAsCancel);
            $("#toAddEleAfterDwonload").before(btnSave);
            $("#toAddEleAfterDwonload").before(btnDraft);
            $("#toAddEleAfterDwonload").before(btnCancel);*/
        }, 200);
        // angular.element('#btnPaid').show();
        // angular.element('#btnMarkAsCancel').show();
        // angular.element('#btnSave').show();
        // angular.element('#btnDraft').show();
        // angular.element('#btnCancel').show();
        // html2canvas(document.getElementById('exportable'), {
        //     onrendered: function(canvas) {
        //         var data = canvas.toDataURL();
        //         var docDefinition = {
        //             content: [{
        //                 image: data,
        //                 width: 500,
        //             }]
        //         };
        //         pdfMake.createPdf(docDefinition).download(number + ".pdf");
        //     }
        // });
    }

}).controller('invoiceAmountController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $route, $uibModal, $uibModalInstance, items, $filter) {
    $scope.closeAmount = true;
    $scope.currencySymbol = items.Currency;
    $scope.totalAmount = items.Invoice_cost;
    console.log("$scope.totalAmount", $scope.totalAmount);
    $scope.amountToPaid = items.paid_amount;
    console.log("$scope.amountToPaid", $scope.amountToPaid);
    if (items.paid_amount == 0) {
        $scope.dueAmount = items.Invoice_cost;
    } else {
        $scope.dueAmount =parseFloat(items.Invoice_cost)- parseFloat(items.paid_amount);
        $scope.dueAmount = parseFloat($scope.dueAmount.toFixed(2));
    }

    $scope.statusChange = function(status) {
        if (status == "Part") {
            $scope.closeAmount = false;
        } else {

            $scope.closeAmount = true;
            $scope.am = "Amount";
            $scope.invoiceComplete = items.Invoice_cost - items.paid_amount;
        }
    }


    $scope.ok = function(frmId) {
        // if any change in amount box and then select to completed replace value in box amount
        // to complete ampunt
        if($scope.closeAmount){
            $scope.inv.paid_amount = $scope.dueAmount;
        }
        if(!$('#paidStatus').val()){
            notification('Please select status.','error');
            return false;
        }

        var checkHireamount = parseFloat($scope.inv.paid_amount)+parseFloat($scope.amountToPaid);
        
        if (angular.element('#' + frmId).valid()) {
            
            if($scope.inv.paid_amount == undefined){
                notification("Enter valid amount.", 'error');
                return false;
            }
            if (checkHireamount > items.Invoice_cost) {
                var errorMsg = "High amount you can't enter , please enter " +$scope.dueAmount+ " or less amount.";
                notification(errorMsg, 'error');
                return false;
            }else if ($scope.inv.paid_amount == 0) {
                notification("Zero amount not allowed", 'error');
                return false;
            }else{
                
                var date = $filter('date')(new Date(), 'yyyy/MM/dd');
                $scope.inv.paid_date = date;
                $scope.inv.partPaid = $scope.inv.paid_amount;
                $scope.inv.paid_amount = $scope.inv.paid_amount + items.paid_amount;
                if ($scope.inv.paid_amount == items.Invoice_cost) {
                    $scope.inv.invoice_status = "Complete";
                } else {
                    $scope.inv.invoice_status = "Part Paid";
                }
                if ($scope.closeAmount == true) {
                    $scope.inv.paid_amount = items.Invoice_cost;
                    $scope.inv.invoice_status = "Complete";
                }
                $routeParams.id = items.statusId;
                rest.path = "invoiceStatusChange";
                rest.put($scope.inv).success(function(data) {
                    $uibModalInstance.dismiss('cancel');
                    $route.reload();
                });
            }
        }
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
}).controller('statementController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $route, $filter) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.userId = $window.localStorage.getItem("session_iUserId");
    $scope.dueAmount = 0;
    $scope.search = {}
    if ($scope.userRight == '2') {
        var id = $scope.userId;
        rest.path = "getFreelanceStatement/" + id;
        rest.get().success(function(data) {
            $scope.stamementList = data;
            Array.prototype.sum = function(prop) {
                var total = 0
                for (var i = 0, _len = this.length; i < _len; i++) {
                    total += this[i][prop]
                }
                return total
            }
            var tolaAmount = $scope.stamementList.sum('Amount');
            var paidAmount = $scope.stamementList.sum('paid_amount');

            $scope.dueAmount = tolaAmount - paidAmount;
        });

    } else {

        $scope.getFreelance = function(id) {
            if (id != undefined) {
                rest.path = "getFreelanceStatement/" + id;
                rest.get().success(function(data) {
                    console.log("data", data);
                    $scope.stamementList = data;
                    Array.prototype.sum = function(prop) {
                        var total = 0
                        for (var i = 0, _len = this.length; i < _len; i++) {
                            total += this[i][prop]
                        }
                        return total
                    }
                    var tolaAmount = $scope.stamementList.sum('Amount');
                    var paidAmount = $scope.stamementList.sum('paid_amount');

                    $scope.dueAmount = tolaAmount - paidAmount;
                });
            }
        }
    }

    $scope.getInvoicePeriod = function(id) {
        rest.path = "getOneInvoicePeriod/" + 1;
        rest.get().success(function(data) {
            $scope.invoicePeriod = data;
        }).error(errorCallback);
    }
    $scope.getInvoicePeriod();
    $scope.openFilter = function(){
        $('#filterRows').slideToggle();
    }

    $scope.totalAmountAdmin = 0;
    $scope.totalPendingAmountAdmin = 0;
    $scope.filterStatement = function(frmId){
        if(jQuery.isEmptyObject($scope.search)){
            notification('Please select option to filter statement.','warning');
            return false;
        }else{
            if(!$scope.search.dueDateFrom && !$scope.search.dueDateTo){
              
            }else if($scope.search.dueDateFrom && !$scope.search.dueDateTo){
                notification('You have to select both dates.','warning');  
                return false;
            }
            else if(!$scope.search.dueDateFrom && $scope.search.dueDateTo){
                notification('You have to select both dates.','warning');  
                return false;
            }
            if($scope.search.dueDateFrom){
                $scope.search.dueDateFrom = originalDateFormatNew($scope.search.dueDateFrom);
                $scope.search.dueDateFrom = moment($scope.search.dueDateFrom).subtract($scope.invoicePeriod.number_of_days,'d').format('YYYY-MM-DD');
                
            }

            if($scope.search.dueDateTo){
                $scope.search.dueDateTo = originalDateFormatNew($scope.search.dueDateTo);
                $scope.search.dueDateTo = moment($scope.search.dueDateTo).subtract($scope.invoicePeriod.number_of_days,'d').format('YYYY-MM-DD');
                
            }
            
            rest.path = 'filterStatement';
            rest.post($scope.search).success(function(data) {
                if(data){
                    $scope.stamementList = data;
                    if($scope.stamementList.length == 0){
                        notification('No record found','warning');
                        document.getElementById("filterForm").reset();
                        $("#resource").select2("val", "");
                        $("#comapanyCode").select2("val", "");
                        $("#invoiceStatus").select2("val", "");
                        $("#invoiceNumber").select2("val", "");
                        $('#filterRows').slideUp();
                        $scope.search = {};
                    }else{
                        angular.forEach($scope.stamementList,function(val,i){
                            $scope.stamementList[i].paymentDueDate = TodayAfterNumberOfDays(val.created_date, $scope.invoicePeriod.number_of_days);
                        })

                        Array.prototype.sum = function(prop) {
                            var total = 0
                            for (var i = 0, _len = this.length; i < _len; i++) {
                                total += this[i][prop]
                            }
                            return total
                        }

                        $scope.totalAmountAdmin = $scope.stamementList.sum('Amount');
                        $scope.paidAmountAdmin = $scope.stamementList.sum('paid_amount');
                        $scope.totalPendingAmountAdmin = $scope.totalAmountAdmin - $scope.paidAmountAdmin;
                        
                        document.getElementById("filterForm").reset();
                        $("#resource").select2("val", "");
                        $("#comapanyCode").select2("val", "");
                        $("#invoiceStatus").select2("val", "");
                        $("#invoiceNumber").select2("val", "");
                        $('#filterRows').slideUp();
                        $scope.search = {};
                    }
                }else{

                }
            }).error(errorCallback);
        }
    }


}).controller('orderController', function($scope, $log, $location, $route, rest, $window, $rootScope, $timeout, $interval) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.checkOrder = "";
    $window.localStorage.clientproCustomerdataName = "";
    $window.localStorage.clientproCustomerName = "";
    $window.localStorage.orderID = "";
    $window.localStorage.orderNo = "";
    $window.localStorage.abbrivation = "";
    $window.localStorage.projectJobChainOrderId = "";
    $window.localStorage.contactMsgId = "";
    $window.localStorage.projectTeamMsg = "";
    $window.localStorage.orderBlock = "";
    $window.localStorage.genfC = "";
    $window.localStorage.jobfolderId = " ";
    $window.localStorage.setItem('projectOrderName', "");

    rest.path = 'orderGet/' + $window.localStorage.getItem("session_iUserId");
    rest.get().success(function(data) {
        $scope.orders = data;
        angular.forEach(data, function(v, i) {
            $scope.orderIdNum = v.order_id;
        });

        $window.localStorage.ordernumID = $scope.orderIdNum + 1;
        if (data['delete']) {
            $route.reload();
        }
    }).error(errorCallback);

    $scope.jobDetail = function(id) {
        $location.path('/jobs-detail/' + id);
    }

    $scope.deleteOrder = function(id) {
        bootbox.confirm("Are you sure you want to delete this user?<br/><strong>Please note that ALL Info. under this User will also be deleted</strong>", function(result) {
            if (result == true) {
                rest.path = 'deleteOrder/' + id;
                rest.delete().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    if ($window.localStorage.orderID) {
        rest.path = 'order/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            // debugger;
            $scope.orderdata = data;
            $window.localStorage.orderNo = $scope.orderdata.order_number + 1;
            $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
            $window.localStorage.orderID = id;
            $window.localStorage.iUserId = id;
            $window.localStorage.userType = 3;
            $window.localStorage.currentUserName = data.vClientName;
            $location.path('/project-customer');
        }).error(errorCallback);
    }

    $scope.edit = function(id) {
        if (id) {
            rest.path = 'order/' + id + '/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                // debugger;
                $scope.orderdata = data;
                $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                $window.localStorage.orderNo = $scope.orderdata.order_number;
                $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                $window.localStorage.orderID = id;
                $window.localStorage.iUserId = id;
                $window.localStorage.userType = 3;
                $window.localStorage.currentUserName = data.vClientName;
                $window.localStorage.genfC = 1;
                $location.path('/general');
            }).error(errorCallback);
            $window.localStorage.orderBlock = 1;
        }
    };

}).controller('generalController', function($scope, $log, $location, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal, $timeout, $cookieStore, $compile, $interval, $translate) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.isNewProject = $window.localStorage.getItem("isNewProject");
    if($window.localStorage.orderID == undefined){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
        return false;
    }
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.generalMsg = " ";
    $window.localStorage.contactMsgId;
    $window.localStorage.projectTeamMsg;
    $window.localStorage.orderBlock;
    $scope.EditedBy = $window.localStorage.getItem('sessionProjectEditedBy');
    $scope.EditedById = $window.localStorage.getItem('sessionProjectEditedId');
    if ($scope.general == undefined) {
        $window.localStorage.setItem('projectOrderName', '');
    }
    $scope.projectOrderName = $window.localStorage.getItem('projectOrderName');
    $scope.dtSeparator = $window.localStorage.getItem('dtSeparator');
    $scope.date = new Date();

    $scope.jobDiscussion = function() {
        if ($window.localStorage.orderID) {
            $location.path('discussion/' + $window.localStorage.orderID);
        }
    }

    //Setting Project Status when Create new START
    // $scope.proStatusDisabled = function() {
    //  if ($window.localStorage.abbrivation.length > 1) { // Disbale Dropdown when new projec
    //    return false;
    //   }
    //   else {
    //    return true;
    //   }
    // };



    rest.path = 'proStatusgetOne';
    rest.get().success(function(dataStatus) {
        $scope.proStatusData = dataStatus;
        $timeout(function() {
            angular.element('#project_status').select2('val', $scope.proStatusData.pr_status_id).trigger('change'); //Default ProjectStatus(In Progrss)
        }, 800);
    }).error(errorCallback);

    //Setting Project Status when Create new END


    rest.path = 'getUserById/' + $window.localStorage.getItem('session_iUserId');
    rest.get().success(function(data) {
        if (!$routeParams.id) {
            var val = $window.localStorage.getItem('session_iUserId');
            if (data.vType == 'QA Specialist') {
                $timeout(function() {
                    angular.element('#qaSpecialist').val(val);
                }, 100);
            } else if (data.vType == 'Project Manager') {
                $timeout(function() {
                    angular.element('#projectManager').val(val);
                }, 100);
            } else if (data.vType == 'Project Coordinator') {
                $timeout(function() {
                    angular.element('#projectCoordinator').val(val);
                }, 100);
            }
        }
    }).error(errorCallback);


    $scope.statusOpt = [{
        name: 'In Preparation',
        value: 'in_preparation'
    }, {
        name: 'Active',
        value: 'active'
    }, {
        name: 'Completed',
        value: 'completed'
    }, {
        name: 'Archivable',
        value: 'archivable'
    }, {
        name: 'Archived',
        value: 'Archived'
    }];

    if ($window.localStorage.orderID) {
        rest.path = 'generalfolder/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.generalFolderCount = data.length;
        }).error(errorCallback);
    }

    if ($window.localStorage.orderID && !$window.localStorage.genfC) {
        rest.path = 'generalfolder/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $window.localStorage.genfC = 1;
        }).error(errorCallback);
    }


    //specialization Select/Deselect All
    $timeout(function() {
        $("#chkAll").click(function() {
            if ($("#chkAll").is(':checked')) {
                var data = ['Finance', 'General', 'General-Agricalture', 'General Art and Culture', 'General-Beauty-Fashion-Make-up',
                    'General Bussiness', 'General Casino & Poker', 'General Entertainment', 'IT-Search Engine Optimization (SEO)', 'IT-Software', 'IT-Software (UI)', 'Legal', 'Legal Patents', 'Medical', 'Medical CLinical Trials', 'Medical Dentisty', 'Medical Health Care',
                    'Technical', 'Technical Automotive', 'Technical Chemistry', 'Technical Electronics', 'Technical Engineering'
                ];
                var dataArray = [];
                $.each(data, function(i, e) { dataArray.push({ "id": i, "text": e }); });
                $("#specialization").select2("data", dataArray, true);
            } else {
                angular.element('#specialization').select2('val', '');
            }
        });
    }, 100);

    //customer
    if ($window.localStorage.orderID) {
        $routeParams.id = $window.localStorage.orderID;
        rest.path = 'customer/' + $window.localStorage.orderID;
        rest.get().success(function(res) {
            $scope.customer = res;
            if (res) {

                rest.path = 'client/' + $scope.customer.client;
                rest.get().success(function(cData) {
                    $scope.directClientData = cData
                }).error(function(data, error, status) {});

                $window.localStorage.setItem('directClientIdStore', $scope.customer.client);
                $scope.customerField = true;
                //general start                
                rest.path = 'general/' + $routeParams.id + '/' + $scope.customer.client;
                rest.get().success(function(data) {
                    $scope.general = data;
                    $scope.projectOrderName = data.order_no;
                    $window.localStorage.setItem('projectOrderName', data.order_no);
                    angular.element('#order_number_id').val(data.order_no);
                    var check = false;
                    var getComma = /,/;
                    if (getComma.test(data.specialization) == true) {
                        check = true;
                    } else {
                        check = false;
                    }

                    $timeout(function() {
                        if (check) {
                            angular.element('#specialization').select2('val', data.specialization.split(','));
                        } else {
                            angular.element('#specialization').val(data.specialization).trigger('change');
                        }

                        angular.element('#project_status').select2('val', $scope.general.project_status).trigger('change');

                        angular.element('#projectCoordinator').select($scope.customer.vProjectCoordinator);
                        angular.element('#projectCoordinator').trigger('change');

                        angular.element('#projectManager').select($scope.customer.vProjectManager);
                        angular.element('#projectManager').trigger('change');

                        angular.element('#qaSpecialist').select($scope.general.vQASpecialist);
                        angular.element('#qaSpecialist').trigger('change');

                        angular.element('#project_type').select($scope.general.project_type);
                        angular.element('#project_type').trigger('change');

                        angular.element('#conatct-person').select($scope.customer.contact);
                        angular.element('#conatct-person').trigger('change');

                        angular.element('#indirect_customer').select($scope.customer.indirect_customer);
                        angular.element('#indirect_customer').trigger('change');

                    }, 100);

                    $timeout(function() {
                        $scope.indirectCustomerName = $('#s2id_indirect_customer').find('.select2-chosen').text();

                        $window.localStorage.setItem('indirectCustomerName', $scope.indirectCustomerName);
                    }, 500);

                    $scope.item_number = data;
                    $scope.general.order_date = $scope.general.order_date;
                    $scope.general.order_date = moment($scope.general.order_date).format($window.localStorage.getItem('global_dateFormat')+' - HH:mm');
                    var due_timeval = $scope.general.due_date.split(" ")[1];
                    $scope.general.due_date = moment($scope.general.due_date).format($window.localStorage.getItem('global_dateFormat'));
                    angular.element('#due_time').val(due_timeval);
                    if($scope.general.expected_start_date){
                        //$scope.general.expected_start_date = moment($scope.general.expected_start_date).format($window.localStorage.getItem('global_dateFormat')+' HH:mm A');
                        $scope.general.expected_start_date = moment($scope.general.expected_start_date).format($window.localStorage.getItem('global_dateFormat')+' HH:mm');
                    }

                    $cookieStore.put('generalEdit', $scope.general);
                }).error(errorCallback);
                //general end

                $window.localStorage.clientproCustomerName = $scope.customer.client;
                $window.localStorage.ContactPerson = $scope.customer.contact;
                $routeParams.ClientIdd = res['client'];
                $window.localStorage.clientproCustomerdataName = res['client'];
                $routeParams.id = $routeParams.ClientIdd;
                rest.path = 'contact';
                rest.model().success(function(data) {
                    var cont = [];
                    angular.forEach(data.data, function(val, i) {
                        cont.push({
                            'id': val.iContactId,
                            'text': val.vFirstName + ' ' + val.vLastName
                        });
                    });

                    angular.element('#conatct-person').select2({
                        allowClear: true,
                        data: cont
                    });
                }).error(errorCallback);

                if ($scope.customer.memo) {
                    $scope.warn = true;
                    $timeout(function() {
                        $scope.warn = false;
                    }, 10000);
                }
            }
        }).error(errorCallback);
    } else {
        $scope.order = [];
        if ($scope.order == "" || $scope.order == null || $scope.order == undefined) {
            $scope.order = {};
        }
        $scope.order.abbrivation = 1;
        rest.path = 'order';
        rest.post($scope.order).success(function(data) {
            $window.localStorage.iUserId = data.order_id;
            $window.localStorage.orderID = data.order_id;
            $window.localStorage.userType = 3;
            $route.reload();
        }).error(errorCallback);
    }


    $scope.getContact = function(id, element) {

        $window.localStorage.setItem('directClientIdStore', id);
        $routeParams.id = id;
        rest.path = 'contact';
        rest.model().success(function(data) {
            var cont = [];
            angular.forEach(data.data, function(val, i) {
                var obj = {
                    'id': val.iContactId,
                    'text': val.vFirstName + ' ' + val.vLastName
                };
                cont.push(obj);
            });
            angular.element('#' + element).select2({
                allowClear: true,
                data: cont
            });
        }).error(errorCallback);

        rest.path = 'orderdataget/' + id;
        rest.get().success(function(data) {
            $scope.orderNumber(data);
        }).error(errorCallback);

        rest.path = 'client/' + $scope.customer.client;
        rest.get().success(function(cData) {
            $scope.directClientData = cData
        }).error(function(data, error, status) {});

    };
    
    //order number get
    $scope.orderNumber = function(id) {
        $window.localStorage.Checkordernm = id;
        rest.path = 'orderNumberget/' + id;
        rest.get().success(function(data) {
            $scope.code = id;
            $scope.number = data + 1;
            angular.element('#order_number_id').val($scope.code + pad($scope.number, 4));
            angular.element('#itemCode').text($scope.code + pad($scope.number, 4));
            $window.localStorage.setItem('projectOrderName', $scope.code + pad($scope.number, 4));
            //angular.element('#order_date').val(dateToformat($scope.date));
            angular.element('#order_date').val(moment($scope.date).format($window.localStorage.getItem('global_dateFormat')+' - HH:mm'));
            angular.element('#companyCode').val(id);
            $scope.CompanyCodeVal = id;
            // $scope.orderNomberData($scope.code, $scope.number);
        }).error(errorCallback);
    }

    $scope.customerCntactpersonEmail = function(action, id) {
        switch (action) {
            case 'customer':
                $routeParams.id = id;
                rest.path = 'clientContactEmail/' + $routeParams.id + '/' + $window.localStorage.orderID;
                rest.get().success(function(data) {
                    notification('Mail send successfully', 'success');
                    $route.reload();
                }).error(errorCallback);
                break;
            case 'contactperson':
                $window.localStorage.contactMsgId = id;
                if (id == undefined) {
                    notification('Please select contact person name', 'warning');
                } else {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'tpl/contactperMsg.html',
                        controller: 'contactPerMsgController',
                        size: '',
                        resolve: {
                            items: function() {
                                return $scope.data;
                            }
                        }
                    });
                }
                break;
            case 'group':
                $window.localStorage.projectTeamMsg = id;
                if (id == undefined) {
                    notification('Please select contact person name', 'warning');
                } else {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'tpl/projectteammsg.html',
                        controller: 'projectTeamMsgController',
                        size: '',
                        resolve: {
                            items: function() {
                                return $scope.data;
                            }
                        }
                    });
                }
        }
    }

    // keydown for number of item
    $scope.keydownevt = function() {
        if (event.keyCode == 69 || event.keyCode == 16) {
            notification('Only allow numbers.', 'warning');
            var val = angular.element('#no_of_items').val('');
            return false;
        }

    };

    $scope.startProject = function(status) {
        if (status == 1) {
            notification('Project already started.', 'warning');
        } else if (status == undefined) {
            notification('Please save data to start project.', 'warning');
        } else {
            var proStartStatus = {
                "project_start_status": 1
            }
            $routeParams.id = $window.localStorage.orderID;
            rest.path = 'projectStartStatus';
            rest.put(proStartStatus).success(function(data) {
                if (data) {
                    notification('Project start successfully.', 'success');
                    $location.path('/items');
                }
            }).error(errorCallback);
        }
    }
    

    $scope.saveGeneral = function(formId) {
        if ($window.localStorage.orderID) {
            if (angular.element("#" + formId).valid()) {
                //general
                if ($scope.general.general_id) {
                    var property = [];
                    var order_no = [];
                    $scope.general.order_no = angular.element("[id^=order_number_id]").val();
                    $scope.general.company_code = angular.element("[id^=companyCode]").val();
                    
                    $scope.general.order_date = angular.element("[id^=order_date]").val();
                    $scope.general.order_date = originalDateFormatDash($scope.general.order_date);
                    $scope.general.order_date = moment($scope.general.order_date).format('YYYY-MM-DD HH:mm:ss');
                    
                    $window.localStorage.orderNumber = $scope.general.order_no;
                    $scope.general.properties = JSON.stringify($scope.properties);
                    $routeParams.id = $scope.general.general_id;
                    var due_timeval1 = angular.element('#due_time').val();
                    $scope.general.due_date = angular.element('#due_date').val();
                    if($scope.general.due_date){
                        $scope.general.due_date = originalDateFormatDash($scope.general.due_date+' - '+due_timeval1);
                        $scope.general.due_date = moment($scope.general.due_date).format('YYYY-MM-DD HH:mm');
                    }
                    
                    $scope.general.expected_start_date = angular.element('#expected_start_date').val();
                    if($scope.general.expected_start_date){
                        $scope.general.expected_start_date = originalDateFormatNew($scope.general.expected_start_date);
                        $scope.general.expected_start_date = moment($scope.general.expected_start_date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    //$scope.general.due_date = angular.element('#due_date').val();
                    $scope.general.project_price = parseFloat(angular.element('#project_price').val());
                    $scope.general.project_name = angular.element('#project_name').val();
                    
                    //Project start recent activity store in cookie
                    if ($scope.general && $cookieStore.get('generalEdit')) {
                        var arr1 = $.map($scope.general, function(el) {
                            return el;
                        });
                        var arr2 = $.map($cookieStore.get('generalEdit'), function(el) {
                            return el;
                        });

                        if (array_diff(arr1, arr2) != "") {
                            var obj = [];
                            if ($cookieStore.get('projectRecentEdit') != undefined) {
                                angular.forEach($cookieStore.get('projectRecentEdit'), function(val, i) {
                                    obj.push(val);
                                });
                            }
                            obj.push($window.localStorage.orderID);
                            $cookieStore.put('projectRecentEdit', obj);
                            $cookieStore.remove('generalEdit');
                        }
                    }

                    //Project end  recent activity store in cookie
                    rest.path = 'general';
                    delete $scope.general['vProjectCoordinator'];
                    delete $scope.general['vProjectManager'];
                    delete $scope.general['vQASpecialist'];

                    rest.put($scope.general).success(function(data) {

                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $scope.general.order_id;
                        $scope.logMaster.log_title = $scope.general.order_no;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "project";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end

                        //set isNewProject to false
                        $window.localStorage.setItem("isNewProject","false");

                        //Update $scope.customer object data
                        $routeParams.id = $scope.customer.c_id;
                        rest.path = 'customer';
                        rest.put($scope.customer).success(function(data) {
                            if (data.indirectData) {
                                $timeout(function() {
                                    $window.localStorage.setItem('indirectCustomerName', data.indirectData.vUserName)
                                    $location.path('/items');
                                }, 500);
                            }

                        }).error(errorCallback);

                        //$location.path('/items');
                    }).error(errorCallback);
                } else {
                    var property = [];
                    var order_no = [];
                    angular.element("[id^=order_number_id]").each(function(i, val) {
                        order_no.push({
                            id: val.id,
                            value: val.value
                        });
                    });

                    $scope.general.company_code = angular.element("[id^=companyCode]").val();
                    $scope.general.properties = JSON.stringify($scope.properties);
                    $scope.general.order_no = angular.element("[id^=order_number_id]").val();
                    
                    $scope.general.order_date = angular.element("[id^=order_date]").val();
                    //$scope.general.order_date = originalDateFormatNew($scope.general.order_date);
                    $scope.general.order_date = originalDateFormatDash($scope.general.order_date);
                    $scope.general.order_date = moment($scope.general.order_date).format('YYYY-MM-DD HH:mm:ss');
                    
                    $scope.general.expected_start_date = angular.element('#expected_start_date').val();
                    if($scope.general.expected_start_date){
                        $scope.general.expected_start_date = originalDateFormatNew($scope.general.expected_start_date);
                        $scope.general.expected_start_date = moment($scope.general.expected_start_date).format('YYYY-MM-DD HH:mm:ss');
                    }
                    /*$scope.general.due_date = angular.element('#due_date').val();
                    if($scope.general.due_date){
                        $scope.general.due_date = originalDateFormatNew($scope.general.due_date);
                        $scope.general.due_date = moment($scope.general.due_date).format('YYYY-MM-DD HH:mm:ss');
                    }*/
                    var due_timeval1 = angular.element('#due_time').val();
                    $scope.general.due_date = angular.element('#due_date').val();
                    if($scope.general.due_date){
                        $scope.general.due_date = originalDateFormatDash($scope.general.due_date+' - '+due_timeval1);
                        $scope.general.due_date = moment($scope.general.due_date).format('YYYY-MM-DD HH:mm');
                    }

                    $window.localStorage.orderNumber = $scope.general.order_no;
                    $scope.general.order_id = $window.localStorage.orderID;
                    $scope.general.project_status = $scope.proStatusData.pr_status_id;
                    $scope.general.project_createdBy = $window.localStorage.getItem('session_iUserId');
                    
                    rest.path = 'general';
                    rest.post($scope.general).success(function(data) {
                        $window.localStorage.setItem('tmpOrderId', data.order_data.order_id);
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = $scope.general.order_id;
                        $scope.logMaster.log_title = $scope.general.order_no;
                        $scope.logMaster.log_type = "add";
                        $scope.logMaster.log_status = "project";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end

                        $cookieStore.put('projectRecentEdit', $window.localStorage.orderID);
                        //$location.path('/items');
                    }).error(errorCallback);

                    //customer
                    $timeout(function() {

                        if ($scope.customer.c_id) {
                            $window.localStorage.ContactPerson = $scope.customer.contact;
                            $window.localStorage.clientproCustomerName = $scope.customer.client;
                            $routeParams.id = $scope.customer.c_id;
                            rest.path = 'customer';
                            rest.put($scope.customer).success(function(data) {

                            }).error(errorCallback);
                        } else {

                            $window.localStorage.ContactPerson = $scope.customer.contact;
                            $window.localStorage.clientproCustomerName = $scope.customer.client;
                            $scope.project_coordinator = angular.element('#projectCoordinator').val();
                            $scope.project_manager = angular.element('#projectManager').val();
                            $scope.QA_specialist = angular.element('#qaSpecialist').val();
                            $scope.customer.project_coordinator = $scope.project_coordinator;
                            $scope.customer.project_manager = $scope.project_manager;
                            $scope.customer.QA_specialist = $scope.QA_specialist;
                            $scope.customer.order_id = $window.localStorage.orderID;
                            rest.path = 'customer';
                            rest.post($scope.customer).success(function(data) {

                            }).error(errorCallback);

                            $scope.or = {};
                            $scope.order_number = angular.element("[id^=order_number_id]").val();
                            //$scope.abbrivation = angular.element("[id^=companyCode]").val();
                            $scope.or.order_number = $scope.order_number.slice(-4);
                            //$scope.or.abbrivation = $scope.abbrivation;
                            $scope.or.abbrivation = $scope.CompanyCodeVal;
                            $routeParams.id = $window.localStorage.orderID;
                            rest.path = 'order';
                            rest.put($scope.or).success(function(data) {
                                $window.localStorage.iUserId = data.order_id;
                                $window.localStorage.userType = 3;
                            }).error(errorCallback);

                            // //filemanager add order id                
                            // $scope.cu = {};
                            // $scope.order_number = angular.element("#order_number_id").val();
                            // $scope.cu.order_number = $scope.order_number;
                            // $routeParams.id = $window.localStorage.orderID;
                            // rest.path = 'orderfileSave';
                            // rest.put($scope.cu).success(function(data) {

                            // }).error(errorCallback);
                        }
                    }, 100);

                    /*Add Number Of Items in item Section defined in general section START*/
                    // var OId = $window.localStorage.getItem('tmpOrderId') 
                    // if(OId != null || OId !=undefined || OId !=''){
                    //     $timeout(function() {
                    //         $scope.ItemData =  {} 
                    //         $scope.ItemData.no_of_items = $scope.general.no_of_items;
                    //         $scope.ItemData.order_id = $window.localStorage.getItem('tmpOrderId');
                    //         rest.path = 'AddNumberOfItems';
                    //         rest.post($scope.ItemData).success(function(data) {

                    //         }).error(errorCallback);
                    //     },550);
                    // }else{
                    //     notification('error','warning');
                    // }

                    $timeout(function() {
                        $location.path('/items');
                        //set isNewProject to false
                        $window.localStorage.setItem("isNewProject","false");
                    }, 100);

                    /*Add Number Of Items in item Section defined in general section END*/
                }
            }
        } else {
            notification('Please Create order First', 'warning');
        }
    };

    $scope.generalFilemanager = function() {
        var checkOrder = angular.element("[id^=order_number_id]").val();
        if ($window.localStorage.orderID && checkOrder) {
            var property = [];
            var order_no = [];

            angular.element("[id^=order_number_id]").each(function(i, val) {
                order_no.push({
                    id: val.id,
                    value: val.value
                });
            });

            $scope.general.company_code = angular.element("[id^=companyCode]").val();
            $scope.general.properties = JSON.stringify($scope.properties);
            $scope.general.order_no = angular.element("[id^=order_number_id]").val();
            $scope.general.order_date = angular.element("[id^=order_date]").val();
            $scope.general.due_date = angular.element('#end_date').val();
            $window.localStorage.orderNumber = $scope.general.order_no;
            $scope.general.order_id = $window.localStorage.orderID;

            rest.path = 'general';
            rest.post($scope.general).success(function(data) {
                $location.path('/filemanager/general');
            }).error(errorCallback);
        } else {
            notification("Please first create project customer", "warning");
        }
    }

    $scope.generalEmail = function(id) {
        if (id != undefined && id != " " && id != null) {
            $window.localStorage.generalMsg = id;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'tpl/generalmsg.html',
                controller: 'generalmsgController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
        } else {
            notification('Please Add Email', 'warning');
        }
    };
    /* Redirect To Project Jobs Section */
    $scope.goTojobDetail = function() {
        $location.path('/jobs-detail/' + $window.localStorage.orderID);
    }

    $scope.openProfile = function(directClientId) {
        $routeParams.clientId = directClientId;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/profileView.html',
            controller: 'profileViewController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
    };

    $scope.AccountChange = () => {
        var account = angular.element('#indirect_customer').select2('data');
        console.log("account", account);
        $scope.indirectCustomerName = account.text;
        $window.localStorage.setItem('indirectCustomerName', account.text);
    }
}).controller('profileViewController', function($scope, $log, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $routeParams.id = $routeParams.clientId;
    if ($routeParams.id) {
        rest.path = 'viewdirectdataget/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.info = data;
            /*rest.path = 'getTaxName/' + $scope.info.vTextType;
            rest.get().success(function(data) {
                $scope.info.vTextType = data.tax_name;
            }).error(errorCallback);*/
            if (data.address1Detail) {
                angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                    angular.element('#' + val.id).html(val.value);
                });
            }

            angular.element('#iBussinessDeveloper').html(data.iBussinessDeveloper);
            var CountryCode = JSON.parse(data.vPhone).countryTitle;
            var displayCode = '(+' + CountryCode.split('+')[1] + ')';
            $scope.info.vPhone = displayCode + ' ' + JSON.parse(data.vPhone).mobileNumber;
            if (data.Invoice != " ") {
                angular.forEach(JSON.parse(data.Invoice), function(val, i) {
                    angular.element('#' + val.selectInvoice).text(val.invoice);
                });
            }

            $scope.email = JSON.parse(data.Invoice);
            $scope.address1 = JSON.parse(data.address1Detail);
            $scope.address2 = JSON.parse(data.address2Detail);
        }).error(errorCallback);

        rest.path = 'viewcontactdirectEdit/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.contactlist = data;
        }).error(errorCallback);

        rest.path = 'getClientpayment/' + $routeParams.id;
        rest.get().success(function(data) {

            if (data == null) {
                $scope.paymentData = {};
            } else {
                $scope.paymentData = data;
            }

            if (data != null) {
                $scope.payment = JSON.parse(data.vPaymentInfo);
                $scope.bank = JSON.parse(data.vBankInfo);
            }

        }).error(errorCallback);

        rest.path = 'clientdirect_login_details/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.clientlist1 = data;
        }).error(errorCallback);

        rest.path = 'PriceListDirectEditgetone/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.price = data;
            var currency = data.currancy_id.split(',');
            $scope.currencySymbole = currency[1];
            $scope.currencyCode = currency[0];
            $scope.translate = JSON.parse(data['translation']);
            $scope.proofreading = JSON.parse(data['proofreading']);
            $scope.tep = JSON.parse(data['tep']);
        })
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}).controller('generalmsgController', function($scope, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.generalMsg;

    $scope.bccShow = function() {
        $scope.bccshow = true;
    }
    $scope.ccHideShow = function() {
        angular.element('#ccHideShow').toggleClass('none');
    }
    $scope.bccHideShow = function() {
        angular.element('#bccHideShow').toggleClass('none');
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $timeout(function() {
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').remove();
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').remove();
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').remove();
    }, 500);

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                $scope.attachementfile = result;
            });
        $scope.fileAttatchName = file.name;
    };

    rest.path = 'generalMsg';
    rest.get().success(function(data) {
        $scope.cPersonMsg = [];
        $scope.cPersonMsg = data;
        $scope.cPersonMsg.vEmailAddress = $window.localStorage.generalMsg;
        $scope.cPersonMsg.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.sign_detail + '</br><img src="' + data.sign_image + '" width="100px"></div>';
    }).error(errorCallback);

    $scope.ok = function(frmId, message) {
        var data = {
            "file": $scope.attachementfile,
            "data": message
        };

        if (angular.element("#" + frmId).valid()) {
            rest.path = 'sendgeneralMsg';
            rest.post(data).success(function(data) {
                notification('Mail send successfully', 'success');
            }).error(errorCallback);
            $timeout(function() {
                $uibModalInstance.close(data);
                $route.reload();
            }, 100)
        }
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('itemsController', function(allLanguages,$filter, $scope, $log, $window, $compile, $timeout, $uibModal, rest, $route, $rootScope, $routeParams, $location, $cookieStore,$interval) {
    //$window.localStorage.scoopfolderId = $routeParams.id;
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.isNewProject = $window.localStorage.getItem("isNewProject");
    if($scope.isNewProject === 'true'){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
        return false;
    }
    if($window.localStorage.orderID == undefined){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
        return false;
    }
    $scope.orderID = $window.localStorage.orderID;
    $window.localStorage.jobitStatus = " ";
    $scope.EditedBy = $window.localStorage.getItem('sessionProjectEditedBy');
    $scope.dateFormatGlobal = $window.localStorage.getItem('global_dateFormat');
    $scope.itemList = [];
    $timeout(function() {
        $scope.indirectCustomerName = $window.localStorage.getItem('indirectCustomerName');
    }, 200);

    $scope.jobDiscussion = function() {
        $location.path('discussion/' + $window.localStorage.projectJobChainOrderId);
    }

    $timeout(function() {
        $scope.projectOrderName = $window.localStorage.getItem('projectOrderName');
    }, 100);

    if ($window.localStorage.clientproCustomerName) {
        var clinet_id;
        clinet_id = $window.localStorage.clientproCustomerName;
        rest.path = 'client/' + clinet_id;
        rest.get().success(function(data) {
            $scope.clientData = data;
            $timeout(function() {
                if ($scope.clientData.client_currency) {
                    $scope.ClientCurrency = $scope.clientData.client_currency.split(',')[1];
                    $scope.ClientCurrencyName = $scope.clientData.client_currency.split(',')[0];
                }
                angular.element('#crnt1Cur').text($scope.ClientCurrency);
                angular.element('#currency').text($scope.ClientCurrencyName);
            }, 100);
        }).error(errorCallback);
    }

    if ($window.localStorage.orderID) {

        //getting ProjectOrderName and indirect clint name
        rest.path = 'getClientIndirectClient/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            if(data.order_number){
                $scope.projectOrderData = data;
                var projectOrderName = $scope.projectOrderData.abbrivation + pad($scope.projectOrderData.order_number, 4);
                $window.localStorage.setItem("projectOrderName",projectOrderName);
                $window.localStorage.setItem("indirectCustomerName",$scope.projectOrderData.indirect_customer);
            }
        }).error(errorCallback);



        //get single order Detail
        rest.path = 'getOrderSingle/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.orderData = data;
        }).error(errorCallback);

        rest.path = 'usertaskodueDategate/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.dueDateItem = data;
        }).error(errorCallback);

        rest.path = 'masterPriceitemget/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.masterPrice = data;
        }).error(errorCallback);

        rest.path = 'childPriceitemget';
        rest.get().success(function(data) {
            $scope.childPrice = data;
        }).error(errorCallback);

        //currency update
        rest.path = 'orderCurrencyMatch/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            if (data.currency) {
                var cur = JSON.parse(data.currency);

                angular.element('#currencyCh').select2('val', cur[0].currency);
                angular.element('#crntCur').text(cur[0].currency);
                angular.element('#defCur').text(data.defCurrency);
                angular.element('#curRate').text(cur[0].curRate);

            }
        }).error(errorCallback);

        //check itemfile manager and delete
        rest.path = "itemFilemanager/" + $window.localStorage.orderID;
        rest.delete().success(function(data) {
            if (data != 'No Item') {
                $route.reload();
            }
        }).error(errorCallback);
    }

    $scope.itemfolderOpen = function(id) {
        closeWindows();
        localStorage['scoopfolderId'] = id;
        $window.localStorage.ItemClient = '';
        $window.localStorage.ItemFolderid = id;
        // start to get downloaded folder name with client name
        rest.path = 'customer/' + $window.localStorage.orderID;
        rest.get().success(function(res) {
            $scope.customer = res;
            if (res) {
                rest.path = 'client/' + $scope.customer.client;
                rest.get().success(function(cData) {
                    $scope.directClientData = cData
                    $window.localStorage.ItemClient = $scope.directClientData.vUserName;
                }).error(function(data, error, status) {});
            }
        })
        // end
        var ItemcodeNumber = angular.element('.itemCode'+id).text();
        //var ItemClient = angular.element('.itemClient'+id).text();
        $window.localStorage.ItemcodeNumber = ItemcodeNumber;
        var itemPopup = $window.open('#/filemanage/item', "popup", "width=1000,height=650");
        itemPopup.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            var id1 = $window.localStorage.getItem("scoopFolderRoot");
            
            // files count 
            rest.path = 'getFilestotal/' + id;
                rest.get().success(function(data) {
                    if(data){
                        $scope.Filestotal = data[0].totalfile;
                    }
                    //angular.element('#filescount' + id).text($scope.Filestotal);
                    $('#filescount' + id).text($scope.Filestotal);
                }).error(errorCallback);
            // files couunt end
            console.log('filecount',$scope.Filestotal);
                 
            return false;
        }, false);

        openWindows.push(itemPopup);

        var pollTimer = window.setInterval(function() {
        if (itemPopup.closed !== false) { // !== is required for compatibility with Opera
            window.clearInterval(pollTimer);
            // files count //
            rest.path = 'getFilestotal/' + id;
                rest.get().success(function(data) {
                    if(data){
                        $scope.Filestotal = data[0].totalfile;
                    }
                    angular.element('#filescount' + id).text($scope.Filestotal);
                }).error(errorCallback);
            // files couunt end //
            }
        }, 200);
    }
    var getCountScoopFolder = function(){
        var count = $window.localStorage.getItem("scoopFolderCount");
        if(!count){
            count = 0;
        }
        var id = $window.localStorage.getItem("scoopfolderId");
        //console.log('scoopid',id);
        //console.log('scoop-foldercount',count);
        //$('#sourceCount-'+id).text(count);
        //$('#filescount'+id).text(count);
    }

    $interval(getCountScoopFolder,1000);
    
    $scope.closeItem = function(frmId) {
        $route.reload();
    }

    $scope.itemAmountChilprice = function(id) {
        rest.path = 'childPriceitemAmountget/' + id;
        rest.get().success(function(data) {
            $scope.itemAmount = data.rate;
        })
    }



    $scope.$on('pls.onLanguageChanged', function(evt, lang) {
        lang.id = lang.id.replace(/[0-9]/g, '');
        var eleId =  evt.targetScope.id.replace(/\D/g,'');
        if (lang.id == 'plsSourceLang') {
            angular.element('#source_lang'+eleId).text(lang.lang.name.trim());
            var sourceField = angular.element("div#"+evt.targetScope.id).children("a.pls-selected-locale");
            var sourceImg = sourceField.children('img');
            angular.element("div#"+evt.targetScope.id).children("a.pls-selected-locale").text('');
            sourceField.append(sourceImg);
            var sourceImg = sourceField.children('img').after(lang.lang.name);
        } else if (lang.id == 'plsTargetLang') {
            angular.element('#target_lang'+eleId).text(lang.lang.name.trim());
            var targetField = angular.element("div#"+evt.targetScope.id).children("a.pls-selected-locale");
            var targetImg = targetField.children('img');
            angular.element("div#"+evt.targetScope.id).children("a.pls-selected-locale").text('');
            targetField.append(targetImg);
            var targetImg = targetField.children('img').after(lang.lang.name);
        }
        var itemIndex = parseInt(angular.element("#indexItemSource"+eleId).text());
        
        var source = angular.element('#source_lang'+eleId).text();
        var target = angular.element('#target_lang'+eleId).text();
        console.log("evt.targetScope.id", evt.targetScope.id);
        if ($scope.itemList[itemIndex].item_number) {
            var item_number = pad($scope.itemList[itemIndex].item_number, 3);
        } else {
            var item_number = angular.element('#item_number'+eleId).text();
        }
        if ($scope.item == undefined || $scope.item == null || $scope.item == "") {
            $scope.item = {};
        }
        if (target == undefined || target == null || target == "") {
            target = '';
        }
        if (source == undefined || source == null || source == "") {
            source = '';
        }

        var indirectCustomerName = $window.localStorage.getItem('indirectCustomerName');
        if (source && !target) {
           $scope.itemList[itemIndex].item_name = indirectCustomerName + ' | ' + source + ' - English (US)';
        } else if (!source && target) {
           $scope.itemList[itemIndex].item_name = indirectCustomerName + ' | English (US) - ' + target;
        } else {
           $scope.itemList[itemIndex].item_name = indirectCustomerName + ' | ' + source + '-' + target;
        }

    });

    $scope.plsModel = {
        languages40: allLanguages,
    };
    //console.log('$scope.plsModel',$scope.plsModel.languages40);
    $timeout(function() {    
        if($scope.plsModel){
            angular.forEach($scope.plsModel.languages40, function(val, i) {
                //console.log('title',val.title);
                if(val.is_favourite == 1){
                    $('.allsourcelang').find('a[title="' + val.title +'"]').addClass('favlang');
                    $('.alltargetlang').find('a[title="' + val.title +'"]').addClass('favlang');
                }
            });
        }    
                        
    },2000);


    $scope.itemQuentityDelete = function(id,index,parentIndex) {
        
        var totalPrice1 = $scope.itemList[parentIndex].total_price;
        var totalPrice = totalPrice1.toFixed(2);
        
        var price1 = $scope.itemPriceUni[id][index].itemTotal;
        
        var price = numberFormatCommaToPoint(price1);
        
        if (totalPrice == price) {
           $scope.itemList[parentIndex].total_price = 0;
        } else {
           var total = totalPrice - price;
           $scope.itemList[parentIndex].total_price = total;
        }
        
        $scope.itemPriceUni[id].splice(index, 1);
    }

     

    $scope.itemPriceUni = [];
    //change item price module
    $scope.changeItemField = function(id,index,parentIndex,itemChng=0) {
        var quantity = $scope.itemPriceUni[id][index].quantity;
        var itemPrice = $scope.itemPriceUni[id][index].itemPrice;
        var itemTtl = $scope.itemPriceUni[id][index].itemTotal;
        var itemAmt = $scope.itemPriceUni[id][index].amtSum;
        if(!quantity || !itemPrice){
            quantity = 0;
            itemPrice = 0;
        }
        if(!itemTtl){
            itemTtl = 0;
        }
        //$scope.itemPriceUni[id][index].itemTotal = numberFormatComma(itemTtl);
        itemPrice = numberFormatCommaToPoint(itemPrice);
        if(itemPrice == ''){
           itemPrice =0; 
        }
        var price = quantity * parseFloat(itemPrice);
        var oldPrice1 = $scope.itemPriceUni[id][index].itemTotal;
        if(!oldPrice1){
            var oldPrice = 0;
        }else{
            var oldPrice = numberFormatCommaToPoint(oldPrice1);
            
            /*if(oldPrice1.toString().includes(',')==true){
                var oldPrice = numberFormatCommaToPoint(oldPrice1);
            }else{
                var oldPrice = oldPrice1;
            }*/
        }
        
        if(itemChng>0){
            price = numberFormatCommaToPoint(itemTtl);
            if(!price){
                price=0;
            }
            //oldPrice = amtTotal;    
            if (typeof itemAmt !== 'undefined'){
                var oldPrice = $scope.itemPriceUni[id][index].amtSum;
            }
            if (typeof itemAmt === 'undefined'){
                var oldPrice = quantity * parseFloat(itemPrice);
            }
        }
        if(!oldPrice){
           oldPrice =0; 
        }
        var total = $scope.itemList[parentIndex].total_price;
        
        var totalPrice = (parseFloat(total) + parseFloat(price)) - parseFloat(oldPrice);
        //$scope.itemPriceUni[id][index].itemTotal = numberFormatComma(price2);
        if(itemChng>0){
            $scope.itemPriceUni[id][index].itemTotal = itemTtl;
        }else{
            //$scope.itemPriceUni[id][index].itemTotal = price;
            $scope.itemPriceUni[id][index].itemTotal = numberFormatComma(price);
        }
        $scope.itemPriceUni[id][index].amtSum = price;
        $scope.itemList[parentIndex].total_price = totalPrice;
    }
        //create item
    $scope.createItems = function() {
        $scope.order_idddd = $window.localStorage.orderID;

        //Creating Number of items based on input start
        var dialog = bootbox.dialog({
            title: "Add scoop",
            message: '<div class="row">'+  
            '<script>function myFunction() {$("#numOfItems").next().css("display","none");$("#numOfItems").parent().parent().removeClass("has-error")}</script>' +
                '<div class="col-md-12"> ' +
                '<div> ' +
                '<div class="form-group"> ' +
                '<label class="col-md-4 control-label" for="name">Enter No of scoop : </label> ' +
                '<div class="col-md-4"> ' +
                '<input id="numOfItems" name="numOfItems" onchange="myFunction()" type="number" min="1" max="10" class="form-control input-md" required> ' +
                '<span for="Name" class="help-block" style="display: none;">This field is required.</span>' +
                '</div> </div>  </div>',
            buttons: {
                success: {
                    label: "Save",
                    onEscape: true,
                    className: "btn-info",
                    callback: function() {
                        var noItemVal = $('#numOfItems').val();
                        if (!noItemVal) {
                            $('#numOfItems').parent().parent().addClass('has-error');
                            $('#numOfItems').next().css('display','block');
                            return false;
                        } else {
                            if (noItemVal > 0 && noItemVal <= 10) {
                                $scope.ItemData = {}
                                $scope.ItemData.no_of_items = noItemVal;
                                $scope.ItemData.order_id = $window.localStorage.getItem('orderID');
                                rest.path = 'AddNumberOfItems';
                                rest.post($scope.ItemData).success(function(data) {
                                    notification('Items created successfully.', 'success');
                                    $timeout(function() {
                                        $route.reload();
                                    }, 100);
                                }).error(errorCallback);
                            } else {
                                notification('Enter positive number and max value upto 10.', 'warning');
                                return false;
                            }
                        }
                    }
                }
            }
        });



        /*rest.path = 'itemsNumberGet/' + $scope.order_idddd;
        rest.get().success(function(data) {
            $scope.item_number = data.itemNumber;
            $scope.itemId = data.itemId;
            var currentdate = new Date();
            $scope.item = {};
            $scope.item.itemId = $scope.itemId;
            $scope.item.start_date = currentdate.getDate() + "." +
                (currentdate.getMonth() + 1) + "." +
                currentdate.getFullYear() + " " +
                currentdate.getHours() + ":" +
                currentdate.getMinutes()

            angular.element("#itemstatus").select2('val', 'In preparation');
            $scope.disabledStatus = true;
        }).error(errorCallback);*/

        //getClient By OrderId
        rest.path = 'customer/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            rest.path = 'getIndirectClient/' + data.indirect_customer;
            rest.get().success(function(data) {
                $scope.indirectCustomer = data.vUserName;

                if ($scope.item == undefined) {
                    $scope.item = {};
                }
                $timeout(function() {
                    $scope.item.item_name = $scope.indirectCustomer + ' | English (US) - English (US)';

                    //New Itemname with order(Project)number.
                    var itemName = $("#item_number").text();
                    $scope.item.item_name += ' - ' + $scope.projectOrderName + '-' + itemName;

                    $("textarea#item_name").val($scope.item.item_name);
                }, 100);

            }).error(errorCallback);
        }).error(errorCallback);

        //currency
        rest.path = 'orderCurrencyMatch/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            if (data.currency) {
                var cur = JSON.parse(data.currency);

                angular.element('#currencyCh').select2('val', cur[0].currency);
                angular.element('#defCur').text(data.defCurrency);
                angular.element('#crntCur').text(cur[0].currency);

                angular.element('#curRate').text(cur[0].curRate);
            }
        }).error(errorCallback);


        $routeParams.id = $window.localStorage.getItem('directClientIdStore');
        rest.path = 'contact';
        rest.model().success(function(data) {
            var cont = [];
            angular.forEach(data.data, function(val, i) {
                var obj = {
                    'id': val.iContactId,
                    'text': val.vFirstName + ' ' + val.vLastName
                };
                cont.push(obj);
            });
            angular.element('#contactPerson').select2({
                allowClear: true,
                data: cont
            });
        }).error(errorCallback);
        //$scope.myitems = true;


        //Default Values For language selector
        $scope.myitemhide = false;
        angular.element('#source_lang').text('English (US)');
        angular.element('#target_lang').text('English (US)');

        var sourceField = angular.element("div#plsSourceLang").children("a.pls-selected-locale");
        var targetField = angular.element("div#plsTargetLang").children("a.pls-selected-locale");
        var sourceImg = sourceField.children('img');
        var targetImg = targetField.children('img');

        angular.element("div#plsSourceLang").children("a.pls-selected-locale").text('');
        angular.element("div#plsTargetLang").children("a.pls-selected-locale").text('');

        sourceField.append(sourceImg);
        targetField.append(targetImg);

        sourceField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
        sourceField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
        sourceField.children().attr('alt', 'United States');

        targetField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
        targetField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
        targetField.children().attr('alt', 'United States');

        var sourceImg = sourceField.children('img').after('English (US)');
        var targetImg = targetField.children('img').after('English (US)');

        angular.element('#totalItemPrice').text('0.0');

        angular.element('[id^=totalItem_]').remove();

        $scope.itemPriceUni = [];

    }

    $scope.order_id = $window.localStorage.orderID;
    if ($scope.order_id != " ") {
        $routeParams.id = $scope.order_id;
        rest.path = 'contactPerson';
        rest.model().success(function(data) {
            var cor = [];
            var man = [];
            angular.forEach(data, function(val, i) {
                if (val.vResourceType == 1) {
                    cor.push(val.iUserId);
                }

                if (val.vResourceType == 2) {
                    man.push(val.iUserId);
                }
            })

            $timeout(function() {
                angular.element('#manager').select2('val', man);
                angular.element('#coordinator').select2('val', cor);
            }, 1000);
        }).error(errorCallback);
    }

    $scope.ItemNext = function(formId, id) {

        $location.path('/jobs-detail/' + $window.localStorage.orderID);
    }


    $scope.changeCurrency = function(id) {
        angular.element('#currency').text(id);
        var defaultCur = angular.element('#currencyDef').text();
        var newCur = id;
        rest.path = "itemCurrency/" + id;
        rest.get().success(function(data) {

            angular.element('#currencyCh').select2('val', data.currency);
            angular.element('#defCur').text(data.defCurrency);
            angular.element('#crntCur').text(data.currency);

            angular.element('#curRate').text(data.currencyRate);
        });
    }

    $scope.jobi = {};
    $scope.saveitems = function(formId,formIndex) {
        if (angular.element('#item-form' + formId).valid()) {
            if ($window.localStorage.orderID) {
                if ($scope.itemList[formIndex].itemId) {
                    var itemPriceUnit = [];
                    itemPriceUnit = $scope.itemPriceUni[formId];
                    if(itemPriceUnit){
                        for(var j=0;j<itemPriceUnit.length;j++){
                            itemPriceUnit[j].itemTotal = numberFormatCommaToPoint(itemPriceUnit[j].itemTotal);
                        }
                    }
                    $scope.itemList[formIndex].price = JSON.stringify(itemPriceUnit);
                    delete $scope.itemList[formIndex]['itemPrice'];
                    delete $scope.itemList[formIndex]['quantity'];

                    if ($scope.itemList[formIndex].item_number != undefined) {
                        $scope.itemList[formIndex].item_number;

                    } else {
                        $scope.itemList[formIndex].item_number = angular.element('#item_number').text();
                        $scope.itemList[formIndex].item_number = $scope.itemList[formIndex].item_number.replace(/^0+/, '');
                    }

                    
                    $scope.itemList[formIndex].order_id = $window.localStorage.orderID;
                    $scope.itemList[formIndex].total_amount = $scope.total_amount;

                    
                    var sourceField = angular.element("div#plsSourceLang"+formId).children("a.pls-selected-locale");
                    var targetField = angular.element("div#plsTargetLang"+formId).children("a.pls-selected-locale");

                    var srcLang = angular.element("div#plsSourceLang"+formId).children("a.pls-selected-locale").text().trim();
                    var trgLang = angular.element("div#plsTargetLang"+formId).children("a.pls-selected-locale").text().trim();

                    var sourceObj = {
                        sourceLang: srcLang,
                        dataNgSrc: sourceField.children().attr('data-ng-src'),
                        alt: sourceField.children().attr('alt')
                    }

                    var targetObj = {
                        sourceLang: trgLang,
                        dataNgSrc: targetField.children().attr('data-ng-src'),
                        alt: targetField.children().attr('alt')
                    }

                    $scope.itemList[formIndex].source_lang = JSON.stringify(sourceObj);
                    $scope.itemList[formIndex].target_lang = JSON.stringify(targetObj);
                    
                    $scope.itemList[formIndex].total_amount = $scope.itemList[formIndex].total_price;

                    /*if(!$scope.itemList[formIndex].total_amount || $scope.itemList[formIndex].price ==undefined){
                        $scope.itemList[formIndex].total_amount = 0
                        $scope.itemList[formIndex].total_price = 0
                        //$scope.itemList[formIndex].price = ''
                    }*/
                    
                    if ($scope.itemList[formIndex].attached_workflow) {
                        if($('#jobchainName'+formId).val() !== 'select'){
                            notification('workflow already attached', 'warning');
                        }
                    } else {
                        if ($('#jobchainName'+formId).val() == 'select' || $('#jobDropDown'+formId).val() == 'select') {
                            notification('Please select workflow.', 'warning');
                            //setting total amount to 0 in table listing
                            $scope.TblItemList[formIndex].total_amount = 0;
                            return false;
                        } else {
                            if ($scope.jobi.jobSummery) {
                                // gettingName of selected workflow job chain
                                $scope.itemList[formIndex].attached_workflow = 'SingleJob -' + $('#jobchainName'+formId).find(':selected').text();

                                $scope.jobitem = {};
                                var dd = $scope.jobi.jobSummery;
                                $scope.jobi.jobSummery = dd.substr(1);
                                $scope.matchjob = dd.slice(0, 1);
                                if ($scope.matchjob == 'j') {
                                    rest.path = 'jobpertjobGet/' + $scope.jobi.jobSummery + '/' + $window.localStorage.orderID;
                                    rest.get().success(function(data) {
                                        $scope.itemdata = data;
                                        $scope.jobitem.item_id = $scope.itemList[formIndex].item_number;
                                        if ($scope.jobitem.item_id) {
                                            rest.path = 'jobitemsidget/' + $scope.jobitem.item_id + '/' + $window.localStorage.orderID;
                                            rest.get().success(function(data) {
                                                $scope.iData = data;
                                                var contact_person = [];
                                                var job_id = [];
                                                var order_id = [];
                                                var job_no = [];
                                                var due_date = [];
                                                var item_status = [];
                                                $scope.job_id = $scope.jobi.jobSummery;
                                                $scope.job_code = $scope.itemdata.job_code;
                                                $scope.order_id = $window.localStorage.orderID;
                                                $scope.job_no = $scope.itemdata.job_no;
                                                $scope.master_job_id = $scope.itemdata.job_id;

                                                if ($scope.iData != null) {
                                                    $scope.contact_person = $scope.iData.contact_person;
                                                    $scope.due_date = $scope.iData.due_date;
                                                    $scope.item_status = $scope.iData.item_status;
                                                } else {
                                                    $scope.contact_person = "";
                                                    $scope.due_date = "";
                                                    $scope.item_status = "";
                                                }
                                                
                                                $scope.jobitem.job_no = $scope.job_no;
                                                $scope.jobitem.job_id = $scope.job_id;
                                                $scope.jobitem.job_code = $scope.job_code;
                                                $scope.jobitem.contact_person = $scope.contact_person;
                                                $scope.jobitem.order_id = $window.localStorage.orderID;
                                                $scope.jobitem.due_date = $scope.due_date;
                                                $scope.jobitem.master_job_id = $scope.master_job_id;
                                                if ($scope.job_no == undefined) {
                                                    $scope.job_no = 1;
                                                }
                                                if ($scope.iData) {
                                                    $scope.po_number = $scope.iData.abbrivation + pad($scope.iData.order_number, 4) + '_' + $scope.job_code + pad($scope.job_no, 3);
                                                    $scope.jobitem.tmp_po_number = $scope.po_number;
                                                }

                                                /* Job Status To New When Creating New Job*/
                                                $scope.jobitem.item_status = 'New';

                                                // Remove if Display Assign PO Link
                                                //$scope.jobitem.po_number = '';
                                                $scope.jobitem.po_number = $scope.jobitem.tmp_po_number;
                                                
                                                $scope.jobitem.price = '';
                                                $scope.jobitem.total_price = parseFloat(0.00); 
                                                rest.path = 'jobSummarySave';
                                                rest.post($scope.jobitem).success(function(data) {
                                                    if (data) {
                                                        var obj = [];
                                                        if ($cookieStore.get('jobRecentAdd') != undefined) {
                                                            angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                                                obj.push(val);
                                                            });
                                                        }
                                                        obj.push(data['order_id']);
                                                        $cookieStore.put('jobRecentAdd', obj);
                                                        //$route.reload();
                                                    } else {
                                                        notification('Job already exists in this scoop.', 'error');
                                                    }
                                                })
                                            })
                                        }
                                    }).error(errorCallback);
                                } else {
                                    var chainId = $scope.itemList[formIndex].item_number;

                                    // gettingName of selected workflow job chain
                                    $scope.itemList[formIndex].attached_workflow = 'jobChain -' + $('#jobchainName').find(':selected').text();
                                    if (chainId != undefined) {
                                        rest.path = 'jobpertjobChainGet/' + $scope.jobi.jobSummery + '/' + $window.localStorage.orderID + '/' + chainId;
                                        rest.get().success(function(data) {
                                            $scope.jobnumchain = data.job_no += 1;
                                            $scope.ijNum = 1;
                                            if (data.newJob == "") {
                                                notification('No job in jobchain', 'warning');
                                            } else {
                                                angular.forEach(data.newJob, function(val, i) {
                                                    if (chainId) {
                                                        rest.path = 'jobitemsidget/' + chainId + '/' + $window.localStorage.orderID;
                                                        rest.get().success(function(data) {
                                                            $scope.iData = data;
                                                            var contact_person = [];
                                                            var job_id = [];
                                                            var order_id = [];
                                                            var job_no = [];
                                                            var due_date = [];
                                                            var item_status = [];
                                                            $scope.job_id = $scope.jobi.jobSummery;
                                                            $scope.job_code = val.job_code;
                                                            $scope.order_id = $window.localStorage.orderID;
                                                            $scope.master_job_id = val.job_id;
                                                            $scope.job_no = $scope.jobnumchain++;
                                                            if (!$scope.job_no) {
                                                                $scope.job_no = $scope.ijNum++;
                                                            }

                                                            if ($scope.iData != null) {
                                                                $scope.contact_person = $scope.iData.contact_person;
                                                                $scope.due_date = $scope.iData.due_date;
                                                                $scope.item_status = $scope.iData.item_status;
                                                            } else {
                                                                $scope.contact_person = "";
                                                                $scope.due_date = "";
                                                                $scope.item_status = "";
                                                            }
                                                            if ($scope.jobitem == undefined || $scope.jobitem == "" || $scope.jobitem == null) {
                                                                $scope.jobitem = {};
                                                            }

                                                            $scope.jobitem.job_no = $scope.job_no;
                                                            $scope.jobitem.master_job_id = $scope.master_job_id;
                                                            $scope.jobitem.job_id = $scope.master_job_id;
                                                            // $scope.jobitem.job_id = $scope.job_id;
                                                            $scope.jobitem.job_code = $scope.job_code;
                                                            $scope.jobitem.contact_person = $scope.contact_person;
                                                            $scope.jobitem.order_id = $window.localStorage.orderID;
                                                            $scope.jobitem.due_date = $scope.due_date;
                                                            if ($scope.job_no == undefined) {
                                                                $scope.job_no = 1;
                                                            }
                                                            if ($scope.iData) {
                                                                $scope.po_number = $scope.iData.abbrivation + pad($scope.iData.order_number, 4) + '_' + $scope.job_code + pad($scope.job_no, 3);
                                                                $scope.jobitem.tmp_po_number = $scope.po_number;
                                                            }

                                                            $scope.jobitem.item_status = 'New';
                                                            $scope.jobitem.po_number = $scope.jobitem.tmp_po_number;

                                                            $scope.jobitem.job_chain_id = $scope.jobi.jobSummery;
                                                            $scope.jobitem.item_id = $scope.itemList[formIndex].item_number;

                                                            rest.path = 'jobSummarySave';
                                                            rest.post($scope.jobitem).success(function(data) {
                                                                var obj = [];
                                                                if ($cookieStore.get('jobRecentAdd') != undefined) {
                                                                    angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                                                        obj.push(val);
                                                                    });
                                                                }
                                                                obj.push(data['order_id']);
                                                                $cookieStore.put('jobRecentAdd', obj);
                                                                //$route.reload();
                                                            })
                                                        })
                                                    }
                                                })
                                            }
                                        });
                                    } else {
                                        notification('Please select item', 'warning');
                                    }
                                }
                            }
                        }
                    }

                    $scope.itemList[formIndex].due_date = $scope.itemList[formIndex].due_date.split(' ')[0].split('.').reverse().join('-');
                    $scope.itemList[formIndex].due_date = $scope.itemList[formIndex].due_date;
                    var due_timevl1 = angular.element('#due_time'+ formIndex).val();
                    $scope.itemList[formIndex].due_date = moment($scope.itemList[formIndex].due_date + ' ' +due_timevl1).format("YYYY-MM-DD HH:mm");
                    //$scope.itemList[formIndex].due_date = originalDateFormatNew($scope.itemList[formIndex].due_date);
                    //$scope.itemList[formIndex].due_date = moment($scope.itemList[formIndex].due_date).format('YYYY-MM-DD HH:mm:ss');
                    $scope.itemList[formIndex].start_date = originalDateFormatNew($scope.itemList[formIndex].start_date);
                    $scope.itemList[formIndex].start_date = moment($scope.itemList[formIndex].start_date).format('YYYY-MM-DD HH:mm:ss');
                    $routeParams.id = $scope.itemList[formIndex].itemId
                    rest.path = 'ItemUpdate';
                    rest.put($scope.itemList[formIndex]).success(function() {
                        $('#jobchainName'+formId).val('select');
                        //Updating current updated row data(item)
                        $scope.getItems();

                        //After update change to global date format dates
                        $scope.itemList[formIndex].due_date = moment($scope.itemList[formIndex].due_date).format($scope.dateFormatGlobal);
                        $scope.itemList[formIndex].start_date = moment($scope.itemList[formIndex].start_date).format($scope.dateFormatGlobal);

                        //log file start
                        $scope.logMaster = {};
                        $scope.logMaster.log_title = $scope.projectOrderName;
                        $scope.logMaster.log_type_id = $scope.itemList[formIndex].order_id;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "project";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        //$route.reload();
                        notification('Item successfully updated.', 'success');
                    });
                } else {
                    //if source and target language not selected
                    var source = angular.element('#source_lang').text();
                    var target = angular.element('#target_lang').text();
                    if (target == undefined || target == null || target == "") {
                        notification('Please select target language', 'warning');
                        return false;
                    }
                    if (source == undefined || source == null || source == "") {
                        notification('Please select source language', 'warning');
                        return false;
                    }

                    $scope.item.due_date = angular.element("[id^=end_date]").val();
                    $scope.item.start_date = angular.element("[id^=start_date]").val();
                    $scope.item.manager = $window.localStorage.managerName;
                    $scope.item.coordinator = $window.localStorage.CoordinationName;
                    $scope.item.item_number = id;
                    $scope.item.item_number = $scope.item.item_number.replace(/^0+/, '');
                    var itemPriceUnit = [];
                    for (var i = 1; i <= angular.element("[id^=totalItem_]").length; i++) {
                        var quantity = angular.element('#itemQuantity' + i).val();
                        var pricelist = angular.element('#priceList' + i).text();
                        var itemPrice = angular.element('#itemPrice' + i).val();
                        var itemTotal1 = angular.element('#itemTotal' + i).text();
                        var itemTotal = numberFormatCommaToPoint(itemTotal1);
                        console.log('pricelist',pricelist);
                        itemPriceUnit.push({
                            'quantity': quantity,
                            'pricelist': pricelist,
                            'itemPrice': itemPrice,
                            'itemTotal': itemTotal

                        });
                    }
                    $scope.price = JSON.stringify(itemPriceUnit);
                    $scope.total_price = angular.element('#totalItemPrice').text();
                    $scope.item_name = angular.element('#item_name').text();
                    $scope.total_amount = $scope.total_price;
                    $scope.item.price = $scope.price;
                    $scope.item.total_price = $scope.total_price;
                    $scope.item.item_name = $scope.item_name;
                    $scope.item.total_amount = $scope.total_amount;
                    $scope.item.order_id = $window.localStorage.orderID;
                    rest.path = 'ItemSave';
                    rest.post($scope.item).success(function(data) {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_title = $scope.projectOrderName;
                        $scope.logMaster.log_type_id = $scope.item.order_id;
                        $scope.logMaster.log_type = "update";
                        $scope.logMaster.log_status = "project";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                        //$scope.myitems = false;
                        //$route.reload();
                        notification('Item successfully created.', 'success');
                        //$scope.getItems();
                    });
                }
            } else {
                //notification('Please Create project First', 'information');
            }
        }
    }

    $scope.getItems = function() {
        var popitemList = [];
        $scope.order_idd = $window.localStorage.orderID;
        rest.path = 'itemsGet/' + $scope.order_idd;
        rest.get().success(function(data) {
            $scope.itemList = data;
            $scope.TblItemList = data;
            
            $scope.projectItemEmpty = jQuery.isEmptyObject(data);
            $scope.totalPrice = 0;
            var cont = [];
            angular.forEach(data, function(val, i) {
                console.log("val", val.contact_person);
                //getClient By OrderId while edit item
                rest.path = 'customer/' + $window.localStorage.orderID;
                rest.get().success(function(data) {
                    angular.element('#manager'+val.itemId).select2('val', data.project_manager);
                    angular.element('#coordinator'+val.itemId).select2('val', data.project_coordinator);
                    $scope.itemList[i].manager = data.project_manager;
                    $scope.itemList[i].coordinator = data.project_coordinator;
                    if(val.price){

                        $scope.itemPriceUni[val.itemId]= JSON.parse(val.price);
                        for(var j=0;j<$scope.itemPriceUni[val.itemId].length;j++){
                            $scope.itemPriceUni[val.itemId][j].itemTotal = numberFormatComma($scope.itemPriceUni[val.itemId][j].itemTotal);
                        }
                    }
                    //console.log('dttt=',$scope.itemPriceUni[val.itemId][0].itemTotal);
                    //console.log('length=',$scope.itemPriceUni[val.itemId].length);
                    
                    $scope.itemList[i].start_date = moment($scope.itemList[i].start_date).format($scope.dateFormatGlobal+' '+'HH:mm');
                    
                    if($scope.itemList[i].due_date){
                        var new_due_date = moment($scope.itemList[i].due_date).format($scope.dateFormatGlobal+' '+'HH:mm');
                        //console.log('vt=',new_due_date.split(" ")[0]);
                        //var due_timevl = $scope.itemList[i].due_date.split(" ")[1];
                        var due_timevl = new_due_date.split(" ")[1];
                        $scope.itemList[i].due_date = moment($scope.itemList[i].due_date).format($window.localStorage.getItem('global_dateFormat'));
                        angular.element('#due_time'+i).val(due_timevl);

                    }

                    if ($scope.itemList[i].source_lang && $scope.itemList[i].target_lang) {
                        var sourceData = JSON.parse($scope.itemList[i].source_lang);
                        var targetData = JSON.parse($scope.itemList[i].target_lang);
                        angular.element('#source_lang'+val.itemId).text(sourceData.sourceLang);
                        angular.element('#target_lang').text(targetData.sourceLang);
                    } else {
                        angular.element('#source_lang'+val.itemId).text('English (US)');
                        angular.element('#target_lang'+val.itemId).text('English (US)');
                    }


                    var sourceField = angular.element("#plsSourceLang"+val.itemId).children("a.pls-selected-locale");
                    
                    var targetField = angular.element("#plsTargetLang"+val.itemId).children("a.pls-selected-locale");
                    var sourceImg = sourceField.children('img');
                    var targetImg = targetField.children('img');

                    angular.element("#plsSourceLang"+val.itemId).children("a.pls-selected-locale").text('');
                    angular.element("#plsTargetLang"+val.itemId).children("a.pls-selected-locale").text('');

                    sourceField.append(sourceImg);
                    targetField.append(targetImg);

                    if ($scope.itemList[i].source_lang.length == 0 && $scope.itemList[i].target_lang.length == 0) {
                        sourceField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                        sourceField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                        sourceField.children().attr('alt', 'United States');

                        targetField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                        targetField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                        targetField.children().attr('alt', 'United States');

                        var sourceImg = sourceField.children('img').after('English (US)');
                        var targetImg = targetField.children('img').after('English (US)');
                    } else {
                        sourceField.children().attr('data-ng-src', sourceData.dataNgSrc);
                        sourceField.children().attr('src', sourceData.dataNgSrc);
                        sourceField.children().attr('alt', sourceData.alt);

                        targetField.children().attr('data-ng-src', targetData.dataNgSrc);
                        targetField.children().attr('src', targetData.dataNgSrc);
                        targetField.children().attr('alt', targetData.alt);
                        var sourceImg = sourceField.children('img').after(sourceData.sourceLang);
                        var targetImg = targetField.children('img').after(targetData.sourceLang);
                    }
                }).error(errorCallback);
    
                /*if($scope.TblItemList[i].due_date){
                    $timeout(function() {
                        $scope.TblItemList[i].due_date = $scope.TblItemList[i].due_date.split(' ')[0]+' | ' +$scope.TblItemList[i].due_date.split(' ')[1];
                    },200);
                }else{

                }*/
                $scope.totalPrice += val.total_amount;
                if (val.itemId) {
                    $routeParams.id = val.itemId;
                    rest.path = 'itemsjobStatusGet/' + $routeParams.id + '/' + $window.localStorage.orderID;
                    rest.get().success(function(data) {
                        console.log("data", data);
                        if(!data){
                            $('#noJobNew'+val.itemId).text('false');
                        }else{
                            $('#noJobNew'+val.itemId).text('true');
                        }
                        $scope.jobitemStatus = data;
                        var appr = [];
                        var other = [];
                        angular.forEach(data, function(val, i) {
                            if (val.item_status == 'Approved') {
                                appr.push(val.item_status);
                            }
                            if (val.item_status != 'Approved') {
                                other.push(val.item_status);
                            }
                        });
                        $scope.it = {};
                        $scope.total = appr.length + other.length;
                        $scope.divis = 100 / $scope.total;
                        $scope.percent = Math.ceil($scope.divis * appr.length);
                        angular.element('#itemPer' + i).html($scope.percent);
                        angular.element('.itemPer' + i).val($scope.percent);
                        if ($scope.percent == 100) {
                            angular.element('#sumimg' + i).append('<img src="assets/img/wf_4.png" alt=""/> Completed /');
                        } else if ($scope.percent < 100 && $scope.percent != 0) {
                            angular.element('#sumimg' + i).append('<img src="assets/img/wf_3.png" alt=""/> Started /');
                        } else if ($scope.percent == 0) {
                            angular.element('#sumimg' + i).append('<img src="assets/img/wf_1.png" alt=""/> Not started /');
                        } else {
                            $('#noJob' +i).append('No jobs');
                            angular.element('#progress' + i).remove();
                            angular.element('#sumimg' + i).remove();
                        }
                    }).error(errorCallback);
                }
                rest.path = 'jobItemIconsetdata/' + val.item_number + '/' + $window.localStorage.orderID;
                rest.get().success(function(data) {
                    $scope.dueDate = data;
                }).error(errorCallback);

                $scope.Filestotal = 0;    
                rest.path = 'getFilestotal/' + val.itemId;
                rest.get().success(function(data) {
                    if(data){
                        $scope.Filestotal = data[0].totalfile;
                    }
                    angular.element('#filescount' + val.itemId).text($scope.Filestotal);
                }).error(errorCallback);
                            
                

            })
        });
    }
    $scope.getItems();


    $scope.getitemsId = function(id, eID) {
        angular.element('[id^=totalItem_]').remove();
        $routeParams.id = id;
        rest.path = 'itemsgetone/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.myitems = true;
            $scope.myitemhide = true;
            $timeout(function() {
                $routeParams.id = data.contact_person;
                rest.path = 'checkContactClientId';
                rest.model().success(function(res) {
                    $routeParams.id = res.iClientId;
                    rest.path = 'contact';
                    rest.model().success(function(data) {
                        var cont = [];
                        angular.forEach(data.data, function(val, i) {
                            var obj = {
                                'id': val.iContactId,
                                'text': val.vFirstName + ' ' + val.vLastName
                            };
                            cont.push(obj);
                        });
                        angular.element('#contactPerson').select2({
                            allowClear: true,
                            data: cont
                        });
                    }).error(errorCallback);
                }).error(errorCallback);
                angular.element("#contactPerson").select2('val', data.contact_person);

                angular.element("#priceunit").select2('val', data.price);
                angular.element("#itemstatus").select2('val', data.item_status);
                angular.element('#source_lang').select2('val', data.source_lang);
                angular.element('#target_lang').select2('val', data.target_lang);
                angular.element('#childprice').select2('val', data.childprice);
                // angular.element('#manager').select2('val', data.manager);
                // angular.element('#coordinator').select2('val', data.coordinator);
                angular.element('#project_type').select2('val', data.project_type);
            }, 100);

            $scope.item = data;

            if($scope.item.due_date){
                $scope.item.due_date = moment($scope.item.due_date).format($scope.dateFormatGlobal+' '+'HH:mm');
            }else{
                $scope.item.due_date = '';
            }
            
            $scope.item.start_date = moment($scope.item.start_date).format($scope.dateFormatGlobal+' '+'HH:mm');

            //getClient By OrderId while edit item
            rest.path = 'customer/' + $window.localStorage.orderID;
            rest.get().success(function(data) {
                angular.element('#manager').select2('val', data.project_manager);
                angular.element('#coordinator').select2('val', data.project_coordinator);
                rest.path = 'getIndirectClient/' + data.indirect_customer;
                rest.get().success(function(data) {
                    $scope.indirectCustomer = data.vUserName;
                }).error(errorCallback);
            }).error(errorCallback);

            if ($scope.item.source_lang && $scope.item.target_lang) {
                var sourceData = JSON.parse($scope.item.source_lang);
                var targetData = JSON.parse($scope.item.target_lang);
                angular.element('#source_lang').text(sourceData.sourceLang);
                angular.element('#target_lang').text(targetData.sourceLang);
            } else {
                angular.element('#source_lang').text('English (US)');
                angular.element('#target_lang').text('English (US)');
            }


            var sourceField = angular.element("div#plsSourceLang").children("a.pls-selected-locale");
            var targetField = angular.element("div#plsTargetLang").children("a.pls-selected-locale");
            var sourceImg = sourceField.children('img');
            var targetImg = targetField.children('img');

            angular.element("div#plsSourceLang").children("a.pls-selected-locale").text('');
            angular.element("div#plsTargetLang").children("a.pls-selected-locale").text('');

            sourceField.append(sourceImg);
            targetField.append(targetImg);

            if (data.source_lang.length == 0 && data.target_lang.length == 0) {
                sourceField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                sourceField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                sourceField.children().attr('alt', 'United States');

                targetField.children().attr('data-ng-src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                targetField.children().attr('src', 'assets/vendor/Polyglot-Language-Switcher-2-master/images/flags/us.png');
                targetField.children().attr('alt', 'United States');

                var sourceImg = sourceField.children('img').after('English (US)');
                var targetImg = targetField.children('img').after('English (US)');
            } else {
                sourceField.children().attr('data-ng-src', sourceData.dataNgSrc);
                sourceField.children().attr('src', sourceData.dataNgSrc);
                sourceField.children().attr('alt', sourceData.alt);

                targetField.children().attr('data-ng-src', targetData.dataNgSrc);
                targetField.children().attr('src', targetData.dataNgSrc);
                targetField.children().attr('alt', targetData.alt);
                var sourceImg = sourceField.children('img').after(sourceData.sourceLang);
                var targetImg = targetField.children('img').after(targetData.sourceLang);
            }

            console.log("data", data);
            if (data.price) {
                $scope.itemPriceUni = JSON.parse(data.price);
            }
            if (data.total_price.length == 0) {
                angular.element('#totalItemPrice').text('0.0');
            } else {

                //angular.element('#totalItemPrice').text(data.total_price);
            }

            $cookieStore.put('projectItem', $scope.item);
            //currency
            rest.path = 'orderCurrencyMatch/' + $window.localStorage.orderID;
            rest.get().success(function(data) {
                angular.element('#defCur').text(data.defCurrency);
                if (data.currency) {
                    var cur = JSON.parse(data.currency);
                    angular.element('#currencyCh').select2('val', cur[0].currency);
                    angular.element('#crntCur').text(cur[0].currency);
                    angular.element('#curRate').text(cur[0].curRate);
                }
            }).error(errorCallback);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteItemsId = function(itemId,itemNnumber) {
        itemId = itemId+'-'+itemNnumber;

        bootbox.confirm("Are you sure you want to delete this scoop?", function(result) {
            if (result == true) {
                rest.path = 'itemDelete/' + itemId + '/' + $window.localStorage.orderID;
                rest.get().success(function(data) {
                    if(data.status == 422){
                        notification(data.msg,'error');
                    }else{
                        var hideId = itemId.split('-')[0];
                        $('#item-form'+hideId).hide('slow', function(){ $('#item-form'+hideId).remove(); });
                        $('#trRowId'+hideId).hide('slow', function(){ $('#trRowId'+hideId).remove(); });
                        notification('Scoop deleted successfully.','success');
                        // /$route.reload();
                    }
                }).error(errorCallback);
            }
        });
    }

    $scope.jobitemsIdStatus = function(id) {
        $window.localStorage.jobitStatus = id;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/jobitemstatus.html',
            controller: 'jobitemStatusController',
            size: '',
            width: 1000,
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
            $route.reload();
        });
    };

    $scope.itemOverView = function() {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/itemoverview.html',
            controller: 'itemOverviewStatusController',
            size: '',
            width: 1000,
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
            $route.reload();
        });
    }

    /* Redirect To Project Jobs Section */
    $scope.goTojobDetail = function() {
        $location.path('/jobs-detail/' + $window.localStorage.orderID);
    }

    rest.path = 'Jobsummeryget';
    rest.get().success(function(data) {
        $scope.joboption = data;
    }).error(errorCallback)

    //Pass OrderId to get Client ID To Display jobchain assign to client
    rest.path = 'masterJobchainget/' + $window.localStorage.orderID;
    rest.get().success(function(data) {
        $scope.jobchainoption = data;
    }).error(errorCallback)

}).controller('contactPerMsgController', function($scope, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.contactMsgId;

    $scope.bccShow = function() {
        $scope.bccshow = true;
    }
    $scope.ccHideShow = function() {
        angular.element('#ccHideShow').toggleClass('none');
    }
    $scope.bccHideShow = function() {
        angular.element('#bccHideShow').toggleClass('none');
    }

    $timeout(function() {
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').prop('disabled', true);
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').prop('disabled', true);
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').prop('disabled', true);
    }, 500);

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope).then(function(result) {
            $scope.fileAttatchName = file.name;
            $scope.attachementfile = result;
        });
    };

    rest.path = 'contactPerMessage/' + $window.localStorage.contactMsgId;
    rest.get().success(function(data) {
        $scope.cPersonMsg = data.data;
        $scope.cPersonMsg.vUserName = data.data.vFirstName + " " + data.data.vLastName
        $scope.cPersonMsg.messageData = '<div>&nbsp;</div><div id="msgData" class="signimgdata">' + data.info.sign_detail + '</br><img src="' + data.info.sign_image + '" width="100px"></div>';
    }).error(errorCallback);

    $scope.ok = function(frmId, message) {
        var data = {
            "file": $scope.attachementfile,
            "data": message
        };
        if (angular.element("#" + frmId).valid()) {
            rest.path = 'sendcontactPerMsg';
            rest.post(data).success(function(data) {
                notification('Mail send successfully', 'success');
            }).error(errorCallback);
            $timeout(function() {
                $uibModalInstance.close(data);
                $route.reload();
            }, 100)
        }
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}).controller('jobDetailController', function($interval,$filter,$scope, $window, $compile, $timeout, $uibModal, $log, rest, $route, $rootScope, $routeParams, $location, DTOptionsBuilder, $cookieStore, $q) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.EditedBy = $window.localStorage.getItem('sessionProjectEditedBy');
    $scope.projectOrderName = $window.localStorage.getItem('projectOrderName');
    $scope.isNewProject = $window.localStorage.getItem("isNewProject");
    if($scope.isNewProject === 'true'){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
        return false;
    }
    if($window.localStorage.orderID == undefined){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
        return false;
    }
    $window.localStorage.iUserId = " ";
    $window.localStorage.resourceType = " ";
    $window.localStorage.currentUserName = " ";
    $window.localStorage.ResourceMsg = " ";
    $window.localStorage.projectJobChainOrderId = $routeParams.id;
    $window.localStorage.jobDetailId = " ";
    $window.localStorage.orderID = $routeParams.id;
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.jobfolderId = " ";
    $window.localStorage.jobstatusName = " ";
    $window.localStorage.pId = " ";
    $window.localStorage.countSt = " ";
    $window.localStorage.projectJobChainSummeryItemNum = " ";

    $scope.indirectCustomerName = $window.localStorage.getItem('indirectCustomerName');
    //check itemfile manager and delete
    if ($routeParams.id) {
        rest.path = "itemFilemanager/" + $routeParams.id;
        rest.delete().success(function(data) {
            if (data != 'No Item') {
                $route.reload();
            }
        }).error(errorCallback);
    }

    $scope.jobDiscussion = function() {
        $location.path('discussion/' + $routeParams.id);
    }

    //set status auto update
    $timeout(function() {
        var temp = [];
        var autoUpdateS = [];
        var autoUpdateR = [];
        var Autocheck = [];
        angular.element(".jStatus").each(function(i) {
            angular.element(this).addClass('StatusData' + i);
            angular.element('.StatusData' + i + ' .joStatus').addClass('jobStatusData' + i);
            angular.element('.StatusData' + i + ' .jAuto').addClass('jStatusAuto' + i);
            angular.element('.StatusData' + i + ' .jsumeryIdAuto').addClass('jsumId' + i);
            angular.element('.StatusData' + i + ' .jjobnum').addClass('jjobnum' + i);
            angular.element('.StatusData' + i + ' .jduedate').addClass('jduedate' + i);
            angular.element('.StatusData' + i + ' .jobEmail').addClass('jobEmail' + i);
            angular.element('.StatusData' + i + ' .jobResource').addClass('jobResource' + i);
            angular.element('.StatusData' + i + ' .jobstatApp').addClass('jobstatsApp' + i);
            var status = angular.element('.jobStatusData' + i).text();
            var auto = angular.element('.jStatusAuto' + i).text();
            var summeryId = angular.element('.jsumId' + i).text();
            var jobnumber = angular.element('.jjobnum' + i).text();
            var jduedate = angular.element('.jduedate' + i).text();
            var jobEmail = angular.element('.jobEmail' + i).text();
            var jobResource = $('.jobResource' + i).text();
            if (auto == 'Auto' && status != 'Approved' && i == 0 && status != 'Requested') {
                if ($scope.jobdetail == undefined || $scope.jobdetail == null || $scope.jobdetail != '') {
                    $scope.jobdetail = {};
                }
                Autocheck.push(i);
                if (status == 'In preparation' && jobResource) {
                    $scope.item_status = "Requested";
                    $scope.jobdetail.jobnumber = jobnumber;
                    $scope.jobdetail.jduedate = jduedate;
                    $scope.jobdetail.jobEmail = jobEmail;
                    $scope.jobdetail.item_status = $scope.item_status;
                    $routeParams.id = summeryId;
                    rest.path = 'jobSummeryDetailsUpdate';
                    rest.put($scope.jobdetail).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
            } else if (auto == 'Auto' && status == 'Approved') {
                temp.push(i + 1);
            } else if (auto == 'Auto' && status != 'Requested' && status != 'Approved') {
                autoUpdateS.push(i);
            } else if (auto == 'Auto' && status == 'Requested') {
                autoUpdateR.push(i);
            }
        });

        if (autoUpdateR == "") {
            var statusfirst = autoUpdateS[0];
        }

        var statusLast = temp.slice(-1).pop();
        var acheck = Autocheck[0];
        if (statusLast && acheck == undefined || statusfirst != undefined && acheck == undefined) {
            if (statusLast) {
                var status = angular.element('.jobStatusData' + statusLast).text();
                var auto = angular.element('.jStatusAuto' + statusLast).text();
                var summeryId = angular.element('.jsumId' + statusLast).text();
                var jobnumber = angular.element('.jjobnum' + statusLast).text();
                var jduedate = angular.element('.jduedate' + statusLast).text();
                var jobEmail = angular.element('.jobEmail' + statusLast).text();
                var jobResource = angular.element('.jobResource' + statusLast).text();
            } else {
                var status = angular.element('.jobStatusData' + statusfirst).text();
                var auto = angular.element('.jStatusAuto' + statusfirst).text();
                var summeryId = angular.element('.jsumId' + statusfirst).text();
                var jobnumber = angular.element('.jjobnum' + statusfirst).text();
                var jduedate = angular.element('.jduedate' + statusfirst).text();
                var jobEmail = angular.element('.jobEmail' + statusfirst).text();
                var jobResource = angular.element('.jobResource' + statusfirst).text();
            }

            if (auto == 'Auto' && status != 'Requested') {
                if ($scope.jobdetail == undefined || $scope.jobdetail == null || $scope.jobdetail != '') {
                    $scope.jobdetail = {};
                }
                if (status == 'In preparation' && jobResource) {
                    $scope.item_status = "Requested";
                    $scope.jobdetail.jobnumber = jobnumber;
                    $scope.jobdetail.jduedate = jduedate;
                    $scope.jobdetail.jobEmail = jobEmail;
                    $scope.jobdetail.item_status = $scope.item_status;
                    $routeParams.id = summeryId;
                    rest.path = 'jobSummeryDetailsUpdate';
                    rest.put($scope.jobdetail).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
            }
        }
    }, 1000);

    //approved file data send to requested item
    $timeout(function() {
        var findApproved = [];
        for (var i = 0; i < angular.element('[class^=joStatus]').length; i++) {
            var status = angular.element('.jobStatusData' + i).text();
            var autoUpdate = angular.element('.jStatusAuto' + i).text();
            if (status === 'Approved' && autoUpdate != undefined) {
                findApproved.push(parseInt(i));
            }
        }

        var obj = [];
        for (var i = 0; i < angular.element('[class^=joStatus]').length; i++) {
            var lastApproved = $(findApproved).get(-1);
            if (lastApproved == 0 || lastApproved != "" && lastApproved != undefined) {
                var getStatus = lastApproved + 1;
                var status = angular.element('.jobStatusData' + getStatus).text();
                var approveStatus = angular.element('.jobStatusData' + lastApproved).text()
                var approveId = angular.element('.jsumId' + lastApproved).text();
                var requestId = angular.element('.jsumId' + getStatus).text();
                var appstat = angular.element('.jobstatsApp' + lastApproved).text();
                if (appstat == 0) {
                    if (approveId != "" && requestId != "") {
                        obj.push({
                            approveId: approveId,
                            requestId: requestId,
                            appSt: appstat
                        });
                    }
                }
            }
        }

        var last = obj.slice(-1)[0];
        if (last != undefined) {
            if (last.approveId != undefined && last.requestId != undefined && last.appSt == 0) {
                rest.path = "filemanagerApproveSend/" + last.approveId + '/' + last.requestId;
                rest.get().success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }

    }, 1000);

    $scope.resouceEdit1 = function(id, item, resource) {
        angular.element('input#resources' + id + item).select2('val', resource);
        $scope.resourceStatus = id + "" + item;
    }
    $scope.resouceEdit = function(id, item, resource) {
        angular.element('input#resources' + id + item).select2('val', resource);
        $scope.resourceStatus = id + "" + item;
    }

    $scope.resourceSave = function(sumId, resourceId) {
        if ($scope.jobd == "" || $scope.jobd == undefined || $scope.jobd == null) {
            $scope.jobd = {};
        }

        $scope.resource = resourceId;
        $scope.jobd.resource = $scope.resource;
        $routeParams.id = sumId;
        rest.path = 'jobSummeryJobDetailsUpdate';
        rest.put($scope.jobd).success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    $scope.hoverIn = function() {
        this.hoverEdit = true;
    };

    $scope.hoverOut = function() {
        this.hoverEdit = false;
    };

    // DataTables configurable options
    $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('scrollY', '100%').withOption('scrollX', '100%').withOption('scrollCollapse', true).withOption('paging', false).withOption('paging', false).withOption('paging', false);

    if ($routeParams.id) {
        rest.path = 'jobitemsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.jobitList = [];
            
            angular.forEach(data, function(val, i) {
                //console.log('job-val',val);
                        
                if(val.due_date != null){
                    /*var sales = val.total_amount
                    sales = $filter('customNumber')(sales);
                    var html = "<table><tr><td>Sales : </td><td>" + sales + "</td></tr><tr><td>Expense I (Prices) : </td><td>0.0<td></tr><tr><td>Gross profit : </td><td>0.0</td></tr><tr><td>Profit margin : </td><td>100%</td></tr></table>";
                    $timeout(function() {
                        angular.element("#myPopover" + i).popover({
                            title: '',
                            content: html,
                            html: true,
                        });
                    }, 3000);*/

                    $scope.jobitList.push(val);
                }
            });
        })
    }

    $scope.countAction = function(id, name) {
        closeWindows();
        localStorage['jobfolderId'] = id;
        localStorage['typeOfJobFolder'] = name;
        $window.localStorage.ItemClient = '';
        var ItemcodeNumber = angular.element('#itemCode').text();
        // start to get downloaded folder name with client name
        rest.path = 'customer/' + $window.localStorage.orderID;
        rest.get().success(function(res) {
            $scope.customer = res;
            if (res) {
                rest.path = 'client/' + $scope.customer.client;
                rest.get().success(function(cData) {
                    $scope.directClientData = cData
                    $window.localStorage.ItemClient = $scope.directClientData.vUserName;
                }).error(function(data, error, status) {});
            }
        })
        // end
        $window.localStorage.ItemcodeNumber = ItemcodeNumber;
        
        var JobFolders = window.open('#/filemanager/' + name, "popup", "width=1000,height=750");
        JobFolders.addEventListener("beforeunload", function() {
            var id1 = $window.localStorage.getItem("jobFolderRoot");
            var type1 = $window.localStorage.getItem("jobFoldertype");
            var externalResourceUserId1 = null;
            var count;
            rest.path = 'filefolderGet/' + id1 + '/' + type1 + '/' + externalResourceUserId1;
            rest.get().success(function(data) {
                count = data.length;
                if(!count){
                    count = 0;
                }
                if(type1){
                    if(type1 == 'source'){
                        $('#sourceCount-'+id).text(count);
                    }if(type1 == 'target'){
                        $('#targetCount-'+id).text(count);
                    }
                }
            }).error(errorCallback);

            localStorage['parentId'] = ' ';
            $window.localStorage.setItem("jobFoldertype",'');
            return false;
        }, false);
        openWindows.push(JobFolders);
    }

    var getCountJobFolder = function(){
        var count = $window.localStorage.getItem("sourceFolderCount");
        if(!count){
            count = 0;
        }
        var type = $window.localStorage.getItem("jobFoldertype");
        var id = $window.localStorage.getItem("jobfolderId");
        //console.log('testid',id);
        if(type){
            if(type == 'source'){
                $('#sourceCount-'+id).text(count);
            }if(type == 'target'){
                $('#targetCount-'+id).text(count);
            }
        }
    }
    $interval(getCountJobFolder,1000);
    
    $scope.jobNoDetails = function(id) {
        scrollBodyToTop();
        //$location.path('job-summery-details/' + id);
        $routeParams.id = id;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/jobEditPopup.html',
            controller: 'jobSummeryDetailsController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
    }

    $scope.timerview = false;

    $scope.tabledetail = function() {
        $scope.tableshow = false;
        $scope.tableshow1 = false;
        $scope.tableshowAll = false;
    }

    $scope.tabledetail1 = function() {
        $scope.tableshow1 = true;
        $scope.tableshow = true;
        $scope.tableshowAll = true;
    }

    $scope.tabledetailIndependent = function() {
        if ($scope.tableshow1 == true) {
            $scope.tableshow1 = false;
            $scope.tableshow == false;
        } else {
            $scope.tableshow1 = true;
            $scope.tableshow == true;
        }
    }

    $scope.timerShow = function() {
        if ($scope.timerview == true) {
            $scope.$broadcast('timer-stop');
            $scope.timerview = false;
        } else {
            $scope.$broadcast('timer-start');
            $scope.timerview = true;
        }

        $scope.$on('timer-stopped', function(event, data) {
            alert('Timer Stopped - data = ', data);
        });
    }

    $scope.tabledetailAll = function(index) {
        angular.element('.ta' + index).toggleClass('none');
        angular.element('#down' + index).toggleClass('fa-chevron-down');
        angular.element('#down' + index).toggleClass('fa-chevron-right');
    }

    $scope.resourceRedirect = function(resource) {
        rest.path = 'resourceRedirect/' + resource;
        rest.get().success(function(data) {
            var id = data;
            if ($location.path('/viewinternal/' + id)) {
                $location.path('/viewinternal/' + id);
            } else {
                $location.path('viewExternal/' + id);
            }
        }).error(errorCallback);
    }

    //manual job add
    $scope.manualAuto = function(status, id) {
        rest.path = 'autostatusUpdate/' + id + '/' + status + '/' + $routeParams.id;
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    //auto job add
    $scope.Automanual = function(status, id) {
        rest.path = 'autostatusUpdate/' + id + '/' + status + '/' + $routeParams.id;
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    $scope.autoIdChecked = function(id) {
        rest.path = 'autostatusChecked/' + id;
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }

    $scope.jumptoItem = function() {
        $window.localStorage.orderID = $routeParams.id;
        //set isNewProject to false
        $window.localStorage.setItem("isNewProject","false");
        $location.path('/items');
    }

    $scope.newJobAdd = function(job, set) {
        if (job) {
            $scope.jobSummeryChain = job.substr(1);
            $scope.matchjob = job.slice(0, 1);
            if ($scope.matchjob == 'j') {
                rest.path = 'jobpertjobGet/' + $scope.jobSummeryChain + '/' + $routeParams.id;
                rest.get().success(function(data) {
                    $scope.itemdata = data;
                    if ($scope.jobSummeryChain) {
                        rest.path = 'jobitemsidget/' + $scope.jobSummeryChain + '/' + $routeParams.id;
                        rest.get().success(function(data) {
                            $scope.iData = data;
                            var contact_person = [];
                            var job_id = [];
                            var order_id = [];
                            var job_no = [];
                            var due_date = [];
                            var item_status = [];
                            $scope.job_id = $scope.jobSummeryChain;
                            $scope.job_code = $scope.itemdata.job_code;
                            $scope.order_id = $routeParams.id;
                            $scope.job_no = $scope.itemdata.job_no;
                            $scope.master_job_id = $scope.itemdata.job_id;
                            if ($scope.iData != null) {
                                $scope.contact_person = $scope.iData.contact_person;
                                $scope.due_date = $scope.iData.due_date;
                                $scope.item_status = $scope.iData.item_status;
                            } else {
                                $scope.contact_person = " ";
                                $scope.due_date = " ";
                                $scope.item_status = " ";
                            }

                            if ($scope.jobitem == undefined || $scope.jobitem == "" || $scope.jobitem == null) {
                                $scope.jobitem = {};
                            }

                            $scope.jobitem.job_no = $scope.job_no;
                            $scope.jobitem.job_id = $scope.job_id;
                            $scope.jobitem.job_code = $scope.job_code;
                            $scope.jobitem.contact_person = $scope.contact_person;
                            $scope.jobitem.order_id = $routeParams.id;
                            $scope.jobitem.due_date = $scope.due_date;
                            $scope.jobitem.master_job_id = $scope.master_job_id;
                            //$scope.jobitem.item_status = $scope.item_status;
                            $scope.jobitem.item_id = set;
                            rest.path = 'jobSummarySave';
                            rest.post($scope.jobitem).success(function(data) {
                                var obj = [];
                                if ($cookieStore.get('jobRecentAdd') != undefined) {
                                    angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                        obj.push(val);
                                    });
                                }
                                obj.push(data['order_id']);
                                $cookieStore.put('jobRecentAdd', obj);
                                $route.reload();
                            })
                        })
                    }
                }).error(errorCallback);
            } else {
                var chainId = set;
                rest.path = 'jobpertjobChainGet/' + $scope.jobSummeryChain + '/' + $routeParams.id + '/' + chainId;
                rest.get().success(function(data) {
                    $scope.jobnumchain = data.job_no += 1;
                    if (data.newJob == "") {
                        notification('No job in jobchain', 'warning');
                    } else {
                        angular.forEach(data.newJob, function(val, i) {
                            if (chainId != null || chainId != undefined || chainId != " " || chainId == '0') {
                                rest.path = 'jobitemsidget/' + chainId + '/' + $routeParams.id;
                                rest.get().success(function(data) {
                                    $scope.iData = data;
                                    var contact_person = [];
                                    var job_id = [];
                                    var order_id = [];
                                    var job_no = [];
                                    var due_date = [];
                                    var item_status = [];
                                    $scope.job_id = $scope.jobSummeryChain;
                                    $scope.job_code = val.job_code;
                                    $scope.order_id = $routeParams.id;
                                    $scope.job_no = $scope.jobnumchain++;
                                    $scope.master_job_id = val.job_id;
                                    if ($scope.iData != null) {
                                        $scope.contact_person = $scope.iData.contact_person;
                                        $scope.due_date = $scope.iData.due_date;
                                        $scope.item_status = $scope.iData.item_status;
                                    } else {
                                        $scope.contact_person = "";
                                        $scope.due_date = "";
                                        $scope.item_status = "";
                                    }
                                    if ($scope.jobitem == undefined || $scope.jobitem == "" || $scope.jobitem == null) {
                                        $scope.jobitem = {};
                                    }
                                    $scope.jobitem.job_no = $scope.job_no;
                                    $scope.jobitem.job_id = $scope.job_id;
                                    $scope.jobitem.job_code = $scope.job_code;
                                    $scope.jobitem.contact_person = $scope.contact_person;
                                    $scope.jobitem.order_id = $routeParams.id;
                                    $scope.jobitem.due_date = $scope.due_date;
                                    $scope.jobitem.master_job_id = $scope.master_job_id;
                                    //$scope.jobitem.item_status = $scope.item_status;
                                    $scope.jobitem.item_id = set;
                                    rest.path = 'jobSummarySave';
                                    rest.post($scope.jobitem).success(function(data) {
                                        var obj = [];
                                        if ($cookieStore.get('jobRecentAdd') != undefined) {
                                            angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                                obj.push(val);
                                            });
                                        }
                                        obj.push(data['order_id']);
                                        $cookieStore.put('jobRecentAdd', obj);
                                        $route.reload();
                                    })
                                })
                            } else {
                                var job_no = [];
                                $scope.job_id = $scope.jobSummeryChain;
                                $scope.job_code = val.job_code;
                                $scope.order_id = $routeParams.id;
                                $scope.job_no = $scope.jobnumchain++;
                                $scope.master_job_id = val.job_id;
                                if ($scope.jobitem == undefined || $scope.jobitem == "" || $scope.jobitem == null) {
                                    $scope.jobitem = {};
                                }
                                $scope.jobitem.job_no = $scope.job_no;
                                $scope.jobitem.job_id = $scope.job_id;
                                $scope.jobitem.job_code = $scope.job_code;
                                $scope.jobitem.order_id = $routeParams.id;
                                $scope.jobitem.master_job_id = $scope.master_job_id;
                                $scope.jobitem.item_id = 0;
                                rest.path = 'jobSummarySave';
                                rest.post($scope.jobitem).success(function(data) {
                                    var obj = [];
                                    if ($cookieStore.get('jobRecentAdd') != undefined) {
                                        angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                            obj.push(val);
                                        });
                                    }
                                    obj.push(data['order_id']);
                                    $cookieStore.put('jobRecentAdd', obj);
                                    $route.reload();
                                })
                            }
                        })
                    }
                });
            }
        }
    }

    if ($routeParams.id) {
        $scope.item = $routeParams.id;
        rest.path = 'jobitemsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.itemjobList = data;
        console.log('$scope.itemjobList',$scope.itemjobList);
        }).error(errorCallback);
        rest.path = 'jobDetailLanguageGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.language = data;
        }).error(errorCallback);

        //getting ProjectOrderName and indirect clint name
        rest.path = 'getClientIndirectClient/' + $routeParams.id;
        rest.get().success(function(data) {
            if(data.order_number){
                $scope.projectOrderData = data;
                var projectOrderName = $scope.projectOrderData.abbrivation + pad($scope.projectOrderData.order_number, 4);
                $window.localStorage.setItem("projectOrderName",projectOrderName);
                $window.localStorage.setItem("indirectCustomerName",$scope.projectOrderData.indirect_customer);
            }
        }).error(errorCallback);
    }

     
    
    var allitCheked = [];
    $scope.itemAll = [];
    if ($routeParams.id) {
        
        
        rest.path = 'itemsGet/' + $routeParams.id;
        rest.get().success(function(data1) {
            $scope.itemLength = data1;
            console.log('$scope.itemLength',$scope.itemLength);
            rest.path = 'jobsummeryGet/' + $routeParams.id;
            rest.get().success(function(data) {
                
                $scope.itemListFinal = [];
                rest.path = "getsaveSortedJobsData/"+$window.localStorage.orderID;
                rest.get().success(function(d) {
                    $scope.availableSortedJobs = d;
                    
                    if($scope.availableSortedJobs.length > 0){
                        $scope.itemList = d;
                    }else{
                        $scope.itemList = data;
                    }    
                    
                    angular.forEach($scope.itemLength, function(e,i){
                        $scope.itemListFinal.push($scope.itemList.filter(function(e1,i1){
                            return e1.item_id == e.item_number;
                        }));
                        //console.log('$scope.itemListFinal',$scope.itemList);
                    });
                    
                    angular.forEach($scope.itemList, function(val, i) {
                        if (val.job_summmeryId) {
                            rest.path = 'jobSummeryDetailsGet/' + val.job_summmeryId;
                            rest.get().success(function(data) {
                                $timeout(function() {
                                    //count file
                                    if (data) {
                                        rest.path = 'filefolderstget/' + data[0].fmanager_id + '/' + $routeParams.id;
                                        rest.get().success(function(data) {
                                            var sourceFile = [];
                                            var targetFile = [];
                                            angular.element('.sourceC' + val.job_summmeryId).text(data.source);
                                            angular.element('.targteC' + val.job_summmeryId).text(data.target);
                                        }).error(errorCallback);
                                    }
                                }, 100);
                            }).error(errorCallback);
                        }
                    })

                    $timeout(function() {
                        $('#tblDataLoading').css('display', 'none');
                    }, 300);

                    // calcualtion for profit margin
                    angular.forEach($scope.itemjobList, function(val, i) {
                        var scoopItem = val.item_number;
                        var totalJobAmount = 0;
                        angular.forEach($scope.itemList, function(value, j) {
                            //$timeout(function() {
                                if(val.item_number == value.item_id && val.order_id == value.order_id){
                                    var tPrice = (value.total_price) ? value.total_price : parseInt(0);
                                    if(tPrice){
                                        totalJobAmount += parseFloat(tPrice);
                                    }
                                }
                            //}, 100);
                        })
                        if(totalJobAmount == undefined){
                            totalJobAmount = 0.00;
                        }
                        var scoopAmount = $scope.itemjobList[i].total_amount ? parseFloat($scope.itemjobList[i].total_amount) : 0;
                        var jobAmount = parseFloat(totalJobAmount);
                        var profit =  scoopAmount - jobAmount;
                        if(scoopAmount){
                            var marginloss = 0;
                            var profitMargin = ((scoopAmount - jobAmount) * 100) / parseFloat(scoopAmount); 
                        }else{
                            var marginloss = 1;
                            if(jobAmount>0){
                                profitMargin = -100;
                            }else{
                                profitMargin = 0;
                            }
                        }
                        var grossProfit = scoopAmount - jobAmount; 
                        var grossProfit = grossProfit ? grossProfit : 0.00;
                        if(profitMargin){
                            profitMargin = profitMargin.toFixed(2);
                            var isNegetive = Math.sign(profitMargin);
                            if(isNegetive == -1 || isNegetive==-0){
                              var marginloss = 1;
                            }
                            profitMargin = $filter('NumbersCommaformat')(profitMargin)+"%";
                        }else{
                           profitMargin = '0,00'+"%";
                           var marginloss = 1; 
                        }
                        //console.log('jobAmount',jobAmount);
                        
                        angular.element('#profitMargin' + $scope.itemjobList[i].item_number).text(profitMargin);
                        if(marginloss){
                            $('#profitMargin' + $scope.itemjobList[i].item_number).css("color","red");
                        }
                        if(val.due_date != null){
                            var sales = val.total_amount
                            sales = $filter('NumbersCommaformat')(sales);
                            var sales = sales ? sales : '0,00' ;
                            var expense = $filter('NumbersCommaformat')(jobAmount);
                            var expense = expense ? expense : '0,00' ;
                            var grossProfit = $filter('NumbersCommaformat')(grossProfit);
                            var grossProfit = grossProfit ? grossProfit : '0,00';
                            var html = "<table><tr><td>Sales : </td><td>" + sales + "</td></tr><tr><td>Expense I (Prices) : </td><td> " +expense+ " <td></tr><tr><td>Gross profit : </td><td> "+ grossProfit +"</td></tr><tr><td>Profit margin : </td><td> " + profitMargin+"</td></tr></table>";
                            $timeout(function() {
                                angular.element("#myPopover" + i).popover({
                                    title: '',
                                    content: html,
                                    html: true,
                                });

                            }, 3000);
                        }        
                    })

                    if (!$scope.itemList.length || $scope.itemList == "" || $scope.itemList == "") {
                        $scope.displayNodata = true;
                    }
                }).error(errorCallback);

                $scope.itemjobDataId = [];
                angular.forEach(data, function(val, i) {
                    if (val.item_id != 0) {
                        $scope.itemjobDataId = 1;
                    }
                })

                $scope.checkAll = function(id) {
                    switch (id) {
                        case "1":
                            if ($scope.itemalldata == true) {
                                $scope.itemalldata = false;
                            } else {
                                $scope.itemalldata = true;
                            }
                            var itemAlldataChecked = [];
                            angular.forEach($scope.itemList, function(it) {
                                it.itemAllChecked = $scope.itemalldata;
                                allitCheked.push({
                                    id: it.job_summmeryId,
                                    contactPerson: it.contact_person,
                                    item_id: it.item_id
                                });
                            });
                            break;
                        case "2":
                            if ($scope.itemlanguageindependentall == true) {
                                $scope.itemlanguageindependentall = false;
                            } else {
                                $scope.itemlanguageindependentall = true;
                            }
                            var itemindependentChecked = [];
                            angular.forEach($scope.itemList, function(it) {
                                it.itemindependentChecked = $scope.itemlanguageindependentall;
                                allitCheked.push({
                                    id: it.job_summmeryId,
                                    contactPerson: it.contact_person,
                                    item_id: it.item_id
                                });
                            });
                            break;
                        default:
                            $scope.itemall = true;
                            if ($scope.selectedAll == true) {
                                $scope.selectedAll = false;
                            } else {
                                $scope.selectedAll = true;
                            }
                            var itemChecked = [];
                            angular.forEach($scope.itemList, function(it) {
                                it.itemChecked = $scope.selectedAll;
                                allitCheked.push({
                                    id: it.job_summmeryId,
                                    contactPerson: it.contact_person,
                                    item_id: it.item_id
                                });
                            });
                            break;
                    }
                }
            }).error(errorCallback);

        })
        
        $scope.manual = false;
        $scope.auto = true;
    }
    
    $scope.sendEmailemidiatly = function() {
        if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
            $scope.itemAll = JSON.stringify(allitCheked);
            var data = JSON.parse($scope.itemAll);
            var contactper = [];

            if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                $scope.it = {};
            }

            angular.forEach(data, function(val, i) {
                if (val.contactPerson) {
                    rest.path = 'jobselectContactName/' + val.contactPerson;
                    rest.get().success(function(data) {
                        $scope.userEmail = data;
                        $scope.it.userEmail = $scope.userEmail;
                        $routeParams.id = val.id;
                        rest.path = 'jobselectUserEmail';
                        rest.put($scope.it).success(function(data) {
                            notification('Mail send successfully', 'success');
                            $route.reload();
                        }).error(errorCallback);
                    })
                }
            })
        }
    }

    $scope.selectionAction = function(action) {
        
        switch (action) {
            case "Select All":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Remove Selection":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Delete":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Send e-mail":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Set project manager to":
                $scope.setContactperson = true;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Change Status to":
                $scope.setContactperson = false;
                $scope.setItemStatus = true;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Set due date to":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = true;
                $scope.assignResource = false;
                $scope.MoveSelectedJobs = false;
                break;
            case "Assign Resource":
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = true;
                $scope.MoveSelectedJobs = false;
                break;
            case "Move selected Jobs":
                //alert('Move selected Jobs');
                $scope.MoveSelectedJobs = true;
                $scope.setContactperson = false;
                $scope.setItemStatus = false;
                $scope.setDuedate = false;
                $scope.assignResource = false;
                break;
        }
    }

    /*JobCheckBox Check/uncheck code START*/
    Array.prototype.remove = function() {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };

    
    $scope.checkBoxCheckFromMultiple = function(val, jobSummeryId) {
        var isChecked = $("#jobId-"+jobSummeryId).prop("checked");
        if (isChecked) {
            var obj = {
                'id': jobSummeryId
            }
            allitCheked.push(obj);
        } else {
            angular.forEach(allitCheked, function(value, key) {
                if (value.id == jobSummeryId) {
                    allitCheked.splice(key, 1);
                }
            });
        }
    }
    /*JobCheckBox Check/uncheck code END*/

    $scope.selectionActionOption = function(action) {
        
        if (action == 'select') {
            notification('Please select option.', 'warning');
            return false;
        }
        switch (action) {
            case "Move selected Jobs":
                var jobNotMoved = [];
                var itemSelect = angular.element("#move_job_item_id").val();
                if (itemSelect == 'select') {
                    notification('Please select item to move job', 'warning');
                    $('#move_job_item_id').css('border', '1px solid red');
                    $('#move_job_item_id').addClass('face');
                    $timeout(function() {
                        $('#move_job_item_id').removeClass('face');
                        $('#move_job_item_id').css('border', '0px solid red');
                    }, 3000);
                    return false;
                }
                if (allitCheked.length != 0) {
                    angular.forEach(allitCheked, function(val, i) {
                        var JobSummeryId = val.id;
                        var job_id = angular.element("#jobSummeryId" + JobSummeryId).val();
                        var ItemId = angular.element("#move_job_item_id").val();
                        var JobObj = {
                            "item_id": ItemId,
                            "job_id": job_id,
                            "oId": $window.localStorage.orderID
                        }
                        $routeParams.id = JobSummeryId;
                        rest.path = 'moveJob';
                        rest.put(JobObj).success(function(data) {
                            if (data.status == 422) {
                                jobNotMoved.push(data.jobNumber);
                            }
                        }).error(errorCallback);
                    })
                    var html1 = '';
                    var listArray = [
                        'list-group-item-success',
                        'list-group-item-info',
                        'list-group-item-warning',
                        'list-group-item-danger'
                    ];

                    $timeout(function() {
                        if (jobNotMoved.length > 0) {
                            angular.forEach(jobNotMoved, function(val, i) {
                                var ListClass = listArray[Math.floor(Math.random() * listArray.length)];
                                html1 += '<li class="list-group-item ' + ListClass + '"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>' + ' ' + val + '</li>';
                            })

                            $timeout(function() {
                                $('#jobNumberModal').find('.modal-body ul').html(html1);
                                $('#jobNumberModal').find('.modal-body p').text('The Following jobs are already exists in the item you select.');
                                $('#jobNumberModal').modal('show');
                            }, 400);
                        } else {
                            notification('Jobs moved successfully', 'success')
                            $route.reload();
                        }
                    }, 1000);

                    /*Reload Page After closing modal popup START*/
                    $timeout(function() {
                        $('#jobNumberModal').on('hidden.bs.modal', function() {
                            $route.reload();
                        })
                    }, 200);
                    /*Reload Page After closing modal popup END*/
                }else{
                    notification('Please select job', 'warning');
                }
                break;
            case "Select All":
                if ($routeParams.id) {
                    //allitCheked clear to add new all checked values
                    allitCheked = [];
                    
                    $.each($("[id^='jobId']" ), function() {
                        $("#"+this.id).prop("checked",true);
                        var jobSummmeryId = this.id.split('-')[1];
                        allitCheked.push({
                            id: jobSummmeryId
                        });
                    });
                    notification('All jobs selected successfully.','success');
                }
                break;
            case "Remove Selection":
                //uncheck all checkbox and allitCheked clear
                $.each($("[id^='jobId']" ), function() {
                    $("#"+this.id).prop("checked",false);
                });
                allitCheked = [];
                notification('All jobs selection remove successfully.','success');
                break;
            case "Delete":
                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    var invoiceAddedJobs = [];
                    bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                        if (result == true) {
                            var itemAll = [];
                            $scope.itemAll = JSON.stringify(allitCheked);
                            var data = JSON.parse($scope.itemAll);
                            angular.forEach(data, function(val, i) {
                                if (val.id) {
                                    rest.path = 'jobitemDelete/' + val.id;
                                    rest.delete().success(function(res) {
                                        if (res.status == 422) {
                                            invoiceAddedJobs.push(res.jobNumber);
                                        }
                                        // /$route.reload();
                                    }).error(errorCallback);
                                }
                            })

                            var html1 = '';
                            var listArray = [
                                'list-group-item-success',
                                'list-group-item-info',
                                'list-group-item-warning',
                                'list-group-item-danger'
                            ];

                            $timeout(function() {
                                if (invoiceAddedJobs.length > 0) {
                                    angular.forEach(invoiceAddedJobs, function(val, i) {
                                        var ListClass = listArray[Math.floor(Math.random() * listArray.length)];
                                        html1 += '<li class="list-group-item ' + ListClass + '"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>' + ' ' + val + '</li>';
                                    })
                                    $timeout(function() {
                                        $('#jobNumberModal').find('.modal-body ul').html(html1);
                                        $('#jobNumberModal').modal('show');
                                    }, 400);
                                } else {
                                    notification('Jobs deleted successfully', 'success')
                                    $route.reload();
                                }
                            }, 1000);

                            /*Reload Page After closing modal popup START*/
                            $timeout(function() {
                                $('#jobNumberModal').on('hidden.bs.modal', function() {
                                    $route.reload();
                                })
                            }, 200);
                            /*Reload Page After closing modal popup END*/

                        }
                    });
                } else{
                    notification('Please select job', 'warning');
                }
                break;

            case "Send e-mail":
                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    $scope.itemAll = JSON.stringify(allitCheked);
                    var data = JSON.parse($scope.itemAll);
                    var contactper = [];
                    if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                        $scope.it = {};
                    }
                    angular.forEach(data, function(val, i) {
                        if (val.contactPerson) {
                            rest.path = 'jobselectContactName/' + val.contactPerson;
                            rest.get().success(function(data) {
                                $scope.userEmail = data;
                                $scope.it.userEmail = $scope.userEmail;
                                $routeParams.id = val.id;
                                rest.path = 'jobselectUserEmail';
                                rest.put($scope.it).success(function(data) {
                                    notification('Mail send successfully', 'success');
                                    $route.reload();
                                }).error(errorCallback);
                            })
                        }
                    })
                } else {
                    notification('Please select job', 'warning');
                }
                break;
            case "Set project manager to":
                var setcontactPerson = $('#setcontactPerson').val();
                if (setcontactPerson == 0) {
                    notification('Please select contact person.', 'warning');
                    $('#s2id_setcontactPerson').css('border', '1px solid red');
                    $('#s2id_setcontactPerson').addClass('face');
                    $timeout(function() {
                        $('#s2id_setcontactPerson').removeClass('face');
                        $('#s2id_setcontactPerson').css('border', '0px solid red');
                    }, 3000);
                    return false;
                }

                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    if (allitCheked.length == 0) {
                        notification('Please select job', 'warning');
                        return false;
                    }
                    var itemAll = [];
                    $scope.itemAll = JSON.stringify(allitCheked);
                    var data = JSON.parse($scope.itemAll);
                    if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                        $scope.it = {};
                    }
                    angular.forEach(data, function(val, i) {
                        if (val.id) {
                            var contact_person = angular.element("#setcontactPerson").val();
                            $scope.contact_person = contact_person;
                            $scope.it.contact_person = $scope.contact_person;
                            $routeParams.id = val.id;
                            rest.path = 'jobselectContactNameupdate';
                            rest.put($scope.it).success(function(data) {
                                $scope.setContactperson = false;
                                $route.reload();
                            }).error(errorCallback);
                        }
                    })
                    notification('jobs updated successfully.','success');
                } else {
                    notification('Please select job', 'warning');
                }
                break;

            case "Change Status to":
                var setItemStatus = $('#setItemStatus').val();
                if (setItemStatus == 0) {
                    notification('Please select status.', 'warning');
                    $('#s2id_setItemStatus').css('border', '1px solid red');
                    $('#s2id_setItemStatus').addClass('face');
                    $timeout(function() {
                        $('#s2id_setItemStatus').removeClass('face');
                        $('#s2id_setItemStatus').css('border', '0px solid red');
                    }, 3000);
                    return false;
                }
                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    var itemAll = [];
                    $scope.itemAll = JSON.stringify(allitCheked);
                    var data = JSON.parse($scope.itemAll);
                    if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                        $scope.it = {};
                    }
                    angular.forEach(data, function(val, i) {
                        if (val.id) {
                            var setItem_Status = angular.element("#setItemStatus").val();
                            $scope.item_status = setItem_Status;
                            $scope.it.item_status = $scope.item_status;
                            $routeParams.id = val.id;
                            rest.path = 'jobselectContactNameupdate';
                            rest.put($scope.it).success(function(data) {
                                $scope.setItemStatus = false;
                                $route.reload();
                            }).error(errorCallback);
                        }
                    })
                    notification('jobs updated successfully.','success');
                } else {
                    notification('Please select job', 'warning');
                }
                break;

            case "Set due date to":
                var setDueDate = $('#setDueDate').val();
                
                if (setDueDate == 0) {
                    notification('Please select due date.', 'warning');
                    $('#setDueDate').css('border', '1px solid red');
                    $('#setDueDate').addClass('face');
                    $timeout(function() {
                        $('#setDueDate').removeClass('face');
                        $('#setDueDate').css('border', '0px solid red');
                    }, 3000);
                    return false;
                }
                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    var itemAll = [];
                    $scope.itemAll = JSON.stringify(allitCheked);
                    var data = JSON.parse($scope.itemAll);
                    if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                        $scope.it = {};
                    }
                    angular.forEach(data, function(val, i) {
                        if (val.id) {
                            var setdue_date = angular.element("#setDueDate").val();
                            
                            var time = moment().format('HH:mm:ss');
                            $scope.it.due_date = originalDateFormatNew(setdue_date);
                            $scope.it.due_date = moment($scope.it.due_date).format('YYYY-MM-DD'+' ' +time);
                            
                            $routeParams.id = val.id;
                            rest.path = 'jobselectContactNameupdate';
                            rest.put($scope.it).success(function(data) {
                                $scope.setDuedate = false;
                                $route.reload();
                            }).error(errorCallback);
                        }
                    })
                    notification('jobs updated successfully.','success');
                } else {
                    notification('Please select job', 'warning');
                }
                break;

            case "Assign Resource":
                var assigndataResource = $('#assigndataResource').val();
                if (assigndataResource == "true") {
                    notification('Please select resource.', 'warning');
                    $('#s2id_assigndataResource').css('border', '1px solid red');
                    $('#s2id_assigndataResource').addClass('face');
                    $timeout(function() {
                        $('#s2id_assigndataResource').removeClass('face');
                        $('#s2id_assigndataResource').css('border', '0px solid red');
                    }, 3000);
                    return false;
                }

                if (allitCheked != null && allitCheked != undefined && allitCheked != "") {
                    var itemAll = [];
                    $scope.itemAll = JSON.stringify(allitCheked);
                    var data = JSON.parse($scope.itemAll);
                    if ($scope.it == undefined || $scope.it == null || $scope.it == "") {
                        $scope.it = {};
                    }
                    angular.forEach(data, function(val, i) {
                        if (val.id) {
                            var assignResource = angular.element("#assigndataResource").val();
                            $scope.resource = assignResource;
                            $scope.it.resource = $scope.resource;
                            $routeParams.id = val.id;
                            rest.path = 'jobselectContactNameupdate';
                            rest.put($scope.it).success(function(data) {
                                $scope.assignResource = false;
                                $route.reload();
                            }).error(errorCallback);
                        }
                    })
                    notification('jobs updated successfully.','success');
                } else {
                    notification('Please select job', 'warning');
                }
                break;
        }
    }
    
    $scope.jobsumResource = function(resourceName, jobSummeryId) {
        $window.localStorage.ResourceMsg = resourceName;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/jobresourcemsg.html',
            controller: 'jobResourceMsgController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });

    }


    $scope.editJobList = function() {
        $scope.job = [];
        $scope.itemAll = JSON.stringify(allitCheked);
        var data = JSON.parse($scope.itemAll);
        $scope.it = {};
        angular.forEach(data, function(val, i) {
            if (val.id) {
                $scope.job[i] = true;
            }
        })
    }

    $scope.edit = function(jobId) {
        scrollBodyToTop();
        //$location.path('/job-summery-details/' + id);
        $routeParams.id = jobId;
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/jobEditPopup.html',
            controller: 'jobSummeryDetailsController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
    }

    $scope.saveItem = function(id, jitem) {
        $routeParams.id = id;
        rest.path = 'jobSummeryitemUpdate';
        rest.put(jitem).success(function(data) {
            $route.reload();
        })
    }

    $scope.editJobListItemData = function() {
        rest.path = 'jobSummeryitemCheckEdit';
        rest.get().success(function(data) {
            $route.reload();
        }).error(errorCallback);
    }


    $scope.deletejobsDetails = function(id, orderId, taskName) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'jobitemDelete/' + id;
                rest.delete().success(function(res) {
                    if (res.status) {
                        notification('You can not delete invoice created job.', 'error');
                    } else {
                        //log file start 
                        $scope.logMaster = {};
                        $scope.logMaster.log_type_id = orderId;
                        $scope.logMaster.task_id = id;
                        $scope.logMaster.log_title = taskName;
                        $scope.logMaster.log_type = "delete";
                        $scope.logMaster.log_status = "task";
                        $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                        rest.path = "saveLog";
                        rest.post($scope.logMaster).success(function(data) {});
                        //log file end
                    }
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

    $scope.jobList_jobChingetOne = function(data) {
        var deferred = $q.defer();
        rest.path = 'jobChingetOne/' + $scope.jobi.jobSummery;
        rest.get().success(function(res) {
            //
            if (res.sortedJobsJson) {
                $scope.savedSortedList = JSON.parse(res.sortedJobsJson);
                $scope.StoreAsSortJob = [];
                angular.forEach($scope.savedSortedList, function(v, i) {
                    var Searchedobj = data.newJob.find(function(obj) { return obj.new_job_id == v.id; });
                    if (Searchedobj) {
                        $scope.StoreAsSortJob.push(Searchedobj);
                    }
                });
                deferred.resolve($scope.StoreAsSortJob);
            } else {
                deferred.resolve(data.newJob);
            }
        }).error(function() {
            deferred.reject();
        });
        return deferred.promise;
    };
    $scope.jobList = function(id) {

        if ($('#jobchainName').val() == 'select' || $('#jobDropDown').val() == 'select') {
            notification('Please select option.', 'warning');
            return false;
        } else {

            if ($scope.jobi.jobSummery) {
                var dd = $scope.jobi.jobSummery;
                $scope.jobi.jobSummery = dd.substr(1);
                $scope.matchjob = dd.slice(0, 1);
                if ($scope.matchjob == 'j') {
                    rest.path = 'jobpertjobGet/' + $scope.jobi.jobSummery + '/' + $routeParams.id;
                    rest.get().success(function(data) {
                        $scope.itemdata = data;
                        if ($scope.jobitem.item_id) {
                            rest.path = 'jobitemsidget/' + $scope.jobitem.item_id + '/' + $routeParams.id;
                            rest.get().success(function(data) {
                                $scope.iData = data;
                                var contact_person = [];
                                var job_id = [];
                                var order_id = [];
                                var job_no = [];
                                var due_date = [];
                                var item_status = [];
                                $scope.job_id = $scope.jobi.jobSummery;
                                $scope.job_code = $scope.itemdata.job_code;
                                $scope.order_id = $routeParams.id;
                                $scope.job_no = $scope.itemdata.job_no;
                                $scope.master_job_id = $scope.itemdata.job_id;

                                if ($scope.iData != null) {
                                    $scope.contact_person = $scope.iData.contact_person;
                                    $scope.due_date = $scope.iData.due_date;
                                    $scope.item_status = $scope.iData.item_status;
                                } else {
                                    $scope.contact_person = "";
                                    $scope.due_date = "";
                                    $scope.item_status = "";
                                }

                                $scope.jobitem.job_no = $scope.job_no;
                                $scope.jobitem.job_id = $scope.job_id;
                                $scope.jobitem.job_code = $scope.job_code;
                                $scope.jobitem.contact_person = $scope.contact_person;
                                $scope.jobitem.order_id = $routeParams.id;
                                $scope.jobitem.due_date = $scope.due_date;
                                $scope.jobitem.master_job_id = $scope.master_job_id;
                                if ($scope.job_no == undefined) {
                                    $scope.job_no = 1;
                                }
                                if ($scope.iData) {
                                    $scope.po_number = $scope.iData.abbrivation + pad($scope.iData.order_number, 4) + '_' + $scope.job_code + pad($scope.job_no, 3);
                                    $scope.jobitem.tmp_po_number = $scope.po_number;
                                }

                                /* Job Status To New When Creating New Job*/
                                $scope.jobitem.item_status = 'New';

                                // Remove if Display Assign PO Link
                                //$scope.jobitem.po_number = '';
                                $scope.jobitem.po_number = $scope.jobitem.tmp_po_number;

                                rest.path = 'jobSummarySave';
                                rest.post($scope.jobitem).success(function(data) {
                                    if (data) {
                                        var obj = [];
                                        if ($cookieStore.get('jobRecentAdd') != undefined) {
                                            angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                                obj.push(val);
                                            });
                                        }
                                        obj.push(data['order_id']);
                                        $cookieStore.put('jobRecentAdd', obj);
                                        $route.reload();
                                    } else {
                                        notification('Job already exists in this item.', 'error');
                                    }
                                })
                            })
                        }
                    }).error(errorCallback);
                } else {
                    var chainId = angular.element('.job_chain_id').val();
                    if (chainId != undefined) {
                        rest.path = 'jobpertjobChainGet/' + $scope.jobi.jobSummery + '/' + $routeParams.id + '/' + chainId;
                        rest.get().success(function(data) {
                            $scope.jobnumchain = data.job_no += 1;
                            $scope.ijNum = 1;
                            if (data.newJob == "") {
                                notification('No job in jobchain', 'warning');
                            } else {
                                $scope.jobList_jobChingetOne(data)
                                    .then(function(_StoreAsSortJob) {
                                        angular.forEach(_StoreAsSortJob, function(val, i) {
                                            if (chainId) {
                                                rest.path = 'jobitemsidget/' + chainId + '/' + $routeParams.id;
                                                rest.get().success(function(data) {
                                                    $scope.iData = data;
                                                    var contact_person = [];
                                                    var job_id = [];
                                                    var order_id = [];
                                                    var job_no = [];
                                                    var due_date = [];
                                                    var item_status = [];
                                                    $scope.job_id = $scope.jobi.jobSummery;
                                                    $scope.job_code = val.job_code;
                                                    $scope.order_id = $routeParams.id;
                                                    $scope.master_job_id = val.job_id;
                                                    $scope.job_no = $scope.jobnumchain++;
                                                    if (!$scope.job_no) {
                                                        $scope.job_no = $scope.ijNum++;
                                                    }

                                                    if ($scope.iData != null) {
                                                        $scope.contact_person = $scope.iData.contact_person;
                                                        $scope.due_date = $scope.iData.due_date;
                                                        $scope.item_status = $scope.iData.item_status;
                                                    } else {
                                                        $scope.contact_person = "";
                                                        $scope.due_date = "";
                                                        $scope.item_status = "";
                                                    }
                                                    if ($scope.jobitem == undefined || $scope.jobitem == "" || $scope.jobitem == null) {
                                                        $scope.jobitem = {};
                                                    }

                                                    $scope.jobitem.job_no = $scope.job_no;
                                                    $scope.jobitem.master_job_id = $scope.master_job_id;
                                                    $scope.jobitem.job_id = $scope.master_job_id;
                                                    // $scope.jobitem.job_id = $scope.job_id;
                                                    $scope.jobitem.job_code = $scope.job_code;
                                                    $scope.jobitem.contact_person = $scope.contact_person;
                                                    $scope.jobitem.order_id = $routeParams.id;
                                                    $scope.jobitem.due_date = $scope.due_date;
                                                    if ($scope.job_no == undefined) {
                                                        $scope.job_no = 1;
                                                    }
                                                    if ($scope.iData) {
                                                        $scope.po_number = $scope.iData.abbrivation + pad($scope.iData.order_number, 4) + '_' + $scope.job_code + pad($scope.job_no, 3);
                                                        $scope.jobitem.tmp_po_number = $scope.po_number;
                                                    }

                                                    /* Job Status To New When Creating New Job*/
                                                    $scope.jobitem.item_status = 'New';
                                                    //$scope.jobitem.po_number = '';
                                                    $scope.jobitem.po_number = $scope.jobitem.tmp_po_number;
                                                    //$scope.jobitem.chainId = chainId;
                                                    $scope.jobitem.job_chain_id = $scope.jobi.jobSummery;
                                                    //return;
                                                    rest.path = 'jobSummarySave';
                                                    rest.post($scope.jobitem).success(function(data) {
                                                        var obj = [];
                                                        if ($cookieStore.get('jobRecentAdd') != undefined) {
                                                            angular.forEach($cookieStore.get('jobRecentAdd'), function(val, i) {
                                                                obj.push(val);
                                                            });
                                                        }
                                                        obj.push(data['order_id']);
                                                        $cookieStore.put('jobRecentAdd', obj);
                                                        $route.reload();
                                                    })
                                                })
                                            }
                                        })
                                    });
                            }
                        });
                    } else {
                        notification('Please select item', 'warning');
                    }
                }
            }
        }
    }

    $scope.sortableOptions = {
        axis: "y",
        activate: function() {},
        beforeStop: function() {},
        change: function() {},
        create: function(event, ui) {
            //
        },
        deactivate: function() {},
        out: function() {},
        over: function() {},
        receive: function() {},
        remove: function() {},
        sort: function() {},
        start: function(event, ui) {},
        update: function(e, ui) {
            // /
        },
        stop: function(e, ui) {
            $scope.saveJobSorting();
        }
    };

    $scope.saveJobSorting = function(){
        rest.path = "saveSortedJobsData";
        rest.post($scope.itemListFinal).success(function(data) {
            //
            if(data.status == 200){
                notification(data.msg,'success');
            }
        }).error(errorCallback);
    }
    
    $scope.itemoverview = function() {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/item-overview.html',
            controller: 'itemoverviewController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
    };

    rest.path = 'Jobsummeryget';
    rest.get().success(function(data) {
        $scope.joboption = data;
    }).error(errorCallback)

    //Pass OrderId to get Client ID To Display jobchain assign to client
    rest.path = 'masterJobchainget/' + $window.localStorage.orderID;
    rest.get().success(function(data) {
        $scope.jobchainoption = data;
    }).error(errorCallback)

}).controller('commentController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if($scope.isNewProject === 'true' && $scope.userRight == 1){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
    }
    $window.localStorage.getItem("session_iUserId");
    $window.localStorage.getItem("session_vUserName");
    $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.backtoPage = function() {
        if ($window.localStorage.getItem("session_iFkUserTypeId") == 1) {
            $location.path('jobs-detail/' + $window.localStorage.orderID);
        } else {
            $location.path('dashboard1');
        }
    }
    if ($routeParams.id) {
        var commentsArray = [];
        rest.path = "discussionOrder/" + $routeParams.id;
        rest.get().success(function(data) {
            setTimeout(function() {
                angular.forEach(data, function(val, i) {
                    if (val.content == "" || val.content == null) {
                        var dataId = val.id;
                        var hrefClass = 'attachment';
                        var hrefTarget = '_blank';
                        var data = '<a class=' + hrefClass + ' href=' + val.fileURL + ' target=' + hrefTarget + '><img src=' + val.fileURL + '></img></a>';
                        $('li[data-id=' + dataId + ']').find('.content').html(data);
                        $('li[data-id=' + dataId + ']').clone(true).appendTo('#attachment-list');
                    }
                });
                
                /*$(".comment-wrapper").each(function(i,v) {
                    var dateTime = $(this).find('time')[0].innerText;
                    dateTime = moment(dateTime).format($window.localStorage.getItem('global_dateFormat'));
                    $(this).find('time')[0].innerText = dateTime;
                });*/
            }, 600);

            commentsArray = data;
        }).error(errorCallback);
    }

    var CommentedElement = $('#comments-container').comments({ //profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
        roundProfilePictures: true,
        textareaRows: 1,
        enableAttachments: true,
        getComments: function(success, error) {
            $timeout(function() {
                success(commentsArray);
            }, 500);
        },
        postComment: function(data, success, error) {
            data.order_id = $routeParams.id;
            data.user_id = $window.localStorage.getItem("session_iUserId");
            data.fullname = $window.localStorage.getItem("session_vUserName");
            data.profile_picture_url = 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic");
            data.pings = '';
            rest.path = "discussionOrder";
            rest.post(data).success(function(info) {

            }).error(errorCallback);
            $timeout(function() {
                success(data);
            }, 500);
        },
        putComment: function(data, success, error) {
            $routeParams.id = data.id;
            data.login_userid = $window.localStorage.getItem("session_iUserId");
            rest.path = 'discussionOrder';
            rest.put(data).success(function(res) {
                if (res.Status == 401) {
                    notification("You can not edit other user message", "error");
                    $timeout(function() {
                        location.reload();
                    }, 1000);
                } else if (res.Status == 200) {
                    notification("Successfully edited", "success");
                } else {
                    notification("Please try later", "warning");
                }
            }).error(errorCallback);
            $timeout(function() {
                success(data);
            }, 500);
        },
        deleteComment: function(data, success, error) {
            data.login_userid = $window.localStorage.getItem("session_iUserId");
            rest.path = 'discussionOrder/' + data.id + '/' + data.login_userid;
            rest.delete(data).success(function(data) {
                if (data.Status == 401) {
                    notification("You can not edit other user message", "error");
                    $timeout(function() {
                        location.reload();
                    }, 1000);
                } else if (data.Status == 200) {
                    notification("Successfully edited", "success");
                } else {
                    notification("Please try later", "warning");
                }
            }).error(errorCallback);
            $timeout(function() {
                success();
            }, 500);
        },
        upvoteComment: function(data, success, error) {
            $routeParams.id = data.id;
            rest.path = 'discussionOrder';
            rest.put(data).success(function(data) {

            }).error(errorCallback);
            $timeout(function() {
                success(data);
            }, 500);
        },
        uploadAttachments: function(dataArray, success, error, data) {
            /*"fileURL":dataArray[0].file_url,*/
            var obj = {
                "order_id": $routeParams.id,
                "user_id": $window.localStorage.getItem("session_iUserId"),
                "fullname": $window.localStorage.getItem("session_vUserName"),
                "profile_picture_url": 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic"),
                "fileURL": " uploads/discussionfile/" + dataArray[0].file.name2,
                "fileMimeType": dataArray[0].file.type,
                "created": dataArray[0].created,
                "modified": dataArray[0].modified,
                "created_by_current_user": '1',
                "upvote_count": '0',
                "user_has_upvoted": '0'

            }
            rest.path = "discussionOrder";
            rest.post(obj).success(function(info) {

            }).error(errorCallback);
            dataArray[0].fullname = $window.localStorage.getItem("session_vUserName");
            dataArray[0].profile_picture_url = 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic");
            $timeout(function() {
                success(dataArray);
            }, 500);
        }
    });
}).controller('userstatusController', function($scope, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'statustype/1';
    rest.get().success(function(data) {
        $scope.userStatus = data;
        $scope.userstatusEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'userstatus';
        rest.model().success(function(data) {
            $scope.status = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.status.status_id) {
                $routeParams.id = $scope.status.status_id;
                rest.path = 'userstatus';
                rest.put($scope.status).success(function() {
                    $route.reload();
                }).error(errorCallback);
            } else {
                $scope.status.status_type = 1;
                rest.path = 'userstatus';
                rest.post($scope.status).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'userstatus/' + id;
                rest.delete().success(function() {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('resourcePositionController', function($scope, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'GetuserPosition';
    rest.get().success(function(data) {
        $scope.userPosition = data;
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'GetuserPosition';
        rest.model().success(function(data) {
            $scope.position = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.position.position_id) {
                $routeParams.id = $scope.position.position_id;
                rest.path = 'userPosition';
                rest.put($scope.position).success(function() {
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'userPosition';
                rest.post($scope.position).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'userPosition/' + id;
                rest.delete().success(function() {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('clientstatusController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'statustype/2';
    rest.get().success(function(data) {
        $scope.userStatus = data;
        $scope.clientstatusEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'userstatus';
        rest.model().success(function(data) {
            // debugger;
            $scope.status = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.status.status_id) {
                $routeParams.id = $scope.status.status_id;
                rest.path = 'userstatus';
                rest.put($scope.status).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                $scope.status.status_type = 2;
                rest.path = 'userstatus';
                rest.post($scope.status).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'userstatus/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('customerGroupController', function($window, $log, $scope, $location, $route, rest, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.save = function(formId) {
        if (angular.element('#' + formId).valid()) {
            if ($scope.group.group_id) {
                $routeParams.id = $scope.group.group_id;
                rest.path = 'customerGroupUpdate';
                rest.put($scope.group).success(function() {
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'customerGroupsave';
                rest.post($scope.group).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'customerGroupGet';
    rest.get().success(function(data) {
        $scope.customergrouplist = data;
        $scope.customertypeEmpty = jQuery.isEmptyObject(data);
    })

    $scope.customerGroupEdit = function(id, eID) {
        rest.path = 'customerGroupGetOne/' + id;
        rest.get().success(function(data) {
            $scope.group = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteCustomerGroup = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'customerGroupDelete/' + id;
                rest.delete().success(function() {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

}).controller('currencyController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'currency';
    rest.get().success(function(data) {
        $scope.currencyData = data;
        $scope.def = data[0].country_name;
        var currency = [];
        angular.forEach(data, function(val, i) {
            if (val.currency_front == 1) {
                currency.push(val.currency_front);
            }
        })
        $scope.currencyEmpty = jQuery.isEmptyObject(data);
        $scope.checkFront = parseInt(currency);
    }).error(errorCallback);

    $scope.currencyListChange = function(code, id, nameC, date) {
        if ($scope.currn == "" || $scope.currn == undefined || $scope.currn == null) {
            $scope.currn = {};
        }
        var cod = code.split(',');
        $scope.country_name = cod[0];
        $scope.currency_code = code;
        $scope.date = date;
        $scope.curDef = code.split(',')[0];
        $scope.currn.curDef = $scope.curDef;
        $scope.currn.country_name = $scope.country_name;
        $scope.currn.currency_code = $scope.currency_code;
        $scope.currn.date = $scope.date;
        $routeParams.id = id;
        rest.path = 'currencyUpdate';
        rest.put($scope.currn).success(function() {
            notification('Default currency successfully changed', 'success');
            $route.reload();
        }).error(errorCallback);
    }

    $scope.currencyChange = function(id) {
        var currenctCode = id.split(',');
        $scope.country_name = currenctCode[0];
        $scope.currency.country_name = $scope.country_name;
    }

    $scope.getType = function(id, curId, eID) {
        $routeParams.id = id;
        rest.path = 'currency';
        rest.model().success(function(data) {
            $scope.currency = data;
            angular.element('#currencyCoded').select2('val', data.currency_code);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            var currencyData = $('#currencyCoded').select2('data');
            $scope.currency.currency_name = currencyData.name;
            if ($scope.currency.currency_id) {
                $scope.curDef = angular.element('#country_name0').text();
                $scope.date = angular.element('#Currencydate').val();
                $scope.currency.date = $scope.date;
                $scope.currency.curDef = $scope.curDef;
                $routeParams.id = $scope.currency.currency_id;
                rest.path = 'currency';
                rest.put($scope.currency).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if (!$('#currencyCoded').val()) {
                    return false;
                }
                $scope.curDef = angular.element('#country_name0').text();
                $scope.date = angular.element('#Currencydate').val();
                $scope.currency.date = $scope.date;
                $scope.currency.curDef = $scope.curDef;

                rest.path = 'currency';
                rest.post($scope.currency).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'currency/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.getCurr = function(id, code) {
        $scope.currencyDef = id;
        angular.element('#currencyListCode' + id).select2('val', code);
    }

    $scope.hoverIn = function() {
        this.hoverEdit = true;
    };

    $scope.hoverOut = function() {
        this.hoverEdit = false;
    };

}).controller('holidayController', function($scope, $log, $location, $route, rest, $routeParams, $window, $timeout, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    //country holiday get
    if ($cookieStore.get('session_holidayCountry')) {
        $scope.countryListHoliday = JSON.parse($cookieStore.get('session_holidayCountry'));
    } else {
        $scope.countryListHoliday = [];
    }

    $scope.countryHolidayGet = function(country,from) {//from > while onload or changed country dropdown. 

        if (!$cookieStore.get('session_holidayCountry')) {
            $scope.countryListHoliday = UniqueArraybyId($scope.countryListHoliday, 'Cname');
        }

        if ($scope.countryListHoliday.length == 3 && from == 'onChange') {
            notification('Maximum three country allow.', 'warning');
        } else {
            if (typeof country !== 'object') {
                $scope.countryListHoliday.push({ 'Cname': country });
            }
            $scope.countryListHoliday = UniqueArraybyId($scope.countryListHoliday, 'Cname');
        }
        //National Holiay List current date to higher date get
        var currentYear = new Date().getFullYear();

        var upcomming = [];
        var ongoing = [];

        angular.forEach($scope.countryListHoliday, function(val, i) {
            rest.path = "holidayGet/" + val.Cname;
            rest.get().success(function(data) {
                angular.forEach(data, function(val, i) {
                    var currentDate = new Date;
                    var holiday = new Date(val[0] + ' ' + currentYear);

                    if (currentDate <= holiday) {
                        var dayMon = val[0].split(' ');
                        var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                        upcomming.push({
                            'date': fullDate,
                            'holidayName': val[2],
                            'holidayStatus': val[3]
                        });
                    } else {
                        var dayMon = val[0].split(' ');
                        var fullDate = dayMon[1] + ' ' + dayMon[0] + ' ' + currentYear;
                        ongoing.push({
                            'date': fullDate,
                            'holidayName': val[2],
                            'holidayStatus': val[3]
                        });
                    }
                });

                $scope.upcommingList = upcomming;
                $scope.ongoingList = ongoing.reverse();
                $scope.upLength = $scope.upcommingList.length;
                $scope.onLength = $scope.ongoingList.length;
            }).error(errorCallback);
        })
        //return false;

    }

    if (!$cookieStore.get('session_holidayCountry')) {
        $scope.country = "Bulgaria";
        $scope.countryListHoliday.push({ 'Cname': $scope.country });
        $scope.countryHolidayGet("Bulgaria",'onLoad');
    } else {
        $scope.countryHolidayGet($scope.countryListHoliday,'onLoad');
    }

    $scope.saveHolidayList = function() {
        //return false;
        if ($window.localStorage.getItem("session_iUserId")) {
            $routeParams.id = $window.localStorage.getItem("session_iUserId");
            $scope.user = {};

            if ($scope.countryListHoliday.length == 0) {
                $scope.user.vholiday_country = '';
            } else {
                $scope.user.vholiday_country = JSON.stringify($scope.countryListHoliday); //country;
            }

            //console.log("$scope.countryListHoliday.length", $scope.countryListHoliday.length);return false;
            rest.path = "saveuserprofile";
            rest.put($scope.user).success(function(data) {
                notification('Updated successfully.','success');
                console.log("data", data);
            });
            if ($scope.countryListHoliday.length == 0) {
                $cookieStore.remove("session_holidayCountry");
                //$cookieStore.put('session_holidayCountry','%22%22');
            } else {
                $cookieStore.put('session_holidayCountry', JSON.stringify($scope.countryListHoliday));
            }
        }
    }
    //holiday Status wise show
    $scope.holidayStatus = function(status) {
        if (status == "Upcoming") {
            $timeout(function() {
                angular.element('.holidayTab2').removeClass('holidayTabActive');
                angular.element('.holidayTab1').addClass('holidayTabActive');
            }, 100);
            $scope.holidayShow = false;
        } else {
            angular.element('.holidayTab2').addClass('holidayTabActive');
            angular.element('.holidayTab1').removeClass('holidayTabActive');
            $scope.holidayShow = true;
        }
    }

    $scope.holidayStatus("Upcoming");

    $scope.removeCountry = (eleIndex) => {
        var obj = [];
        angular.forEach($scope.countryListHoliday, function(val, i) {
            if (val.Cname == eleIndex) {

            } else {
                obj.push({ 'Cname': val.Cname });
            }
        })
        $scope.countryListHoliday = obj;
        console.log($scope.countryListHoliday);
    }

}).controller('PropertyController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.value_form = false;
    $scope.edit_value = false;
    $scope.value_name = [];
    $scope.description = [];
    $scope.value_id = [];
    $scope.new_value = [];
    $scope.new_description = [];

    rest.path = 'property';
    rest.get().success(function(data) {
        $scope.propertiesList = data;
        $scope.propertyEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'property';
        rest.model().success(function(data) {
            $scope.propertyData = data;
            if (data.language.length != undefined) {
                angular.element("#language").select2('val', data.language.split(','));
            } else {
                angular.element("#language").select2('val', data.language);
            }
            $scope.edit_value = true;
            rest.path = 'propertyvalues';
            rest.model().success(function(data) {
                $scope.values = data;
            }).error(errorCallback);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.propertyData.property_id) {
                $routeParams.id = $scope.propertyData.property_id;
                rest.path = 'property';
                rest.put($scope.propertyData).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'property';
                rest.post($scope.propertyData).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $scope.pro_id = data.id;
                    $scope.value_form = true;
                }).error(errorCallback);
            }
        }
    };

    $scope.saveValue = function(formId) {
        if (angular.element("#" + formId).valid()) {
            for (var i = 0; i < $scope.value_name.length; i++) {

                $scope.valueData = {};
                $scope.valueData = {
                    value_name: $scope.value_name[i],
                    description: $scope.description[i],
                    property_id: $scope.pro_id
                };
                rest.path = 'values';
                rest.post($scope.valueData).success(function(data) {}).error(errorCallback);
            }
            $route.reload();
        }
    };

    $scope.UpdateValue = function() {
        for (var i = 0; i < $scope.value_name.length; i++) {
            $scope.valueData = {};
            $scope.valueData = {
                value_name: $scope.value_name[i],
                description: $scope.description[i]
            };
            $routeParams.id = $scope.value_id[i];
            rest.path = 'values';
            rest.put($scope.valueData).success(function(data) {}).error(errorCallback);
        }

        for (var i = 0; i < $scope.new_value.length; i++) {
            $scope.newValues = {};
            $scope.newValues = {
                value_name: $scope.new_value[i],
                description: $scope.new_description[i],
                property_id: $scope.propertyData.property_id
            };
            $routeParams.id = $scope.value_id[i];
            rest.path = 'values';
            rest.post($scope.newValues).success(function(data) {

            }).error(errorCallback);
        }
        $route.reload();
    }

    $scope.rowDelete = function(idx, id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                jQuery('#' + idx).remove();
                rest.path = 'values/' + id;
                rest.delete().success(function(data) {}).error(errorCallback);
            }
        });
    };

    $scope.deleteValue = function(idx) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                jQuery('#item_' + idx).remove();
                $scope.value_name.splice(idx, 1);
                $scope.description.splice(idx, 1);
            }
        });
    };

    $scope.deleteValue2 = function(idx, id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                jQuery('#' + id).remove();
                $scope.new_value.splice(idx, 1);
                $scope.new_description.splice(idx, 1);
            }
        });
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'property/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('langController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'language';
    rest.get().success(function(data) {
        $scope.languageList = data;
        $scope.languageEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'language';
        rest.model().success(function(data) {
            $scope.lang = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.lang.lang_id) {
                $routeParams.id = $scope.lang.lang_id;
                rest.path = 'language';
                rest.put($scope.lang).success(function() {
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'language';
                rest.post($scope.lang).success(function(data) {
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'language/' + id;
                rest.delete().success(function() {
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };


    //New MemoQ language list
    rest.path = 'getMemoQLanguage';
    rest.get().success(function(langData) {
        if (langData) {
            $scope.MemoQLanguage = langData;

            $('#tblDataLoading').css('display', 'none');
        }
    }).error(errorCallback);

}).controller('centerController', function($scope, $log, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.CurrentDate = new Date();

    //abbrivation Check
    $scope.abbrevationCheck = function(name) {
        if (name) {
            rest.path = "abbrivationMatch/" + name;
            rest.get().success(function(data) {
                if (data) {
                    notification("Duplicate abbrivation not allowed", 'warning');
                }
            }).error(errorCallback);
        }
    }

    $scope.save = function(formId) {
        if (angular.element('#' + formId).valid()) {
            if ($scope.center.center_id) {
                var numberFormate = [];
                angular.element("[id^=numberFormate]").each(function(i, val) {
                    numberFormate.push({
                        id: val.id,
                        value: val.value
                    });
                });
                $scope.center.order_number = JSON.stringify(numberFormate);

                $routeParams.id = $scope.center.center_id;
                rest.path = 'centerupdate';
                rest.put($scope.center).success(function(data) {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                var numberFormate = [];
                angular.element("[id^=numberFormate]").each(function(i, val) {
                    numberFormate.push({
                        id: val.id,
                        value: val.value
                    });
                });
                if ($scope.center.is_active == undefined) {
                    $scope.center.is_active = '0';
                }
                $scope.center.order_number = JSON.stringify(numberFormate);
                rest.path = 'centersave';
                rest.post($scope.center).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'centerDateget';
    rest.get().success(function(data) {
        $scope.centerList = data;
        $scope.bussinessEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.disableField = false;
    $scope.centerEdit = function(id, eID) {
        rest.path = 'centergetOne/' + id;
        rest.get().success(function(data) {
            $scope.center = data;
            $scope.order_number = JSON.parse(data.order_number)[0].value;
            $scope.disableField = true;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteCenter = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteCenter/' + id;
                rest.delete().success(function(data) {
                    if (data.status == 422) {
                        notification('You can not delete this record.', 'warning');
                    } else {
                        notification('Record deleted successfully.','success');
                        $route.reload();
                    }
                }).error(errorCallback);
            }
        });
    }

}).controller('signController', function($compile, $scope, $log, $location, $timeout, $route, fileReader, rest, $window, $rootScope, $routeParams, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.emails = {};
    rest.path = 'emailSignCheck';
    rest.get().success(function(data) {
        $scope.emailSignActive = data;
    }).error(errorCallback);
    $timeout(function() {
        angular.element('.btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').remove();
        angular.element('.btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').remove();
        angular.element('.btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').remove();
    }, 500);
    
    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                $scope.imgshow = true;
                $scope.imageSrc = result;
            });
    }

    $timeout(function() {
        angular.element('#txtAngular').froalaEditor({
            // Set the image upload URL.
            inlineStyles: {
                    'Big Red': 'font-size: 20px; color: red;',
                    'Small Blue': 'font-size: 14px; color: blue;',
                    'Italic' :'font-style: italic;',
                    'Normal' :'font-style: normal;'
            },
            theme: 'gray',
            height: 250,
            zIndex: 2001,
            imageUploadURL: '/api/v1/knowledgeArticleImage',
            imageUploadParams: {
                id: 'my_editor'
            },
            fileUploadURL: '/api/v1/knowledgeArticlefile',
            fileUploadParams: {
                id: 'my_editor'
            }
        }).on('froalaEditor.image.removed', function(e, editor, $img) {
            $.ajax({
                // Request method.
                method: "POST",
                // Request URL.
                url: "/api/v1/knowledgeDeleteArticleImage",
                // Request params.
                data: {
                    src: $img.attr('src')
                }
            })
        });
        angular.element('div.fr-wrapper + div').remove();
        $('.fr-toolbar').find("button:eq(2)").remove();
    },200);

    rest.path = 'emailSignget';
    rest.get().success(function(data) {
        $scope.emailsignList = data;
        $scope.emailSignEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.signEdit = function(id, eID) {
        rest.path = 'emailSigngetone/' + id;
        rest.get().success(function(data) {
            $scope.emails = data;
            $scope.imgshow = false;
            $scope.hideImg = true;
            angular.element('.fr-view').html(data.sign_detail);
            angular.element('.fr-placeholder').hide();
            angular.element('#txtAngular').val(data.sign_detail);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deletesign = function(id, image) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteSign/' + id + '/' + image;
                rest.delete().success(function(data) {
                    if (data.status == 200) {
                        notification('Record deleted successfully.','success');
                    } else {
                        notification('You can not delete active record.', 'error');
                    }
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

    $scope.save = function(formId) {
        $scope.emails.sign_detail = angular.element('#txtAngular').val();
        if ($scope.emails.sign_id) {
            $scope.emails.sign_picture = $scope.imageSrc;
            $routeParams.id = $scope.emails.sign_id;
            rest.path = 'emailSignupdate';
            rest.put($scope.emails).success(function(data) {
                notification('Record updated successfully.','success');
                $route.reload();
            }).error(errorCallback);
        } else {
            if ($scope.imageSrc) {
                $scope.emails.sign_picture = $scope.imageSrc;
            }
            rest.path = 'emailSignsave';
            rest.post($scope.emails).success(function(data) {
                notification('Record inserted successfully.','success');
                $route.reload();
            }).error(errorCallback);
        }
    }

    var placeHoderElement = '<div class="btn-group" id="mainDiv" style="margin-left: 0px;">' + '<button type="button" style="padding:5.5px;font-size:14px;" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="" tabindex="-1" data-name="style" data-original-title="Style">Place Holder<span class="caret" style="margin-left: 3px;"></span></button>' + '<ul class="dropdown-menu" data-name="style" id="ulPlaceHolder"> </ul></div>';
    $timeout(function() {
        $('#emailTpl .ta-toolbar').append(placeHoderElement);
    }, 100);



    $scope.addPlaceHolder = function(plsHolderName) {
        /*var txtAngularElement = $('#emailTpl').find('textarea').prev();
        var oldtxt = txtAngularElement.html();
        txtAngularElement.html(oldtxt + plsHolderName);*/
        $('#emailTpl').find('textarea').prev().focus();
        pasteHtmlAtCaret(plsHolderName, 'tst');
    }

    $scope.emailTplCatChange = function() {
        $('#emailTplCat').next().hide();
        var selectedData = angular.element("#emailTplCat").select2('data');
        rest.path = 'getEmailTemplatePlaceHolder/' + selectedData.id;
        rest.get().success(function(data) {
            if (data) {
                $scope.placeHoders = data
                $('#ulPlaceHolder').empty();
                var LiPlaceholder = "";
                angular.forEach($scope.placeHoders, function(val, i) {
                    var placeHoderName = val;
                    LiPlaceholder += '<li><a href="javascript:void(0)" ng-click="addPlaceHolder(\'' + placeHoderName + '\')">' + placeHoderName + '</a></li>'
                });
                var customUl = $('#ulPlaceHolder').append(LiPlaceholder);
                $compile(customUl)($scope);
            }else{
                $('#ulPlaceHolder').empty();
            }
        }).error(errorCallback);
    }

    $scope.saveTemplate = function(formId) {
        if (angular.element("#" + formId).valid()) {
            //console.log("$scope.emailTplData", $scope.emailTplData);return false;
            if (!$scope.emailTplData.template_content || $('#emailTpl').find('textarea').prev().html() === '<br>') {
                notification('Please enter template detail.', 'warning');
                return false;
            } else {

                if ($scope.emailTplData.template_id) {
                    // notification('error please try later', 'error');
                    // return false;
                    $routeParams.id = $scope.emailTplData.template_id;
                    rest.path = 'emailTemplateUpdate';
                    rest.put($scope.emailTplData).success(function(data) {
                        if (data.status == 200) {
                            notification('Record updated successfully', 'success');
                        } else {
                            notification('error please try later', 'error');
                        }
                        $route.reload();
                    }).error(errorCallback);

                } else {
                    /*notification('error please try later', 'error');
                    return false;*/
                    if (!$scope.emailTplData.is_active) {
                        $scope.emailTplData.is_active = 0;
                    }
                    $scope.emailTplData.created_by = $window.localStorage.getItem('session_iUserId');
                    $scope.emailTplData.template_content = $('#emailTpl').find('textarea').prev().html();
                    rest.path = 'saveEmailTemplate';
                    rest.post($scope.emailTplData).success(function(data) {
                        if (data.status == 200) {
                            notification('Record inserted successfully', 'success');
                        } else {
                            notification('error please try later', 'error');
                        }
                        $route.reload();
                    }).error(errorCallback);
                }
                console.log("tplForm");
                $timeout(function() {
                    scrollToId('tplForm');
                },500);

            }
        }
    }


    rest.path = 'emailTemplateGetAll';
    rest.get().success(function(data) {
        $scope.emailTemplateList = data;
    }).error(errorCallback);

    $scope.tplEdit = function(id, sId) {
        rest.path = 'emailTemplateGetOne/' + id;
        rest.get().success(function(data) {
            $scope.emailTplData = data;
            angular.element("#emailTplCat").select2('val', $scope.emailTplData.template_category);
            $timeout(function() {
                $scope.emailTplCatChange();
            }, 100);
        }).error(errorCallback);

        var eleHeight = elmYPosition(sId)
        $('.md-content').animate({ scrollTop: eleHeight }, 200);
    }

    $scope.tplDel = function(id) {
        // console.log("id", id);return false;
        bootbox.confirm("Are you sure you want to delete this template?", function(result) {
            if (result == true) {
                rest.path = 'deleteEmailTemplate/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('projectTypeController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'prtype';
    rest.get().success(function(data) {
        $scope.projectType = data;
        $scope.projectTypeEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'prtype';
        rest.model().success(function(data) {
            $scope.pr_type = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.pr_type.pr_type_id) {
                $routeParams.id = $scope.pr_type.pr_type_id;
                rest.path = 'prtype';
                rest.put($scope.pr_type).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'prtype';
                rest.post($scope.pr_type).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'prtype/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('projectStatusController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.pr_status.pr_status_id) {
                $routeParams.id = $scope.pr_status.pr_status_id;
                rest.path = 'prStatus';
                rest.put($scope.pr_status).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($scope.pr_status.is_default == undefined) {
                    $scope.pr_status.is_default = '0';
                }
                if ($scope.pr_status.is_active == undefined) {
                    $scope.pr_status.is_active = '0';
                }
                rest.path = 'prStatus';
                rest.post($scope.pr_status).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'prstatus';
    rest.get().success(function(data) {
        $scope.projectStatus = data;
        $scope.projectStatusEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'prStatus';
        rest.model().success(function(data) {
            $scope.pr_status = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'prStatus/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('jobController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.type.job_id) {
                $routeParams.id = $scope.type.job_id;
                rest.path = 'Jobs';
                rest.put($scope.type).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'Jobs';
                rest.post($scope.type).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $scope.job_id = data.id;
                    $scope.jobValue = true;
                    $scope.getAll();
                }).error(errorCallback);
            }
        }
    }

    $scope.getAll = function(){
        rest.path = 'Jobsget';
        rest.get().success(function(data) {
            $scope.jobs = data;
        }).error(errorCallback);
    }
    $scope.getAll();

    $scope.getJob = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'jobsget';
        rest.model().success(function(data) {
            $scope.type = data['data'];
            $scope.workIns = data['info'];
        }).error(errorCallback);
        $scope.jobValue_edit = true;
        scrollToId(eID);
    }

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'jobsDelete/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

    $scope.deleteValue = function(id, wID) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'DeleteJobInstruction/' + wID;
                rest.delete().success(function(data) {}).error(errorCallback);
                angular.element('#item1_' + id).remove();
                angular.element('#item_' + id).remove();
            }
        });
    }

    $scope.saveJobInstruction = function(frmId) {
        if (angular.element('#' + frmId).valid) {
            //update work instruction
            var job_id = $scope.type.job_id;
            if ($scope.type.job_id) {
                for (var i = 0; i < angular.element('[id^=item1_]').length; i++) {
                    var workInstructionId = angular.element('.workI_id' + i).text();
                    if (workInstructionId) {
                        $scope.jobInstruction = {};
                        var w_source = angular.element('#source_' + i).val();
                        var w_target = angular.element('#target_' + i).val();
                        var w_default = angular.element('#bdefault_' + i).is(':checked') ? 1 : 0;
                        var w_display = angular.element('#display_' + i).is(':checked') ? 1 : 0;

                        $scope.w_source = w_source;
                        $scope.w_target = w_target;
                        $scope.w_default = w_default;
                        $scope.w_display = w_display;
                        $scope.jobInstruction.w_source = $scope.w_source;
                        $scope.jobInstruction.w_target = $scope.w_target;
                        $scope.jobInstruction.w_default = $scope.w_default;
                        $scope.jobInstruction.w_display = $scope.w_display;
                        $scope.jobInstruction.job_id = job_id;

                        $routeParams.id = workInstructionId;
                        rest.path = 'updateJobInstruction';
                        rest.put($scope.jobInstruction).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);

                    } else {
                        $scope.jobInstruction = {};
                        var w_source = angular.element('#source_' + i).val();
                        var w_target = angular.element('#target_' + i).val();
                        var w_default = angular.element('#bdefault_' + i).is(':checked') ? 1 : 0;
                        var w_display = angular.element('#display_' + i).is(':checked') ? 1 : 0;
                        $scope.w_source = w_source;
                        $scope.w_target = w_target;
                        $scope.w_default = w_default;
                        $scope.w_display = w_display;
                        $scope.jobInstruction.w_source = $scope.w_source;
                        $scope.jobInstruction.w_target = $scope.w_target;
                        $scope.jobInstruction.w_default = $scope.w_default;
                        $scope.jobInstruction.w_display = $scope.w_display;
                        $scope.jobInstruction.job_id = job_id;
                        rest.path = 'saveJobInstruction';
                        rest.post($scope.jobInstruction).success(function(data) {
                            $route.reload();
                        }).error(errorCallback);
                    }
                }
            } else {
                //save work instruction
                for (var i = 0; i < angular.element('[id^=item_]').length; i++) {
                    $scope.jobInstruction = {};
                    var w_source = angular.element('#source' + i).val();
                    var w_target = angular.element('#target' + i).val();
                    var w_default = angular.element('#bdefault' + i).is(':checked') ? 1 : 0;
                    var w_display = angular.element('#display' + i).is(':checked') ? 1 : 0;

                    $scope.w_source = w_source;
                    $scope.w_target = w_target;
                    $scope.w_default = w_default;
                    $scope.w_display = w_display;
                    $scope.jobInstruction.w_source = $scope.w_source;
                    $scope.jobInstruction.w_target = $scope.w_target;
                    $scope.jobInstruction.w_default = $scope.w_default;
                    $scope.jobInstruction.w_display = $scope.w_display;
                    $scope.jobInstruction.job_id = $scope.job_id;
                    rest.path = 'saveJobInstruction';
                    rest.post($scope.jobInstruction).success(function(data) {
                        $route.reload();
                    }).error(errorCallback);
                }
            }
        }
    }
}).controller('newjobchaincontroller', function($scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.name = $window.localStorage.getItem("session_vUserName");
    $window.localStorage.job_chain_id = " ";
    $window.localStorage.chainediteId = " ";

    rest.path = 'jobChainList';
    rest.get().success(function(data) {
        $scope.jobChainList1 = data;
    }).error(function(data, error, status) {});

    $scope.newFile = function() {
        $window.localStorage.chainediteId = " ";
        if ($scope.jobchain == undefined || $scope.jobchain == "" || $scope.jobchain == null) {
            $scope.jobchain = {};
        }
        $scope.creator = $scope.name;
        $scope.jobchain.creator = $scope.creator;

        rest.path = 'jobChainsave';
        rest.post($scope.jobchain).success(function(data) {
            $window.localStorage.chainediteId = data
            $location.path("/job-chain");
        }).error(errorCallback);
    }

    $scope.chainEditId = function(id) {
        if (id == undefined) {
            notification('Please select option', 'warning');
        } else {
            $window.localStorage.chainediteId = id;
            $window.localStorage.job_chain_id = id;
            $location.path('/job-chain');
        }
    }
    $scope.chainDeleteId = function(id) {
        if (!id) {
            notification('Please select option', 'warning');
        } else {
            bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                if (result == true) {
                    rest.path = 'deleteJobChain/' + id;
                    rest.delete().success(function(data) {
                        if (data.status != 200) {
                            notification(data.msg, 'error');
                        } else {
                            notification('Record deleted successfully.', 'success');
                            $route.reload();
                        }
                    }).error(errorCallback);
                }
            });
        }
    }

    $scope.chainDuplicate = function(id) {
        if (id == undefined) {
            notification('Please select option', 'warning');
        } else {
            rest.path = 'chainDuplicateSave/' + id;
            rest.get().success(function(data) {
                $window.localStorage.chainediteId = data;
                $window.localStorage.job_chain_id = data;
                $window.localStorage.job_duplicateId = data;
                $location.path('/job-chain');
            }).error(errorCallback);
        }
    }

    rest.path = 'masterjobChaindelete';
    rest.get().success(function(data) {

    }).error(errorCallback);

}).controller('jobchaincontroller', function($compile, $timeout, $scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.name = $window.localStorage.getItem("session_vUserName");
    rest.path = 'customergroupGetdata';
    rest.get().success(function(data) {
        $scope.customerLi = data;
    }).error(errorCallback)

    rest.path = 'clients';
    rest.get().success(function(data) {
        $scope.customerGroup = data;
    }).error(errorCallback);

    $scope.jobChainCustomerAdd = function(name) {
        $scope.custome = name.split(',');
        $scope.customCode = $scope.custome[0];
        $scope.customId = $scope.custome[1];
        $scope.customName = $scope.custome[2];
    }

    $scope.removeCustomer = function(id) {
        var check = angular.element('[id^=Cusid]').length - 1;
        if (id == check) {
            angular.element('.cus' + id).remove();
        } else {
            notification('Please delete from last record', 'warning');
        }
    }

    if ($window.localStorage.chainediteId) {
        rest.path = 'jobnumberGet/' + $window.localStorage.chainediteId;
        rest.get().success(function(data) {
            $window.localStorage.job_numberId = data + 1;
        }).error(errorCallback);
    }

    $scope.saveJob = function(jobId) {
        if (angular.element("#" + jobId).valid()) {
            //console.log("jobId", jobId);return;
            $scope.job_chain = [];
            if ($scope.job_chain == "" || $scope.job_chain == null || $scope.job_chain == undefined) {
                $scope.job_chain = {};
            }

            rest.path = 'masterjobGet/' + $scope.jobchain_data.jobs;
            rest.get().success(function(data) {
                var a = data.service_name + ' (' + data.job_code + ')';
                var b = a.split("(").pop();
                var init = a.indexOf('(');
                var fin = a.indexOf(')');
                var code = a.substr(init + 1, fin - init - 1);
                var name = a.substring(0, a.indexOf('('));
                var job_chain_id = $window.localStorage.chainediteId;
                $scope.job_id = data.job_id;
                $scope.job_chain.job_id = $scope.job_id;
                $scope.job_chain.job_chain_id = job_chain_id;
                $scope.job_chain.jobs = name;
                $scope.job_chain.job_code = code;
                $scope.job_chain.new_job_number = $window.localStorage.job_numberId;
                rest.path = 'jobChansaveJobs';

                rest.post($scope.job_chain).success(function(data) {
                    rest.path = 'jobChinnewgetOne/' + data.id;
                    rest.get().success(function(res) {
                        $window.localStorage.job_chain_id = res.job_chain_id;
                        $scope.sortedjobList.push(res);
                    }).error(errorCallback);
                    //$route.reload();
                }).error(errorCallback);

                $scope.customer = [];
                for (var i = 0; i < angular.element("[id^=Cuscode]").length; i++) {
                    var Ccode = angular.element('#Cuscode' + i).text();
                    var Cid = angular.element('#Cusid' + i).text();
                    var Cname = angular.element('#Cusname' + i).text();
                    $scope.customer.push({
                        Cuscode: Ccode,
                        Cusid: Cid,
                        Cusname: Cname
                    });
                }

                $scope.jobchain.customer = JSON.stringify($scope.customer);
                $scope.jobchain.creator = $scope.name;
                $routeParams.id = $scope.jobchain.job_chain_id;
                rest.path = 'jobChainupdate';
                rest.put($scope.jobchain).success(function(data) {}).error(errorCallback);
                if ($scope.sortedjobList) {
                    $routeParams.id = $window.localStorage.chainediteId;
                    var sortData = [];
                    $timeout(function() {
                        angular.forEach($scope.sortedjobList, function(val, i) {
                            sortData.push({
                                'id': val.new_job_id
                            })
                        });

                        var obj = {
                            'sort': angular.toJson(sortData)
                        };

                        rest.path = 'sortedjobListSave';
                        rest.put(obj).success(function(data) {

                        }).error(errorCallback);
                    }, 1000);
                }
            }).error(errorCallback);
        }
    }

    $scope.save = function(frmId, frmId1, name) {
        if ($scope.jobchain.project_type == 0) {
            $timeout(function() {
                $('#project_type').next().css('display', 'block');
            }, 100);
        } else {
            $('#project_type').next().css('display', 'none');
        }
        if ($('#' + frmId).valid()) {
            if ($scope.jobchain.job_chain_id) {
                $scope.customer = [];
                for (var i = 0; i < angular.element("[id^=Cuscode]").length; i++) {
                    var Ccode = angular.element('#Cuscode' + i).text();
                    var Cid = angular.element('#Cusid' + i).text();
                    var Cname = angular.element('#Cusname' + i).text();
                    $scope.customer.push({
                        Cuscode: Ccode,
                        Cusid: Cid,
                        Cusname: Cname
                    });
                }
                $scope.jobchain.customer = JSON.stringify($scope.customer);
                var creator = name;
                $scope.jobchain.creator = creator;
                //console.log("$scope.jobchain", $scope.jobchain);return;
                $routeParams.id = $scope.jobchain.job_chain_id;
                rest.path = 'jobChainupdate';
                rest.put($scope.jobchain).success(function(data) {


                    if ($scope.sortedjobList) {
                        $routeParams.id = $window.localStorage.chainediteId;

                        var sortData = [];
                        angular.forEach($scope.sortedjobList, function(val, i) {
                            sortData.push({
                                'id': val.new_job_id
                            })
                        });

                        var obj = {
                            'sort': angular.toJson(sortData)
                        };

                        rest.path = 'sortedjobListSave';
                        rest.put(obj).success(function(data) {

                        }).error(errorCallback);
                    }
                    notification('Record updated successfully.','success');
                    $location.path('/newjob');
                    scrollBodyToTop();
                }).error(errorCallback);

            }
        }

    }

    if ($window.localStorage.chainediteId) {
        rest.path = 'jobChingetOne/' + $window.localStorage.chainediteId;
        rest.get().success(function(data) {
            $scope.jobchain = data;
            $scope.customerJob = JSON.parse(data.customer);
            if ($scope.customerJob.length != undefined) {
                $scope.jobcustomerCount = $scope.customerJob.length;
            } else {
                $scope.jobcustomerCount = 0;
            }
            if ($scope.jobchain.job_name == 1) {
                $scope.jobchain.job_name = "";
            }
            $scope.name = data['creator'];
            if (data.sortedJobsJson) {
                $scope.sortedListSaved = JSON.parse(data.sortedJobsJson);
            }
        })
        rest.path = 'jobChinjobsGet/' + $window.localStorage.chainediteId;
        rest.get().success(function(data) {
            $timeout(function() {
                var StoreAsSortJob = [];
                if ($scope.sortedListSaved) {
                    angular.forEach($scope.sortedListSaved, function(v, i) {
                        var Searchedobj = data.find(function(obj) { return obj.new_job_id == v.id; });
                        if (Searchedobj) {
                            StoreAsSortJob.push(Searchedobj);
                        }
                    });

                    $timeout(function() {
                        $scope.jobsList = StoreAsSortJob;
                        $scope.sortedjobList = $scope.jobsList;
                    }, 300);
                } else {
                    $timeout(function() {
                        $scope.jobsList = data;
                        $scope.sortedjobList = $scope.jobsList;
                    }, 300);
                }
            }, 300);
        })
    }

    $scope.chainsetting = function(id) {
        $window.localStorage.setItem("newjobChainId", id);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/chain.html',
            controller: 'chainController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
            $route.reload();
        });
    }

    $scope.sortableOptions = {
        axis: "y",
        activate: function() {},
        beforeStop: function() {},
        change: function() {},
        create: function() {},
        deactivate: function() {},
        out: function() {},
        over: function() {},
        receive: function() {},
        remove: function() {},
        sort: function() {},
        start: function(event, ui) {},
        update: function(e, ui) {},
        stop: function(e, ui) {
            ui.item.removeAttr("style");
        }
    };
    $scope.showSort = () => {
        var html = angular.element(
            '<div style="margin-left:-6%">' +
            '<ul ui-sortable="sortableOptions" ng-model="sortedjobList" class="list">' +
            '<li ng-repeat="item in sortedjobList" class="item">{{item.job_code}}{{item.new_job_number | numberFixedLen:3}}</li>' +
            '</ul>' +
            '</div>' +
            '</div>');

        $compile(html)($scope);
        var dialog = bootbox.dialog({
            title: "Sort jobs",
            message: html,
            buttons: {
                success: {
                    label: "Save",
                    onEscape: true,
                    className: "btn-info",
                    callback: function() {

                    }
                }
            }
        });

        /*console.log("$scope.showSortBox", $scope.showSortBox);
        if($scope.showSortBox == false){
            $scope.showSortBox = true;
        }else{
            $scope.showSortBox = false;
        }*/

    }

}).controller('serviceController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.service.sId) {
                $routeParams.id = $scope.service.sId;
                rest.path = 'serviceUpdate';
                rest.put($scope.service).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'serviceSave';
                rest.post($scope.service).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }
    rest.path = 'serviceget';
    rest.get().success(function(data) {
        $scope.servicelist = data;
        $scope.serviceEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getService = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'servicegetone/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.service = data;
            angular.element("#properties_id").select2('val', data.properties);
            angular.element("#job_repereesantation_id").select2('val', data.job_representation);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteService = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'serviceDelete/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

}).controller('masterpriceController', function($window, $log, $scope, $location, $route, rest, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    $scope.save = function(formId, id) {
        if (angular.element('#' + formId).valid()) {
            if ($scope.master.master_price_id) {
                $routeParams.id = $scope.master.master_price_id;
                notification('Record updated successfully.','success');
                rest.path = 'masterpriceupdate';
                rest.put($scope.master).success(function() {
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'masterpricesave';
                rest.post($scope.master).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $scope.myitems = false;
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'masterPriceGet';
    rest.get().success(function(data) {
        $scope.masterList = data;
    });

    $scope.getMasterPrice = function(id, eID) {
        rest.path = 'masterpriceGetOne/' + id;
        rest.get().success(function(data) {
            $scope.master = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteMasterprice = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'masterPriceDelete/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

}).controller('childpriceController', function($window, $log, $scope, $location, $route, rest, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    $scope.save = function(formId, id) {
        if (angular.element('#' + formId).valid()) {
            if ($scope.childprice.child_price_id) {
                $routeParams.id = $scope.childprice.child_price_id;
                rest.path = 'childpriceupdate';
                rest.put($scope.childprice).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'childpricesave';
                rest.post($scope.childprice).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'childPriceGet';
    rest.get().success(function(data) {
        $scope.childunitlist = data;
        $scope.childEmpty = jQuery.isEmptyObject(data);
    })

    $scope.ChildunitEdit = function(id, eID) {
        rest.path = 'childpriceGetOne/' + id;
        rest.get().success(function(data) {
            $scope.childprice = data;
            angular.element("#mamaster_price_id").select2('val', data.master_price_id);
            angular.element("#unit").select2('val', data.unit);
            angular.element("#service").select2('val', data.service);
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteChildprice = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'childPriceDelete/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

}).controller('roundingPriceController', function($window, $log, $scope, $location, $route, rest, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    getData();

    function getData() {
        rest.path = "roundingPriceGetAll";
        rest.get().success(function(data) {
            $scope.roundingList = data;
        }).error(errorCallback);
    }

    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            if ($scope.rounding.rounding_id) {
                $routeParams.id = $scope.rounding.rounding_id;
                rest.path = "roundingPriceUpdate";
                rest.put($scope.rounding).success(function(data) {
                    if (data.status == 422) {
                        notification(data.msg, 'error');
                    }else{
                        notification('Record updated successfully.','success');
                    }
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = "roundingPriceSave";
                rest.post($scope.rounding).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    $scope.roundingPriceEdit = function(id, eID) {
        rest.path = "roundingPriceGetOne/" + id;
        rest.get().success(function(data) {
            $scope.rounding = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteRoundingprice = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'deleteRoundingprice/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    }

}).controller('customerpricelistController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    angular.element('.panel-heading').css('background-color', 'white');
    $scope.currentUserName = $window.localStorage.getItem("session_vUserName");

    $scope.pricePageId = 1;

    $scope.newCustomer = function() {
        $scope.customerPriceList = true;
        $scope.customerPrice = {};
        $scope.customerPrice.price_name = $scope.currentUserName + ' | '; //TRA|PRF-;
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        angular.element('#price_currency').select2('val', '');
        angular.element('#calculation_basis').select2('val', '');
        angular.element('#rounding_proc').select2('val', '');
        angular.element('#specialization').select2('val', '');
        $scope.customerPriceId = false;
        $scope.planedQuaTotal = "";
        $scope.planedHourTotal = "";
        $scope.baseQuentity = [];
        $scope.basePrice = [];
    }

    angular.element('.customerPriceTable th:eq(2)').css('border-left', 'solid 1');

    angular.element('.priceTable th').mouseover(function() {
        angular.element(this).css('cursor', 'pointer');
    });

    rest.path = 'masterPriceitemgetFromPriceList';
    rest.get().success(function(data) {
        $scope.masterPrice = data;
    }).error(errorCallback);

    rest.path = 'childPriceitemget';
    rest.get().success(function(data) {
        $scope.childPrice = data;
    }).error(errorCallback);

    $scope.itemLanguage = function(item) {
        var a = item.source_lang.split(',');
        angular.forEach(a, function(val, i) {});
    }

    angular.element('body').on('click', '.priceLPrice', function() {
        $('.priceLPrice').removeClass('rowactivate');
        $(this).addClass('rowactivate');
    });

    $scope.removePriceLanguage = function(id) {
        if (angular.element('[id^=priceLanguageID]').length - 1 == id) {
            angular.element('#priceLanguageID' + id).remove();
        } else {
            notification('Delete from last record', 'warning');
        }
    }

    $scope.sendPriceLanguage = function(id) {
        var specialization = angular.element('#specialization').select2('data');
        if (!specialization) {
            notification('Please select specialization.', 'warning');
            return;
        }
        var language = angular.element('#priceLanguageID' + id).text();
        angular.element('body').find('.setPriceLanguage').text(language);
        var customerPriceName = angular.element('#customerPriceName').val();
        var chkNameAfterPipeSymbole = customerPriceName[customerPriceName.length - 2];
        if (chkNameAfterPipeSymbole == "|") {
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;
            $scope.customerPrice.price_name = $scope.customerPrice.price_name + newLanguage + ' | ' + specialization.text;
        } else {
            var customerPriceName = angular.element('#customerPriceName').val();
            var oldName = customerPriceName.split('|');
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;
            var specialization = angular.element('#specialization').select2('data');
            $scope.customerPrice.price_name = oldName[0].trim() + ' | ' + newLanguage + ' | ' + specialization.text;
        }
    }

    $scope.removeBasePrice = function(id) {
        if (angular.element('[class^=basePriceMain]').length - 1 == id) {
            $scope.planedHourTotal = parseInt(angular.element('.totalPlannHour').text()) - parseInt(angular.element('.plannedStandardTime' + id).text());
            $scope.planedQuaTotal = parseInt(angular.element('.totalPlannQuentity').text()) - parseInt(angular.element('.plannedQuentity' + id).text());
            angular.element('.basePriceMain' + id).remove();
            angular.element('.plannedData' + id).remove();
            $scope.basePrice[id] = "";
        } else {
            notification('Delete from last record', 'warning');
        }
    }

    $scope.basePriceCheck = function(id) {
        var daynamicClass = angular.element('#basePriceCheck' + id).attr('class').split(' ')[1];
        var oldClass = 'fa-check';
        var newClass = 'fa-times';
        if (daynamicClass == newClass) {
            angular.element('#basePriceCheck' + id).addClass(oldClass);
            angular.element('#basePriceCheck' + id).removeClass(daynamicClass);
        } else if (daynamicClass == oldClass) {
            angular.element('#basePriceCheck' + id).removeClass(oldClass);
            angular.element('#basePriceCheck' + id).addClass(newClass);
        }
    }

    $scope.customerChange = function(id) {
        rest.path = 'customerpriceGetOne/' + id;
        rest.get().success(function(data) {
            $scope.customerPrice = data;

            angular.element('#price_currency').select2('val', data.price_currency);
            angular.element('#calculation_basis').select2('val', data.calculation_basis);
            angular.element('#rounding_proc').select2('val', data.rounding_proc);
            var check = false;
            var getComma = /,/;
            if (getComma.test(data.specialization) == true) {
                check = true;
            } else {
                check = false;
            }
            angular.element('#specialization').select2('val', check ? data.specialization.split(',') : data.specialization);
            $scope.priceBasiList = JSON.parse(data.price_basis);
            $scope.priceLanguageList = JSON.parse(data.price_language);
            $scope.baseQuentity = [];
            $scope.basePrice = [];
            var quantity = 0;
            var standard = 0;
            angular.forEach(JSON.parse(data.price_basis), function(val, i) {
                $scope.baseQuentity[i] = val.baseQuentity;
                $scope.basePrice[i] = val.basePrice;

                if (val.baseQuentity) {
                    quantity += parseInt(val.baseQuentity);
                }

                if (val.standardTime) {
                    standard += parseInt(val.standardTime);
                }
            });

            $scope.planedHourTotal = standard;
            $scope.planedQuaTotal = quantity;
        }).error(errorCallback);
        $scope.customerPriceList = true;
    }

    $scope.removecustomerPriceId = function() {
        $scope.customerPrice = {};
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        $route.reload();
    };

    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            var setPriceLanguage = angular.element('.setPriceLanguage').text();
            if (setPriceLanguage == 'Change prices') {
                notification('Please set language', 'warning');
                return false;
            }
            if ($scope.customerPrice.price_list_id) {
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }
                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();

                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }

                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                $routeParams.id = $scope.customerPrice.price_list_id;
                rest.path = "customerpriceUpdate";
                rest.put($scope.customerPrice).success(function(data) {
                    notification('Price list successfully updated', 'success');
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            } else {

                if (setPriceLanguage == 'Change prices') {
                    notification('Please set language', 'warning');
                    return false;
                }
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }

                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();
                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }
                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                rest.path = "customerpriceSave";
                rest.post($scope.customerPrice).success(function(data) {
                    notification('Price list successfully saved', 'success');
                    $scope.customerPrice.price_list_id = data.LastIsertedData.price_list_id;
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            }
        }
    }

    angular.element('.topMenu').click(function() {
        angular.element('.topMenu').removeClass('topMenu-Active');
        angular.element(this).addClass('topMenu-Active');
        if (angular.element(this).text().trim() == 'Planned time') {
            $scope.plannedTime = true;
        } else {
            $scope.plannedTime = false;
        }
    });

    $scope.basePriceQuantityChnage = function(id, data) {
        var val = angular.element('#basePrice' + id).val();
        if (data && val.length > 0) {
            var mul = parseInt(val) * parseInt(data);
            angular.element('#baseWaiting' + id).text(mul);
            // $scope.planedQuaTotal = parseInt(angular.element('.totalPlannQuentity').text()) - parseInt(angular.element('.plannedQuentity' + id).text()) + data;
            // angular.element('.plannedQuentity' + id).text(data);
        } else {
            angular.element('#baseWaiting' + id).text('0');
        }
    }
    $scope.basePriceChnage = function(id, data) {
        var val = angular.element('#basepriceQuantity' + id).val();
        if (data && val.length > 0) {
            var mul = parseInt(val) * parseInt(data);
            angular.element('#baseWaiting' + id).text(mul);
        } else {
            angular.element('#baseWaiting' + id).text('0');
        }
    }

    $scope.copyCustomer = function(id) {
        if (id) {

            rest.path = 'customerpriceListCopy/' + id;
            rest.get().success(function(data) {
                $scope.customerChange(data.id);
            });
        } else {
            notification("please select option", "warning");
        }
    }

}).controller('resourcepricelistController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    angular.element('.panel-heading').css('background-color', 'white');
    $scope.currentUserName = $window.localStorage.getItem("session_vUserName");
    $scope.pricePageId = 2;

    $scope.newCustomer = function() {
        $scope.customerPriceList = true;
        $scope.customerPrice = {};
        $scope.customerPrice.price_name = $scope.currentUserName + ' | '; //TRA|PRF-';
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        angular.element('#price_currency').select2('val', '');
        angular.element('#calculation_basis').select2('val', '');
        angular.element('#rounding_proc').select2('val', '');
        angular.element('#specialization').select2('val', '');
        $scope.customerPriceId = false;
        $scope.planedQuaTotal = "";
        $scope.planedHourTotal = "";
        $scope.baseQuentity = [];
        $scope.basePrice = [];
    }

    angular.element('.customerPriceTable th:eq(2)').css('border-left', 'solid 1');

    angular.element('.priceTable th').mouseover(function() {
        angular.element(this).css('cursor', 'pointer');
    });

    rest.path = 'masterPriceitemgetFromPriceList';
    rest.get().success(function(data) {
        $scope.masterPrice = data;
    }).error(errorCallback);

    rest.path = 'childPriceitemget';
    rest.get().success(function(data) {
        $scope.childPrice = data;
    }).error(errorCallback);

    $scope.itemLanguage = function(item) {
        var a = item.source_lang.split(',');
        angular.forEach(a, function(val, i) {});
    }

    angular.element('body').on('click', '.priceLPrice', function() {
        angular.element('.priceLPrice').removeClass('rowactivate');
        angular.element(this).addClass('rowactivate');
    });

    $scope.removePriceLanguage = function(id) {
        if (angular.element('[id^=priceLanguageID]').length - 1 == id) {
            angular.element('#priceLanguageID' + id).remove();
        } else {
            notification('Delete from last record', 'warning');
        }
    }

    $scope.sendPriceLanguage = function(id) {
        var specialization = angular.element('#specialization').select2('data');
        if (!specialization) {
            notification('Please select specialization.', 'warning');
            return;
        }
        var language = angular.element('#priceLanguageID' + id).text();
        angular.element('body').find('.setPriceLanguage').text(language);
        var customerPriceName = angular.element('#customerPriceName').val();
        var chkNameAfterPipeSymbole = customerPriceName[customerPriceName.length - 2];
        if (chkNameAfterPipeSymbole == "|") {
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;
            $scope.customerPrice.price_name = $scope.customerPrice.price_name + newLanguage + ' | ' + specialization.text;
        } else {
            var customerPriceName = angular.element('#customerPriceName').val();
            var oldName = customerPriceName.split('|');
            var fromLangugageChar = language.split('>')[0].trim().substr(0, 3).toUpperCase();
            var toLangugageChar = language.split('>')[1].trim().substr(0, 3).toUpperCase();
            var newLanguage = fromLangugageChar + '>' + toLangugageChar;
            var specialization = angular.element('#specialization').select2('data');
            $scope.customerPrice.price_name = oldName[0].trim() + ' | ' + newLanguage + ' | ' + specialization.text;
        }
    }

    $scope.removeBasePrice = function(id) {
        if (angular.element('[class^=basePriceMain]').length - 1 == id) {
            $scope.planedHourTotal = parseInt(angular.element('.totalPlannHour').text()) - parseInt(angular.element('.plannedStandardTime' + id).text());
            $scope.planedQuaTotal = parseInt(angular.element('.totalPlannQuentity').text()) - parseInt(angular.element('.plannedQuentity' + id).text());
            angular.element('.basePriceMain' + id).remove();
            angular.element('.plannedData' + id).remove();
            $scope.basePrice[id] = "";
        } else {
            notification('Delete from last record', 'warning');
        }
    }

    $scope.basePriceCheck = function(id) {
        var daynamicClass = angular.element('#basePriceCheck' + id).attr('class').split(' ')[1];
        var oldClass = 'fa-check';
        var newClass = 'fa-times';
        if (daynamicClass == newClass) {
            angular.element('#basePriceCheck' + id).addClass(oldClass);
            angular.element('#basePriceCheck' + id).removeClass(daynamicClass);
        } else if (daynamicClass == oldClass) {
            angular.element('#basePriceCheck' + id).removeClass(oldClass);
            angular.element('#basePriceCheck' + id).addClass(newClass);
        }
    }

    $scope.customerChange = function(id) {
        rest.path = 'customerpriceGetOne/' + id;
        rest.get().success(function(data) {
            $scope.customerPrice = data;
            angular.element('#price_currency').select2('val', data.price_currency);
            angular.element('#calculation_basis').select2('val', data.calculation_basis);
            angular.element('#rounding_proc').select2('val', data.rounding_proc);
            var check = false;
            var getComma = /,/;
            if (getComma.test(data.specialization) == true) {
                check = true;
            } else {
                check = false;
            }
            angular.element('#specialization').select2('val', check ? data.specialization.split(',') : data.specialization);
            $scope.priceBasiList = JSON.parse(data.price_basis);
            $scope.priceLanguageList = JSON.parse(data.price_language);
            $scope.baseQuentity = [];
            $scope.basePrice = [];
            var quantity = 0;
            var standard = 0;
            angular.forEach(JSON.parse(data.price_basis), function(val, i) {
                $scope.baseQuentity[i] = val.baseQuentity.trim();
                $scope.basePrice[i] = val.basePrice.trim();
                if (val.baseQuentity) {
                    quantity += parseInt(val.baseQuentity);
                }
                if (val.standardTime) {
                    standard += parseInt(val.standardTime);
                }
            });
            $scope.planedHourTotal = standard;
            $scope.planedQuaTotal = quantity;
        }).error(errorCallback);
        $scope.customerPriceList = true;
    }

    $scope.removecustomerPriceId = function() {
        $scope.customerPrice = {};
        $scope.priceBasiList = {};
        $scope.priceLanguageList = {};
        angular.element('#customerPriceId').select2('val', '');
        $route.reload();
    };

    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            var setPriceLanguage = angular.element('.setPriceLanguage').text();
            if (setPriceLanguage == 'Change prices') {
                notification('Please set language', 'warning');
                return false;
            }
            if ($scope.customerPrice.price_list_id) {
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }
                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();

                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }

                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                $routeParams.id = $scope.customerPrice.price_list_id;
                rest.path = "customerpriceUpdate";
                rest.put($scope.customerPrice).success(function(data) {
                    notification('Price list successfully updated', 'success');
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            } else {

                if (setPriceLanguage == 'Change prices') {
                    notification('Please set language', 'warning');
                    return false;
                }
                var langObj = [];
                for (var i = 0; i < angular.element('[id^=priceLanguageID]').length; i++) {
                    var languagePrice = angular.element('.priceLanguage' + i).text();
                    langObj.push({
                        'languagePrice': languagePrice
                    });
                }

                var basePriceObj = [];
                for (var i = 0; i < angular.element('[class^=basePriceMain]').length; i++) {
                    var baseQuentity = angular.element('#basepriceQuantity' + i).val().trim();
                    if (angular.element('#basePriceCheck' + i).attr('class').split(' ')[1] == 'fa-check') {
                        var basePricecheck = 1;
                    } else {
                        var basePricecheck = 0;
                    }
                    var basePriceUnit = angular.element('#basePriceUnit' + i).text().trim();
                    var basePrice = angular.element('#basePrice' + i).val().trim();
                    var standardTime = angular.element('.standardTime' + i).text().trim();
                    basePriceObj.push({
                        'baseQuentity': baseQuentity,
                        'basePricecheck': basePricecheck,
                        'basePriceUnit': basePriceUnit,
                        'basePrice': basePrice,
                        'standardTime': standardTime
                    });
                }

                var price_id = $scope.pricePageId;
                var price_language = JSON.stringify(langObj);
                var price_basis = JSON.stringify(basePriceObj);
                $scope.price_language = price_language;
                $scope.price_basis = price_basis;
                $scope.price_id = price_id;
                $scope.customerPrice.price_language = $scope.price_language;
                $scope.customerPrice.price_basis = $scope.price_basis;
                $scope.customerPrice.price_id = $scope.price_id;
                rest.path = "customerpriceSave";
                rest.post($scope.customerPrice).success(function(data) {
                    notification('Price list successfully saved', 'success');
                    $scope.customerPrice.price_list_id = data.LastIsertedData.price_list_id;
                    $timeout(function() {
                        angular.element("#customerPriceId").select2('data', { id: data.LastIsertedData.price_list_id, text: data.LastIsertedData.price_name });
                    }, 200);
                    var obj = [];
                    rest.path = 'customerpriceAll/' + data.LastIsertedData.price_id;
                    rest.get().success(function(data) {
                        angular.forEach(data, function(val, i) {
                            obj.push({
                                'id': val.price_list_id,
                                'text': val.price_name
                            });
                        });
                    });
                    angular.element('#customerPriceId').select2({
                        allowClear: true,
                        data: obj,
                        multiple: false
                    });
                }).error(errorCallback);
            }
        }
    }

    angular.element('.topMenu').click(function() {
        angular.element('.topMenu').removeClass('topMenu-Active');
        angular.element(this).addClass('topMenu-Active');

        if (angular.element(this).text().trim() == 'Planned time') {
            $scope.plannedTime = true;
        } else {
            $scope.plannedTime = false;
        }

    });

    $scope.basePriceChnage = function(id, data) {
        var val = angular.element('#basepriceQuantity' + id).val();
        if (data && val.length > 0) {
            var mul = parseInt(val) * parseInt(data);
            angular.element('#baseWaiting' + id).text(mul);
        } else {

            angular.element('#baseWaiting' + id).text('0');
        }
    }

    $scope.basePriceQuantityChnage = function(id, data) {
        var val = angular.element('#basePrice' + id).val();
        if (data && val.length > 0) {
            var mul = parseInt(val) * parseInt(data);
            angular.element('#baseWaiting' + id).text(mul);
            // $scope.planedQuaTotal = parseInt(angular.element('.totalPlannQuentity').text()) - parseInt(angular.element('.plannedQuentity' + id).text()) + data;
            // angular.element('.plannedQuentity' + id).text(data);
        } else {
            angular.element('#baseWaiting' + id).text('0');
        }
    }

    $scope.copyCustomer = function(id) {
        if (id) {
            rest.path = 'customerpriceListCopy/' + id;
            rest.get().success(function(data) {
                $scope.customerChange(data.id);
            });
        } else {
            notification("please select option", "warning");
        }
    }

}).controller('InvoiceDuePeriodController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $route) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    //get of invoice due period
    $scope.getData = function() {
        rest.path = "getAllInvoicePeriod";
        rest.get().success(function(data) {
            $scope.dueperiodList = data;
            $scope.getOne(data[0].invoice_due_id);
        }).error(errorCallback);
    }

    $scope.getData();

    //get One of invoice due period
    $scope.getOne = function(id) {
        rest.path = "getOneInvoicePeriod/" + id;
        rest.get().success(function(data) {
            $scope.invoice = data;
        }).error(errorCallback);
        //scrollToId(eID);
    }

    //save of invoice due period
    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            if ($scope.invoice.invoice_due_id) {
                $routeParams.id = $scope.invoice.invoice_due_id;
                rest.path = "updateInvoicePeriod";
                rest.put($scope.invoice).success(function(data) {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = "saveInvoicePeriod";
                rest.post($scope.invoice).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    //Delete Invoice due period
    $scope.deleteDetail = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = "deleteInvoicePeriod/" + id;
                rest.delete().success(function(data) {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                });
            }
        });
    }

}).controller('taxstatusController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.status.tax_percentage > 100) {
                notification("Please enter value between 0 to 100", "error");
                return false;
            }
            if ($scope.status.tax_percentage < 0 || $scope.status.tax_percentage == undefined) {
                notification("Please enter positive value.", "error");
                return false;
            }

            if ($scope.status.tax_id) {
                $routeParams.id = $scope.status.tax_id;
                rest.path = 'taxstatus';
                rest.put($scope.status).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'taxStatus';
                rest.post($scope.status).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'taxStatusget';
    rest.get().success(function(data) {
        $scope.taxstatus = data;
        $scope.taxationEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getTax = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'taxstatusU';
        rest.model().success(function(data) {
            $scope.status = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'taxStatusDelete/' + id;
                rest.delete().success(function(data) {
                    if (data.status == 200) {
                        notification('Record deleted successfully.','success');
                    }
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };
}).controller('knowledgecategoryController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    $scope.getCategoryData = function() {
        rest.path = "KcategorygetAll";
        rest.get().success(function(data) {
            $scope.categoryList = data;
            $scope.categoryEmpty = jQuery.isEmptyObject(data);
            $scope.categoryIcon = "";
        }).error(errorCallback);
    }

    //icon select2
    $scope.getCategoryData();

    //icon box show
    $scope.iconSet = false;

    //Search icon
    $scope.searchIcon = function(icon) {
        if (icon) {
            $scope.searchLoader = true;
            rest.path = "categoryIconGet/" + icon;
            rest.get().success(function(data) {
                $scope.iconList = data;
                $scope.iconSet = true;
                $scope.searchLoader = false;
                angular.element('.iconResults').show();
            }).error(errorCallback);
        }
    }

    //select icon
    $scope.iconSelect = function(icon) {
        if ($scope.category == undefined || $scope.category == null || $scope.category == "") {
            $scope.category = {};
        }

        $scope.category.icon = icon;
        $scope.iconSet = false;
    }

    //search of focus
    $scope.iconFocus = function(icon) {
        if (icon) {
            if ($scope.iconList.length) {
                $scope.iconSet = true;
                angular.element('.iconResults').show();
            }
        }
    }

    //icon input blank on remove icon
    $scope.iconChange = function(icon) {
        $scope.searchIcon(icon);
        if (!icon) {
            $scope.iconList = {};
            $scope.iconSet = false;
        }
    }

    //knowledge category add
    $scope.save = function(frmId) {
        if ($scope.category.icon == undefined) {
            notification('Please search icon.', 'error');
            return false;
        }

        if (angular.element('#' + frmId).valid()) {
            if ($scope.category.category_id) {
                $routeParams.id = $scope.category.category_id;
                rest.path = "KcategorySave";
                rest.put($scope.category).success(function(data) {
                    notification('Record updated successfully.','success');
                    $scope.getCategoryData();
                    $scope.category = {};
                }).error(errorCallback);
            } else {
                rest.path = "KcategorySave";
                rest.post($scope.category).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $scope.category = {};
                    $scope.getCategoryData();
                }).error(errorCallback);
            }
        }
    }

    $scope.getCategory = function(id, eID) {
        rest.path = "KcategorygetOne/" + id;
        rest.get().success(function(data) {
            $scope.category = data;
            scrollToId(eID);
        }).error(errorCallback);
    }

    $scope.deleteModel = function(id) {
        $scope.deleteModel = function(id) {
            bootbox.confirm("Are you sure you want to delete?", function(result) {
                if (result == true) {
                    rest.path = "KcategoryDelete/" + id;
                    rest.delete().success(function(data) {
                        if (!data) {
                            notification('Can not delete Category is used in article.', 'error');
                        }else{
                            notification('Record deleted successfully.','success');
                        }
                        $scope.getCategoryData();
                    }).error(errorCallback);
                }
            })
        }
    }

}).controller('knowledgeArticleController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    getData();
    angular.element('#edit').froalaEditor({
        // Set the image upload URL.
        inlineStyles: {
            'Big Red': 'font-size: 20px; color: red;',
            'Small Blue': 'font-size: 14px; color: blue;',
            'Italic' :'font-style: italic;',
            'Normal' :'font-style: normal;'
        },
        theme: 'gray',
        height: 250,
        zIndex: 2001,
        imageUploadURL: '/api/v1/knowledgeArticleImage',
        imageUploadParams: {
            id: 'my_editor'
        },
        fileUploadURL: '/api/v1/knowledgeArticlefile',
        fileUploadParams: {
            id: 'my_editor'
        }
    }).on('froalaEditor.image.removed', function(e, editor, $img) {
        $.ajax({
            // Request method.
            method: "POST",
            // Request URL.
            url: "/api/v1/knowledgeDeleteArticleImage",
            // Request params.
            data: {
                src: $img.attr('src')
            }
        })
    });
    $('.fr-toolbar').find("button:eq(2)").remove();
    angular.element('div.fr-wrapper + div').remove();

    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            if ($scope.article.article_id) {
                var section = angular.element('#edit').val();
                $scope.section = section;
                $scope.article.section = $scope.section;
                $routeParams.id = $scope.article.article_id;
                rest.path = "knowledgeArticleSave";
                rest.put($scope.article).success(function(data) {
                    //$route.reload();
                    notification('Record updated successfully.','success');
                    getData();
                    $scope.article = {};
                    angular.element('.fr-view').text('');
                    angular.element('#article_category').select2('val', 'select');
                });
            } else {
                var section = angular.element('#edit').val();
                $scope.section = section;
                $scope.article.section = $scope.section;
                rest.path = "knowledgeArticleSave";
                rest.post($scope.article).success(function(data) {
                    notification('Record inserted successfully.','success');
                    getData();
                    $scope.article = {};
                    angular.element('.fr-view').text('');
                    angular.element('#article_category').select2('val', 'select');
                });
            }
        }
        scrollToId('top');
    }

    function getData() {
        rest.path = "knowledgeArticlegetAll";
        rest.get().success(function(data) {
            $scope.artileList = data;
            angular.element('a[href="https://froala.com/wysiwyg-editor').css('display', 'none');
            $scope.articleEmpty = jQuery.isEmptyObject(data);
        });
    }

    $scope.getArticle = function(id, eID) {
        rest.path = "knowledgeArticlegetOne/" + id;
        rest.get().success(function(data) {
            $scope.article = data;
            angular.element('#article_category').select2('val', data.category);
            angular.element('.fr-view').html(data.section);
            angular.element('#edit').val(data.section);
            angular.element('.fr-placeholder').remove();
            angular.element('a[href="https://froala.com/wysiwyg-editor').css('display', 'none');
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = "knowledgeArticleDelete/" + id;
                rest.delete().success(function(data) {
                    notification('Record deleted successfully.','success');
                    getData();
                }).error(errorCallback);
            }
        });
    }
}).controller('knowledgeNewsController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    getData();
    angular.element('.editDATA').froalaEditor({
        // Set the image upload URL..
        inlineStyles: {
            'Big Red': 'font-size: 20px; color: red;',
            'Small Blue': 'font-size: 14px; color: blue;',
            'Italic' :'font-style: italic;',
            'Normal' :'font-style: normal;'
        },
        theme: 'gray',
        zIndex: 2001,
        height: 250,
        imageUploadURL: '/api/v1/knowledgeArticleImage',
        imageUploadParams: {
            id: 'my_editor'
        },
        fileUploadURL: '/api/v1/knowledgeArticlefile',
        fileUploadParams: {
            id: 'my_editor'
        }
    }).on('froalaEditor.image.removed', function(e, editor, $img) {
        $.ajax({
            // Request method.
            method: "POST",
            // Request URL.
            url: "/api/v1/knowledgeDeleteArticleImage",
            // Request params.
            data: {
                src: $img.attr('src')
            }
        })
    });
    $('.fr-toolbar').find("button:eq(2)").remove();
    angular.element('div.fr-wrapper + div').remove();
    $scope.save = function(frmId) {
        if (angular.element('#' + frmId).valid()) {
            if ($scope.news.k_news_id) {
                $scope.created_user = $window.localStorage.getItem("session_vUserName");
                $scope.k_news_description = angular.element('.editDATA').val();
                $scope.news.created_user = $scope.created_user;
                $scope.news.k_news_description = $scope.k_news_description;
                $routeParams.id = $scope.news.k_news_id;
                rest.path = "knowledgeNewsUpdate";
                rest.put($scope.news).success(function(data) {
                    notification('Record updated successfully.','success');
                    getData();
                }).error(errorCallback);
            } else {
                $scope.created_user = $window.localStorage.getItem("session_vUserName");
                $scope.k_news_description = angular.element('.editDATA').val();
                $scope.news.created_user = $scope.created_user;
                $scope.news.k_news_description = $scope.k_news_description;
                rest.path = "knowledgeNewsSave";
                rest.post($scope.news).success(function(data) {
                    notification('Record inserted successfully.','success');
                    getData();
                }).error(errorCallback);
            }
        }
        scrollToId('top');
    }

    function getData() {
        rest.path = "knowledgeNewsgetAll";
        rest.get().success(function(data) {
            $scope.NewsList = data;
            $scope.news = {};
            angular.element('.editDATA').val('');
            angular.element('.fr-view').html('');
            angular.element('a[href="https://froala.com/wysiwyg-editor').css('display', 'none');
            $scope.articleEmpty = jQuery.isEmptyObject(data);
        });
    }

    $scope.getNews = function(id, eID) {
        rest.path = "knowledgeNewsgetOne/" + id;
        rest.get().success(function(data) {
            $scope.news = data;
            angular.element('.editDATA').val(data.k_news_description);
            angular.element('.fr-view').html(data.k_news_description);
            angular.element('.fr-placeholder').remove();
            angular.element('a[href="https://froala.com/wysiwyg-editor').css('display', 'none');
        });
        scrollToId(eID);
    }

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = "knowledgeNewsDelete/" + id;
                rest.delete().success(function(data) {
                    notification('Record deleted successfully.','success');
                    getData();
                }).error(errorCallback);
            }
        });
    }
}).controller('knowledgefunPicController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    rest.path = "funpicGet/" + $cookieStore.get('session_iUserId');
    rest.get().success(function(data) {
        $scope.funpicList = data;
        $scope.funpicListEmpty = angular.isObject(data);
    });

    $scope.Search = function(id) {
        if (id) {
            $route.reload();
        } else {
            notification("No delete history", "warning");
        }
    }

}).controller('reportedImagesController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $route, $filter) {
    rest.path = "getReportedImages";
    rest.get().success(function(data) {
        $scope.reportedImages = data;
    });
    $scope.UpdateImageStatus = function(imgName, status) {
        rest.path = 'UpdateImageStatus/' + imgName + '/' + status;
        rest.delete().success(function(data) {
            notification('Record updated successfully', 'success');
            $route.reload();
        });
    }
}).controller('addEventController', function($scope, $uibModalInstance, items, rest, $routeParams, $window, $log) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    if (items) {
        if (items.event_id) {
            $scope.event = items;
            $scope.event.start = dateToformat(items.start);
            $scope.event.end = dateToformat(items.end);
        } else {
            $scope.start = dateToformat(items);
        }
    }

    $scope.ok = function(formId) {
        if (angular.element('#' + formId).valid()) {
            // event update
            if ($scope.event.event_id) {

                $scope.eventData = {
                    title: $scope.event.title,
                    user_id: $window.localStorage.iUserId,
                    updated_by: $window.localStorage.session_iUserId
                };

                if ($scope.eventData.start != "Invalid Date") {
                    $scope.eventData.start = $scope.event.start;
                }

                if ($scope.eventData.end != "Invalid Date") {
                    $scope.eventData.end = $scope.event.end;
                }

                $routeParams.id = $scope.event.event_id;
                rest.path = 'events';
                rest.put($scope.eventData).success(function(data) {
                    $scope.eventList = data;
                    $uibModalInstance.close(data);
                }).error(errorCallback);

            } else {
                // event insert
                $scope.eventData = {
                    start: $scope.event.start,
                    end: $scope.event.end,
                    title: $scope.event.title,
                    user_id: $scope.event.user_id,
                    updated_by: $window.localStorage.session_iUserId
                };


                $scope.eventData.user_id = $window.localStorage.iUserId;
                $scope.eventData.created_by = $window.localStorage.session_iUserId;
                rest.path = 'events';
                rest.post($scope.eventData).success(function(data) {
                    $scope.eventList = data;
                    $uibModalInstance.close(data);
                }).error(errorCallback);
            }
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('workingHourController', function($scope, $uibModalInstance, items, rest, $routeParams, $window, $log) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if (items) {
        if (items.wh_id) {
            $scope.data = items;
            var days = JSON.parse(items.wh_data);
            $scope.working = days;
        }
        $scope.for_type = items.for_type;
    }

    var weekday = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];

    $(document).on("click", "#checkAll", function() {
        if (angular.element(this).prop('checked')) {
            var key = Object.keys($scope.working)[0];
            var workingValue;
            for (var i = 0; i <= 6; i++) {
                if (!key) {
                    workingValue = 1;
                } else {
                    workingValue = $scope.working[key].value;
                }
                if ($scope.working[i] == undefined)
                    $scope.working[i] = {};
                $scope.working[i].value = workingValue;
                $scope.working[i].from = '10:00 AM';
                $scope.working[i].to = '05:00 PM';
            }
        } else {
            $scope.working = {};
        }
    });

    $(document).on("click", "#event_form .form-group input:checkbox", function() {
        var id = angular.element(this).attr('data-value');
        if (!angular.element(this).prop('checked')) {
            delete $scope.working[id];
        } else {
            // debugger;
            var key = Object.keys($scope.working)[0];
            if ($scope.working[id] == undefined)
                $scope.working[id] = {};
            $scope.working[id].value = $scope.working[key].value;
            $scope.working[id].from = $scope.working[key].from;
            $scope.working[id].to = $scope.working[key].to;
        }
    });

    $scope.ok = function(formId) {
        // debugger;
        if (angular.element('#' + formId).valid()) {
            if (items != null) {
                $scope.formData = {

                    wh_data: JSON.stringify($scope.working),
                    for_type: $scope.for_type,
                    user_id: $window.localStorage.iUserId,
                    wh_type_value: new Date()
                };

                $routeParams.id = items.wh_id;
                rest.path = 'workinghour';
                rest.put($scope.formData).success(function(data) {
                    $scope.eventList = data;
                    $uibModalInstance.close(data);
                }).error(errorCallback);
            } else {
                $scope.wh_data = $scope.working;
                $scope.formData = {
                    wh_data: JSON.stringify($scope.wh_data),
                    for_type: $scope.for_type,
                    user_id: $window.localStorage.iUserId,
                    wh_type_value: new Date()
                };

                rest.path = 'workinghour';
                rest.post($scope.formData).success(function(data) {
                    $scope.eventList = data;
                    $uibModalInstance.close(data);
                }).error(errorCallback);
            }
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('generalmsgController', function($scope, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.generalMsg;

    $scope.bccShow = function() {
        $scope.bccshow = true;
    }
    $scope.ccHideShow = function() {
        angular.element('#ccHideShow').toggleClass('none');
    }
    $scope.bccHideShow = function() {
        angular.element('#bccHideShow').toggleClass('none');
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $timeout(function() {
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').remove();
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').remove();
        angular.element('.ng-pristine .btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').remove();
    }, 500);

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                $scope.attachementfile = result;
            });
        $scope.fileAttatchName = file.name;
    };

    rest.path = 'generalMsg';
    rest.get().success(function(data) {
        $scope.cPersonMsg = [];
        $scope.cPersonMsg = data;
        $scope.cPersonMsg.vEmailAddress = $window.localStorage.generalMsg;
        $scope.cPersonMsg.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.sign_detail + '</br><img src="' + data.sign_image + '" width="100px"></div>';
    }).error(errorCallback);

    $scope.ok = function(frmId, message) {
        var data = {
            "file": $scope.attachementfile,
            "data": message
        };

        if (angular.element("#" + frmId).valid()) {
            rest.path = 'sendgeneralMsg';
            rest.post(data).success(function(data) {
                notification('Mail send successfully', 'success');
            }).error(errorCallback);
            $timeout(function() {
                $uibModalInstance.close(data);
                $route.reload();
            }, 100)
        }
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('jobResourceMsgController', function($scope, $log, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.ResourceMsg;

    $scope.bccShow = function() {
        $scope.bccshow = true;
    }
    $scope.ccHideShow = function() {
        angular.element('#ccHideShow').toggleClass('none');
    }
    $scope.bccHideShow = function() {
        angular.element('#bccHideShow').toggleClass('none');
    }
    $timeout(function() {
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(2)').prop('disabled', true);
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(3)').prop('disabled', true);
        angular.element('.messText .btn-toolbar .btn-group:nth-child(4) button:nth-child(4)').prop('disabled', true);
    }, 500);


    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope).then(function(result) {
            $scope.fileAttatchName = file.name;
            $scope.attachementfile = result;
        });
    };

    rest.path = 'jobResourceMsg/' + $window.localStorage.ResourceMsg;
    rest.get().success(function(data) {
        $scope.cPersonMsg = data.data;
        $scope.cPersonMsg.vUserName = data.data.vUserName;
        $scope.cPersonMsg.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.info.sign_detail + '</br><img src="' + data.info.sign_image + '" width="100px"></div>';
    }).error(errorCallback);

    $scope.ok = function(frmId, message) {
        var data = {
            "file": $scope.attachementfile,
            "data": message
        };
        if (angular.element("#" + frmId).valid()) {
            rest.path = 'sendjobResourceMsg';
            rest.post(data).success(function(data) {
                notification('Mail send successfully', 'success');
            }).error(errorCallback);
            $timeout(function() {
                $uibModalInstance.close(data);
                $route.reload();
            }, 100);
        }
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('projectTeamMsgController', function($scope, $uibModalInstance, $location, $route, rest, fileReader, $window, $rootScope, $uibModal, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.projectTeamMsg;
    $scope.bccShow = function() {
        $scope.bccshow = true;
    }

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                $scope.attachementfile = result;
            });
    };

    rest.path = 'projectTeamMsg/' + $window.localStorage.projectTeamMsg;
    rest.get().success(function(data) {
        $scope.cPersonMsg = data.data;
        $scope.cPersonMsg.vUserName = data.data.vFirstName + " " + data.data.vLastName
        $scope.cPersonMsg.messageData = '<div>&nbsp;</div><div id="imgData" class="signimgdata">' + data.info.sign_detail + '</br><img src="' + data.info.sign_image + '" width="100px"></div>';
    }).error(errorCallback);


    $scope.ok = function(frmId, message) {
        var data = {
            "file": $scope.attachementfile,
            "data": message
        };
        if (angular.element("#" + frmId).valid()) {
            rest.path = 'sendprojectTeamMsg';
            rest.post(data).success(function(data) {
                $timeout(function() {
                    notification('Mail send successfully', 'success');
                }, 1000);
            }).error(errorCallback);
            $timeout(function() {
                $uibModalInstance.close(data);
                $route.reload();
            }, 100)
        }
    }
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}).controller('jobitemStatusController', function($scope, $uibModalInstance, items, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.orderID;

    if ($window.localStorage.jobitStatus) {
        $routeParams.id = $window.localStorage.jobitStatus;
        rest.path = 'itemsjobStatusGet/' + $routeParams.id + '/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.jobitemStatus = data;
            var appr = [];
            var other = [];
            angular.forEach(data, function(val, i) {
                if (val.item_status == 'Approved') {
                    appr.push(val.item_status);
                }
                if (val.item_status != 'Approved') {
                    other.push(val.item_status);
                }
            });
            $scope.total = appr.length + other.length;
            $scope.divis = 100 / $scope.total;
            $scope.percent = Math.ceil($scope.divis * appr.length);
        }).error(errorCallback);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('itemOverviewStatusController', function($scope, $log, $uibModalInstance, items, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.orderID;

    if ($window.localStorage.orderID) {
        rest.path = 'itemsGet/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            $scope.itemList = data;
            $scope.totalPrice = 0;
            angular.forEach(data, function(val, i) {
                $scope.totalPrice += val.total_amount;
            });
        });

        rest.path = 'orderCurrencyMatch/' + $window.localStorage.orderID;
        rest.get().success(function(data) {
            var cur = JSON.parse(data.currency);
            $scope.itemCurrency = cur[0].currency;
        }).error(errorCallback);
    }

    $scope.deleteUser = function(id) {
        rest.path = 'itemDelete/' + id + '/' + $window.localStorage.orderID;
        rest.get().success(function() {
            $uibModalInstance.dismiss('cancel');
        }).error(errorCallback);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('itemoverviewController', function($scope, $log, $location, $route, rest, $uibModal, $rootScope, $uibModalInstance, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if ($routeParams.id != undefined || $routeParams.id != null || $routeParams.id != "") {
        rest.path = 'itemOverviewGet/' + $routeParams.id;
        rest.get().success(function(data) {
            angular.forEach(data, function(val, i) {})
        }).error(errorCallback);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}).controller('chainController', function($scope, $location, $route, rest, $uibModal, $rootScope, $uibModalInstance, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if ($window.localStorage.getItem("newjobChainId")) {
        rest.path = 'jobChinnewgetOne/' + $window.localStorage.getItem("newjobChainId");
        rest.get().success(function(data) {
            $scope.nameofCode = data['new_job_number'];
        }).error(errorCallback);

        rest.path = 'jobChinfolllowsget/' + $window.localStorage.job_chain_id;
        rest.get().success(function(data) {
            $scope.newfollows = data;
        }).error(errorCallback);
    }

    $scope.ok = function(formId) {
        var init;
        var fin;
        console.log("$scope.chain", $scope.chain);
        rest.path = 'masterjobGet/' + $scope.chain.insert_job;
        rest.get().success(function(data) {
            console.log("data", data);
            var a = data.service_name + ' (' + data.job_code + ')';
            var b = a.split("(").pop();
            init = a.indexOf('(');
            fin = a.indexOf(')');
            var code = a.substr(init + 1, fin - init - 1);
            var name = a.substring(0, a.indexOf('('));
            var job_chain_id = $window.localStorage.job_chain_id;
            $scope.job_id = data.job_id;
            $scope.chain.job_id = $scope.job_id;
            $scope.chain.job_chain_id = job_chain_id;
            $scope.chain.jobs = name;
            $scope.chain.job_code = code;
            $scope.chain.new_job_number = $window.localStorage.job_numberId;
            var data = angular.element("#follows").val();
            rest.path = 'jobChansaveJobs';
            rest.post($scope.chain).success(function(data) {
                $uibModalInstance.close();
                $route.reload();
            }).error(errorCallback);
        }).error(errorCallback);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('wizardCtrl', function($cookieStore, fileReader, $timeout, $scope, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.setItem("parentId", " ");
    $window.localStorage.getItem("ShowuserName", "");
    $window.localStorage.setItem("clientpricelistdataId", " ");

    $timeout(function() {
        if ($window.localStorage.iUserId.length > 0) {
            $scope.redirectToClientViewId = '#/viewdirect/' + $window.localStorage.iUserId;
        } else {
            $scope.redirectToClientViewId = '#/client/1';
        }
    }, 100);

    $timeout(function() {
        $scope.UpdateClientName = $window.localStorage.getItem("ShowuserName");
        $scope.showEditedByName = false;
        if ($routeParams.id) {
            $scope.showEditedByName = true;
        }
    }, 500);


    $scope.comapanyBranchError = function() {
        angular.element('.comapanyBranch').remove();
    }

    angular.element('.help-block').css('display', 'none');

    if ($routeParams.id) {
        $window.localStorage.setItem("contactclientId", $routeParams.id);
    }

    $scope.user_name = $window.localStorage.getItem("ShowuserName");
    $scope.invoiceClassget = function(classname) {
        $scope.invoiceC = $window.document.getElementsByClassName(classname).length;
        if ($scope.invoiceC == 2) {
            $scope.invoice = true;
        }
    }


    $scope.clientNotes = function() {
        var clientnote = $scope.info.tMemo;
        if ($window.localStorage.clientnotice != clientnote && clientnote != undefined) {
            notification(clientnote, 'information');
        }
    }

    $scope.removeinvoice = function(id) {
        var invoiceLength = angular.element("[id^=invoiceCou]").length - 1;
        if (invoiceLength == id) {
            angular.element("#invoiceCou" + id).remove();
        } else {
            notification("Please delete from last record", "warning");
        }
    }
    if ($window.localStorage.iUserId != '' && $window.localStorage.iUserId != undefined) {
        $routeParams.id = $window.localStorage.iUserId;
    }

    // $routeParams.id = 1;
    if ($routeParams.id != '' && $routeParams.id != undefined) {
        $window.localStorage.iUserId = $routeParams.id;
        rest.path = 'client';
        rest.model().success(function(data) {
            $scope.imgshow = true;
            $scope.isNewClient = false;
            $scope.info = data;
            console.log("$scope.info", $scope.info);

            //Address Fields
            $scope.vCity1 = JSON.parse(data.address1Detail)[1].value;
            $scope.state1 = JSON.parse(data.address1Detail)[2].value;
            $scope.country1 = JSON.parse(data.address1Detail)[3].value;
            $scope.zipcode1 = JSON.parse(data.address1Detail)[4].value;
            $scope.timezone1 = JSON.parse(data.address1Detail)[5].value;
            //Address Fields

            $window.localStorage.clientnamec = $scope.info.vUserName;
            $window.localStorage.clientnotice = $scope.info.tMemo;
            $window.localStorage.setItem("priceListClientId", $scope.info.iClientId);
            angular.element('#vProjectCoordinator').select2('data', { id: $scope.info.vProjectCoordinator });
            angular.element('#vProjectManager').select2('data', { id: $scope.info.vProjectManager });
            angular.element('#vQASpecialist').select2('data', { id: $scope.info.vQASpecialist });
            angular.element('#currencyCode').select2('data', { text: $scope.info.client_currency.split(',')[0] });
            var flagTitle = JSON.parse(data.vPhone).countryTitle;
            var flagClass = JSON.parse(data.vPhone).countryFlagClass;

            $timeout(function() {
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').prop('title', flagTitle);
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').prop('class', flagClass);
            }, 500);

            $scope.info.vPhone = '+' + flagTitle.split('+')[1] + JSON.parse(data.vPhone).mobileNumber;
            $scope.currentUserName = $window.localStorage.currentUserName = data.vUserName;

            if (data.address1Detail) {
                angular.forEach(JSON.parse(data.address1Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            if (data.address2Detail) {
                angular.forEach(JSON.parse(data.address2Detail), function(val, i) {
                    angular.element('#' + val.id).val(val.value);
                });
            }

            if (data.Invoice) {
                angular.forEach(JSON.parse(data.Invoice), function(val, i) {
                    angular.element('#' + val.selectInvoice).val(val.invoice);
                });

                $scope.email = JSON.parse(data.Invoice);
                for (var k = 0; k < $scope.email.length; k++) {
                    var Counter = k + 1;
                }

                if (Counter != " ") {
                    $scope.inputCounter = Counter;
                } else {
                    $scope.inputCounter = 1;
                }
            }

            $scope.address1 = JSON.parse(data.address1Detail);
            $scope.address2 = JSON.parse(data.address2Detail);
        }).error(errorCallback);
    } else {
        $scope.info = {};
        $scope.isNewClient = true;
        var currentdate = new Date();
        rest.path = "clientProfileNumber/1";
        rest.get().success(function(data) {
            $scope.info.vClientNumber = pad(data, 3);
            $scope.displayCreatorName = $window.localStorage.getItem("session_vUserName");
            $scope.info.created_id = $window.localStorage.getItem("session_iUserId");
        });
        $scope.info.dtCreationDate = currentdate.getDate() + "/" +
            (currentdate.getMonth() + 1) + "/" +
            currentdate.getFullYear() + " " +
            currentdate.getHours() + ":" +
            currentdate.getMinutes() + ":" +
            currentdate.getSeconds();
    }
    if ($routeParams.id) {
        $scope.info = {};
        $scope.info.updatedBy_id = $window.localStorage.getItem("session_iUserId");
        $scope.info.updated_id = $routeParams.id;
        rest.path = 'clientBasicIdCheck';
        rest.post($scope.info).success(function(data) {
            $window.localStorage.setItem("ShowuserName", data.UpdatedBy_name);
            $window.localStorage.setItem("session_iUpdatedBasicClientId", data.UpdatedBy_id);
        }).error(errorCallback);
    }

    $scope.uType = $window.localStorage.userType;
    $scope.currentUserName = $window.localStorage.currentUserName;

    $scope.customerType = [{
        name: 'Direct Customer',
        value: 'Direct Customer'
    }, {
        name: 'Direct/Indirect Customer',
        value: 'Direct/Indirect Customer'
    }, {
        name: 'indirect customer',
        valumme: 'indirect customer'
    }];

    $scope.getFile = function(file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
                if (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif') {
                    $scope.imgshow = false;
                    $scope.imageSrc = result;
                    $scope.info.vProfilePic = true;
                } else {
                    notification("Please select image", "error");
                }
            });
    };

    $scope.copytoship = function() {
        if ($scope.address1 != undefined && $scope.address1 != '') {
            $scope.address2 = $scope.address1;
            $scope.info.vAddress2 = $scope.info.vAddress1;
            angular.forEach($scope.address1, function(val, i) {
                angular.element('#address2_' + val.id).val(val.value);
            });
        }
    };

    $scope.checkemailaddress = function(data) {
        rest.path = 'checkclient';
        rest.post(data).success(function(data) {}).error(errorCallback);
    };



    $scope.inputCounter = [];
    $scope.inputCounter = 1;


    $scope.name = 'Please try entering something and click Add button';

    $scope.saveClientProfile = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.info.iClientId) {
                $scope.info.image = $scope.imageSrc;
                var p = angular.element('#userphone').val();
                $scope.info.vPhone = p;
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                for (var j = 0; j < angular.element("[id^=selectEmail_opetion_]").length; j++) {
                    var a = angular.element("#selectEmail_opetion_" + j).val();
                    var b = angular.element("#selectEmail_invoice_" + j).val();
                    if (a == '--Select Invoice--' && b != '') {
                        notification('Please select email option', 'warning');
                        angular.element("#selectEmail_opetion_" + j).focus().select();
                        return false;
                    }
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.info.vPhone = JSON.stringify(countryObj);

                $scope.modified_id = $cookieStore.get('session_iUserId');
                $scope.info.modified_id = $scope.modified_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);

                // ---------address over -----------------//

                $scope.updatedBy_id = $window.localStorage.getItem("session_iUserId");
                $scope.Edited_id = $window.localStorage.getItem("session_iUpdatedBasicClientId");

                if ($scope.Edited_id != $scope.updatedBy_id) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedBasicClientId");
                } else {
                    $scope.info.iEditedBy = 0;
                }

                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)

                //return;
                rest.path = 'clientsave';
                rest.put($scope.info).success(function(data) {
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = $scope.info.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "update";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});
                    //log file end
                    $location.path('/contact-person');
                    $route.reload();
                }).error(errorCallback);
            } else {
                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }

                var p = angular.element('#userphone').val();
                $scope.info.vPhone = p;

                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];
                for (var l = 0; l < angular.element("[id^=selectEmail_opetion_]").length; l++) {
                    var a = angular.element("#selectEmail_opetion_" + l).val();
                    var b = angular.element("#selectEmail_invoice_" + l).val();
                    if (a == '--Select Invoice--' && b != '') {
                        notification('Please select email option', 'warning');
                        angular.element("#selectEmail_opetion_" + j).focus().select();
                        return false;
                    }
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }

                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.created_id = $cookieStore.get('session_iUserId');
                $scope.info.created_id = $scope.created_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);

                $scope.info.vCodeRights = $scope.info.vCodeRights;
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)

                // ---------address over -----------------//
                rest.path = 'clientsave';
                $scope.info.vClientNumber = $scope.info.vClientNumber.replace(/^0+/, '');

                rest.post($scope.info).success(function(data) {
                    $window.localStorage.iUserId = data.iClientId;
                    //log file start 
                    $scope.logMaster = {};
                    $scope.logMaster.log_type_id = data.iClientId;
                    $scope.logMaster.log_title = $scope.info.vUserName;
                    $scope.logMaster.log_type = "add";
                    $scope.logMaster.log_status = "direct_cli";
                    $scope.logMaster.created_by = $window.localStorage.getItem("session_iUserId");
                    rest.path = "saveLog";
                    rest.post($scope.logMaster).success(function(data) {});

                    $window.localStorage.setItem("contactclientId", data.iClientId);
                    $window.localStorage.setItem("priceListClientId", data.iClientId);
                    $location.path('/contact-person');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteInvoice = function(id) {
        if (angular.element(".test-count").length != 1)
            angular.element("#test-test").remove();
    }

    $scope.directClientFilemanager = function(id, frmId) {
        if (angular.element('#' + frmId).valid()) {
            if ($scope.info.iClientId) {
                $scope.info.image = $scope.imageSrc;
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                for (var j = 0; j < angular.element("[id^=selectEmail_opetion_]").length; j++) {
                    var a = angular.element("#selectEmail_opetion_" + j).val();
                    var b = angular.element("#selectEmail_invoice_" + j).val();
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }
                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }
                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.modified_id = $cookieStore.get('session_iUserId');
                $scope.info.modified_id = $scope.modified_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);
                // ---------address over -----------------//

                $scope.info.vCodeRights = $scope.info.vCodeRights
                $scope.updatedBy_id = $window.localStorage.getItem("session_iUserId");
                $scope.Edited_id = $window.localStorage.getItem("session_iUpdatedBasicClientId");

                if ($scope.Edited_id != $scope.updatedBy_id) {
                    $scope.info.iEditedBy = $window.localStorage.getItem("session_iUpdatedBasicClientId");
                } else {
                    $scope.info.iEditedBy = 0;
                }
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)
                rest.path = 'clientsave';
                rest.put($scope.info).success(function(data) {
                    closeWindows();
                    var clientPopup = $window.open('#/filemanage/client', "popup", "width=1000,height=650");
                    clientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    openWindows.push(clientPopup);
                    $route.reload();
                }).error(errorCallback);
            } else {

                if ($scope.imageSrc) {
                    $scope.info.image = $scope.imageSrc;
                }
                // --------address only -----------------//
                var address1 = [];
                var address2 = [];
                var invoiceDatatable = [];
                var invPus = [];
                for (var l = 0; l < angular.element("[id^=selectEmail_opetion_]").length; l++) {
                    var a = angular.element("#selectEmail_opetion_" + l).val();
                    var b = angular.element("#selectEmail_invoice_" + l).val();
                    if (a && b) {
                        var invPus = true;
                        invoiceDatatable.push({
                            invoiceid: a,
                            invoiceValue: b
                        });
                    } else {
                        var invPus = false;
                    }
                }

                angular.element("[id^=address1_]").each(function(i, val) {
                    address1.push({
                        id: val.id,
                        value: val.value
                    });
                });

                angular.element("[id^=address2_]").each(function(i, val) {
                    address2.push({
                        id: val.id,
                        value: val.value
                    });
                });

                if (invPus == true) {
                    $scope.info.invoice = JSON.stringify(invoiceDatatable);
                } else {
                    $scope.info.invoice = " ";
                }

                var countryCodeData = angular.element('#userphone').parent().find('.selected-flag').attr('title');
                var countryClass = angular.element('#userphone').parent().find('.selected-flag').find('.iti-flag').attr('class');

                var mobile = angular.element('#userphone').val();
                var countryObj = {
                    "countryTitle": countryCodeData,
                    "countryFlagClass": countryClass,
                    "mobileNumber": mobile
                }
                $scope.info.vPhone = JSON.stringify(countryObj);
                $scope.created_id = $cookieStore.get('session_iUserId');
                $scope.info.created_id = $scope.created_id;
                $scope.info.address1Detail = JSON.stringify(address1);
                $scope.info.address2Detail = JSON.stringify(address2);
                $scope.info.vCodeRights = $scope.info.vCodeRights;
                $scope.info.tPoInfo = $scope.info.vUserName.split(' ').join('-').toLowerCase() + '-' + pad($scope.info.vClientNumber, 3)
                // ---------address over -----------------//
                rest.path = 'clientsave';
                rest.post($scope.info).success(function(data) {
                    $window.localStorage.iUserId = data.iClientId;
                    $window.localStorage.setItem("contactclientId", data.iClientId);
                    $window.localStorage.setItem("priceListClientId", data.iClientId);
                    var clientPopup = $window.open('#/filemanage/client', "popup", "width=1000,height=650");
                    clientPopup.addEventListener("beforeunload", function() {
                        localStorage['parentId'] = ' ';
                        return false;
                    }, false);
                    $route.reload();
                }).error(errorCallback);
            }
        } else {
            notification('Please fill information.', 'warning');
        }

    }
    $scope.workingHour = function(id, table) {
        $routeParams.messageId = id;
        $window.localStorage.setItem("messageClientId", id);
        $routeParams.messageTable = table;
        $window.localStorage.setItem("messageClientTable", table);
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/message.html',
            controller: 'messageController',
            size: '',
            resolve: {
                items: function() {
                    return $scope.data;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            // debugger;
            $scope.selected = selectedItem;
            $route.reload();
        });
    };
}).controller('projectjobstatusController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.uId = $window.localStorage.getItem("session_iUserId");
    $window.localStorage.clientnamec = "";

    //export to excel
    $scope.exportData = function() {
        var count = 0;
        for (var i = 1; i < angular.element('[id^=orderCheckData]').length + 10; i++) {
            if ($("#orderCheck" + i).prop('checked') == true) {
                count++;
            }
        }
        if (count == 0) {
            notification('Please select record to export', 'information');
        }
        if (count > 0) {
            for (var i = 1; i < angular.element('[id^=orderCheckData]').length + 10; i++) {
                if ($("#orderCheck" + i).prop('checked') == true) {
                    $("#Export_" + i).show()
                } else {
                    $("#Export_" + i).hide()
                }
            }
            var blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "Jobs-status-report.xls");
            $scope.jobstatusReportsearch();
        }
    };

    //current year get
    $scope.date = new Date();
    var year = $scope.date.getFullYear();
    $scope.Currentyear = year.toString().substr(2, 2);

    //Job report search start
    $scope.jobstatusReportsearch = function(frmId, eID) {
        if ($scope.jobReport == undefined || $scope.jobReport == null || $scope.jobReport == "") {
            notification('Please Select option', 'information');
        } else {
            rest.path = 'statusJobReportFind';
            rest.get().success(function(data) {
                $scope.statusResult = data;
                angular.forEach($scope.statusResult, function(val, i) {
                    if (val.ItemLanguage) {
                        val.ItemLanguage = val.ItemLanguage.split('>')[0].trim().substring(0, 3).toUpperCase() + ' > ' + val.ItemLanguage.split('>')[1].trim().substring(0, 3).toUpperCase();
                    }
                });
            })
            scrollToId(eID);
        }
    }

    $scope.reseteSearch = function(frmId) {
        $route.reload();
    }

    //serch data action
    $scope.statucOrderAction = function(action) {
        switch (action) {
            case "Remove selection":
                $scope.jobStatus = false;
                break;
            case "Export to excel":
                $scope.jobStatus = false;
                break;
            case "Select all":
                $scope.jobStatus = false;
                break;
        }
    }

    //search data action
    $scope.statusAction = function(action) {
        switch (action) {
            case "Remove selection":
                bootbox.confirm("Are you sure you want to delete?", function(result) {
                    for (var i = 0; i < angular.element('[id^=orderCheckData]').length; i++) {
                        var jobselect = angular.element('#orderCheck' + i).is(':checked') ? 'true' : 'false';
                        if (jobselect == 'true') {
                            var jobId = angular.element('#orderCheckData' + i).val();
                            if (result == true) {
                                rest.path = 'jobsearchStatusDelete/' + jobId;
                                rest.delete().success(function(data) {
                                    $route.reload();
                                }).error(errorCallback);
                            }
                        }
                    }
                });
                break;
            case "Export to excel":
                var count = 0;
                for (var i = 1; i < angular.element('[id^=orderCheckData]').length + 10; i++) {
                    if ($("#orderCheck" + i).prop('checked') == true) {
                        count++;
                    }
                }
                if (count == 0) {
                    notification('Please select record to export', 'information');
                }
                if (count > 0) {
                    for (var i = 1; i < angular.element('[id^=orderCheckData]').length + 10; i++) {
                        if ($("#orderCheck" + i).prop('checked') == true) {
                            $("#Export_" + i).show()
                        } else {
                            $("#Export_" + i).hide()
                        }
                    }
                    var blob = new Blob([document.getElementById('exportable').innerHTML], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                    });
                    saveAs(blob, "Jobs-status-report.xls");
                    $scope.jobstatusReportsearch();
                }
                break;
            case "Select all":
                $scope.checkdata = "ordercheck";
                break;
        }
    }

    //remove job search 
    $scope.clearCode = function(frmId, action) {
        switch (action) {
            case "jobStatus":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.jobStatus = '';
                    angular.element('#jobStatus1').select2('val', '');
                    $scope.statusResult = {};
                    $route.reload();
                }
                break;
        }
    }

}).controller('freelanceInvoiceController', function($scope, $log, $timeout, $window, rest, $location, $rootScope, $cookieStore, $uibModal, $route) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");

    $scope.search = function(search) {
        if (search) {
            rest.path = 'freelanceJob/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                $scope.InvoiceResult = data;
                $scope.searchPonumber = search;
                var obj = [];
                obj.push({
                    'InvoiceList': $scope.InvoiceResult,
                    'searchPonumber': $scope.searchPonumber
                });
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'tpl/invoiceCreatePopup.html',
                    controller: 'invoiceCreatePopupCtrl',
                    size: '',
                    resolve: {
                        items: function() {
                            return obj;
                        }
                    }
                });
            }).error(errorCallback);
        } else {
            notification('Please enter job number.', 'warning');
        }
        $scope.jobId = "";
    }

    $scope.invoiceChange = function(data, companyCode) {
        // $log.log(data+ ' ' +companyCode);
    }

    $scope.invoicebuttonShow = function(id) {
        $scope.jobId = id;
    }

    $scope.addInvoice = function(data) {
        var company = "";
        var flag = 0;
        var array = [];

        angular.forEach(data, function(val, i) {
            if (val.SELECTED == 1) {
                if (!company) {
                    company = val.company_code;
                }
                if (val.company_code != company) {
                    flag = 1;
                } else {
                    array.push(val.job_summmeryId);
                }
            }
        });

        if (flag != 1 && array.length) {
            $cookieStore.put('invoiceJobId', array);
            $location.path('/invoice-create');
        } else {
            if ($scope.InvoiceResult != undefined && flag != 1) {
                notification("Pelase select job", "warning");
            } else {
                notification("You cannot add two different company invoice", "warning");
            }
        }

    }

    //Display invoice 
    $scope.viewInvoice = function(type) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'tpl/invoiceall_view.html',
            controller: 'invoiceViewController',
            size: '',
            width: 1000,
            resolve: {
                items: function() {
                    return type;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
            $route.reload();
        });
    }

    $scope.getAllInvoice = function() {
        rest.path = "getAllInvoiceByUserId/save/" + $window.localStorage.getItem("session_iUserId");
        rest.get().success(function(invoices) {
            $scope.invoiceUnpaid = [];
            $scope.invoiceCompleted = [];
            angular.forEach(invoices, function(val, i) {
                if (val.invoice_status == 'Complete') {
                    $scope.invoiceCompleted.push(val);
                } else {
                    $scope.invoiceUnpaid.push(val);
                }
            });
        }).error(errorCallback);
    }
    $scope.getAllInvoice();
}).controller('invoiceCreatePopupCtrl', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $cookieStore, $uibModal, $uibModalInstance, $route, items) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.InvoiceResult = items[0].InvoiceList;
    $scope.searchPonumber = items[0].searchPonumber;

    $scope.addInvoice = function(data) {
        var company = "";
        var flag = 0;
        var array = [];

        angular.forEach(data, function(val, i) {
            if (val.SELECTED == 1) {
                if (!company) {
                    company = val.company_code;
                }
                if (val.company_code != company) {
                    flag = 1;
                } else {
                    array.push(val.job_summmeryId);
                }
            }
        });

        if (flag != 1 && array.length) {
            $cookieStore.put('invoiceJobId', array);
            $location.path('/invoice-create');
            $scope.cancel();
        } else {
            if ($scope.InvoiceResult != undefined && flag != 1) {
                notification("Pelase select job to create invoice.", "warning");
            } else {
                notification("You cannot add two different company invoice", "warning");
            }
        }

    }
    $scope.cancel = function() {
        $uibModalInstance.close();
    }

}).controller('projectjobDetailController', function($interval,$scope, $log, $window, $compile, $timeout, $uibModal, rest, $route, $rootScope, $routeParams, $location) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.DetailId = $window.localStorage.projectJobChainOrderId;
    $window.localStorage.jobfolderId = $routeParams.id;
    // $window.localStorage.orderID = " ";

    $window.localStorage.pId = " ";
    $window.localStorage.setItem("parentId", " ");

    if ($scope.DetailId) {
        rest.path = 'jobitemsGet/' + $scope.DetailId;
        rest.get().success(function(data) {
            $scope.jobitList = data;
        })
    }

    $scope.popupOpenFilemanager = function(id) {
        closeWindows();
        $window.localStorage.ItemClient = '';
        var ItemcodeNumber = angular.element('#companyCode').text();
        $window.localStorage.ItemcodeNumber = ItemcodeNumber;
        // start to get downloaded folder name with client name
        console.log('$window.localStorage.orderID',$window.localStorage.orderID);
        rest.path = 'customer/' + $window.localStorage.orderID;
        rest.get().success(function(res) {
            $scope.customer = res;
            if (res) {
                rest.path = 'client/' + $scope.customer.client;
                rest.get().success(function(cData) {
                    $scope.directClientData = cData
                    $window.localStorage.ItemClient = $scope.directClientData.vUserName;
                }).error(function(data, error, status) {});
            }
        })
        // end
        var soPopup = $window.open(id + "/" + $routeParams.id, "popup", "width=1000,height=650");
        soPopup.addEventListener("beforeunload", function() {
            localStorage['parentId'] = ' ';
            localStorage['pId'] = ' ';
            return false;
        }, false);
        openWindows.push(soPopup);
    }

    var getCountJobFolderProjectDetail = function(){
        var count = $window.localStorage.getItem("sourceFolderCount");
        if(!count){
            count = 0;
        }
        
        var type = $window.localStorage.getItem("jobFoldertype");
        
        if(type){
            if(type == 'source'){
                $('#proDetailSourceCount').text(count);
            }if(type == 'target'){
                $('#proDetailTargetCount').text(count);
            }
        }
    }
    $interval(getCountJobFolderProjectDetail,1000);

    if ($routeParams.id) {
        rest.path = 'jobSummeryDetailsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.jobdetail = data[0];
            var srcLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[0]).sourceLang;
            var trgLang = JSON.parse($scope.jobdetail.ItemLanguage.split('>')[1]).sourceLang;
            $scope.jobdetail.ItemLanguage = srcLang + ' > ' + trgLang;
            $scope.jobdetail.priceLinguist = '';
            if($scope.jobdetail.price){
                $scope.jobdetail.price = JSON.parse(data[0].price);
            }
            //console.log('$scope.jobdetail-linguis',$scope.jobdetail);
            
            //page redirect job discussion
            $scope.jobDiscussionRedirect = data[0].order_id
            $window.localStorage.jobOrderId = data[0].order_id;

            if (data[0].order_id) {
                $window.localStorage.orderID = data[0].order_id;
                rest.path = 'jobItemQuantityget/' + data[0].order_id + '/' + $scope.jobdetail.item_id;
                rest.get().success(function(data) {
                    $scope.totalPrice = data.total_amount;
                    $scope.itemList = JSON.parse(data.price);
                    $scope.itemPriceEmpty = jQuery.isEmptyObject($scope.itemList);
                })
            }

            if ($scope.jobdetail.work_instruction) {
                $scope.wrInstruct = JSON.parse($scope.jobdetail.work_instruction);
                $scope.wrInstructEmpty = jQuery.isEmptyObject($scope.wrInstruct);
            }


            $scope.jobdetail.created_date = data[0].created_date;

            //count file
            if (data) {
                rest.path = 'filefolderstget/' + data[0].fmanager_id + '/' + $routeParams.id;
                rest.get().success(function(data) {
                    var sourceFile = [];
                    var targetFile = [];
                    angular.element('.sourceC').text(data.source);
                    angular.element('.targteC').text(data.target);
                }).error(errorCallback);
            }

            //getting freelancer payment information data
            rest.path = "getUserDataById/" + $scope.jobdetail.resource;
            rest.get().success(function(dataUser) {
                $scope.vBankInfo = JSON.parse(dataUser.userPaymentData.vBankInfo);
                $scope.currencyCodeDisplay = $scope.vBankInfo.currency_code;
            }).error(errorCallback);
        }).error(errorCallback);
    }

    //accept job status
    $scope.acceptjobstatus = function(status, action) {
        switch (action) {
            case "accept":
                if (status == 'Requested') {
                    $scope.item_status = "Assigned-waiting";
                }
                if ($scope.job == undefined || $scope.job == null || $scope.job == " ") {
                    $scope.job = {};
                }
                $scope.job.item_status = $scope.item_status;
                break;
            case "reject":
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'tpl/jobrejectreason.html',
                    controller: 'jobStatusRejectController',
                    size: ''
                });
                break;
            case "start":
                if (status == 'Assigned-waiting') {
                    $scope.item_status = "In-progress";
                }
                if ($scope.job == undefined || $scope.job == null || $scope.job == " ") {
                    $scope.job = {};
                }
                $scope.job.item_status = $scope.item_status;
                break;
            case "save":
                $scope.item_status = "Delivered";
                if ($scope.job == undefined || $scope.job == null || $scope.job == " ") {
                    $scope.job = {};
                }
                $scope.job.item_status = $scope.item_status;
                break;
        }

        if ($scope.job.item_status) {
            $routeParams.id;
            //console.log("$scope.job.item_status", $scope.job.item_status);return false;
            rest.path = 'acceptJobStatus';
            //console.log("$scope.job", $scope.job);return false;
            rest.put($scope.job).success(function(data) {
                if(data.status == 200 && data.emailSend == 'true'){
                    if($scope.job.item_status == 'Delivered'){
                        notification('job is delivered successfully and email sent to project manager.','success');
                    }else{
                        notification('job is accepted successfully and email sent to project manager.','success');
                    }
                    $route.reload();
                }
                //$location.path('/dashboard');
            }).error(errorCallback);
        }
    }

    $scope.jobsumemailResource = function(resourceName) {
        if (resourceName) {
            rest.path = 'contact_personGet/' + $scope.jobdetail.contact_person;
            rest.get().success(function(data) {
                $window.localStorage.ResourceMsg = data.iUserId;
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'tpl/jobresourcemsg.html',
                    controller: 'jobResourceMsgController',
                    size: '',
                    resolve: {
                        items: function() {
                            return $scope.data;
                        }
                    }
                });
            }).error(errorCallback);
        }
    }

    //invoice of redirect
    $scope.projectInvoiceRedirect = function() {
        $location.path('/project-detail/' + $routeParams.id);
    }

}).controller('invoiceViewController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $cookieStore, $uibModal, $uibModalInstance, $route, items) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    var userId = $cookieStore.get('session_iUserId');
    if (items) {
        rest.path = "viewAllInvoice/" + items + '/' + userId;
        rest.get().success(function(data) {
            $scope.invoiceList = data;

            if ($.isEmptyObject(data) == true) {
                $uibModalInstance.close();
                notification("Invoice not available", "warning");
            }

            $scope.type = items;
        }).error(errorCallback);
    }

    $scope.viewData = function(id) {
        $location.path('/invoice-show/' + id);
        $uibModalInstance.close();
    }

    $scope.cancel = function() {
        $uibModalInstance.close();
    }

}).controller('freelancerInvoiceViewController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $cookieStore, $route, $uibModal) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if ($routeParams.id) {
        rest.path = "invoiceViewOne/" + $routeParams.id;
        rest.get().success(function(data) {
            $scope.invoiceDetail = data[0];
            rest.path = "getUserDataById/" + $scope.invoiceDetail.freelanceId;
            rest.get().success(function(dataUser) {
                //$scope.userData = dataUser.userData;
                $scope.userPaymentData = dataUser.userPaymentData;
                var vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                $scope.vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                //$scope.currencyType = vBankInfo.currency_code.split(',')[1];
                $scope.currencyType = vBankInfo.currency_code;

                $scope.currencyPaymentMethod = vBankInfo.payment_method;
                if ($scope.currencyPaymentMethod == 'Bank Transfer') {
                    $timeout(function() {
                        $("#Bank").prop('checked', true);
                    }, 100);

                } else {
                    $timeout(function() {
                        $("#Paypal").prop('checked', true);
                    }, 100);
                }

                $scope.invoiceDetail.payment = $scope.currencyPaymentMethod;

            }).error(errorCallback);

            $scope.invoiceList = data;

            $scope.grandTotal = 0;
            angular.forEach($scope.invoiceList,function(val,i){
                if(val.item){
                    angular.forEach(val.item,function(v,i){
                        $scope.grandTotal += v.itemTotal;
                    })         
                }
            })

            $scope.invoiceDetail.paymentDueDate = TodayAfterNumberOfDays(data[0].created_date, data[0].number_of_days);
            $scope.invoiceDetail.paymentDueDate = $scope.invoiceDetail.paymentDueDate.split('.').reverse().join('-');
            var mobileNo = JSON.parse($scope.invoiceDetail.freelancePhone).mobileNumber;
            var countryCode = JSON.parse($scope.invoiceDetail.freelancePhone).countryTitle;
            $scope.invoiceDetail.freelancePhone = '(' + countryCode.split(':')[1].trim() + ')' + ' ' + mobileNo;

            var mobileNo1 = JSON.parse($scope.invoiceDetail.companyPhone).mobileNumber;
            var countryCode1 = JSON.parse($scope.invoiceDetail.companyPhone).countryTitle;
            $scope.invoiceDetail.companyPhone = '(' + countryCode1.split(':')[1].trim() + ')' + ' ' + mobileNo1;

        }).error(errorCallback);
    }

    $scope.getInvoicePartPayments = function() {
        rest.path = "getInvoicePartPayments/" + $routeParams.id;
        rest.get().success(function(partPayments) {
            $scope.partPaymentList = partPayments;
            console.log("$scope.partPaymentList", $scope.partPaymentList);
        });
    }
    $scope.getInvoicePartPayments();

    $scope.printIt = function(number) {
        kendo.drawing.drawDOM($("#exportable")).then(function(group) {
            group.options.set("font", "12px DejaVu Sans");
            group.options.set("pdf", {
                margin: {
                    left: "40mm",
                    top: "0mm",
                    right: "40mm",
                    bottom: "0mm"
                }
            });
            kendo.drawing.pdf.saveAs(group, number + ".pdf");
        });
    }

}).controller('InvoiceCreateController', function($scope, $log, $timeout, $window, rest, $location, $routeParams, $cookieStore) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.invoiceList = [];
    //get data of invoice
    if ($cookieStore.get('invoiceJobId').length) {
        var obj = [];
        angular.forEach($cookieStore.get('invoiceJobId'), function(val, i) {
            obj.push({ "id": val });
        });

        $scope.invoiceLt = {};
        $scope.invoiceLt.id = obj;
        rest.path = "invoiceCreate";
        rest.post($scope.invoiceLt).success(function(data) {
            $scope.invoiceDetail = data[0];
            rest.path = "getUserDataById/" + $scope.invoiceDetail.freelanceId;
            rest.get().success(function(dataUser) {
                $scope.userPaymentData = dataUser.userPaymentData;
                var vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                //$scope.currencyType = vBankInfo.currency_code.split(',')[1];
                $scope.currencyType = vBankInfo.currency_code;
                $scope.vBankInfo = JSON.parse($scope.userPaymentData.vBankInfo);
                $scope.currencyPaymentMethod = vBankInfo.payment_method;
                if ($scope.currencyPaymentMethod == 'Bank Transfer') {
                    $timeout(function() {
                        $("#Bank").prop('checked', true);
                    }, 100);

                } else {
                    $timeout(function() {
                        $("#Paypal").prop('checked', true);
                    }, 100);
                }

                $scope.invoiceDetail.payment = $scope.currencyPaymentMethod;

            }).error(errorCallback);

            var mobileNo = JSON.parse($scope.invoiceDetail.freelancePhone).mobileNumber;
            var countryCode = JSON.parse($scope.invoiceDetail.freelancePhone).countryTitle;
            $scope.invoiceDetail.freelancePhone = '(' + countryCode.split(':')[1].trim() + ')' + ' ' + mobileNo;

            var mobileNo1 = JSON.parse($scope.invoiceDetail.companyPhone).mobileNumber;
            var countryCode1 = JSON.parse($scope.invoiceDetail.companyPhone).countryTitle;
            $scope.invoiceDetail.companyPhone = '(' + countryCode1.split(':')[1].trim() + ')' + ' ' + mobileNo1;

            var date = new Date();
            $scope.invoiceDetail.invoiceNumber = data[0].poNumber.split('_')[0] + '_' + data[0].jobCode + '_' + pad(data[0].invoiceCount + 1, 3);
            $scope.invoiceDetail.invoiceDate = date;
            $scope.invoiceDetail.job_id = obj;
            $scope.invoiceDetail.paymentDueDate = TodayAfterNumberOfDays(date, data[0].number_of_days);
            $scope.invoiceDetail.paymentDueDate = $scope.invoiceDetail.paymentDueDate.split('.').reverse().join('-');
            $scope.invoiceList = data;
            
            $scope.grandTotal = 0;
            angular.forEach($scope.invoiceList,function(val,i){
                if(val.item){
                    angular.forEach(val.item,function(v,i){
                        $scope.grandTotal += v.itemTotal;
                    })         
                }
            })
            
        });
    }

    $scope.save = function(frmId, invoiceType) {
        if ($scope.invoiceD == undefined || $scope.invoiceD == null || $scope.invoiceD == "") {
            $scope.invoiceData = {};
        }

        switch (invoiceType) {
            case "save":
                $scope.invoiceData.invoice_type = invoiceType;
                break;
            case "draft":
                $scope.invoiceData.invoice_type = invoiceType;
                break;
        }

        $scope.invoiceData.freelance_id = $scope.invoiceDetail.freelanceId;
        $scope.invoiceData.customer_id = $scope.invoiceDetail.clientId;
        $scope.invoiceData.job_id = JSON.stringify(obj);
        $scope.invoiceData.payment_type = $scope.invoiceDetail.payment;
        $scope.invoiceData.invoice_number = $scope.invoiceDetail.invoiceNumber;
        
        

        $scope.invoiceData.Invoice_cost = $scope.grandTotal;
        
        if ($scope.invoiceDetail.payment) {
            rest.path = "invoiceSave";
            rest.post($scope.invoiceData).success(function(data) {
                if (data.status == 422) {
                    notification('Invoice already added for this job.', 'error');
                } else {
                    $location.path('/invoice-detail');
                }
            });
        } else {
            notification("Please add payment detail", 'warning');
        }
    }

    $scope.cancel = function() {
        $location.path('/invoice-detail');
    }

}).controller('viewProjectController', function($scope, $log, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams, $timeout,items, $uibModalInstance) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if(items){
     $routeParams.id = items   
    }
    if ($routeParams.id) {
        $routeParams.id;
        rest.path = 'viewProjectCustomerDetail';
        rest.model().success(function(data) {
            $scope.customer = data;
            $window.localStorage.clientproCustomerName = $scope.customer.client;
            $window.localStorage.ContactPerson = $scope.customer.contact;
            $routeParams.ClientIdd = data['client'];
            $window.localStorage.ClientName = $routeParams.ClientIdd;
            if ($scope.customer.memo) {
                $scope.warn = true;
                $timeout(function() {
                    $scope.warn = false;
                }, 10000);
            }
        }).error(errorCallback);

        $routeParams.id;
        rest.path = 'contactPerson';
        rest.model().success(function(data) {
            angular.forEach(data, function(val, i) {
                if (val.vResourcePosition == 3) {
                    angular.element('#coordinator').html(val.vUserName);
                } else if (val.vResourcePosition == 2) {
                    angular.element('#manager').html(val.vUserName);
                } else if (val.vResourcePosition == 4) {
                    angular.element('#QASpecialist').html(val.vUserName);
                }
            })
        }).error(errorCallback);

        $routeParams.id = $routeParams.id;
        rest.path = 'generalVieData/' + $routeParams.id + '/' + $window.localStorage.ClientName;
        rest.get().success(function(data) {
            $scope.general = data;
            console.log("$scope.general", $scope.general);
            // $scope.properties = JSON.parse($scope.general.properties);
            var properties = [];
            if ($scope.general.properties) {
                angular.forEach(JSON.parse($scope.general.properties), function(val, i) {
                    rest.path = 'generalPropertiesView/' + val;
                    rest.get().success(function(data) {
                        angular.element('#' + i).html(data);
                    })
                    properties.push({
                        id: i
                    });
                })
            }
            $scope.properties = properties;
            $scope.item_number = data;
            
            //$scope.general.order_date = $scope.general.order_date;
            $scope.general.order_date = moment($scope.general.order_date).format($window.localStorage.getItem('global_dateFormat')+' HH:mm A');

            $scope.general.due_date = $scope.general.due_date.split(' ')[0].split('.').reverse().join('-') +' '+$scope.general.due_date.split(' ')[1];
            $scope.general.due_date = moment($scope.general.due_date).format($window.localStorage.getItem('global_dateFormat')+' HH:mm A');
            
            if ($scope.general.order_date == undefined) {
                var currentdate = new Date();
                $scope.general.order_date = getDatetime(currentdate);
            }
            $scope.generaldata = {};
            $scope.generaldata.order_no = $window.localStorage.orderNo;
            $scope.generaldata.abbrivation = $window.localStorage.abbrivation;

            if ($scope.general == null) {
                $scope.general = {};
                $scope.generaldata = {};
                $scope.generaldata.order_no = $window.localStorage.orderNo;
                $scope.generaldata.abbrivation = $window.localStorage.abbrivation;
                if ($scope.general.order_no == "") {

                }
            }
        }).error(errorCallback);

        $routeParams.id = $routeParams.id;
        rest.path = 'prolanguage';
        rest.model().success(function(data) {
            $scope.langList = data;
        }).error(errorCallback);

        rest.path = 'itemsGet/' + $routeParams.id;
        rest.get().success(function(data) {
            $scope.itemList = data;
        })
    }

    if ($routeParams.id != undefined && $routeParams.id != "") {
        rest.path = 'usertask/' + $routeParams.id + '/' + $window.localStorage.userType;
        rest.get().success(function(data) {
            $scope.tasklist = data.data;
        }).error(errorCallback);
    }

    $scope.generalEmail = function(id) {
        if (id != undefined && id != " " && id != null) {
            $window.localStorage.generalMsg = id;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'html/generalmsg.html',
                controller: 'generalmsgController',
                size: '',
                resolve: {
                    items: function() {
                        return $scope.data;
                    }
                }
            });
        } else {
            notification('Please Add Email', 'warning');
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.close();
    }

    $scope.editProjectDetail = function(id) {
        if (id) {
            rest.path = 'order/' + id + '/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                if (data.userName != null) {
                    $scope.orderdata = data;
                    
                    $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                    $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                    $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                    $window.localStorage.orderNo = $scope.orderdata.order_number;
                    $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                    $window.localStorage.orderID = id;
                    $window.localStorage.iUserId = id;
                    $window.localStorage.userType = 3;
                    $window.localStorage.currentUserName = data.vClientName;
                    $window.localStorage.genfC = 1;

                    //set isNewProject to false
                    $window.localStorage.setItem("isNewProject","false");

                    $location.path('/general');
                    $window.localStorage.orderBlock = 1;
                    $timeout(function() {
                        $scope.cancel();
                    },500);
                } else {
                    notification('Information not available', 'warning');
                }
            }).error(errorCallback);
        }
        
    };

}).controller('resourceAdvanceSearchController', function($timeout, $scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $filter) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $window.localStorage.clientnamec = "";



    //current year get
    $scope.date = new Date();
    var year = $scope.date.getFullYear();
    $scope.Currentyear = year.toString().substr(2, 2);

    //Advance Resource search start
    $scope.jobstatusReportsearch = function(frmId, eID, job) {

        if ($scope.jobReport == undefined || $scope.jobReport == null || $scope.jobReport == "") {
            notification('Please Select option', 'information');
        } else {
            rest.path = 'advanceSearchResource';
            rest.get().success(function(data) {

                var obj;
                angular.forEach(data, function(val, i) {
                    if (!jQuery.isEmptyObject(val.userCountry)) {
                        obj = JSON.parse(val.userCountry);
                        val.userCountry = obj[3].value;
                    }
                    if (val.JobDueDate) {
                        val.JobDueDate = val.JobDueDate.split(' ')[0].split('-').reverse().join('.');
                    }
                });
                $scope.statusResult = data;
                if (job.userRateLow != NaN && job.userRateHigh != NaN) {
                    var low = job.userRateLow;
                    var high = job.userRateHigh;
                    $scope.rateFilterData = $filter('ratingRange')(data, low, high);
                    if ($scope.rateFilterData != '') {
                        $scope.statusResult = $scope.rateFilterData;
                    }
                }
                if ($scope.jobDate.FrmDate != undefined && $scope.jobDate.ToDate != undefined) {
                    var frmDate = Date.parse($scope.jobDate.FrmDate.split('.').reverse().join('-'));
                    var toDate = Date.parse($scope.jobDate.ToDate.split('.').reverse().join('-'));
                    $scope.filterData = $filter('dateRange')(data, frmDate, toDate);
                    if ($scope.filterData != '') {
                        $scope.statusResult = $scope.filterData;
                    }

                }
            })
            scrollToId(eID);
        }
    }

    $scope.reseteSearch = function(frmId) {
        $route.reload();
    }

    $scope.jobsumResource = function(resourceName, jobSummeryId) {
        /*console.log("jobSummeryId", jobSummeryId);
        console.log("resourceName", resourceName);return false*/
        rest.path = 'jobsummeryResourceMail/' + resourceName + '/' + jobSummeryId;
        rest.get().success(function(data) {
            notification('Mail send successfully', 'success');
            $route.reload();
        }).error(errorCallback);
    }

    //Remove Selection
    $scope.clearCode = function(frmId, action) {
        switch (action) {
            case "jobCode":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.jobCode = '';
                    angular.element('#jobassigned').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }

                }
                break;
            case "jobStatus":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.jobStatus = '';
                    angular.element('#jobStatus1').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "currency":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.currency = '';
                    angular.element('#currency').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "freelancerType":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.freelancerType = '';
                    angular.element('#userTypes1').val();
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "userCountry":
                if ($scope.jobReport != undefined) {
                    $scope.jobReport.userCountry = '';
                    angular.element('#userCountry').select2('val', '');
                    angular.forEach($scope.jobReport, function(value, key) {
                        if (value === "" || value === null) {
                            delete $scope.jobReport[key];
                        }
                    });
                    if (jQuery.isEmptyObject($scope.jobReport)) {
                        $scope.statusResult = '';
                    }
                }
                break;
            case "FrmDate":
                if ($scope.jobDate != undefined) {
                    $scope.jobDate.FrmDate = '';
                    angular.element('#FrmDate').val('');
                }
                break;
            case "ToDate":
                if ($scope.jobDate != undefined) {
                    $scope.jobDate.ToDate = '';
                    angular.element('#ToDate').val('');
                }
                break;

        }
    }

}).controller('dateFormatController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.toDayDate = new Date();
    $scope.dateFormatD = moment($scope.toDayDate).format($window.localStorage.getItem('global_dateFormat'));
    $scope.loginUserId = $window.localStorage.getItem('session_iUserId');


    rest.path = 'getAllFormat/'+$window.localStorage.getItem('session_iUserId');
    rest.get().success(function(data) {
        $scope.dtFormatList = data;
    }).error(errorCallback);
    

    $scope.getEdit = function(id, eID) {
        rest.path = 'getdateFormatById/'+id;
        rest.get().success(function(data) {
            $scope.dateModel = data;
            $scope.dateFormatD = data.dateformat;
            $('#dateFormat').select2('data',{id:data.select2_val,text:data.dateformat});
            $('#dateFormat').val(data.select2_val).trigger('change');

            $('#dateSeparator').select2('data',{id:data.dateSeparator,text:data.dateSeparator});
            $('#dateSeparator').val(data.dateSeparator).trigger('change');
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if($scope.loginUserId != 1){
                notification('You don\'\t have permission.','error');
                return false;
            }else{

                if(!$scope.dateModel.is_active){
                    $scope.dateModel.is_active = 0;
                }
                var dateData = $('#dateFormat').select2('data');
                
                $scope.dateModel.dateFormat = dateData.text;
                $scope.dateModel.select2_val = dateData.id;
                $scope.dateModel.iUserId = $window.localStorage.getItem('session_iUserId');
                if ($scope.dateModel.dateformat_id) {
                    $routeParams.id = $scope.dateModel.dateformat_id;
                    rest.path = 'updateDateFormat';
                    rest.put($scope.dateModel).success(function(data) {
                        if(data.status == 422){
                            notification(data.msg,'error');
                        }
                        if(data.status == 200){
                            $scope.replaceAfterUpdate = $scope.dateModel.dateFormat.replace(/\//g,$scope.dateModel.dateSeparator);
                            $window.localStorage.global_dateFormat = $scope.replaceAfterUpdate;
                            $window.localStorage.dtSeparator = $scope.dateModel.dateSeparator;
                            notification('Record updated successfully.','success');
                            $route.reload();
                        }
                    }).error(errorCallback);
                } else {
                    rest.path = 'saveDateFormat';
                    rest.post($scope.dateModel).success(function(data) {
                        if(data.status == 422){
                            notification(data.msg,'error');
                        }
                        if(data.status == 200){
                            $scope.replaceAfterSave = $scope.dateModel.dateFormat.replace(/\//g,$scope.dateModel.dateSeparator);
                            $window.localStorage.global_dateFormat = $scope.replaceAfterSave;
                            $window.localStorage.dtSeparator = $scope.dateModel.dateSeparator;
                            notification('Record inserted successfully.','success');
                            $route.reload();
                        }
                    }).error(errorCallback);
                }
            }
            
        }
    };

    $scope.changeFormat = () =>{
        var dateData = $('#dateFormat').select2('data');
        
        $scope.dateFormatD = moment($scope.toDayDate).format(dateData.text);
        
        var dateSeparator = $('#dateSeparator').select2('data');
        if(dateSeparator){
            if($scope.prevSeparator == '/'){
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
            }else if($scope.prevSeparator == '.'){
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace(/\./g,dateSeparator.text);
            }else{
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
            }
        }
    }

    $scope.changeDateSeparator = () =>{
        var separatorArray = ['/',',','.'];

        var go = true;
        $.each(separatorArray,function(i,val){
            if(go){
                var contains = $scope.dateFormatD.includes(val);
                if(contains){
                    $scope.prevSeparator = val;
                    go = false;
                }    
            }
        })
        
        var dateSeparator = $('#dateSeparator').select2('data');
        if($scope.prevSeparator == '/'){
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
        }else if($scope.prevSeparator == '.'){
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace(/\./g,dateSeparator.text);
        }else{
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
        }
        
    }
    
    
    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'deletedateFormat/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

}).controller('decimalSeparatorController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.loginUserId = $window.localStorage.getItem('session_iUserId');
    
    rest.path = 'getAllDecimalSeperator';
    rest.get().success(function(data) {
        $scope.seperatorList = data;
    }).error(errorCallback);
    

    $scope.getEdit = function(id, eID) {
        rest.path = 'getSeparatorById/'+id;
        rest.get().success(function(data) {
            $scope.separator = data;
            $('#separatorChar').select2('data',{id:data.separatorChar,text:data.separatorChar});
            $('#separatorChar').val(data.separatorChar).trigger('change');

           
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        
        if (angular.element("#" + formId).valid()) {
            if($scope.loginUserId != 1){
                notification('You don\'\t have permission.','error');
                return false;
            }else{

                if(!$scope.separator.is_active){
                    $scope.separator.is_active = 0;
                }
                var separatorData = $('#separatorChar').select2('data');
                
                $scope.separator.iUserId = $window.localStorage.getItem('session_iUserId');
                if ($scope.separator.separator_id) {
                    $routeParams.id = $scope.separator.separator_id;
                    rest.path = 'updateDecimalSeparator';
                    rest.put($scope.separator).success(function(data) {
                        if(data.status == 200){
                          $window.localStorage.setItem('DecimalSeparator',$scope.separator.separatorChar);
                        }
                        notification('Record updated successfully.','success');
                        $route.reload();
                    }).error(errorCallback);
                } else {
                    rest.path = 'saveDecimalSeparator';
                    rest.post($scope.separator).success(function(data) {
                        if(data.status == 422){
                            notification(data.msg,'error');
                        }
                        if(data.status == 200){
                            $window.localStorage.setItem('DecimalSeparator',$scope.separator.separatorChar);
                        }
                        notification('Record inserted successfully.','success');
                        $route.reload();
                    }).error(errorCallback);
                }
            }
        }
    };

    $scope.changeDecimalSeparator = () =>{
        /*var dateData = $('#dateFormat').select2('data');
        
        $scope.dateFormatD = moment($scope.toDayDate).format(dateData.text);
        
        var dateSeparator = $('#dateSeparator').select2('data');
        if(dateSeparator){
            if($scope.prevSeparator == '/'){
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
            }else if($scope.prevSeparator == '.'){
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace(/\./g,dateSeparator.text);
            }else{
                $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
                $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
            }
        }*/
    }

    /*$scope.changeDateSeparator = () =>{
        var separatorArray = ['/',',','.'];

        var go = true;
        $.each(separatorArray,function(i,val){
            if(go){
                var contains = $scope.dateFormatD.includes(val);
                if(contains){
                    $scope.prevSeparator = val;
                    go = false;
                }    
            }
        })
        
        var dateSeparator = $('#dateSeparator').select2('data');
        if($scope.prevSeparator == '/'){
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
        }else if($scope.prevSeparator == '.'){
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace(/\./g,dateSeparator.text);
        }else{
            $scope.replaceTxt = new RegExp($scope.prevSeparator, "g");
            $scope.dateFormatD = $scope.dateFormatD.replace($scope.replaceTxt,dateSeparator.text);
        }
        
    }*/
    
    
    $scope.deleteModel = function(id) {
        if($scope.loginUserId != 1){
                notification('You don\'\t have permission.','error');
                return false;
        }else{
            bootbox.confirm("Are you sure you want to delete this row?", function(result) {
                if (result == true) {
                    rest.path = 'deleteSeparator/' + id;
                    rest.delete().success(function() {
                        notification('Record deleted successfully.','success');
                        $route.reload();
                    }).error(errorCallback);
                }
            });
        }
    };

}).controller('statusWiseProjectController', function(items,$uibModalInstance, $scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.displayType = items;
    $scope.proejctsToDisplay = [];
    
    rest.path = "dashboardOrderGet";
    rest.get().success(function(data) {
        angular.forEach(data,function(val,i){
            if($scope.displayType == 'All'){
                $scope.dispalyTxt = 'All';
                $scope.proejctsToDisplay = data;
            }else if($scope.displayType == 4){
                if(val.projectStatus == 4){
                    $scope.dispalyTxt = 'In progress';
                    $scope.proejctsToDisplay.push(val);
                }
            }else if($scope.displayType == 4){
                if(val.projectStatus == 4){
                    $scope.dispalyTxt = 'In progress';
                    $scope.proejctsToDisplay.push(val);
                }
            }else if($scope.displayType == 'headsUp'){
                if(val.heads_up == 1){
                    $scope.dispalyTxt = 'headsUp';
                    $scope.proejctsToDisplay.push(val);
                }
            }
        });
    });
    
    $scope.viewProejct = (orderId) =>{
        $location.path('/viewProject/'+orderId);
        $scope.cancel();
    }

    $scope.edit = function(id) {
        if (id) {
            rest.path = 'order/' + id + '/' + $window.localStorage.getItem("session_iUserId");
            rest.get().success(function(data) {
                if (data.userName != null) {
                    $scope.orderdata = data;
                    $window.localStorage.setItem('sessionProjectEditedBy', data.userName);
                    $window.localStorage.setItem('sessionProjectEditedId', data.order_id);
                    $window.localStorage.setItem('sessionProjectUserId', data.edited_by);

                    $window.localStorage.orderNo = $scope.orderdata.order_number;
                    $window.localStorage.abbrivation = $scope.orderdata.abbrivation;
                    $window.localStorage.orderID = id;
                    $window.localStorage.iUserId = id;
                    $window.localStorage.userType = 3;
                    $window.localStorage.currentUserName = data.vClientName;
                    $window.localStorage.genfC = 1;

                    //set isNewProject to false
                    $window.localStorage.setItem("isNewProject","false");

                    $location.path('/general');
                    $window.localStorage.orderBlock = 1;
                    $timeout(function() {
                        $scope.cancel();
                    },500);
                } else {
                    notification('Information not available', 'warning');
                }
            }).error(errorCallback);
        }
        
    };
    /*rest.path = "dashboardOrderGet";
    rest.get().success(function(data) {
        
        $scope.filteredTodos = [], $scope.currentPage = 1, $scope.numPerPage = 10, $scope.maxSize = 5;
        $scope.filteredTodos = data;
        $scope.makeTodos = function() {
            $scope.todos = [];
            angular.forEach($scope.filteredTodos, function(val, i) {
                 
            });
        }

        $scope.makeTodos();

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                end = begin + $scope.numPerPage;
            $scope.adminOrderData = $scope.filteredTodos.slice(begin, end);

            var projectInProgerss = 0;
            var projectDilevered = 0;
            var dueTodayCount = 0;
            var dueTomorrowCount = 0;
            var dueDayAfterTomorrowCount = 0;
            var overDueDateCount = 0;
            var headsUp = 0;

            angular.forEach($scope.filteredTodos, function(val, i) {
                if (val.projectStatus == 4) {
                    projectInProgerss++;
                }
                $scope.projectInProgerss = projectInProgerss;

                if (val.projectStatus == 11) {
                    projectDilevered++;
                }
                $scope.projectDilevered = projectDilevered;

                if (val.DueDate.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 1)) {
                    dueTomorrowCount++;
                }
                $scope.DueDateTomorrowCount = dueTomorrowCount;

                if (val.DueDate.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 2)) {
                    dueDayAfterTomorrowCount++;
                }
                $scope.dueDayAfterTomorrowCount = dueDayAfterTomorrowCount;

                if (val.DueDate.split(' ')[0] == dateFormat(new Date())) {
                    dueTodayCount++;
                }
                $scope.DueDateTodayCount = dueTodayCount;

                if (val.DueDate.split(' ')[0].split(".").reverse().join("-") < dateFormat(new Date()).split(".").reverse().join("-")) {
                    overDueDateCount++;
                }
                $scope.overDueDateCount = overDueDateCount;

                if (val.heads_up == 1) {
                    headsUp++;
                }
                $scope.headsUp = headsUp;
            });

            var go;
            $scope.OverdueFilter = function(id, eID) {
                eID = "projectScroll";
                
                $scope.dateOverdue = $filter('dateLessThenToday')($scope.adminOrderData, today);
                scrollToId(eID);
                angular.element('#exportable').hide();
                angular.element('#exportable1').show();
                angular.element('#exportExport1').show();
                angular.element('#exportExport').hide();
                angular.element('.DashboardTask').css('margin-top', '-5%');
            }
        });

        var order = { 
            inpreparation: 0,
            assignedwaiting: 0,
            inprogress: 0,
            overdue: 0,
            delivered: 0,
            approved: 0,
            duetoday: 0,
            duetommorow: 0,
            duetoday: 0,
            duedayaftertomorrow: 0
        };

         
        angular.forEach(data, function(val, i) {
            if (val.DueDate != "") {}
            if (val.itemStatus == 'In preparation') {
                order.inpreparation += 1;
            }
            if (val.itemStatus == 'Assigned-waiting') {
                order.assignedwaiting += 1;
            }
            if (val.itemStatus == 'In-progress') {
                order.inprogress += 1;
            }
             
            if (val.itemStatus == 'Delivered') {
                order.delivered += 1;
            }
            if (val.itemStatus == 'Approved') {
                order.approved += 1;
            }
           
        });

         
        var obj = [];
        angular.forEach(order, function(val, i) {
            obj.push({ name: i, y: val });
            angular.element('#ap_' + i).text(val);
        });

        $scope.adminEmpty = jQuery.isEmptyObject(data);

    });*/

    $scope.cancel = function() {
        $uibModalInstance.close();
    }
}).controller('statusWiseJobsController', function(items,$uibModalInstance, $scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.jobDisplayType = items;
    $scope.jobsToDisplay = [];
    

    rest.path = 'getJobsFromTmsSummeryView';
        rest.get().success(function(data) {
            $scope.dashboardJobList = data;
            console.log("$scope.dashboardJobList", $scope.dashboardJobList);
            angular.forEach($scope.dashboardJobList, function(val, i) {
                val.item_id = pad(val.item_id, 3);
                if($scope.jobDisplayType == 'Requested'){
                    if(val.item_status== 'Requested'){
                        $scope.jobsToDisplay.push(val);
                        $scope.jobDispalyTxt = 'Requested';
                    }
                }else if($scope.jobDisplayType == 'inProgress'){
                    if(val.item_status == 'In-progress'){
                        $scope.jobsToDisplay.push(val);
                        $scope.jobDispalyTxt = 'In Progress';
                    }
                }else if($scope.jobDisplayType == 'DueToday'){
                    if(val.due_date.split(' ')[0] == dateFormat(new Date()).split(".").reverse().join("-")){
                        $scope.jobsToDisplay.push(val);
                        $scope.jobDispalyTxt = 'DueToday';
                    }
                }else if($scope.jobDisplayType == 'DueTomorrow'){
                    if(val.due_date.split(' ')[0] == TodayAfterNumberOfDays(new Date(), 1)){
                        $scope.jobsToDisplay.push(val);
                        $scope.jobDispalyTxt = 'DueTomorrow';
                    }
                }else if($scope.jobDisplayType == 'Overdue'){
                    if(val.due_date.split(' ')[0] < dateFormat(new Date()).split(".").reverse().join("-")){
                        $scope.jobsToDisplay.push(val);
                        $scope.jobDispalyTxt = 'Overdue';
                    }
                }
                
            });
        }).error(errorCallback);


    $scope.goToJob = function(jobId, OrderId) {
        scrollBodyToTop();
        rest.path = 'jobDetailchange/' + jobId;
        rest.get().success(function(data) {
            if (data) {
                $window.localStorage.projectJobChainOrderId = OrderId;
                $window.localStorage.orderID = OrderId;
                $routeParams.id = jobId;
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'tpl/jobEditPopup.html',
                    controller: 'jobSummeryDetailsController',
                    size: '',
                    resolve: {
                        items: function() {
                            return $scope.data;
                        }
                    }
                });
            } else {
                notification('This Record is deleted.', 'error');
            }
        }).error(errorCallback);
        $scope.cancel();
    };
    $scope.cancel = function() {
        $uibModalInstance.close();
    }
}).controller('jobStatusRejectController', function($scope, $log, $window, $compile, $timeout, $uibModal, rest, $route, $rootScope, $routeParams, $location, $uibModalInstance) {
    $scope.userRight = $window.sessionStorage.getItem("session_iFkUserTypeId");
    $scope.rejectId = $routeParams.id;

    // jobReject
    $scope.ok = function(frmId, data) {
        if (angular.element("#" + frmId).valid()) {
            $('#rejectLoder').css('display','block');
            $routeParams.id;
            rest.path = 'rejectJobStatus';
            rest.put(data).success(function(data) {
                if(data.status == 200 && data.emailSend == 'true'){
                    notification('job is rejected successfully and email sent to project manager.','success');
                    $('#rejectLoder').css('display','none');
                }
                $uibModalInstance.dismiss('cancel');
                $route.reload();
            }).error(errorCallback);
        }
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}).controller('viewfeedbackPoupController', function(items,$uibModalInstance, $scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.exUserId = items.userId;
    $scope.DisplayUserName = items.userName;

    $scope.model = {
        basic: 0,
        readonly: 2.5,
        readonly_enables: true,
        minMaxStep: 0,
        pristine: 3,
        resetable: 1,
        heightWidth: 1.5,
        callbacks: 5,
        custom: 4,
    };

    rest.path = 'resourceAssetsByIuserId/' + $scope.exUserId;
        rest.get().success(function(data) {
            $scope.reviewJobs = data;
            
            if($scope.reviewJobs.length == 0){
                $scope.cancel();
                notification('No feedback available.','warning');
            }
            
            angular.forEach($scope.reviewJobs,function(val,i){
                var fDt = val.period.split('^')[0];
                var tDt = val.period.split('^')[1];
                
                fDt = moment(fDt).format($window.localStorage.getItem('global_dateFormat'));
                tDt = moment(tDt).format($window.localStorage.getItem('global_dateFormat'));
                val.period = fDt+'  To  '+tDt;
            })
        }).error(errorCallback);

    $scope.cancel = function() {
        $uibModalInstance.close();
    }
}).controller('userActivationController', function($scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.activate = function(){
        $scope.actiationData = {
            "activationToken" : $routeParams.id
        }
        
        rest.path = 'activateAccount';
        rest.post($scope.actiationData).success(function(data) {
            if(data){
                notification(data.msg,'success');
                $location.path('/');
            }
        }).error(errorCallback);
    }
}).controller('passwordResetController', function($scope, $window, $compile, $timeout, $uibModal, $log, rest, $rootScope, $location, $cookieStore, $route, $routeParams) {
    $scope.updatePassword = function(reset, formId) {
        if ($("#" + formId).valid()) {
            $scope.resetData = {
                "resetToken"    : $routeParams.id,
                "newPassword"   : $scope.reset.newPass
            }
            rest.path = 'resetpassword1';
            rest.post($scope.resetData).success(function(data) {
                notification('Password reseted successfully.','success');
                $location.path('/');
            }).error(function(data) {
                if(data.status == 404){
                    notification(data.msg,'warning');
                    $location.path('/resetpassword');
                }else{
                    errorCallback(data);
                }
            });
        }
    };
}).controller('languagesController', function($scope, $log, $location, $route, rest, $uibModal, $rootScope, $window, $routeParams, $timeout) {
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    $scope.CurrentDate = new Date();
    $scope.editOn = 0;

    $scope.save = function(formId) {
        if (angular.element('#' + formId).valid()) {
            if ($scope.langs.lang_id) {

                $routeParams.id = $scope.langs.lang_id;
                rest.path = 'langsupdate';
                rest.put($scope.langs).success(function(data) {
                    notification('Record updated successfully.','success');
                    //$route.reload();
                    $timeout(function() {
                        $window.location.reload();
                    },100);
                }).error(errorCallback);
            } else {
                if ($scope.langs.is_active == undefined) {
                    $scope.langs.is_active = '0';
                }
                if ($scope.langs.is_favourite == undefined) {
                    $scope.langs.is_favourite = '0';
                }
                rest.path = 'languageSave';
                rest.post($scope.langs).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    }

    rest.path = 'languagesGet';
    rest.get().success(function(data) {
        $scope.langsList = data;
    }).error(errorCallback);

    $scope.disableField = false;
    $scope.LangEdit = function(id, eID) {
        $scope.editOn=1;
        rest.path = 'LangsgetOne/' + id;
        rest.get().success(function(data) {
            $scope.langs = data;
            $scope.disableField = true;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.deleteLang = function(id) {
        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result == true) {
                rest.path = 'deleteLangs/' + id;
                rest.delete().success(function(data) {
                    if (data.status == 422) {
                        notification('You can not delete this record.', 'warning');
                    } else {
                        notification('Record deleted successfully.','success');
                        $route.reload();
                    }
                }).error(errorCallback);
            }
        });
    }

}).controller('commentchatController', function($scope, $log, $location, $route, rest, $routeParams, $window, $uibModal, $cookieStore, $timeout, $uibModalInstance, items) {

    var loginid = $window.localStorage.getItem("session_iUserId");
    var userprofilepic = $window.localStorage.getItem("session_vProfilePic");

    if(items){
        $routeParams.id = items;
        
        $scope.login_userid = $window.localStorage.getItem("session_iUserId");

        rest.path = 'viewProjectCustomerDetail';
        rest.model().success(function(data) {
            $scope.customer = data;
            $window.localStorage.clientproCustomerName = $scope.customer.client;
            $window.localStorage.ContactPerson = $scope.customer.contact;
            $routeParams.ClientIdd = data['client'];
            $window.localStorage.ClientName = $routeParams.ClientIdd;
            if ($scope.customer.memo) {
                $scope.warn = true;
                $timeout(function() {
                    $scope.warn = false;
                }, 10000);
            }
        }).error(errorCallback);

        $routeParams.id;
        rest.path = 'contactPerson';
        rest.model().success(function(data) {
            angular.forEach(data, function(val, i) {
                if (val.vResourcePosition == 3) {
                    angular.element('#coordinator').html(val.vUserName);
                } else if (val.vResourcePosition == 2) {
                    angular.element('#manager').html(val.vUserName);
                } else if (val.vResourcePosition == 4) {
                    angular.element('#QASpecialist').html(val.vUserName);
                }
            })
        }).error(errorCallback);

        $routeParams.id = $routeParams.id;
        rest.path = 'generalVieData/' + $routeParams.id + '/' + $window.localStorage.ClientName;
        rest.get().success(function(data) {
            $scope.general = data;
            //console.log("$scope.general", $scope.general);
            // $scope.properties = JSON.parse($scope.general.properties);
            var properties = [];
            if ($scope.general.properties) {
                angular.forEach(JSON.parse($scope.general.properties), function(val, i) {
                    rest.path = 'generalPropertiesView/' + val;
                    rest.get().success(function(data) {
                        angular.element('#' + i).html(data);
                    })
                    properties.push({
                        id: i
                    });
                })
            }
            $scope.properties = properties;
            $scope.item_number = data;
            
            //$scope.general.order_date = $scope.general.order_date;
            $scope.general.order_date = moment($scope.general.order_date).format($window.localStorage.getItem('global_dateFormat'));

            $scope.general.due_date = $scope.general.due_date.split(' ')[0].split('.').reverse().join('-');
            $scope.general.due_date = moment($scope.general.due_date).format("DD-MM-YYYY");
            if ($scope.general.order_date == undefined) {
                var currentdate = new Date();
                $scope.general.order_date = getDatetime(currentdate);
            }
            $scope.generaldata = {};
            $scope.generaldata.order_no = $window.localStorage.orderNo;
            $scope.generaldata.abbrivation = $window.localStorage.abbrivation;

            if ($scope.general == null) {
                $scope.general = {};
                $scope.generaldata = {};
                $scope.generaldata.order_no = $window.localStorage.orderNo;
                $scope.generaldata.abbrivation = $window.localStorage.abbrivation;
                if ($scope.general.order_no == "") {

                }
            }
        }).error(errorCallback);


    }

    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    if($scope.isNewProject === 'true' && $scope.userRight == 1){
        $location.path('/dashboard1');
        notification('Please create project.','warning');
    }

    $scope.backtoPage = function() {
        if ($window.localStorage.getItem("session_iFkUserTypeId") == 1) {
            $location.path('jobs-detail/' + $window.localStorage.orderID);
        } else {
            $location.path('dashboard1');
        }
    }

    if ($routeParams.id) {

        var commentsArray = [];
        $scope.commentReadArray=[];
        rest.path = "discussionOrder/" + $routeParams.id;
        
        rest.get().success(function(data) {
            setTimeout(function() {
                angular.forEach(data, function(val, i) {
                    var dataId = val.id;
                            
                    /*if (val.content == "") {
                        var dataId = val.id;
                        var hrefClass = 'attachment';
                        var hrefTarget = '_blank';
                        var data = '<a class=' + hrefClass + ' href=' + val.fileURL + ' target=' + hrefTarget + '><img src=' + val.fileURL + '></img></a>';
                        if(val.user_id == 1){
                            //$('li[data-id=' + dataId + ']').addClass('cmtright');
                            //$(time).addClass('cmtright');
                        }
                        $('li[data-id=' + dataId + ']').find('.content').html(data);
                        $('li[data-id=' + dataId + ']').clone(true).appendTo('#attachment-list');
                    }*/
                    
                    $('li[data-id=c' + val.id + ']').addClass('pull-right cmtright');
                    
                    //$('.upload').html('<i class="fa fa-paperclip"></i><input id="discussionFileUpload" type="file" data-role="none" multiple="multiple">');
                                                
                    if(userprofilepic){                    
                        $('.commenting-field .profile-picture').replaceWith('<img src=" uploads/profilePic/'+userprofilepic+'" class="img-circle round userpic" alt="...">');
                    }
                    var filedata = '';
                    if (val.fileURL != "") {
                            var filetype = val.fileMimeType;
                            var filetype1 = filetype.includes("image/");
                            var file_format = '';
                            var file_type = '';
                            var mimeTypeParts = val.fileMimeType.split('/');
                            if(mimeTypeParts.length == 2) {
                                file_format = mimeTypeParts[1];
                                file_type = mimeTypeParts[0];
                            }
                            // Icon
                            var availableIcons = ['archive', 'audio', 'code', 'excel', 'image', 'movie', 'pdf', 'photo',
                                'picture', 'powerpoint', 'sound', 'video', 'word', 'zip'];
                            
                            var iconClass = 'fa fa-file-o';
                            // File Extension name
                            var extName = '';
                            var extParts = val.fileURL.split('/');
                            var extFileName = extParts[extParts.length - 1];
                            var extFileName = extFileName.split('?')[0];
                            extName = extFileName.split('.')[1];
                            
                            if(availableIcons.indexOf(file_format) > 0) {
                                iconClass = 'fa fa-file-' + file_format + '-o';
                            } else if(availableIcons.indexOf(file_type) > 0) {
                                iconClass = 'fa fa-file-' + file_type + '-o';
                            }else if(extName == 'docx'){
                                iconClass = 'fa fa-file-word-o';
                            }else if(extName == 'xlsx' || extName == 'xlsm'){
                                iconClass = 'fa fa-file-excel-o';
                            }else if(extName == 'zip'){
                                iconClass = 'fa fa-file-archive-o';
                            }

                            //$window.localStorage.setItem("chatimg_"+val.fileURL, val.fileURL);
                            //var cmtimgName = $window.localStorage.getItem("chatimg_"+val.fileURL);
                            var cmtimgName = val.fileURL +'?v='+jQuery.now();
                            
                            if(file_type == 'image'){
                               var filehtml = '<img src=' + cmtimgName + '></img>';                     
                            }else{
                               var filename = val.fileURL; 
                               var filehtml = '<i class="'+iconClass+'"></i> ' + filename.replace('uploads/discussionfile/','') ;                     
                            }
                        var hrefClass = 'attachment';
                        var hrefTarget = '_blank';
                        filedata = '<a class=' + hrefClass + ' href=' + val.fileURL + ' target=' + hrefTarget + '>' + filehtml + '</a>';
                            
                    }        
                    if(val.user_id == loginid){
                        $('li[data-id=' + val.id + ']').addClass('pull-right cmtright');
                        if (val.content =='' || val.content == null) {
                            $('li[data-id=' + dataId + ']').find('.content').html(filedata);
                            $('li[data-id=' + dataId + ']').clone(true).appendTo('#attachment-list');
                        }else{
                            //var htmldata = '<a href class="pull-right thumb-sm avatar"><img src=" '+ val.profile_picture_url +'" class="img-circle" alt="..."></a> <div class="m-r-xxl"> <div class="pos-rlt wrapper bg-info r r-2x"> <span class="arrow right pull-up arrow-info"></span> <p class="m-b-none"> '+ val.content +' </p> </div> <small class="text-muted">1 minutes ago</small> </div>';
                            //$('li[data-id=' + val.id + ']').find('.content').html(htmldata);
                        }   
                    }else{
                        $('li[data-id=' + val.id + ']').addClass('pull-left cmtleft');
                        //$('li[data-id=' + val.id + ']').find('.profile-picture').addClass('pull-left thumb-sm avatar');
                        if (val.content == "" || val.content == null) {
                            $('li[data-id=' + dataId + ']').find('.content').html(filedata);
                            $('li[data-id=' + dataId + ']').clone(true).appendTo('#attachment-list');
                        }
                    }

                    var msgRead_id = val.read_id;
                    if( msgRead_id.match(new RegExp("(?:^|,)"+loginid+"(?:,|$)"))) {
                        //console.log(msgRead_id);
                    }else{
                        var cmtObj = {
                            id   : val.id,
                            read_id : loginid
                        }
                        $scope.commentReadArray.push(cmtObj);    
                    }   
                    // Read/ Unread - check comment id exist in db 

                });
                
                $(".comment-wrapper").each(function(i,v) {
                    /*var dateTime = $(this).find('time')[0].innerText;
                    console.log(dateTime);
                    //dateTime = moment(dateTime).format($window.localStorage.getItem('global_dateFormat'));
                    dateTime = moment(dateTime).format('DD-MM-YYYY');
                    $(this).find('time')[0].innerText = dateTime;*/
                });

            }, 1500);
            commentsArray = data;
            //console.log('commentsArray',commentsArray);
        }).error(errorCallback);
    }


    if ($routeParams.id) {
        $scope.usersArray = [];
        rest.path = "users";
        $timeout(function() {
            rest.get().success(function(data) {
                //console.log("datadata",data);
                    angular.forEach(data.data, function(val, i) {
                        var uObj = {
                            id              : val.iUserId,
                            fullname        : val.vUserName,
                            email          : val.vEmailAddress,
                            profile_picture_url: "uploads/profilePic/user-icon.png"
                        }
                        $scope.usersArray.push(uObj);
                    });
                
            }).error(errorCallback);
        }, 200);        
        // emoji text
        $scope.emojitext = [];
        /*rest.path = "emojitext";
        $timeout(function() {
            rest.get().success(function(data) {
                //console.log("emojidata",data);
                    angular.forEach(data, function(val, i) {
                        var eObj = {
                            id              : val.id,
                            emojiname        : val.emojiname,
                            emojipic          : val.emojipic,
                        }
                        $scope.emojitext.push(eObj);
                    });
                
            }).error(errorCallback);
        }, 200);*/    
    }


//$timeout(function() {
$scope.emojitext2 = [
    {
      id: 1,
      emojiname: ":)",
      emojipic: "\uD83D\uDE03"
    },
    {
      id: 2,
      emojiname: ":p",
      emojipic: "\uD83D\uDE1B"
    },
    {
      id: 3,
      emojiname: ":blush",
      emojipic: "\uD83D\uDE0A"
    },
    {
      id: 4,
      emojiname: ":o",
      emojipic: "\uD83D\uDE2E"
    },
    {
      id: 5,
      emojiname: ";)",
      emojipic: "\uD83D\uDE09"
    },
    {
      id: 6,
      emojiname: ":(",
      emojipic: "\uD83D\uDE12"
    },
    {
      id: 7,
      emojiname: ";p",
      emojipic: "\uD83D\uDE1C"
    },
    {
      id: 8,
      emojiname: ":'(",
      emojipic: "\uD83D\uDE22"
    },
    {
      id: 9,
      emojiname: ":o)",
      emojipic: "\uD83D\uDE2E"
    },
    {
      id: 10,
      emojiname: ":*",
      emojipic: "\uD83D\uDC8B"
    },
    {
      id: 11,
      emojiname: "</3",
      emojipic: "\uD83D\uDC94"
    },
    {
      id: 12,
      emojiname: ":>",
      emojipic: "\uD83D\uDE06"
    },
    {
      id: 13,
      emojiname: ">:(",
      emojipic: "\uD83D\uDE20"
    },
    {
      id: 14,
      emojiname: ":-)",
      emojipic: "\uD83D\uDE42"
    },
    {
      id: 15,
      emojiname: ":'(",
      emojipic: "\uD83D\uDE22"
    },
    {
      id: 16,
      emojiname: "):",
      emojipic: "\uD83D\uDE1E"
    },
    {
      id: 17,
      emojiname: ":-\\\\",
      emojipic: "\uD83D\uDE15"
    },
    {
      id: 18,
      emojiname: "<\\/3",
      emojipic: "\uD83D\uDC94"
    },
    {
      id: 19,
      emojiname: "8)",
      emojipic: "\uD83D\uDE0E"
    },
    {
      id: 20,
      emojiname: ":|",
      emojipic: "\uD83D\uDE10"
    },
    {
      id: 21,
      emojiname: "<3",
      emojipic: "\u2764\uFE0F"
    },
    {
      id: 22,
      emojiname: ":D",
      emojipic: "\uD83D\uDE00"
    },

];
//},500);
//emoji text change
//$timeout(function() {
//$scope.emojimap=[];
var emojimap = {
    "<3": "\u2764\uFE0F",
    "</3": "\uD83D\uDC94",
    ":D": "\uD83D\uDE00",
    ":)": "\uD83D\uDE03",
    ";)": "\uD83D\uDE09",
    ":(": "\uD83D\uDE12",
    ":p": "\uD83D\uDE1B",
    ";p": "\uD83D\uDE1C",
    ":'(": "\uD83D\uDE22",
    ":o)": "\uD83D\uDE2E",
    ":*": "\uD83D\uDC8B",
    ":>": "\uD83D\uDE06",
    ":blush": "\uD83D\uDE0A",
    ">:(": "\uD83D\uDE20",
    ":-)": "\uD83D\uDE42",
    ":'(": "\uD83D\uDE22",
    "):": "\uD83D\uDE1E",
    ":-\\\\": "\uD83D\uDE15",
    "<\\/3": "\uD83D\uDC94",
    "8)": "\uD83D\uDE0E",
    ":|": "\uD83D\uDE10",
    ":o": "\uD83D\uDE2E"
};    

$timeout(function() {
    if($routeParams.id){
    //$timeout(function() {
        rest.path = "discussionCommentread";    
        rest.put($scope.commentReadArray).success(function(res) {
            //console.log('res',res);
            if(res.status==1){
                jQuery('.cmtclr'+$routeParams.id).css({"color":"green"});
            }
        });
    //},2300);
    }

//  Scroll to bottom  
    jQuery('#comment-list').scrollTop(jQuery('#comment-list')[0].scrollHeight);
    jQuery('#attachment-list').scrollTop(jQuery('#attachment-list')[0].scrollHeight);

    $('.textarea-wrapper').before('<input type="text" id="addemoji" data-emoji-placeholder=":smiley:" />');    

     jQuery("#addemoji").emojioneArea({
        autoHideFilters: true,
        useSprite : true,
        //default: 'unicode',
        //accepts values: 'unicode' | 'shortname' | 'image'
        //pickerPosition: "bottom"
      });
},2800);



$timeout(function() {
    var el = $("#addemoji").emojioneArea();

    el[0].emojioneArea.on("emojibtn.click",function() {
        const emoji1 = $('.emojibtn').find('.emojioneemoji').attr('src');
        const emoji = $('.emojionearea-editor').find('img[src="'+emoji1+'"]').attr('alt');
        $('.textarea').append(emoji);
    });

}, 3000);

    $timeout(function() {
        
        var CommentedElement = $('#comments-container').comments({ //profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
            roundProfilePictures: true,
            textareaRows: 1,
            enableAttachments: true,
            enablePinging: true,
            currentUserId: 1,
            enableHashtags: true,
            textareaPlaceholderText: 'Type message here...',
            getComments: function(success, error) {
                $timeout(function() {
                    success(commentsArray);
                    $('ul.navigation').find('li[data-sort-key="oldest"]').trigger('click');    
            
                }, 500);
            },
            searchUsers: function(term, success, error) {
                setTimeout(function() {
                    success($scope.usersArray.filter(function(user) {
                
                        var containsSearchTerm = user.fullname.toLowerCase().indexOf(term.toLowerCase()) != -1;
                        var isNotSelf = user.id != loginid;
                        return containsSearchTerm && isNotSelf;
                    }));
                }, 500);
            },

            searchEmojitext: function(term, success, error) {
                setTimeout(function() {
                    success($scope.emojitext.filter(function(emojitxt) {
                        var containsSearchTerm = emojitxt.emojiname.toLowerCase().indexOf(term.toLowerCase()) != -1;
                        return containsSearchTerm;
                    }));
                }, 500);
            },

            postComment: function(data, success, error) {
                data.order_id = $routeParams.id;
                data.user_id = $window.localStorage.getItem("session_iUserId");
                data.fullname = $window.localStorage.getItem("session_vUserName");
                data.profile_picture_url = 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic");
                data.read_id = $window.localStorage.getItem("session_iUserId")+',';

                

             function escapeSpecialChars(regex) {
               return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
             }
             for (var i in emojimap) {
                var regex = new RegExp(escapeSpecialChars(i), 'gim');
                data.content = data.content.replace(regex, emojimap[i]);
            }

                var pingsvalue =[];
                if(data.content){
                    $(Object.keys(data.pings)).each(function(index, userId) {
                        var fullname = data.pings[userId];
                        var pingText = '@' + fullname;
                        data.content = data.content.replace(new RegExp('@' + userId, 'g'), pingText);
                        
                        pingsvalue[index] = Object.keys(data.pings)[index];
                    });
                }
                data.pings = pingsvalue.toString();
                rest.path = "discussionOrder";
                rest.post(data).success(function(info) {

                }).error(errorCallback);
                $timeout(function() {
                    success(data);
                }, 500);
            },
            putComment: function(data, success, error) {
                $routeParams.id = data.id;
                data.login_userid = $window.localStorage.getItem("session_iUserId");
                rest.path = 'discussionOrder';
                rest.put(data).success(function(res) {
                    if (res.Status == 401) {
                        notification("You can not edit other user message", "error");
                        $timeout(function() {
                            /*location.reload();*/
                        }, 1000);
                    } else if (res.Status == 200) {
                        notification("Successfully edited", "success");
                    } else {
                        notification("Please try later", "warning");
                    }
                }).error(errorCallback);
                $timeout(function() {
                    success(data);
                }, 500);
            },
            deleteComment: function(data, success, error) {
                data.login_userid = $window.localStorage.getItem("session_iUserId");
                rest.path = 'discussionOrder/' + data.id + '/' + data.login_userid;
                rest.delete(data).success(function(data) {
                    if (data.Status == 401) {
                        notification("You can not edit other user message", "error");
                        $timeout(function() {
                            /*location.reload();*/
                        }, 500);
                    } else if (data.Status == 200) {
                        notification("Successfully edited", "success");
                    } else {
                        notification("Please try later", "warning");
                    }
                }).error(errorCallback);
                $timeout(function() {
                    success();
                }, 1000);
            },
            upvoteComment: function(data, success, error) {
                $routeParams.id = data.id;
                rest.path = 'discussionOrder';
                rest.put(data).success(function(data) {

                }).error(errorCallback);
                $timeout(function() {
                    success(data);
                }, 500);
            },
            /*validateAttachments: function(attachments, callback) {
                setTimeout(function() {
                    callback(attachments);
                }, 500);
            },*/
            uploadAttachments: function(dataArray, success, error, data) {
                /*"fileURL":dataArray[0].file_url,*/
                var obj = {
                    "order_id": $routeParams.id,
                    "user_id": $window.localStorage.getItem("session_iUserId"),
                    "fullname": $window.localStorage.getItem("session_vUserName"),
                    "profile_picture_url": 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic"),
                    "fileURL": "uploads/discussionfile/" + dataArray[0].file.name2,
                    "fileMimeType": dataArray[0].file.type,
                    "created": dataArray[0].created,
                    "modified": dataArray[0].modified,
                    "created_by_current_user": '1',
                    "upvote_count": '0',
                    "user_has_upvoted": '0',
                    "read_id": $window.localStorage.getItem("session_iUserId")+',',
                    
                }
                rest.path = "discussionOrder";
                rest.post(obj).success(function(info) {

                }).error(errorCallback);
                dataArray[0].fullname = $window.localStorage.getItem("session_vUserName");
                dataArray[0].profile_picture_url = 'uploads/profilePic/' + $window.localStorage.getItem("session_vProfilePic");
                $timeout(function() {
                    success(dataArray);
                }, 500);
            }
        });
    }, 1000);

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');

    };

}).controller('workInstructionsController', function($scope, $log, $location, $route, rest, $routeParams, $window) {
    //debugger;
    $scope.userRight = $window.localStorage.getItem("session_iFkUserTypeId");
    rest.path = 'workinstructs';
    rest.get().success(function(data) {
        $scope.workInstructs = data;
        $scope.workInstructsEmpty = jQuery.isEmptyObject(data);
    }).error(errorCallback);

    $scope.getType = function(id, eID) {
        $routeParams.id = id;
        rest.path = 'workinstructs';
        rest.model().success(function(data) {
            $scope.w_instruct = data;
        }).error(errorCallback);
        scrollToId(eID);
    }

    $scope.save = function(formId) {
        if (angular.element("#" + formId).valid()) {
            if ($scope.w_instruct.id) {
                $routeParams.id = $scope.w_instruct.id;
                rest.path = 'workinstructs';
                rest.put($scope.w_instruct).success(function() {
                    notification('Record updated successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            } else {
                rest.path = 'workinstructs';
                rest.post($scope.w_instruct).success(function(data) {
                    notification('Record inserted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        }
    };

    $scope.deleteModel = function(id) {
        bootbox.confirm("Are you sure you want to delete this row?", function(result) {
            if (result == true) {
                rest.path = 'workinstructs/' + id;
                rest.delete().success(function() {
                    notification('Record deleted successfully.','success');
                    $route.reload();
                }).error(errorCallback);
            }
        });
    };

});
