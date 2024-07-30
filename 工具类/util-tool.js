/**
 *
 @ fileOverview utils通用工具库
 *
 * @module util
 * @author 陈伯禹(112298)
 * @version 1.1.0
 *
 */

import time_utils from './utils-time';
/**
 * 获取url请求参数
 *
 * @method getQueryParam
 * @param {Boolean} noDecode 是否要URI进行解码
 * @example
 * 如:本地地址为
 * https://www.baidu.com/s?ie=utf-8&wd=http%3A%2F%2F
 * var params = getQueryParam();
 * params 为 {
 *     wd:"http://",
 *     ie:"utf-8"
 * }
 * 当参数为true是代表不对参数decode
 * var params = getQueryParam(true);
 * params 为 {
 *     wd:"http://",
 *     ie:"utf-8"
 * }
 * @return {Object} urlParams 处理后url的键值对对象
 */
function getQueryParam(noDecode) {
    let urlParams = {};
    let paramString = location.search.substr(1);
    paramString = noDecode?paramString:decodeURIComponent(paramString);
    let paramArray = paramString.split("&");
    paramArray.forEach(ele=>{
        let i= ele.indexOf('=')
        let key=ele.substr(0,i)
        let value=ele.substr(i+1)
        if(key){
            urlParams[key]=value
        }
    })

    return urlParams;
}


/**
 *
 *map转化为对象(键位字符串)
 *
 * @method strMapToObj
 * @param {Map} strMap 待转换的Map
 * @example
 * var b = {}；
 * var c = {}；
 * var d = [];
 * var e = 1;
 * var a = new Map([[b,'bb'],[c,'cc'],[d,'dd'],[e,'ee']]);
 * var res = strMapToObj(a)
 * res 为 {
 *   "":"dd",
 *   1:"ee",
 *   [object Object]:"cc"
 * }
 * 注:应当使用字符串为key的map
 * @returns {Object} obj 转换结果对象
 */
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

/**
 *
 *对象转map
 *
 * @method objToStrMap
 * @param {Object} obj 待转换的Object
 * @example
 * var b = {
 *     'aa':'aa',
 *     'bb':'bb'
 * }
 * var res = objToStrMap(b)
 * res为
 * Map(2) {"aa" => "aa", "bb" => "bb"}
 * @returns {Map} strMap 转换结果
 */
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

/**
 * 判定数据类型(根据Object.toSring来判断是否类型)
 * 注:当为Element的实例时，类型判断为element
 *
 * @method type
 * @param {any} object 传入的数据类型
 * @example
 * 具体对应关系:
 * '[object Number]': 'number',
 * '[object String]': 'string',
 * '[object Boolean]': 'boolean',
 * '[object Object]': 'object',
 * '[object Array]': 'array',
 * '[object RegExp]': 'regExp',
 * '[object Function]': 'function',
 * '[object Promise]': 'promise 高频手写',
 * '[object GeneratorFunction]': 'generatorFunction',
 * '[object Null]': 'null',
 *
 * var a = {}
 * type(a) 为 'object';
 * var b = []
 * type(a) 为 'array';
 * @returns {string} 数据类型，均为小写
 */
function type(object) {
    // IE9下调用toString.call(undefined)报错
    if (typeof object === 'undefined') {
        return 'undefined'
    }
    let map = {
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Boolean]': 'boolean',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object RegExp]': 'regExp',
        '[object Function]': 'function',
        '[object Promise]': 'promise',
        '[object GeneratorFunction]': 'generatorFunction',
        '[object Null]': 'null',
    }
    let typeString = ''
    if (object instanceof Element) {
        typeString = 'element'
    } else {
        typeString = map[Object.prototype.toString.call(object)]
    }
    return typeString
}

/**
 * 判定两个对象是否相等（所有键和键值都一致，非对象直接return）
 * @method compareObject
 * @param {object} object1 需要比较的对象
 * @param {object} object2 需要比较的对象
 * @example
 * var a= {'aa':'aa'}
 * var b= {'aa':'aa'}
 * var c= {'bb':'aa'}
 * compareObject(1,a)
 * err => Please enter object params.
 * compareObject(a,c)
 * 返回false
 * compareObject(a,b)
 * 返回true
 * @returns {boolean} 是否相等
 */
function compareObject(object1, object2) {
    if (type(object1) !== 'object' || type(object2) !== 'object') {
        console.error('Please enter object params.');
        return
    }

    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
        return false
    }

    for (let i = 0; i < keys1.length; i++) {
        if (object1[keys1[i]] !== object2[keys1[i]]) {
            return false
        }
    }

    return true
}

/**
 * 转换成对象:如果传入的是JSON则转成对象，如果是非JSON，则直接返回
 *
 * @method toObject
 * @param {object | string} data 传入的对象
 * @example
 * var a = "{‘aa’:'aa'}"
 * toObject(a)
 * 返回值为 {‘aa’:'aa'}
 * toObject(null)
 * 返回值为 null
 * @returns {Object} 转后的对象
 */
function toObject(data={}) {
    let newData = {}

    try {
        newData = JSON.parse(data)
    } catch (e) {
        newData = data
    }

    return newData
}

/**
 * 设置sessionstorage（key为非字符，会报错,value为对象时会先JSON.stringify转为string）
 *
 * @method setSessionStorage
 * @param {string} key 保存的key
 * @param {string|object} value 保存的值
 * @example
 * var a = {‘aa’:'aa'}
 * setSessionStorage('aaa',a)
 * session设置了aaa为"{‘aa’:'aa'}"
 */
function setSessionStorage(key, value) {
    if (typeof key !== 'string' && key !== '') {
        console.error('Please set a key for storage.')
        return
    }

    if (typeof value !== 'string' && typeof value !== 'object') {
        console.error('Please set a value for string or object.')
        return
    }

    if (typeof value === 'string') {
        sessionStorage.setItem(key, value)
    } else {
        try {
            sessionStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.error('Please set a correct object for value.')
            return
        }
    }
}

/**
 * 获取sessionstorage（key为非字符，会报错）
 *
 * @method getSessionStorage
 * @param {string} key 获取的key
 * @example
 * var a = getSessionStorage('aaa')
 * @returns {Any} object存的值
 */
function getSessionStorage(key) {
    if (typeof key !== 'string' && key !== '') {
        console.error('Please set a key for storage.')
        return
    }

    let value = sessionStorage.getItem(key)
    let object = null

    // 防止Storage中不存在数据
    if (value === null || typeof value === 'undefined') {//可设置0或者空
        return object
    }

    // 避免数字位数过长丢失经度
    if (isNaN(Number(value))) {
        object = JSON.parse(value)
    } else {
        object = value
    }

    return object
}

/**
 * 移除对应key的localStorage（key为非字符，会报错）
 *
 * @method removeStorage
 * @param {string} key 移除的key
 * @example
 * removeStorage('aaa')
 * aaa被移除
 */
function removeStorage(key) {

    if (typeof key !== 'string' && key !== '') {
        console.error('Please set a key for storage.')
        return
    }

    window.localStorage.removeItem(key);
}

/**
 * 获取key的localStorage（key为非字符，会报错）
 *
 * @method getStorage
 * @param {string} key 获取的key
 * @example
 * var a = getStorage('aaa')
 * @returns {object} object 获取的值
 */
function getStorage(key) {

    if (typeof key !== 'string' && key !== '') {
        console.error('Please set a key for storage.')
        return
    }

    let value = localStorage.getItem(key)
    let object = null

    // 防止localStorage中不存在数据
    if (value === null || typeof value === 'undefined') {//可设置0或者空
        return object
    }

    try {
        // 避免数字位数过长丢失经度
        if (isNaN(Number(value))) {
            object = JSON.parse(value)
        } else {
            object = value
        }
    } catch (e) {
        object = value
    }

    return object

}


/**
 * 设置localstorage 暂时用于对象数组保存,后续请增加相应扩展（key为非字符,value为非对象，会报错）
 *
 * @method setStorage
 * @param {string} key 保存的key
 * @param {string|object} value 保存的值
 * @example
 * setStorage('aaa',{'aa':'aa'})
 */
function setStorage(key, value) {

    if (typeof key !== 'string' && key !== '') {
        console.error('Please set a key for storage.')
        return
    }

    if (typeof value !== 'string' && typeof value !== 'object') {
        console.error('Please set a value fro string or object.')
        return
    }

    if (typeof value === 'string') {
        localStorage.setItem(key, value)
    } else {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.error('Please set a correct object for value.')
            return
        }
    }
}

/**
 * 设置根节点的字体尺寸(fontsize),并返回数组
 * @method updateFontSize
 * @example
 * let a = updateFontSize()
 * a 为100.00
 * @returns{string} fontSize 返回当前fontsize
 */
function updateFontSize() {
    let availWidth = window.screen.width;
    if (!availWidth) {
        return 0;
    }
    availWidth = availWidth < 1920 ? 1920 :availWidth;
    let fontSize = parseFloat(100 / 1920 * availWidth, 10).toFixed(2);
    let root = document.documentElement || document.body;
    root.style.fontSize = fontSize + 'px';
    return fontSize;
}

/**
 * 设置body最小宽度（参数非数值无效）
 *
 * @method setBodyMinWidth
 * @param {Number|String} 要设置的大小
 * @example
 * setBodyMinWidth(100)
 */
function setBodyMinWidth(width) {
    if(isNaN(Number(width))){
        console.error('width should can turn to Number');
        return
    }
    document.getElementsByTagName("body")[0].setAttribute("style", "min-width:" + width + "px");
}

/**
 * 获取url中的语言参数(locale),默认为zh
 *
 * @method getLangVal
 * @example
 * var a = getLangVal()
 * a 为 'zh'
 * @returns {String} localLanguage url中的语言版本
 */
function getLangVal() {

    //获取URL传递的语言参数
    let urlParams = getUrlParam();
    let localLanguage = urlParams['locale'];

    if (!localLanguage) {
        localLanguage = "zh";
    } else if (localLanguage.indexOf('en') > -1) {
        localLanguage = "en";
    } else if (localLanguage.indexOf('zh') > -1) {
        localLanguage = "zh";
    } else {
        localLanguage = "en";
    }

    return localLanguage;
}

/**
 * 在每个url后面加上时间，防止缓存问题
 *
 * @method setUrlNowTime
 * @param  {String} url 要拼接时间戳的url
 * @example
 * var a= baidu.com
 * var b = setUrlNowTime(a)
 * b 为 baidu.com?nowTime=1585646830251
 * @returns {String} 拼接后的url
 */
function setUrlNowTime(url) {
    let newUrl = '';
    if (null === url || url === "") {
        return "";
    }
    if (url.indexOf('?') > 0) {
        newUrl = url + "&nowTime=" + new Date().getTime();
    } else {
        newUrl = url + "?nowTime=" + new Date().getTime();
    }
    return newUrl;
}

/**
 * 判断是不是ie8\9\10等低版本浏览器
 *
 * @method isIELowVersion
 * @example
 * chorme下:
 * var a= isIELowVersion();
 * a 为 false
 * @returns {boolean} 是否是IE
 */
function isIELowVersion() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        if (navigator && navigator.appName === "Microsoft Internet Explorer" &&
            (navigator.appVersion.match(/8./i) || navigator.appVersion.match(/9./i) || navigator.appVersion.match(/10./i))) {
            return true;
        }
    }
    return false;
}

/**
 * 判断是不是ie11浏览器
 *
 * @method isIE11
 * @example
 * var a= isIE11();
 * chorme下:
 * a 为 false
 * ie11下:
 * var a= isIE11();
 * a 为 true
 * @returns {boolean} 是否是IE11
 */
function isIE11() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        if (navigator && navigator.appVersion.match(/11./i)) {
            return true;
        }
    }
    return false;
}

/**
 * Set转换为Array(都是在z-tree中使用)
 *
 * @method setToArray
 * @param {Set} set
 * @example
 * var a = new Set(['11','22',{},'11',[]])
 * var res = setToArray(a)
 * res 为  ["11", "22", {…}, Array(0)]
 * @returns {Array}
 */
function setToArray(set) {
    let arr = new Array();
    if (set && set.size > 0) {
        for (let ele of set) {
            arr.push(ele);
        }
    }
    return arr;
}

/**
 * Map转换为Array(都是在z-tree中使用)
 *
 * @method mapToArray
 * @param {Map} map
 * @example
 * var c = {}；
 * var d = [];
 * var e = 1;
 * var a = new Map([['b','bb'],[c,'cc'],[d,'dd'],[e,'ee']]);
 * var res = mapToArray(a)
 * res 为  ["bb", "cc", "dd", "ee"]
 * @returns {Array}
 */
function mapToArray(map) {
    let arr = new Array();
    if (map && map.size > 0) {
        for (let ele of map.values()) {
            arr.push(ele);
        }
    }

    return arr;
}

/**
 * 获取对应key的cookie值
 *
 * @method getCookie
 * @param {String} cookie_key 获取cookie的key值
 * @param {Boolean} isParent 是否获取当前窗口的父窗口的Cookie
 * @example
 * var a = getCookie('key');
 * 获取Cookie的值
 *
 * var a = getCookie('key'，true);
 * 获取当前窗口的父窗口的Cookie的值
 * @returns {String} 获取对应的value，默认为空字符
 */
function getCookie (cookie_key, isParent) {
    let cookie = isParent ? parent.document.cookie : document.cookie;
    if (cookie.length > 0) {
        let cookie_start = cookie.indexOf(cookie_key + "=");
        if (cookie_start !== -1) {
            cookie_start = cookie_start + cookie_key.length + 1;
            let cookie_end = cookie.indexOf(";", cookie_start);
            if (cookie_end === -1) {
                cookie_end = cookie.length;
            }
            return decodeURIComponent(cookie.substring(cookie_start, cookie_end));
        }
    }

    return "";
}

/**
 * 设置cookie
 *
 * @method setCookie
 * @param {String} cookie_key
 * @param {String} cookie_value
 * @param {Number} cookie_expire 过期时长（分钟）,非必填
 * @example
 * var a = setCookie('key','haha');
 * 设置Cookie的值,不包含过期时长
 *
 * var a = setCookie('key','haha'，30);
 * 设置Cookie的值,包含过期时长（30分钟）
 */
function setCookie (cookie_key, cookie_value, cookie_expire) {
    if(cookie_expire){
        document.cookie = cookie_key + "=" + encodeURIComponent(cookie_value)+';expires=' + new Date(new Date().getTime() + cookie_expire * 60 * 1000).toGMTString();
    } else{
        document.cookie = cookie_key + "=" + encodeURIComponent(cookie_value);
    }
}

/**
 * 转十进制字符串数组为64位编码字符串(1代表最后一个为0,2代表倒数第二为零，以此类推)
 * @method encode64
 * @param {Array} targetArray 要转换的十进制字符串数组
 * @example
 * encode64(1) = 0000000000000000000000000000000000000000000000000000000000000001;
 * encode64(2) = 0000000000000000000000000000000000000000000000000000000000000010;
 * encode64(3) = 0000000000000000000000000000000000000000000000000000000000000100;
 * encode64(4) = 0000000000000000000000000000000000000000000000000000000000001000;
 *
 * @returns {Array} 转换后的数组
 */
function encode64(targetArray) {
    const totalSize = 64

    let result = []
    for (let i = 0; i < 64; i++) {
        result[i] = '0'
    }

    targetArray.forEach((item) => {
        result[totalSize - Number(item)] = '1'
    })

    return result.join('')
}

/**
 * 判断当前的浏览器是否满足版本需求
 *
 * @method getBrowserInfo
 * @param {Number} vie 需要的ie最低版本，不支持则为0
 * @param {Number} vchrome 需要的chrome最低版本，不支持则为0
 * @param {Number} vff 需要的firefox最低版本，不支持则为0
 * @example
 * getBrowserInfo(30,10)   谷歌版本大于30时返回true
 * getBrowserInfo(0,10)    谷歌版本时返回false
 * getBrowserInfo(30,30)    谷歌版本大于30,或者火狐版本大于30时返回true
 * @returns {Boolean}
 */
function getBrowserInfo(vchrome, vff, vie) {
    const agent = navigator.userAgent.toLowerCase();
    const regStr_ie = /msie [\d.]+/gi;
    const regStr_ff = /firefox\/[\d.]+/gi;
    const regStr_chrome = /chrome\/[\d.]+/gi;
    // const regStr_safari = /safari\/[\d.]+/gi;
    let stutus = false;
    let str = '';
    if (agent.indexOf('msie') > 0 && vie) {
        str = (agent.match(regStr_ie)+ '').replace(/[^0-9.]/ig, '');
        stutus = str.split('.')[0] - vie >= 0 ? true : false;
    }

    if ((!!window.ActiveXObject || "ActiveXObject" in window) && agent.indexOf('msie') < 0){
        stutus = true;
    }

    if(agent.indexOf('chrome') > 0 && vchrome) {
        str = (agent.match(regStr_chrome) + '').replace(/[^0-9.]/ig, '');
        stutus = str.split('.')[0] - vchrome >= 0 ? true : false;
    }

    if (agent.indexOf('firefox') > 0 && vff) {
        str = (agent.match(regStr_ff)+ '').replace(/[^0-9.]/ig, '');
        stutus = str.split('.')[0] - vff >= 0 ? true : false;
    }
    return stutus;
}

/**
 * 深度克隆对象，不支持对象内方法的克隆(JSON.parse(JSON.stringify()))
 *
 * @method deepClone
 * @param {Object|any} source 待拷贝对象
 * @example
 * var a = {}
 * var b = deepClone(a)
 * a===b 为false
 * @returns {Object}
 */
function deepClone(source){
    return JSON.parse(JSON.stringify(source));
}

/**
 * 将rem值转换为px值（带单位的也将返回带单位的字符串）
 *
 * @method remToPx
 * @param {Number|string} remVal rem值
 * @example
 * remToPx('10rem')
 * "1000px"
 * remToPx('10px')
 * "10px"
 * remToPx(10)
 * 1000
 * remToPx('10')
 * 1000
 * @returns {Number|string} px值
 */
function remToPx(remVal) {
    let fontSize = parseInt(window.getComputedStyle(document.documentElement)["fontSize"], 10);
    if(typeof remVal === 'string' && remVal.indexOf('rem') > -1){
        return parseFloat(remVal) * fontSize + 'px';
    }

    if(typeof remVal === 'string' && remVal.indexOf('px') > -1){
        return remVal;
    }
    return remVal * fontSize;
}

/**
 * 将px值转换为rem值（带单位的也将返回带单位的字符串）
 *
 * @method pxToRem
 * @param {Number} pxVal px值
 * @example
 * pxToRem('10px')
 * "0.1rem"
 * pxToRem('10rem')
 * "10rem"
 * pxToRem('10')
 * 0.1
 * pxToRem(10)
 * 0.1
 * @returns {Number} rem值
 */
function pxToRem(pxVal) {
    let fontSize = parseInt(window.getComputedStyle(document.documentElement)["fontSize"], 10);
    if(typeof pxVal === 'string' && pxVal.indexOf('px') > -1){
        return parseInt(pxVal, 10) / fontSize + 'rem';
    }

    if(typeof pxVal === 'string' && pxVal.indexOf('rem') > -1){
        return pxVal;
    }
    return pxVal / fontSize;
}

/**
 * 随机生成字符串，长度为len
 *
 * @method randomStr
 * @param {Number} len
 * @example
 * randomStr(10)
 * "lZnlr1dkJo"
 * @returns {string}
 */
function randomStr(len) {
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let arr = [];
    let length = Number(len);
    if(length){
        for (let i = 0; i < length; i++) {
            let r = Math.floor(Math.random() * char.length);
            arr.push(char[r]);
        }
    }
    return arr.join('');
}

/**
 * 判断类包含
 *
 * @method hasClass
 * @param {element} el
 * @param {string} cls
 * @example
 * var a = document.querySelector('.search-more')
 * hasClass(a,'search-more')
 * 上例为true
 *
 * @returns {boolean}
 */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1){
        console.error('className should not contain space.')
        return
    };
    if (el.classList) {
        return el.classList.contains(cls);
    }
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;

}

/**
 * 增加类
 *
 * @method addClass
 * @param {element} el
 * @param {string} cls 可以为多个空格隔开
 * @example
 * var a = document.querySelector('.search-more')
 * addClass(a,'search-more1')
 * hasClass(a,'search-more1') => true
 */
function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}


/**
 * 删除类
 *
 * @method removeClass
 * @param {element} el
 * @param {string} cls
 *
 * @example
 * var a = document.querySelector('.search-more')
 * addClass(a,'search-more1')
 * hasClass(a,'search-more1') => true
 * removeClass(a,'search-more1')
 * hasClass(a,'search-more1') => false
 */
function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = String(curClass).trim();
    }
}


/**
 * 页面跳转
 *
 * @method location
 * @param {String} url 字符串
 *
 * @important 请注意与原生对象的区别!
 * @example
 * location('www.baidu.com')
 * 调整百度
 */
function location(url) {
    if(!url) {
        return;
    }
    location.href = url;
}

/**
 * 生成uuid
 *
 * @method uuid
 * @param {Number} len 设置返回uuid的长度
 * @param {Number} radix 随机取值的长度区间
 * @example
 * uuid('3',1)   000
 * uuid('3')     9ui
 * @returns {String} 生成的uuid
 */
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}


/**
 * 拼接url参数后需要拼接上的参数，返回字符串形如‘key1=11&key2=22’
 *
 * @method setUrlQuery
 * @param {Object} queryData 需要拼接的键值对
 * @param {Boolean} encode 是否编码
 * @example
 * var a= {key1: "key1", key2: "值", key3: "http://"}
 * setUrlQuery(a)          "key1=key1&key2=值&key3=http://"
 * setUrlQuery(a,true)     "key1=key1&key2=%E5%80%BC&key3=http%3A%2F%2F"
 * @returns {String}
 */

function setUrlQuery (queryData,encode) {
    if (type(queryData) !== 'object') {
        console.error('queryData should be a object.');
        return
    }
    var _str = "";
    for (var o in queryData) {
        //有key值无value时不添加
        var val = queryData[o];
        if (val==undefined || val==null) {
            continue;
        }
        if (encode) {
            val = encodeURIComponent(queryData[o])
        }
        _str += o + "=" + val + "&";
    }
    var _str = _str.substring(0, _str.length - 1);
    return _str;
}

/**
 * 分割数组(将数组以指定长度分割成二维数组)
 *
 * @method arrayChunks
 * @param {Array} str 要倒序的字符串
 * @param {Number} size 分割的长度
 * @example
 * var a = [1,2,3,4,5,6,7,8,9,0]
 * arrayChunks(a,3)
 * 返回值如下:
 * [[1,2,3],[4,5,6],[7,8,9],[0]]
 * @returns {Array} 倒序的字符串
 */
function arrayChunks(array, size) {
    if (!array || !size) {
        return;
    }
    var array2 = [];
    for (var i = 0; i < array.length; i = i + size) {
        array2.push(array.slice(i, i + size));
    }

    return array2;
}


/**
 * 获取本机ip
 *
 * @method getUserIP
 * @example
 * getUserIP().then((res)=>{console.log('res=========-',res)})
 * res=========- 10.33.69.25
 * @returns {Promise}
 */
function getUserIP(){
    return new Promise(function(resolve) {
        const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        const pc = new PeerConnection({ iceServers: [] });
        const noop = function() {console.log('获取本机ip')};
        const localIPs = {};
        const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
        function iterateIP(ip) {
            // 获取到ip
            if (!localIPs[ip]) resolve(ip);
            localIPs[ip] = true;
        }

        pc.createDataChannel("");

        pc.createOffer().then((sdp)=> {
            sdp.sdp.split('\n').forEach((line)=> {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });

            pc.setLocalDescription(sdp, noop, noop);
        }).catch((reason)=>{ console.log(reason) });

        pc.onicecandidate = function(ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
    });

}

/**
 * 节流
 *
 * @method throttle
 * @param {Function} callback 回调
 * @param {String} time_ms 时间毫秒数
 * @example
 * var a = function(){console.log('123')}
 * var b = throttle(a,1000)
 * window.addEventListener('scroll',b)
 * 一直滚动时每个一秒打印一次
 *
 * @returns {Function} 触发函数
 */
function throttle (callback, time_ms) {
    let lastTime = null
    let timeOut
    let arg
    return function () {
        arg = arguments
        let context = this
        let now = new Date()

        if (now - lastTime - time_ms > 0) {
            if (timeOut)  {
                clearTimeout(timeOut)
                timeOut = null
            }

            callback.apply(context, arguments)
            lastTime = now
        } else if (!timeOut) {
            timeOut = setTimeout(() => {
                callback.apply(context, arg)
            }, time_ms)
        }
    }
}

/**
 * 输入框查询内容特殊字符转义
 *
 * @method escapeStr
 * @param {String} str 时间毫秒数
 * @example
 * 转义下面的字符
 * '&': '&amp;',
 * '<': '&lt;',
 * '>': '&gt;',
 * "'": '&#39;',
 * '"': '&quot;',
 *
 * escapeStr('<>&')
 * "&lt;&gt;&amp;"
 * @returns {Function} 触发函数
 */
function escapeStr(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
    }[tag] || tag));
}

/**
 * 统计字符串中出现次数最多的字符的次数
 *
 * @method strRepeatCount
 * @param {string} string 需要统计的字符串
 * @example
 * strRepeatCount('aaac')  3
 * @returns {Number} 出现次数
 */

function strRepeatCount(string) {
    var maxLength = 0;
    var oldStr = "";
    var getStr = "";
    var str = string;
    while (str !== "") {
        oldStr = str;
        getStr = str.charAt(0);
        str = str.replace(new RegExp(getStr, "g"), "");
        if (oldStr.length - str.length > maxLength) {
            maxLength = oldStr.length - str.length;
        }
    }
    return maxLength;
}


/**
 * 下载流接口
 *
 * @method fileDownload
 * @param {blob} blob  文件流
 * @param {String} filename 文件名
 * @example
 *  axios({
 *     url: 'ic/dossier/file/download/template',
 *     method:'GET',
 *     responseType: 'arraybuffer'
 * }).then(res =>{
 *     //Blob 对象，包含属性size和type
 *     const blob = res.data;
 *
 *     //根据需要要自己修改blob的类型
 *     const blob = new Blob([res.data], {type: 'application/vnd.ms-excel'});
 *    //filename
 *     var contentDisposition = res.headers['content-disposition'];
 *    var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
 *    var result = patt.exec(contentDisposition);
 *    var filename = result[1];
 *    this.fileDownload(blob, filename)
 * })
 */



function fileDownload(blob, filename) {
    //新建FileReader对象，读取文件内容
    const reader = new FileReader();
    //读取文件，获取DataURL;参数应该是一个二进制格式(图片或者其它可以嵌入到文档的类型)
    //使用readAsDataURL会返回一个url,这个值就保存在事件对象的result里,img通过加载这个地址,完成图片的加载
    reader.readAsDataURL(blob);
    //文件读取成功完成时触发
    reader.onload = (e) => {
        const a = document.createElement('a');
        var reg = /^["](.*)["]$/g;
        a.download = decodeURI(filename.replace(reg,"$1")); //下载后文件名

        a.href = dataURIToBlob(e.target.result);//由于数据量太大导致chrome导出出现网络错误（由于url长度限制）
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
}

//生成base64 长度太大 ,达到了a标签的href 上限，所以报错下载失败
// 解决办法:将base64 dataURI转换为Blob 文件对象
function dataURIToBlob(dataURI) {
    //解码使用 base-64 编码的字符串
    var binStr = atob(dataURI.split(',')[1]),
        len = binStr.length,
        //8 位无符号整数值的类型化数组
        arr = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
        //返回指定位置的字符的 Unicode 编码,返回值是 0 - 65535 之间的整数
        arr[i] = binStr.charCodeAt(i);
    }
    //blob 存储着大量的二进制数据
    let blobRes = new Blob([arr],{type: "application/octet-stream"});
    //结果中包含一个对象的URL，该URL可用于指定源object(blobRes)的内容
    //源object用于创建 URL 的 File 对象、Blob 对象或者 MediaSource 对象
    return URL.createObjectURL(blobRes)
}

let expDefaultObj = {
    getQueryParam,
    getUrlParam:getQueryParam,
    type,
    toObject,
    compareObject,
    setSessionStorage,
    getSessionStorage,
    removeStorage,
    getStorage,
    setStorage,
    getCookie,
    setCookie,
    updateFontSize,
    setBodyMinWidth,
    getLangVal,
    setUrlNowTime,
    getBrowserInfo,
    isIELowVersion,
    isIE11,
    setToArray,
    mapToArray,
    encode64,
    deepClone,
    remToPx,
    pxToRem,
    randomStr,
    hasClass,
    addClass,
    removeClass,
    location,
    uuid,
    setUrlQuery,
    arrayChunks,
    getUserIP,
    escapeStr,
    throttle,
    strRepeatCount,
    fileDownload,
    ...time_utils
};

export * from './utils-time';
export {
    getQueryParam,
    type,
    toObject,
    compareObject,
    setSessionStorage,
    getSessionStorage,
    removeStorage,
    getStorage,
    setStorage,
    getCookie,
    setCookie,
    updateFontSize,
    setBodyMinWidth,
    getLangVal,
    setUrlNowTime,
    getBrowserInfo,
    isIELowVersion,
    isIE11,
    setToArray,
    mapToArray,
    encode64,
    deepClone,
    remToPx,
    pxToRem,
    randomStr,
    hasClass,
    addClass,
    removeClass,
    location,
    uuid,
    setUrlQuery,
    arrayChunks,
    getUserIP,
    escapeStr,
    throttle,
    strRepeatCount,
    fileDownload,
};
export default expDefaultObj;

