/* eslint-disable */
/**
 * @FILE：utils.js
 * @AUTHOR: 46425
 * @EMAIL: wang_xin17@dahuatech.com
 * @TIME: CREATE ON 2019/4/25 13:47
 * @DESCRIPTION: 工具类 v1.0.0
 */


/**
 * 全局注册的方法
 * Date() => formateDate()
 * */

/**
 * 方法注册
 * */
const Utils = {
    trim,
    lstrim,
    rstrim,
    fixIdNum,
    fixNum,
    fixIP,
    fixUrl,
    fixEmail,
    fixTel,
    getUrlParam,
    getRandomNum,
    getMax,
    getMin,
    getFormatData,
    getType,
    isArray,
    isNum,
    deepObjectMerge,
    throttle,
    debounce
}
/**
 * @method {trim} 删除字符串前后空格
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * @method {lstrim} 删除字符串前空格
 * @param {string} str
 * @returns {string}
 */
function lstrim(str) {
    return str.replace(/(^\s*)/g, '');
}

/**
 * @method {rstrim} 删除字符串后空格
 * @param {string} str
 * @returns {string}
 */
function rstrim(str) {
    return str.replace(/(\s*$)/g, '');
}

/**
 * @method {isEmptyData} 判空
 * @param {str} 参数名称
 * @returns {boolean}
 */
function isEmptyData(str) {
    let result = false;
    if (str == null || typeof (str) == 'undefined') {
        result = true
    } else {
        let reg = new RegExp("", "g");
        str += '';
        str = str.replace(reg, "");
        if (str.length == 0) {
            result = true
        }
    }
    return result
}

/**
 * @method {isArray} 是否为数组
 * @param {array} arr
 * @returns {boolean}
 */
function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr)
    } else {
        return Object.prototype.toString().call(arr) === '[object Array]';
    }
}
/**
 * @method {isNum} 判断是否为数字
 * @param {val} val
 * @returns {boolean}
 * @description 去除 ’‘ /’ ‘/ null 等 '= 0'情况 并用isNaN判断
 */

function isNum(val) {
    if (val === '' || val === null || val === ' ') return false;
    return !isNaN(val);
}


/**
 * @method {deepObjectMerge} 对象深度合并
 * @param {object} obj1, obj2
 * @returns {object}
 */
function deepObjectMerge (fObj, sObj) {
    for (var key in sObj) {
        fObj[key] = fObj[key] && fObj[key].toString() === '[object Object]' ? deepObjectMerge(fObj[key], sObj[key]): fObj[key] =sObj[key];
    }
    return fObj;
}
/**
 * @method {fixIdNum} 身份证验证
 * @param {string} str
 * @returns {boolean}
 * TODO reg待完善!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
function fixIdNum(str) {
    const reg = "^\d(18)$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {fixNum} 验证数字
 * @param {string} str
 * @returns {boolean}
 */
function fixNum(str) {
    const reg = "^\d*$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {fixIP} 验证IP地址
 * @param {string} str
 * @returns {boolean}
 */
function fixIP(str) {
    const reg = "^(25[0-5]|2[0-4]\\d|[1]\\d{2}|[1-9]\\d?)\\.(25[0-5]|2[0-4]\\d|[1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[1]\\d{2}|[1-9]?\\d)$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {fixUrl} 验证url地址
 * @param {type} 参数名称
 * @returns {boolean}
 */
function fixUrl(str) {
    const reg = "^((https|http|ftp|rtsp|mms)?://)"
        + "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {fixEmail} 验证邮箱
 * @param {str} str
 * @returns {boolean}
 */
function fixEmail(str) {
    const reg = "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {fixTel} 验证手机号
 * @param {string} str
 * @returns {boolean}
 */
function fixTel(str) {
    const reg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\d{8}$";
    let regExp = new RegExp(reg);
    return regExp.test(trim(str));
}

/**
 * @method {getType} 获取数据类型
 * @param {object} object
 * @returns {type}
 */
function getType(object) {
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
 * @method {getUrlParam} 获取url参数
 * @returns {Object}
 */
function getUrlParam() {
    const paramString = location.search.substr(1);
    let urlParams = {};
    const paramArray = paramString.split("&");
    for (var i = 0; i < paramArray.length; i++) {
        var p = paramArray[i].split("=");
        urlParams[p[0]] = p[1];
    }
    return urlParams;
}

/**
 * @method {getRandomNum} 生成制定位数随机串码
 * @param {number} num
 * @returns {string}
 */
function getRandomNum(num) {
    let arr = [];
    let str = '';
    for (let i = 0; i < num; i++) {
        arr.push(parseInt(Math.random() * 10, 10))
    }
    str = arr.join('')
    return trim(str);
}

/**
 * @method {getMax} 获取最大数
 * @param {array} arr 比较的数据数组
 * @returns {number}
 */
function getMax(arr) {
    if (!arr.length) return false;
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return Math.max(arr[0], arr[1]);
    if (arr.length > 2) {
        let currentMax = arr[0], lastMax;
        for (let i = 0; i < arr.length; i++) {
            lastMax = Math.max(currentMax, arr[i]);
            currentMax = lastMax;
        }
        return currentMax
    }
}

/**
 * @method {getMin} 获取最小数
 * @param {array} arr 比较的数据数组
 * @returns {number}
 */
function getMin(arr) {
    if (!arr.length) return false;
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return Math.min(arr[0], arr[1]);
    if (arr.length > 2) {
        let currentMin = arr[0], lastMin;
        for (let i = 0; i < arr.length; i++) {
            lastMin = Math.min(currentMin, arr[i]);
            currentMin = lastMin;
        }
        return currentMin
    }
}

/**
 * @method {getFormatData} 格式化数据
 * @param {string | Object} 参数名称
 * @returns {type} object
 * TODO 未处理typeof向下兼容
 */
function getFormatData(param) {
    if (typeof param === 'string') {
        param = JSON.parse(param)
    } else {
        param = JSON.parse(JSON.stringify(param))
    }
    return param
}


/**
 * @method {name} 字符串/数字 to 格式化数字字符串
 * @param {number | string} val
 * @param {number} divisor 需要格式的位数
 * @param {string} symbol 插入的字符
 * @returns {string} 格式化的字符串
 * @description 100,000,000,000 只支持数字传递 不支持其他
 */
function strOrNum2numStr (val, divisor, symbol) {
    let reg = /^[0-9]*$/,
        str = String(val), // 数字转为字符串
        fStr = '', // 余下的str
        lStr = '', // 可以除尽的字符串
        valArr =[],
        remainder = 0;


    if (!isNum(val)) return false;
    if (!reg.test(val)) return false;


    remainder = str.length % divisor;
    fStr = str.substring(0, remainder);
    lStr = str.substring(remainder);
    valArr = lStr.split('');
    for (let i = 0; i < valArr.length ; i += (divisor + 1)) {
        valArr.splice(i, 0 , symbol)
    }
    lStr = valArr.join('')
    if (fStr === '') lStr = lStr.substring(1) // 整除处理,排除最初的symbol
    str = fStr + lStr
    return str
}

/**
 * @method {formatDate} 格式化日期
 * @param {date} 参数名称
 * @returns {date}
 * @description Date() 对象拓展
 *  new Date().formatDate('yyyy-mm-dd HH:mm:ss')
 *  new Date().formatDate('yyyy-mm-dd')
 *  new Date().formateDate('yyyy-m-d h:m:s.S‘)
 */
Date.prototype.formatDate = function (fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}


/**
 * debouncing, executes the function if there was no new event in $wait milliseconds
 * @param func
 * @param wait
 * @param scope
 * @returns {Function}
 */
function debounce(func, wait, scope) {
    var timeout;
    return function () {
        var context = scope || this,
            args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流
 * @param {Function} fn 执行函数
 * @param {Number} threshhold 截留时间
 * @param {} scope 上下文
 * @returns {Function}
 */

function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
        var context = scope || this;
        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

export default Utils
