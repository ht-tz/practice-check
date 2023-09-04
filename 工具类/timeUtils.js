/**
 *
 @ fileOverview utils通用工具库
 *
 * @module time
 * @author 陈伯禹(112298)
 * @version 1.1.0
 *
 */

const REG = {
    TIME: /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    DATE: /^\d{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1]) ([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    DATE_M_D_Y: /^(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])-\d{4} ([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    DATE_Z: /^\d{4}(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])T([0-1][0-9]|2[0-3])[0-5][0-9][0-5][0-9]Z$/
}



/**
 * 根据传入的时间格式,格式化传入的时间（该方法也挂载在Date原型链上）注意时分秒为大写
 *
 * @method dateFormat
 * @param {DateObject} nowDate 时间对象
 * @param {string} format 需要转换的时间格式
 * @example
 * dateFormat(new Date())
 * "2020-04-13"
 * dateFormat(new Date(),'yyyy-mm-dd HH')
 * "2020-27-13 11"
 * dateFormat(new Date(),'yyyy-mm-dd HH:MM')
 * "2020-27-13 11:04"
 * dateFormat(new Date(),'yyyy-mm-dd HH:MM:ss SS  qq')
 * "2020-28-13 11:04:54 63  02"
 * @return {string} format 格式化后的时间字符串
 */
function  dateFormat(nowDate,format="yyyy-MM-dd") {
    var o = {
        "M+" : nowDate.getMonth() + 1,
        "d+" : nowDate.getDate(),
        "H+" : nowDate.getHours(),
        "m+" : nowDate.getMinutes(),
        "s+" : nowDate.getSeconds(),
        "q+" : Math.floor((nowDate.getMonth() + 3)/3),
        "S+" : nowDate.getMilliseconds()
    };

    if(/(y+)/.test(format))
    {
        format = format.replace(RegExp.$1,(nowDate.getFullYear()+"").substr(4-RegExp.$1.length));
    }

    if(/(S+)/.test(format))
    {
        format = format.replace(RegExp.$1,(nowDate.getMilliseconds()+"").substr(3-RegExp.$1.length));
    }

    for(var k in o)
    {
        if(new RegExp("(" +k + ")").test(format))
        {
            format = format.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:("00"+o[k]).substr((""+o[k]).length));
        }
    }
    return format;
}
Date.prototype.format = dateFormat;


/**
 * 月日时分秒补0函数
 *
 * @method addZero
 * @param {Number} time 是否要加0个参数
 * @example
 * addZero(1)  => 01
 * addZero(11)  => 11
 *
 * @return {Number|String} newTime 补0处理后的结果
 */
function addZero(time) {
    if(isNaN(time)){
        return time
    }
    let newTime = time > 9 ? time : '0' + time
    return newTime
}


/**
 * 获取当日时间区间 如[2019-10-10 00:00:00，2019-10-10 23:59:59]
 * @method startAndEndTime
 * @example
 * startAndEndTime()  => [2019-10-10 00:00:00，2019-10-10 23:59:59]
 *
 * @return {Array} 如[2019-10-10 00:00:00，2019-10-10 23:59:59]
 */
function startAndEndTime() {
    var date=toLocaleStringByMs(new Date()).substring(0,10)
    return  [date+' 00:00:00',date+' 23:59:59'];
}

/**
 * 校验时间格式是否形如 12:00:00，判断正则为/^\d{2}:\d{2}:\d{2}$/
 *
 * @method valifyTime
 * @param {string} time 时间格式，如 10:00:00
 * @example
 * valifyTime('aaa')   false
 * valifyTime('10:11:11')   true
 * valifyTime('99:99:99')   true
 * @return {Boolean} 是否
 */
function valifyTime(time) {
    const reg = /^\d{2}:\d{2}:\d{2}$/
    return reg.test(time)
}

/**
 * 判定两组时间序列是否存在重复（交叉或包含）
 *
 * @method isTimeContainTime
 * @param {array} time1Arr 时间范围，如 [10:00:00, 12:00:00]
 * @param {array} time2Arr 时间范围，如 [09:00:00, 23:00:00]
 * @example
 * 参数只能为两个数组且数组长度为2,各元素符合valifyTime校验
 * valifyTime([10:00:00, 12:00:00],[09:00:00, 23:00:00])   true
 * @return {Boolean} 是否
 */
function isTimeContainTime(time1Arr, time2Arr) {
    let timeArr
    let validate = true
    // 确保两组时间范围格式正确
    if (!Array.isArray(time1Arr) || !Array.isArray(time2Arr)) {
        console.error('Please enter two array.')
    }
    if (time1Arr.length !== 2 || time2Arr.length !== 2) {
        console.error('Please enter currect time.')
    }
    timeArr = [...time1Arr, ...time2Arr]
    for (let time of timeArr) {
        if (!valifyTime(time)) {
            console.error('Please enter currect time.')
        }
    }

    // 检验时间是否存在重复
    if (time2Arr[0] > time1Arr[0] && time2Arr[0] < time1Arr[1] ||
        time2Arr[1] > time1Arr[0] && time2Arr[1] < time1Arr[1]) {
        validate = false;
    }
    if (time1Arr[0] > time2Arr[0] && time1Arr[0] < time2Arr[1] ||
        time1Arr[1] > time2Arr[0] && time1Arr[1] < time2Arr[1]) {
        validate = false;
    }

    return validate
}

/**
 * 将时间转换为UTC时间字符串，支持格式 hh:mm:ss
 *
 * @method toISOStringByTime
 * @param {string} timeStr 源时间 如(10:30:30或者10:30)
 * @example
 * 当前为东八区
 * toISOStringByTime(07:00:00)
 * 返回值为{
 *     offset:-1,
 *     time:'23:00:00'
 * }
 * toISOStringByTime(12:00:00)
 * 返回值为{
 *     offset:0,
 *     time:'04:00:00'
 * }
 * @returns {object} 包含转换后的时间字符串time和日期偏差offset 形如'{offset:6,time:'10:10:10'}'
 */
function toISOStringByTime(timeStr) {
    const time = {}
    let date = new Date(`2000/10/24 ${timeStr}`)
    time.d = date.getUTCDate()
    time.h = addZero(date.getUTCHours())
    time.min = addZero(date.getUTCMinutes())
    time.s = addZero(date.getUTCSeconds())

    return {
        offset: time.d - 24,
        time: `${time.h}:${time.min}:${time.s}`
    }
}

/**
 * 将时间转换为UTC时间字符串，默认返回格式为yyyy-mm-dd hh:mm:ss，当type为utcStr 返回值形入20200110T103056Z
 *
 * @method toISOStringByDate
 * @param {string|Object} timeParams 源时间
 * @param {string} type str 普通时间格式， utcStr yyyymmddThhmmssZ格式
 * @example
 * 当前为东八区
 * toISOStringByDate(new Date())
 * "2020-04-07 08:55:53"
 * toISOStringByDate(new Date(),'utcStr')
 * "20200407T085606Z"
 * @returns {String } 按格式返回的时间字符串
 */
function toISOStringByDate(timeParams, type = 'str') {
    const time = {}
    let newTime ='',date =''
    if(timeParams instanceof Date){
        date = timeParams
    }else {
        date = new Date(timeParams.replace(/-/g, '/'))
    }
    time.y = date.getUTCFullYear()
    time.m = addZero(date.getUTCMonth() + 1)
    time.d = addZero(date.getUTCDate())
    time.h = addZero(date.getUTCHours())
    time.min = addZero(date.getUTCMinutes())
    time.s = addZero(date.getUTCSeconds())

    if (type === 'utcStr') {
        newTime = `${time.y}${time.m}${time.d}T${time.h}${time.min}${time.s}Z`
    } else {
        newTime = `${time.y}-${time.m}-${time.d} ${time.h}:${time.min}:${time.s}`
    }

    return newTime
}

/**
 * 根据时间字符串格式(xx:xx:xx还是 yyyy-mm-dd HH:mm:ss)将时间转换为UTC时间字符串,前者调用toISOStringByTime后者调用toISOStringByDate
 *
 * @method toISOString
 * @param {string} timeStr 源时间字符串
 * @param {string} type str 普通时间格式， utcStr yyyymmddThhmmssZ格式
 * @example
 * 当前为东八区
 * toISOString('2010-10-10 10:10:10')
 * "2010-10-10 02:10:10"
 * toISOString('10:10:10')
 * 返回值为{
 *     offset:0,
 *     time:'02:10:10'
 * }
 * @returns {String|object } 字符串形如'yyyy-mm-dd HH:mm:ss'或者对象 形如'{offset:6,time:'10:10:10'}'
 *
 */
function toISOString(timeStr, type) {
    try {
        if (REG.DATE.test(timeStr)) {
            // 格式 yyyy-mm-dd hh:mm:ss
            return toISOStringByDate(timeStr, type)
        } else if (REG.TIME.test(timeStr)) {
            // 格式 hh:mm:ss
            return toISOStringByTime(timeStr)
        }
    } catch (e) {
        return ''
    }
    console.error('Please enter date as yyyy-mm-dd hh:mm:ss')
}


/**
 * 将UTC时间转换为本地时间字符串，支持格式 hh:mm:ss
 *
 * @method toLocaleStringByTime
 * @param {string} timeStr 源时间 形如'10:10:10'
 * @example
 * toLocaleStringByTime('1:10:10')
 * {offset: 0, time: "09:10:10"}
 * @returns {object} 包含转换后的时间字符串time和日期偏差offset 形如'{offset:6,time:'10:10:10'}'
 */
function toLocaleStringByTime(timeStr) {
    const time = {}

    let timeList = timeStr.split(':');

    let utcDate = Date.UTC(2000, 10, 24, timeList[0], timeList[1], timeList[2]);
    let date = new Date(utcDate);

    time.d = date.getDate()
    time.h = addZero(date.getHours())
    time.min = addZero(date.getMinutes())
    time.s = addZero(date.getSeconds())

    return {
        offset: time.d - 24,
        time: `${time.h}:${time.min}:${time.s}`
    }
}

/**
 * 将UTC时间转换为本地时间字符串，支持格式 yyyy-mm-dd hh:mm:ss
 *
 * @method toLocaleStringByDate
 * @param {string} timeStr 源时间 形如'yyyy-mm-dd hh:mm:ss'
 * @param {string} type 当type为mmDDyy，返回格式为‘mm-dd-yyyy HH:mm:ss’
 * @example
 * toLocaleStringByDate('2019-09-10 10:10:10')
 * "2019-09-10 18:10:10"
 * toLocaleStringByDate('2019-09-10 10:10:10','mmDDyy')
 * "09-10-2019 18:10:10"
 * @returns {string} 本地时间字符串形如'yyyy-mm-dd hh:mm:ss'
 */
function toLocaleStringByDate(timeStr, type = 'str') {
    const time = {}

    let newTime = timeStr.split(' ');
    let dateList = newTime[0].split('-');
    let timeList = newTime[1].split(':');

    let utcDate = Date.UTC(dateList[0], dateList[1] - 1, dateList[2], timeList[0], timeList[1], timeList[2]);
    let date = new Date(utcDate);

    time.y = date.getFullYear()
    time.m = addZero(date.getMonth() + 1)
    time.d = addZero(date.getDate())
    time.h = addZero(date.getHours())
    time.min = addZero(date.getMinutes())
    time.s = addZero(date.getSeconds())
    if (type === 'mmDDyy') {
        return `${time.m}-${time.d}-${time.y} ${time.h}:${time.min}:${time.s}`
    }
    return `${time.y}-${time.m}-${time.d} ${time.h}:${time.min}:${time.s}`
}

/**
 * 将UTC时间转换为本地时间字符串,
 * 当格式为yyyy-mm-dd hh:mm:ss,返回值同toLocaleStringByDate
 * 当格式为hh:mm:ss 返回值同toLocaleStringByTime,
 * 当格式为yyyymmddThhmmssZ时，返回值为toLocaleStringByDate,可以带type参数修改返回值,
 * 当格式为mm-dd-yyyy hh:mm:ss,返回值同toLocaleStringByDate(time,'mmDDyy')
 *
 * @method toLocaleString
 * @param {string} timeStr 源时间
 * @param {string} type str 普通时间格式， mmDDyy
 * @example
 * 校验符合REG.DATE
 * toLocaleString('2019-09-10 10:10:10')
 * "2019-09-10 18:10:10"
 * 校验符合REG.TIME
 * toLocaleString('10:10:10')
 * {offset: 0, time: "18:10:10"}
 * 校验符合REG.DATE_Z
 * toLocaleString('20200407T085606Z')
 * "2020-04-07 16:56:06"
 * 校验符合REG.DATE_M_D_Y
 * toLocaleString('09-10-2019 18:10:10')
 * "09-11-2019 02:10:10"
 * @returns {string|object} 本地时间字符串形如'yyyy-mm-dd hh:mm:ss'，
 * 或包含转换后的时间字符串time和日期偏差offset 形如'{offset:6,time:'10:10:10'}'
 */
function toLocaleString(timeStr, type='str') {
    try {
        if (REG.DATE.test(timeStr)) {
            // 格式 yyyy-mm-dd hh:mm:ss
            return toLocaleStringByDate(timeStr)
        } else if (REG.TIME.test(timeStr)) {
            // 格式 hh:mm:ss
            return toLocaleStringByTime(timeStr)
        } else if (REG.DATE_Z.test(timeStr)) {
            // 格式 yyyymmddThhmmssZ
            let newTime = timeStr.replace(/[^0-9]/g, '')
            let date = `${newTime.slice(0, 4)}-${newTime.slice(4, 6)}-${newTime.slice(6, 8)}`
            let time = `${newTime.slice(8, 10)}:${newTime.slice(10, 12)}:${newTime.slice(12, 14)}`
            return toLocaleStringByDate(`${date} ${time}`, type)

        } else if (REG.DATE_M_D_Y.test(timeStr)) {
            let newTime = timeStr.split(' ');
            let dateList = newTime[0].split('-');
            let time = newTime[1];

            return toLocaleStringByDate(`${dateList[2]}-${dateList[0]}-${dateList[1]} ${time}`, 'mmDDyy')
        }
    } catch(e){
        console.error('Please enter date as yyyy-mm-dd hh:mm:ss')
        return ''
    }
    console.error('Please enter date as yyyy-mm-dd hh:mm:ss')

}

/**
 * 获取当前浏览器客户端的时区（+0800为东八区）
 *
 * @method getTimezoon
 * @example
 * 当前为正八区
 * getTimezoon()
 * "+0800"
 * @returns {string} such as +0000 +0545(精确到分)
 */
function getTimezoon() {
    let timezoonOffset = new Date().getTimezoneOffset();
    const flag = timezoonOffset > 0 ? '-' : '+';

    timezoonOffset = Math.abs(timezoonOffset);

    const hours = Math.floor(timezoonOffset / 60);
    const minute = timezoonOffset % 60;
    return flag + addZero(hours) + addZero(minute);
}

/**
 * 格式化时间为对象形式
 * 接收Date、数字或字符串格式的UTC时间、UTC时间*1000（单位秒）
 * 转换为时间对象，参数无效时返回空对象
 *
 * @method dateToObject
 * @param {Object | String | Number} param 时间
 * @example
 * dateToObject(new Date())
 * {
 *     day:13
 *     hour:11
 *     minute:"00"
 *     month:"04"
 *     second:50
 *     year:2020
 * }
 * dateToObject('2020/01/01 10:10:10')
 * {
 *     day:"01"
 *     hour:10
 *     minute:10
 *     month:"01"
 *     second:10
 *     year:2020
 * }
 * @returns {object} 日期结果对象或空对象
 */
function dateToObject(param) {
    let date = null

    if (typeof param === 'object') {
        date = param;
    } else if (typeof param === 'string') {
        if (param.toString().length === 13) {
            date = new Date(param.replace(/-/g, '/'));
        } else if (param.toString().length === 10) {
            date = new Date(param * 1000);
        } else {
            date = new Date(param.replace(/-/g, '/'));
        }
    } else if (typeof param === 'number') {
        date = new Date(param);
    }

    if (!date || isNaN(date.getFullYear())) {
        return {};
    }

    const dateObj = {
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        day: addZero(date.getDate()),
        hour: addZero(date.getHours()),
        minute: addZero(date.getMinutes()),
        second: addZero(date.getSeconds())
    }

    return dateObj
}

/**
 * 将毫秒时间转换为本地时间字符串，支持格式毫秒 //todo 方法重复 同上面方法 删除
 *
 * @method getDateWeek
 * @param {string} timeStr 源时间，毫秒格式 Date可接受的参数
 * @param {type} timeStr 时间格式'yyyy-mm-dd','hh:mm:ss'
 * @example
 * toLocaleStringByMs(new Date())
 * "2020-04-13 10:54:55"
 * toLocaleStringByMs(new Date(),'yyyy-mm-dd')
 * "2020-04-13"
 * toLocaleStringByMs(new Date(),'hh:mm')
 * "2020-04-13 10:55:15"
 * toLocaleStringByMs(new Date(),'hh:mm:ss')
 * "10:55:18"
 * @returns {string} 返回格式如yyyy-mm-dd hh:mm:ss
 */
function toLocaleStringByMs(timeStr,type) {
    const time = {};
    if(!timeStr){
        return ''
    }
    let date = new Date(timeStr);

    time.y = date.getFullYear()
    time.m = addZero(date.getMonth() + 1)
    time.d = addZero(date.getDate())
    time.h = addZero(date.getHours())
    time.min = addZero(date.getMinutes())
    time.s = addZero(date.getSeconds())
    if(type === 'yyyy-mm-dd'){
        return `${time.y}-${time.m}-${time.d}`
    }else if(type === 'hh:mm:ss'){
        return `${time.h}:${time.min}:${time.s}`
    }
    return `${time.y}-${time.m}-${time.d} ${time.h}:${time.min}:${time.s}`
}

/**
 * 判断星期几,返回'xxxx年xx月xx日 星期X'
 *
 * @method getDateWeek
 * @param  {string} data 时间字符串 格式 'YY-mm-dd或YYYY-mm-dd'
 * @example
 * getDateWeek('2010-10-10')
 * "2010年10月10日 星期日"
 * getDateWeek('20-10-10')
 * "20年10月10日 星期六"
 * @return {string} str  规范后时间字符串 格式 'xxxx年xx月xx日 星期X'
 */
function getDateWeek(date) {
    let dateSplitArr = date.split('-');
    let str = dateSplitArr[0] + '年' + dateSplitArr[1] + '月' + dateSplitArr[2] + '日';
    let week = new Date(date).getDay();
    switch (week) {
        case 0:
            str += ' 星期日';
            break;
        case 1:
            str += ' 星期一';
            break;
        case 2:
            str += ' 星期二';
            break;
        case 3:
            str += ' 星期三';
            break;
        case 4:
            str += ' 星期四';
            break;
        case 5:
            str += ' 星期五';
            break;
        case 6:
            break;
        default:
            str += ' 星期六';
            break;
    }
    return str;
}

/**
 * 比较日期大小（结束时间是否大于开始时间）
 *
 * @method compareDate
 * @param {any} start  开始日期
 * @param {any} end    结束日期
 * @example
 * 参数为new Date可接受的参数
 * compareDate('2010-10-10','2010-10-10')    false
 * compareDate('2010-10-11','2010-10-12')    true
 * compareDate('2010-10-11',new Date())      true
 * compareDate('2010-10-11',1586251615416)   true
 * @return {Boolean} 结束是否大于开始
 */
function compareDate(start,end) {
    return new Date(start).getTime() < new Date(end).getTime()
}

let timeUtils =  {
    dateFormat,
    addZero,
    startAndEndTime,
    dateToObject,
    valifyTime,
    isTimeContainTime,
    toISOStringByTime,
    toISOStringByDate,
    toISOString,
    toLocaleStringByTime,
    toLocaleStringByDate,
    toLocaleString,
    getTimezoon,
    toLocaleStringByMs,
    getDateWeek,
    compareDate,
}
export {
    dateFormat,
    addZero,
    startAndEndTime,
    dateToObject,
    valifyTime,
    isTimeContainTime,
    toISOStringByTime,
    toISOStringByDate,
    toISOString,
    toLocaleStringByTime,
    toLocaleStringByDate,
    toLocaleString,
    getTimezoon,
    toLocaleStringByMs,
    getDateWeek,
    compareDate,
}
export default timeUtils
