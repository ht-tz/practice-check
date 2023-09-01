// 根据下面三条规则 写一个函数按照规则输入和输出
/**
 *
 * ['able','age','are'] 输出 e
 * ['dog','ere','vfdvfdvfd'] ""
 * ['national','arrival','mental'] //输出 'al'
 *  qiu
 */


function getSameStr(arr = []) {
    let base = '';
    try {
        base = arr.pop().split('').reverse();
    } catch (e) {
        console.log(e)
    }
    const collection = new Set();
    for (let text of arr) {
        const temp = text.split('').reverse();
        for (let i = 0; i < temp.length; i++) {
            if (base[i] === temp[i]) {
                collection.add(temp[i])
            } else {
                break
            }
        }
    }
    return [...collection].reverse().join('');
}