/**
 * Created by Jay on 15-3-29.
 */

var queryParams = parseUrlQueryString();

var WEEK_DAY_CN = [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ];

try {
    var now = Date.now();
} catch (err) {
    Date.now = function() {
        return new Date().getTime();
    }
}

if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function(key) {
        return this[key] != null && this[key] != undefined;
    }
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0; // Hack to convert O.length to a UInt32
        if ({}.toString.call(callback) != "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }
        if (thisArg) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;
        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}

if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}

Array.prototype.random = function() {
    return this[Math.floor(this.length * Math.random())];
}

if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+/g, "");
    }
}

String.prototype.fillData = function(key, value) {
    return this.replace(new RegExp("\\{" + key + "\\}", "g"), value);
}

String.prototype.hasValue = function() {
    return this != "undefined" && this != "null" && this != "";
}


/**
 * 转全角字符
 */
String.prototype.toDBC = function() {
    var str = this;
    var result = "";
    var len = str.length;
    for(var i=0;i<len;i++)
    {
        var cCode = str.charCodeAt(i);
        //全角与半角相差（除空格外）：65248(十进制)
        cCode = (cCode>=0x0021 && cCode<=0x007E)?(cCode + 65248) : cCode;
        //处理空格
        cCode = (cCode==0x0020)?0x03000:cCode;
        result += String.fromCharCode(cCode);
    }
    return result;
}
/**
 * 转半角字符
 */
String.prototype.toSBC = function() {
    var str = this;
    var result = "";
    var len = str.length;
    for(var i=0;i<len;i++)
    {
        var cCode = str.charCodeAt(i);
        //全角与半角相差（除空格外）：65248（十进制）
        cCode = (cCode>=0xFF01 && cCode<=0xFF5E)?(cCode - 65248) : cCode;
        //处理空格
        cCode = (cCode==0x03000)?0x0020:cCode;
        result += String.fromCharCode(cCode);
    }
    return result;
}

function dec2bin(num){
    if(isNaN(num))return;
    return parseInt(num,10).toString(2);
}

function trace(str) {
    if (window.console && window.console.log) {
        window.console.log(str);
    }
}

function hashMapToArray(map, json, loopFunc) {
    var list = [];
    for (var key in map) {
        var obj = json ? JSON.parse(map[key]) : map[key];
        list.push(obj);
        if (loopFunc != null) {
            loopFunc(obj, key, map);
        }
    }
    return list;
}

var isIE = $checkIsIE();
var IE_VER = 0;
var isBelowIE10 = $checkIsBelowIE10();
var broswerType = $checkBroswer();
var isMobile = $checkIsMobile();

function $checkIsIE() {
    try {
        var temp = navigator.userAgent.split(";")[1].replace(/[ ]/g,"");
        if (temp.indexOf("MSIE") == 0) {
            return true;
        } else {
            if (navigator.userAgent.indexOf('Trident') > 0 && navigator.userAgent.indexOf('rv:11') > 0) {
                return true;
            }
            return false;
        }
    } catch (err) {
        return false;
    }
}

function $checkIsBelowIE10() {
    if (isIE) {
        var temp = navigator.userAgent.split(";")[1].replace(/[ ]/g,"");
        IE_VER = parseInt(temp.replace('MSIE', ''));
        return IE_VER < 10;
    }
    return false;
}

function $checkBroswer() {
    if(navigator.userAgent.indexOf('Trident') > 0 && navigator.userAgent.indexOf('rv:11') > 0) {
        return "IE";
    }
    if(navigator.userAgent.indexOf("MSIE")>0) {
        return "IE";
    }
    if(navigator.userAgent.indexOf("Firefox")>0){
        return "Firefox";
    }
    if(navigator.userAgent.indexOf("Chrome")>0){
        return "Chrome";
    }
    if(navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
    }
    return "未知浏览器";

}

function $checkIsMobile() {
    try {
        var u = navigator.userAgent.toLowerCase();
        trace('navigator.userAgent ==> ' + u);
        //var mobile = !!u.match(/AppleWebKit.*Mobile.*/i) || !!u.match(/AppleWebKit/i); //是否为移动终端
        var mobile = u.match(/Mobile/i) !== null ? true : false; //是否为移动终端
        trace('mobile ==> ' + mobile);
        var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i); //ios终端
        trace('ios ==> ' + ios);
        var android = u.indexOf('android') > -1 || u.indexOf('linux') > -1; //android终端或者uc浏览器
        trace('android ==> ' + android);
        var iPhone = u.indexOf('iphone') > -1 || u.indexOf('mac') > -1; //是否为iPhone或者QQHD浏览器
        trace('iphone ==> ' + iPhone);
        var iPad = u.indexOf('ipad') > -1; //是否iPad
        trace('ipad ==> ' + iPad);

        return mobile || ios || android || iPhone || iPad;
    } catch (err) {
        return false;
    }
}

var FLASH_VER = __getFlashVersion();
var HAS_FLASH = FLASH_VER && FLASH_VER != '0,0,0';

function __getFlashVersion(){
    try {
        try {
            // avoid fp6 minor version lookup issues
            // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
            var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
            try { axo.AllowScriptAccess = 'always'; }
            catch(e) { return '6,0,0'; }
        } catch(e) {}
        return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
        // other browsers
    } catch(e) {
        try {
            if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
                return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
            }
        } catch(e) {}
    }
    return '0,0,0';
}

function parseUrlQueryString(){
    var vars = {}, hash;
    var url = window.location.href;
    if (url.indexOf('#') > 0) {
        url = url.substring(0, url.lastIndexOf('#'));
    }
    var index = url.indexOf('?');
    if (index < 0) return vars;


    var hashes = url.slice(index + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        //vars.push(hash[0]);
        if (!hash[0] || hash[0] == "" || hash[0] == "null") continue;
        vars[hash[0]] = decodeURIComponent(hash[1]);
    }
    return vars;
}


function convertTimeToDate(time, toTime, lang) {
    var date = new Date();
    date.setTime(time);
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var str = lang == "en" ? date.getFullYear() + "-" + (m >= 10 ? m : ('0' + m)) + "-" + (d >= 10 ? d : ('0' + d)) : date.getFullYear() + "年" + (m >= 10 ? m : ('0' + m)) + "月" + (d >= 10 ? d : ('0' + d)) + "日";
    if (toTime) {
        str += " " + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
    }
    return str;
}

function convertStringToTime(str) {
    str = str.replace(/\./img, '-');
    var dt = new Date();
    var arr = str.trim().split(" ");
    var dateArr = arr[0].split("-");
    dt.setFullYear(Number(dateArr[0]));
    dt.setMonth(Number(dateArr[1]) - 1);
    dt.setDate(Number(dateArr[2]));

    if (arr.length > 1) {
        var timeArr = arr[1].split(":");
        dt.setHours(Number(timeArr[0]));
        if (timeArr.length > 1) {
            dt.setMinutes(Number(timeArr[1]));
        } else {
            dt.setMinutes(0);
        }
        if (timeArr.length > 2) {
            dt.setSeconds(Number(timeArr[2]));
        } else {
            dt.setSeconds(0);
        }
    } else {
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
    }

    dt.setMilliseconds(0);

    return dt;
}

function convertStringToTimeSec(str) {
    var dt = convertStringToTime(str);
    return dt.getTime() / 1000;
}

function getDateTimeFromNow(val) {
    var now = Date.now();
    var passed = (now - val) / 1000;
    if (passed <= 0) return '现在';

    if (passed < 60) return Math.round(passed) + '秒前';
    if (passed >= 60 && passed < 3600) return Math.floor(passed / 60) + '分钟前';
    if (passed >= 3600 && passed < 86400) return Math.floor(passed / 3600) + '小时前';
    if (passed >= 86400) return Math.floor(passed / 86400) + '天前';
    if (passed >= 604800) return convertTimeToDate(val, false);
}

function convertSecToTimeStr(val, lang, allShow) {
    var str = '';
    var min = Math.floor(val / 60);
    var sec = val - min * 60;
    if (sec > 0) {
        str = (sec >= 10 ? sec : ('0' + sec)) + (lang == 'en' ? '' : '秒');
    } else {
        str = '';
    }
    var hour = Math.floor(min / 60);
    min = min - hour * 60;
    if (min > 0 || allShow) str = (min >= 10 ? min : ('0' + min)) + (lang == 'en' ? ':' : '分') + str;
    if (hour > 0 || allShow) str = (hour >= 10 ? hour : ('0' + hour)) + (lang == 'en' ? ':' : '小时') + str;
    return str;

}

function covertHmlToText(str) {
    return $.lang.encodeHtml(str);
}

function covertTextToHtml(str) {
    return $.lang.decodeHtml(str);
}

function sortArrayByNumber(arr, field, order) {
    if (isNaN(order)) order = 1;
    arr.sort(function(value1, value2){
        if(value1[field] > value2[field]){
            return order * -1;
        } else if(value1[field] < value2[field]){
            return order * 1;
        } else{
            return 0;
        }
    } );
}

function randomBetween(min, max, intOnly) {
    var rand = Math.random() * (max - min);
    if (intOnly) rand = Math.round(rand);
    return min + rand;
}

function randomString(len, sep) {
    var parts = [
        [ 48, 57 ], //0-9
        [ 65, 90 ], //A-Z
        [ 97, 122 ]  //a-z
    ];

    var pwd = "";
    for (var i = 0; i < len; i++)
    {
        var part = parts[Math.floor(Math.random() * parts.length)];
        //trace(part[0], part[1], Math.floor(Math.random() * (part[1] - part[0])));
        var code = part[0] + Math.floor(Math.random() * (part[1] - part[0]));
        var c = String.fromCharCode(code);
        pwd += c;
        if (sep && i < len - 1) {
            pwd += sep;
        }
    }
    return pwd;
}

function randomNumber(len) {
    var parts = [
        [ 48, 57 ] //0-9
    ];

    var pwd = "";
    for (var i = 0; i < len; i++)
    {
        var part = parts[0];
        //trace(part[0], part[1], Math.floor(Math.random() * (part[1] - part[0])));
        var code = part[0] + Math.floor(Math.random() * (part[1] - part[0]));
        var c = String.fromCharCode(code);
        pwd += c;
    }
    return pwd;
}

function getStageWidth() {
    if (isIE && IE_VER <= 8) {
        return document.documentElement.clientWidth;
    }
    var w = window.innerWidth;
    if (isNaN(w)) w = document.documentElement.scrollWidth;
    return w;
}

function getStageHeight() {
    if (isIE && IE_VER <= 8) {
        return document.documentElement.clientHeight;
    }
    var h = window.innerHeight;
    if (isNaN(h)) h = document.documentElement.scrollHeight;
    return h;
}

function getScrollbarWidth() {
    var oP = document.createElement('p'),
        styles = {
            width: '100px',
            height: '100px',
            overflowY: 'scroll'
        }, i, scrollbarWidth;
    for (i in styles) oP.style[i] = styles[i];
    document.body.appendChild(oP);
    scrollbarWidth = oP.offsetWidth - oP.clientWidth;
    oP.remove();
    return scrollbarWidth;
}

function goPage(url, args) {
    if (args) {
        var temp = [];
        for (var key in args) {
            temp.push(key + "=" + args[key]);
        }
        if (temp.length > 0) {
            url += (url.indexOf("?") > 0 ? "&" : "?") + temp.join('&');
        }
    }
    window.location.href = url;
}

function newPage(url) {
    url = url || '/';
    window.open(url);
}

var deg2rad = function (deg) {
    return deg * (Math.PI / 180)
}

function getDistanceInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

var LOGIN_STATE_EXPIRE_TIME = 1;  //day

function wrapperOSS(filename, w, h, type) {
    var domain = window.OSS_PUBLIC_DOMAIN;
    if (type == 'private') domain = window.OSS_PRIVATE_DOMAIN;
    var url = domain + '/' + filename;
    if (w || h) {
        url += '?imageView2/2';
        if (w) url += '/w/' + w;
        if (h) url += '/h/' + h;
    }
    return url;
}

function $login(sess) {
    //$setCookie('userid', sess.userid, LOGIN_STATE_EXPIRE_TIME);
    //$setCookie('token', sess.token, LOGIN_STATE_EXPIRE_TIME);
    //$setCookie('tokentimestamp', sess.tokentimestamp, LOGIN_STATE_EXPIRE_TIME);
}

function $cleanUserSession() {
    //$delCookie('userid');
    //$delCookie('token');
    //$delCookie('tokentimestamp');
}

function $getCookie(key) {
    var opt = { };
    if (window.COOKIE_PATH) opt.path = window.COOKIE_PATH;
    return $.cookie(key, undefined, opt);
}

function $setCookie(key, val, expire) {
    var opt = { };
    if (window.COOKIE_PATH) opt.path = window.COOKIE_PATH;
    if (Number(expire) > 0) {
        opt.expires = expire;
    }
    $.cookie(key, val, opt);
}

function $delCookie(key) {
    var opt = { };
    if (window.COOKIE_PATH) opt.path = window.COOKIE_PATH;
    $.removeCookie(key, opt);
}

function $callAPILazy(method, data, onSuccess, onError, showLoading) {
    if (showLoading && window.$callAPILoading) {
        window.$callAPILoading(true);
    }
    setTimeout(function() {
        $callAPI(method, data, onSuccess, onError, showLoading);
    }, 300 + Math.random() * 700);
}

function $callAPIStack(reqs, onSuccess, onError, showLoading, errorStop) {
    var CODE;
    var MSG;

    if (showLoading && window.$callAPILoading) {
        window.$callAPILoading(true);
    }

    var doNext = function() {
        if (reqs.length == 0) {
            if (CODE > 1) {
                if (onError) onError(CODE, MSG);
            } else {
                if (onSuccess) onSuccess();
            }

            if (showLoading && window.$callAPILoading) {
                window.$callAPILoading(false);
            }
        } else {
            var workingReq = reqs.shift();
            if (!workingReq[1]) workingReq[1] = {};
            $callAPI(workingReq[0], workingReq[1], function(data) {
                if (workingReq[2]) workingReq[2](data);
                doNext();
            }, function(code, msg) {
                CODE = code;
                MSG = msg;
                if (workingReq[3]) workingReq[3](code, msg);
                if (!errorStop) doNext();
            });
        }
    }
    doNext();
}

function $callAPI(method, data, onSuccess, onError, showLoading) {
    trace('>> request send ==> ' + method);
    if (showLoading && window.$callAPILoading) {
        window.$callAPILoading(true);
        trace('show loading...');
    }

    if (!data) data = {};
    for (var key in data) {
        if (typeof data[key] == 'object') {
            data[key] = JSON.stringify(data[key]);
        }
    }

    var params = {};
    params.method = method;
    params.data = data;
    $.ajax({
        type: "post",
        url: API_GATEWAY,
        dataType: "json",
        data: params,
        success: function (data, status, xhr) {
            if (data.code == 1) {
                if (onSuccess) {
                    onSuccess(data.data);
                }
            } else {
                var err = 'API调用错误 ==> [' + data.code + '] - ' + data.msg;
                trace(err);
                if (data.code < 1000) {
                    if (window.__callAPIFatalError) {
                        window.__callAPIFatalError(err);
                    }
                } else {
                    if (onError && typeof onError == 'function') {
                        onError(data.code, data.msg);
                    } else if (window.__callAPIError) {
                        window.__callAPIError(err);
                    }
                }
            }

            if (showLoading && window.$callAPILoading) {
                window.$callAPILoading(false);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            trace('API调用错误 ==> status: ' + textStatus + '      error: ' + errorThrown);

            if (onError && typeof onError == 'function') {
                var flag = onError(-1, 'network connection error');
                if (flag != true && window.__callAPIFatalError) {
                    window.__callAPIFatalError('API调用错误 ==> status: ' + textStatus + '      error: ' + errorThrown);
                }
            }

            if (showLoading && window.$callAPILoading) {
                window.$callAPILoading(false);
            }
        }
    });
}

function $generateDownloadToken(key, callBack) {
    $callAPI('system.generateDownloadToken', { domain:OSS_PRIVATE_DOMAIN, key:key }, function(data) {
        callBack(data.url);
    });
}

function $elemntRect(ele, key) {
    return parseInt(ele.css(key).replace('px', ''));
}

var $preinitedCallBackStack = [];
var $initedCallBackStack = [];

$(function() {
    $preinitedCallBackStack.forEach(function(obj) {
        if (obj.func) {
            obj.func.apply(this, ( obj.args ? obj.args : [] ));
        }
    });
    if (window['$inited'] != null && window['$inited'] != undefined) {
        window['$inited']();
    }
    $initedCallBackStack.forEach(function(obj) {
        if (obj.func) {
            obj.func.apply(this, ( obj.args ? obj.args : [] ));
        }
    });
});