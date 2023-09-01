// 得分
const entry = {
    a:{
        b:{
          c:{
              dd:'abcdd'
          }
        },
        d:{
            ee: 'adee'
        },
        f:'af',
    }
}

//要求转换为如下对象
const output = {
    'a.b.c.dd':'abcdd',
    'a.d.ee':'adee',
    'a.f':'af'
}

//方法一：递归
//每次处理一层结构，通过判断属性的只是否是对象来确定递归是否结束
// -如果是对象，表示咩有结束递归调用
//- 如果不是对象，表示递归到了最后一层 确定属性值
function flatObject(obj,preValue = '',result={}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = `${preValue}${key}`
            if(typeof obj[key] === 'object') {
               flatObject(obj[key], `${newKey}.`, result)
            } else {
                 //写入属性值
                result[newKey] = obj[key]
            }
        }
    }
    return result;
}

//fot in 和 for of 的区别
console.log(flatObject(entry))


//方法2 while循环-队列
// 使用Object.entries()处理原始对象
// 使用队列存储每一层的值，知道队列中的值处理完毕


function flatObj(obj) {
    const queue = Object.entries(obj)
    let result = {};
    while (queue.length) {
        //取出最后一项
        const [key,value] = queue.pop();
        for (const [k, v] of Object.entries(value)) {
            if(typeof v === 'object') {
                queue.push([`${key}.${k}`,v])
            }else{
                result[`${key}.${k}`] = v;
            }
        }
    }
    return result
}

console.log(flatObj(entry))
// console.log( Object.entries(entry))