 // 获取最大值
function getMax(array) {
    return array.reduce((pre, cur) =>{
        return pre>cur ? pre:cur;
    },0)
}
let arr = [1,23,4,55]
console.log(getMax(arr));

//数组去重
function getuniqueArr(arr) {
    return  arr.reduce((pre,cur)=>{
        pre.indexOf(cur) === -1 && pre.push(cur);
        return pre
    },[])
}


//统计字符串字幕出现的次数 
function getNumberStr(str) {
    let arr  = str.split('')
    const dataMap = arr.reduce((pre,cur)=>{
        pre[cur] ? pre[cur]++ :pre[cur] = 1
        return pre
    }, {})

    return dataMap
}

const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';

console.log(getNumberStr(str))

//实现compose函数  
 
function compose(...funs) {
     if(funs.length === 0) {
         return arg=>arg
     }

    if (funs.length ===1)  {
         return funs[0]
    }

    return funs.reduce((a,b)=>(...args)=>a(b(...args)))
}

 {
     // 实现函数组合
      
 }