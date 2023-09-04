/**
 * @description 公共过滤器
 */
import _ from 'lodash';

function fieldFormater(val) {
    let res = val;
    if (_.isNull(val) || _.isUndefined(val) || val == '') {
        res = '--';
    }
    return res;
}

/**
 * 数字过滤 如果大于10000，则显示万字，其余用','分隔
 *
 * @param {any} val
 * @returns
 */
function filterNum(val) {
    if (val == undefined) return null;
    let beFes, res;
    if (val > 10000) {
        //商
        beFes = Math.floor(val / 10000); //取万
        let circle = parseInt((val / 1000) % 10);
        if (beFes > 1000) {
            beFes = initNum(beFes);
        }
        res = `${beFes}.${circle || '0'}万`;
    } else {
        res = initNum(val);
    }
    return res;
}

/**
 * 数字大于1000做','处理
 *
 * @param {any} val
 * @returns
 */
function initNum(val) {
    //转换为数组
    var num = val
        .toString()
        .split('')
        .map(_ => +_);
    var typeData = [];
    //若数组长度大于3，即val>1000
    if (num.length > 3) {
        //每3个组成一个小数组放到大数组typeData中
        for (let i = num.length; i > 3; i -= 3) {
            typeData.unshift(num.slice(i - 3, i));
            if (i - 3 < 4) {
                typeData.unshift(num.slice(0, i - 3));
            }
        }
        //大数组中每一项加，
        typeData.forEach(item => {
            item.unshift(',');
        });
        num = [].concat.apply([], typeData);
        //删除第一个逗号
        num.shift();
        return num.join('');
    }
    return val;
}

export { filterNum, fieldFormater, initNum };
