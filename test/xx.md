### 常见手写题

#### 产生一个不重复的随机数

首先我们先知道如何取用随机数

0.  得到大于零小于1的随机数
0.  得到两个数指之间的随机数
0.  得到两数之间的随机整数
0.  产生一个不重复的随机数
0.  ```
    // 1. 得到大于零小于1的随机数
    function getRandom() {
        return Math.random();
    }
    ​
    console.log(getRandom())
    // 2. 得到两个数指之间的随机数
    //不小min小于max
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    ​
    // 3. 得到两数之间的随机整数 不小于min但是小于max
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloor = Math.floor(max)
        return Math.floor(Math.random() * (maxFloor - minCeiled) + minCeiled)
    }
    ​
    //4.得到两个整数之前的随机整数， 包含两端
    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloor = Math.floor(max)
    ​
        return Math.floor(Math.random() * (maxFloor - minCeiled + 1) + minCeiled)
    }
    ​
    // 4. 产生一个不重复的随机数
    let usedNumbers = []
    ​
    function generateRandomNum(min, max) {
        let randomDom = Math.floor(Math.random() * (max - min + 1) + min)
        if (usedNumbers.indexOf(randomDom) === -1) {
            return generateRandomNum(min, max)
        } else {
            usedNumbers.push(randomDom)
            return randomDom
        }
    }
    ```

#### async await 如何实现

```
// async 函数的实现原理就是讲generator 函数和自动执行器包装在一个函数里面
function spawn(genFn) {
  return function () {
      const gen =genFn.apply(this, arguments)
      return new Promise((resolve, reject)=>{
          function  step(key,args) {
              let result
              try {
                  result=  gen[key](args)
              } catch (e) {
                  return reject(e)
              }
​
              const {value, done} = result
​
              if(done) {
                  return resolve(value)
              } else {
                  return Promise.resolve(value).then(val=>{
                       step(key, val)
                  },(err)=>{
                      step('throw',err)
                  })
              }
          }
​
          step('next')
      })
  }
}
​
function fn(nums) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(nums)
        }, 1000)
    })
}
// async 函数
async function testAsync() {
    let res1 = await fn(1);
    console.log(res1); // 1
    let res2 = await fn(2);
    console.log(res2); // 2
    return res2;
}
let _res = testAsync();
console.log('testAsync-res',_res); // Promise
_res.then(v=>console.log('testAsync-res',v)) // 2
​
// Generator函数
function* gen() {
    let res1 = yield fn(3);
    console.log(res1); // 3
    let res2 = yield fn(4);
    console.log(res2); // 4
    // let res3 = yield Promise.reject(5);
    //  console.log(res3);
    return res2;
}
```

#### 使用递归求1+100

```
function add(res, n) {
  res += n
  n--
  if(n>0) {
    return add(res,n)
  }
  return res
}
let res1 = add(0,100)
console.log(res1)
​
function add(a) {
  if (a <= 1) {
    return 1
  }
  return a + add(a - 1)
}
​
console.log(add(5))
```

#### 打印出10000以内的对称数字

0.  前置知识 求js的逆序数

    ```
    // 求逆序数
    // js求逆序数的几种方法
    let num1 = 987
    ​
    //第一种
    function getReverseOrder(num) {
        let res = []
        let arr = num.toString().split("")
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i])
        }
        return parseInt(res.join(""), 10)
    ​
    }
    ​
    function getReverseOrder1(num) {
        let res = []
        let arr = num.toString().split("")
        for (let i = 0; i < arr.length/2; i++) {
             let temp = arr[i]
             arr[i] = arr[arr.length - 1 -i]
             arr[arr.length - 1 -i] = temp
        }
        return parseInt(arr.join(""),10)
        }
    ​
    ​
    console.log(getReverseOrder1(num1))
    ```

    2.  打印1-10000内的对称数

        ```
        // 打印对称数
        function isSymmetry1(num) {
            let arr = num.toString().split("")
            if (arr.length === 1) return true
            let l = 0
            let r = arr.length - 1
            while (l < r) {
                if (arr[l] === arr[r]) {
                    l++
                    r--
                } else {
                    return false
                }
            }
            return true
        }
        ​
        ​
        function isSymmetry2(num) {
            let arr = num.toString().split("")
            let len = arr.length
            if (len < 2) return true
            let mid = Math.floor(len / 2)
            if (len % 2 !== 0) {
                arr.splice(mid, 1)
            }
            let m = arr.length / 2 - 1
            let n = m + 1
            while (m >= 0 && n <= arr.length - 1) {
                if (arr[m] !== arr[n]) {
                    return false
                }
                n++
                m--
            }
            return true
        }
        ​
        function isSymmetry3(num) {
            let reverseOrder = ""
            let str = num.toString()
            for (let i = str.length - 1; i >= 0; i--) {
                reverseOrder += str[i]
            }
            if (str === reverseOrder) {
                return true
            }
        ​
            return false
        }
        ​
        const aSymmetryNumbers = (num)=>{
            let res = []
            for (let i = 0; i <num ; i++) {
                if(isSymmetry3(i)) {
                    res.push(i)
                }
            }
            return res
        }
        ​
        console.log(aSymmetryNumbers(1000))
        // console.log(isSymmetry3(1234564321))
        ```

#### 实现字符串匹配算法indexOf

```
//字符串的index方法实现
function indexOf(str, searching) {
    let s_index = 0
    let move = 0
    let len = str.length
    let index = -1
    for (let i = 0; i < len; i++) {
        move++
        // 一个一个字母的逐个比较
        let a = str.substring(i, i + 1)
        let b = searching.substring(s_index, s_index + 1)
        if (a === b) {
            // 移动指针比较下一个
            s_index++
            if (s_index === searching.length) {
                // 移动的距离index - 目标字符串的长度
                index = move - searching.length
                break;
            }
        } else {
            // 指针重定向为目标指针的第一项
            s_index = 0
        }
    }
​
    let obj = {
        index: index,
        move: move - 1
    }
    return obj
}
​
let st1 = 'abcde'
let searching = 'cd'
let rs = indexOf(st1, searching)
​
console.log(rs)
```

#### 请求手写一个模块math,支持链式调用，math.add(2,4).minus(3).times(2)

```
class myMath {
    constructor(num) {
        this.res = num?num:0
    }
    add(a,b){
        this.res += a+b
        return this
    }
    minus(num){
        this.res -= num
        return this
    }
    times(num){
        this.res *=num
        return this
    }
}
let math = new myMath()
console.log(math.add(2,4).minus(3).times(2))
```

#### 手写使用Es6Procxy 如何实现arr[-1]的访问

```
//ES6proxy 如何实现 arr[-1] 的访问
let arr = [1, 2, 3, 4]
console.log(parseInt(-1))
let proxy = new Proxy(arr, {
    get(target, k, receiver) {
        if (k < 0) {
            return target[target.length + parseInt(k)]
        }
        return target[k]
    },
})
console.log(proxy[-1])
```

#### 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90

```
// 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90)
function foo(arr) {
    let AMOUNT = arr.length
    if (!AMOUNT) return false;
    if (AMOUNT === 3) return arr;
    arr.sort((a, b) => a - b);
    let total = 0;
    let maxNumberTotal = 0;
    for (let i = 0; i < AMOUNT; i++) {
        total += arr[i];
    }
    maxNumberTotal = total / 3;
    let tempTotal = arr[AMOUNT - 1];
​
    let firstArr = [arr[AMOUNT - 1]];
    let delIndex = [AMOUNT - 1];
    let firstIndex = -1;
​
    // 获取第一份数组
    for (let i = AMOUNT - 2; i > 0; i--) {
        const el = arr[i];
        tempTotal += el; // 每次拿最大的;
        firstArr.push(el);
        delIndex.push(i);
        if (tempTotal === maxNumberTotal) { // 刚好等于最大值跳出循环
            break;
        } else if (tempTotal > maxNumberTotal) { // 发现超过最大值, 减回去
            tempTotal -= el;
            delIndex.pop();
            firstArr.pop();
        } else if (tempTotal < maxNumberTotal) { // 发现超过最小值, 处理边界问题
            let nextTotal = tempTotal + arr[i + 1]
            if (maxNumberTotal - tempTotal < Math.abs(maxNumberTotal - nextTotal)) { // 当前总值比上一个总值大; 这里是临界值, 说明上一个总值肯定是一个比最大值大, 所以这里需要和绝对值比较
                if (maxNumberTotal - tempTotal > arr[0]) { // 如果下一个平局值和总值相减, 比数组第一个数还大, 说明还可以继续走下去;
                    continue;
                } else {
                    break;
                }
            }
        }
    }
    for (let i = 0; i < delIndex.length; i++) {
        arr.splice(delIndex[i], 1)
    }
​
    AMOUNT = arr.length; // 注意每次的arr都是不一样的
    let secondArr = [arr[AMOUNT - 1]];
    delIndex = [AMOUNT - 1];
    let secondIndex = -1;
    tempTotal = arr[AMOUNT - 1];
    // 获取第二份数组
    for (let i = AMOUNT - 2; i > 0; i--) {
        const el = arr[i];
        tempTotal += el; // 每次拿最大的;
        secondArr.push(el);
        delIndex.push(i);
        if (tempTotal === maxNumberTotal) { // 刚好等于最大值跳出循环
            break;
        } else if (tempTotal > maxNumberTotal) { // 发现超过最大值, 减回去
            tempTotal -= el;
            delIndex.pop();
            secondArr.pop();
        } else if (tempTotal < maxNumberTotal) { // 发现超过最小值, 处理边界问题
            let nextTotal = tempTotal + arr[i + 1]
            if (maxNumberTotal - tempTotal < Math.abs(maxNumberTotal - nextTotal)) { // 当前总值恒小于下一个总值; 这里是临界值
                if (maxNumberTotal - tempTotal > arr[0]) {
                    continue;
                } else {
                    break;
                }
            }
        }
    }
    for (let i = 0; i < delIndex.length; i++) {
        arr.splice(delIndex[i], 1)
    }
    // 公平处理, 当出现极差情况就需要做公平处理了, 这里暂时不考虑极差情况
    return [firstArr, secondArr, arr]
}
```

#### 之字形打印打印矩阵

```
//之字形打印矩阵
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

function printMatrix(matrix) {
    // 对角线左下角为a,b
    // 对角线右上角就为c,d
    let arow = 0,
        bcol = 0,
        crow = 0,
        dcol = 0
    // row
    let rowLen = matrix.length - 1
    // col
    let colLen = matrix[0].length - 1
    // 初始方向从上到下
    let fromTop = true

    // A(a,b) B(c,d)=》
    //A向下移动 B向右移动
    // 假入是4*4的矩阵
    //A (0,0)(1,0)(2,0)(3,0)(3,1)(3,2)(3,3)
    // B(0,0)(0,1)(0,2)(0,3)(1,3)(2,3)(3,3)
    while (arow <= rowLen) {
        printLine(matrix, arow, bcol, crow, dcol, fromTop)
        bcol = (arow === rowLen) ? bcol + 1 : bcol
        arow = (arow === rowLen) ? arow : arow + 1
        crow = (dcol === colLen) ? crow + 1 : crow
        dcol = (dcol === colLen) ? dcol : dcol + 1
        fromTop = !fromTop
    }
}

//沿着对角线输出
function printLine(matrix, arow, bcol, crow, dcol, fromTop) {
    if (fromTop) {
        while (arow >= crow && bcol <= dcol) {
            //斜向上
            console.log(matrix[arow][bcol])
            arow--
            bcol++
        }

    } else {
        // 斜向下
        while (crow <= arow && dcol >= bcol) {
            console.log(matrix[crow][dcol])
            crow++
            dcol--

        }
    }
}

printMatrix(arr)
```

#### 数组中的最大值

```
let arr = [1, 2, 44, 54, 65, 354, 121]

// 1. 使用Math.max()函数和apply()方法
const arr = [1, 3, 5, 2, 4];
const max = Math.max.apply(null, arr);
console.log(max); // 输出：5
// 2.使用for循环遍历数组：
function getMaxNum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    return max
}
// 3. reduce
const arr = [1, 3, 5, 2, 4];
const max = arr.reduce((acc, cur) => Math.max(acc, cur), Number.MIN_SAFE_INTEGER);
console.log(max); // 输出：5
//4. 使用spread语法和Math.max()函数：
const arr = [1, 3, 5, 2, 4];
const max = Math.max(...arr);
console.log(max); // 输出：5

//5. 使用ES6的解构赋值和sort()方法
const arr = [1, 3, 5, 2, 4];
const [max] = [...arr].sort((a, b) => b - a);
console.log(max); // 输出：5
//6.使用Math.max()函数和展开运算符（Spread Operator）：
const arr = [1, 3, 5, 2, 4];
const max = Math.max(...arr);
console.log(max); // 输出：5
//7.使用ES6的解构赋值和Math.max()函数：
const arr = [1, 3, 5, 2, 4];
const [max] = arr.reduce(([max], cur) => cur > max ? [cur] : [max], [Number.MIN_SAFE_INTEGER]);
console.log(max); // 输出：5
```

#### 尾递归斐波那契

```
// #### 尾递归斐波那契
const fibonacci = (n) => {
    if (n == 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

//尾递归
// es6尾递归只在严格模式下调用
'use strict'

function fibonacci(n, n1, n2) {
    if (n === 0) {
        return n1
    }
    return fibonacci(n - 1, n2, n1 + n2)

}
```

#### 实现简单的路由

```
<html>
<style>
    html, body {
        margin: 0;
        height: 100%;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .box {
        width: 400px;
        height: 300px;
    }

    #container {
        height: 100px;
        width: 100px;
        background-color: #ccc;
    }
</style>
<body>
<div id="container"></div>
<ul class="box">
    <li>
        <a href="#/red">z</a>
    </li>
    <li>
        <a href="#/green">b</a>
    </li>
    <li>
        <a href="#/purple">b</a>
    </li>
</ul>
<script>
    const box = document.getElementById("container")
    // window.onhashchange = function (e) {
    //     debugger
    //     const hash = location.hash.replace('#', '')
    //
    //     console.log(hash)
    //     switch (hash) {
    //         case "/red":
    //             box.innerText = 'red'
    //             break
    //         case '/green':
    //             box.innerText = "green"
    //             break;
    //         case "/purple":
    //             box.innerText = "purple"
    //             break;
    //         default:
    //             break
    //     }
    // }

    class Router {
        constructor() {
            this.routes = {}
            // 当前路径
            this.curUrl = ''
            // 监听hashchange
            window.addEventListener('load', this.refresh.bind(this), false)
            window.addEventListener('hashchange', this.refresh.bind(this), false)
        }
        // 映射路由
        route(path, callback) {
            this.routes[path] = callback || function () {
            }
        }
        refresh() {
            debugger
            this.curUrl= location.hash.slice(1)||'/'
            console.log(this.curUrl)
            this.routes[this.curUrl]()
        }
    }
    const router = new Router()
    router.route('/red', function () {
        box.style.background = "pink"
        box.innerText = 'pink'
    })

    router.route('/green', function () {
        box.style.background = "green"
        box.innerText = "green"
    })

    router.route('/purple', function () {
        box.style.background = "purple"
        box.innerText = "purple"
    })
</script>
</body>
</html>
// TODO完简单版本的hash路由
https://cloud.tencent.com/developer/article/1589151
```

#### 1-1000 回文数字的生成

```
// 1-1000 回文数字的生成

function isPalindrome(str) {
    let l = 0
    let r  = str.length - 1

    while(l<r) {
        if(str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

function generatePalindrome(n) {
     let res  =  []
    for (let i = 1; i <n ; i++) {
         if(isPalindrome(i.toString())) {
             res.push(i)
         }
    }
    return res
}

console.log(generatePalindrome(1000))
```

#### 随机生成字符串

```
// 随机生成字符
function  randomString(len) {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let length =   len || 32
    let newStr = ""
    for (let i = 0; i < len ; i++) {
        newStr+= str.charAt(Math.floor(Math.random() * length))
    }
    return newStr
}

console.log(randomString(10))
```

#### 判断一个字符串是否为驼峰字符串， judge('ByteDance','BD') -> true judge('Bytedance','BD') -> false

```
// 判断一个字符串是否为驼峰字符串， judge('ByteDance','BD') -> true judge('Bytedance','BD') -> false
function judgeCamelCase(str, acronym) {
    let strArr = str.match(/[A-Z]/g)
    console.log(strArr)
    if(strArr.join("") === acronym)   return true
    return false

}

console.log(judgeCamelCase('ByteDanceCs','BDC'))
```

#### 压缩字符串

```
//用行程长度编码（Run-Length Encoding）算法来压缩字符串
function compressString(str) {
    let compressed = ''
    let count = 1

    for (let i = 0; i < str.length; i++) {
        //当前字符串和前一个字符串相同， 增加计数1
        if (str[i] === str[i - 1]) {
            count++
        } else {
            //将前一个字符机器计数添加到压缩字符串中
            compressed += str[i - 1] + count
            count = 1
        }
    }

    // 处理最后一个字符串及其计数
    compressed += str[str.length - 1] + count
    return compressed
}
console.log(compressString('aabbbcccc')); // "a2b3c4"
console.log(compressString('abc')); // "a1b1c1"
```

#### Map场景题

```
arr = [
    {
        name: "可乐",
        categories: ["热门", "饮料"],
    },
    {
        name: "苹果",
        categories: ["热门", "食物"],
    },
    {
        name: "洗衣液",
        categories: ["生活用品"],
    },
];

// [
//     { name: "热门", categories: ["可乐", "苹果"] },
//     { name: "饮料", categories: ["可乐"] },
//     { name: "食物", categories: ["苹果"] },
//     { name: "生活用品", categories: ["洗衣液"] },
// ];
function changeFormat(arrs) {
    if (arrs.length === 0) return arrs
    let result = []
    let map = new Map()
    for (const arr of arrs) {
        const {name, categories} = arr
        for (const category of categories) {
            if (!map.has(category)) {
                map.set(category, [name])
            } else {
                let val = map.get(category)
                val.push(name)
                map.set(category, val)
            }
        }
    }
    console.log(map)
    map.forEach((value , key) => {
        console.log(key, value)
        result.push({
            name: key,
            categories: value
        })
    })
    return result
}

changeFormat(arr)
```

#### 输入50a6we8y20x 输出50个a，6个we，8个y，20个x

```
//输入50a6we8y20x 输出50个a，6个we，8个y，20个x
console.log(isFinite('0'))
// 第一种实现方法
function formatStr(str) {
    let len = str.length
    if (len === 0) return
    let arr = []
    let numStr = ''

    for (let i = 0; i < len; i++) {
        if (isFinite(str[i])) {
            numStr += str[i]
        } else {
            if (numStr) {
                arr.push({
                    key: numStr,
                    value: str[i]
                })
            } else {
                let ns = arr.pop()
                let obj = {
                    key: ns.key,
                    value: ns.value + str[i]
                }
                arr.push(obj)
            }
            numStr = ""
        }
    }

    let newStr = ""
     arr.forEach(el=>{
         newStr+= el.value.repeat(el.key)
     })
    return newStr
}

console.log(formatStr(strs))

// // 输入50a6we8y20x 输出50个a，6个we，8个y，20个xer
function unzipString(str) {
    let count = ''
    let result = ''
    let curWorld = ''
    for (let i = 0; i < str.length; i++) {
        if (Number.isNaN(+str[i])) {
            // +str(i)字符串类型会被转换为NaN,
            // 进来的换都是字符串
            curWorld += str[i]
        } else {
            //数字进来
            //字符串为空的话，说明是数字，
            if (curWorld) {
                // 进来的话  说明本次字符串已遍历完毕。直接拼接， 例如， 6we 下次进来 就是数字了
                result += curWorld.repeat(+count)
                count = ''
                curWorld = ''
            }
            count += str[i]
        }
    }
    result += curWorld.repeat(+count)
    return result
}
unzipString('50a6we8y20x')
```

#### 手写defineProperty

```
// 手写Object.
// 手写实现Vue.js的数组、对象响应式监听
// 利用Object.defineProperty(obj, prop, descriptor)实现
// 参数列表：
// obj：需要定义属性的对象
// prop：需要定义的属性
// descriptor：属性的描述描述符
// 返回值：返回此对象

// 基本流程：遍历为数组、对象的每一个值、属性进行绑定监听函数，
// 为每个属性分配一个订阅者集合的管理数组dep；然后在编译的时候在该属性的数组dep中添加订阅者
// 当值改变的时候，就会通知更新，作为发布者发出通知
// 将事件发送给dev中存储的对应订阅者watcher，并调用对应的update方法更新视图

function observe(target) {
    // 不是对象或者数组直接返回
    if (typeof target !== "object" || target === null) return target;
    // 如果是数组则需要更改原型
    if (Array.isArray(target)) {
        // 对于数组直接扩展方法对影响原型，所以需要处理
        // 该方法创建新对象，隐式原型原型指向Array.prototype
        let arrPrototype = Array.prototype;
        const arrProto = Object.create(arrPrototype);
        target.forEach((methodName) => {
            arrProto[methodName] = function () {
                arrPrototype[methodName].call(this, ...arguments);
            };
        });
        target.__proto__ = arrProto; //如果target为数组则改变原型指向,使用重写后的方法
    }
    for (let key in target) {
        // 遍历
        defineProperty(target, key, target[key]);
    }
}

function defineProperty(target, key, value) {
    //监听函数
    observe(value); //当value也为对象时进行递归深度监听 例如上面定义的obj.a

    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                update(value, newValue);
                //通知更新，作为发布者发出通知，
                // 实际中会将事件发送给dev中存储的对应watcher，并调用对应的update方法更新视图
                value = newValue;
                observe(newValue); //当新值赋值为对象时, 对该对象绑定监听
            }
        },
    });
}

function update(oldValue, newValue) {
    //模拟更新操作
    console.log(`oldValue: ${oldValue}, newValue: ${newValue}`);
}

let obj = {
    a: {
        b: 1,
        c: 2,
    },
    d: 4,
};

observe(obj); //监听对象，绑定defineProperty方法
console.log(obj.a.b); //调用get方法
obj.a.b = 3; //直接修改b的值 监听成功
obj.a = 4; //把a赋值成基本类型 监听成功
obj.d = 5; //直接修改d的值 监听成功
obj.d = {
    //把d修改成对象 监听成功
    e: 8,
};

let arr = ["test", "try", ["deep"]];
observe(arr); //监听数组，绑定defineProperty方法
console.log(arr[0]); //调用get方法
arr[0] = "change"; //修改数组的第一层值
arr[2][0] = "66" // 修改数组的第二层值
console.log(arr[2]); //验证修改成功
```

#### 实现(5).add(3).minus(2)

```
Number.prototype.add = function (num) {
return this.valueOf() + num
}
Number.prototype.minus = function (num){
    return this.valueOf() - num
}
console.log((5).add(3).minus(2))
```

#### 将十进制数字转为二进制数字字符串

```
//将十进制数字转为二进制数字字符串
// 第一种方法 二进制转换为十进制
// let decNumber = 111000
// console.log(parseInt(decNumber, 2))
​
​
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// Number.prototype.toString(radix) 表示基数进制 可选参数
function tenToTwo(decNumber) {
    if (decNumber > 2 && decNumber % 1 == 0) {
        return decNumber.toString(2)
    } else {
        console.log('请输输入非负整数')
    }
}
​
function tenToTwo(decNumber) {
    let temp = decNumber
    let arr = []
    let b = 0
    if (decNumber % 1 === 0 && decNumber > 0) {
        while (temp !== 0) {
            b = decNumber % 2
            // temp = Math.floor(decNumber / 2)
            temp = parseInt(decNumber / 2)
            decNumber = temp
            arr.push(b)
        }
        return arr.reverse().join('')
    }
}
​
console.log(tenToTwo(10))
```

#### 封装 remove child.remove()销毁自身

#### 字符串中字母出现的次数

```
//字母出现的次数
const str = "ABCabc123"、
​
// 字符串中字母的出现次数
function countLetters(str) {
    let res = 0
    for (let char of str) {
        if (char.match(/[a-zA-Z]/i)){
             res++
        }
    }
    return res
}
​
​
// 字符串中字母的出现次数
function countLetters(str) {
    let res = 0
    for (let char of str) {
        if((char>='a' && char<='z') || (char>='A' && char<='Z')) {
            res++
        }
    }
    return res
}
​
console.log(countLetters(str))
​
// 字符串中每一个字符出现的次数
// 字符串中每一个字符出现的次数
function countLetters(str) {
    let map = new Map()
    for (let char of str) {
        if (map.has(char)) {
            let key = map.get(char)
            map.set(char, key + 1)
        } else {
            map.set(char, 1)
        }
    }
    return map.entries()
}
​
console.log(countLetters(str))
```

#### 输出一个等腰三角形

```
for(let i= 1;i<= 3;i++) {
    //列表打印空格
    for (let j = 1; j <=3 - i ; j++) {
         document.write('&nbsp;')
    }
​
    // 打印点
    for (let j = 1; j <=2*i- 1 ; j++) {
        document.write('*')
    }
    // 打印换行
    document.write('<br/>')
}
```

#### 实现一个函数 a，使其奇数次调用时返回 1，偶数次调用时返回 2（不能使用全局变量）

```
// 实现一个函数a，使其奇数次调用时返回1，偶数次调用时返回2（不能使用全局变量）
function fn() {
    let num = 0
    return function () {
        num++
        if (num % 2 === 1) {
            console.log(1)
        } else {
            console.log(2)
        }
    }
}
​
let a =fn()
a()
a()
a()
a()
```

#### 求 最接近的值

```
//求最接近的值
{
    const arr1 = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
    const num = 37
​
    function getClose(num, arr) {
        let res = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (Math.abs(arr[i] - num) < Math.abs(res - num)) {
                res = arr[i]
            }
        }
        return res
    }
​
    console.log(getClose(num,arr1))
}
```

#### 不用for循环求和

```
// 递归求和
 function sum (arr) {
     if(arr.length === 0) return 0;
     console.log(arr[0], arr.slice(1))
     return arr[0] + sum(arr.slice(1))
 }
​
console.log(sum([1,2,3,4,5]))
​
function sum(n) {
    if(n ===1) return 1
    return n+sum(n -1)
}
console.log( sum(100))
​
​
//函数柯理化是把接收多个参数的函数变换成接受一个单一参的技术
//特点：
//
function curried(fn) {
    return function curry(...args) {
        if (fn.length < args.length) {
            return function (...newArgs) {
                return curry([...args, ...newArgs])
            }
        } else {
            fn(args)
        }
    }
}
​
function add(a, b, c) {
    return a + b + c
}
​
let sum = curried(add)
console.log(sum(1)(2)(3)(4)(5))
​
function add(...args) {
    return args.reduce((a, b) => a + b)
}
​
// 无线累加 第一种实现方法
function currying(fn) {
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [...args, ...newArgs]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = []
            return val
        }
    }
}
​
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15console.log(addCurry(1)(2)(3, 4, 5)())  //15console.log(addCurry(1)(2, 3, 4, 5)())  //15
​
//TODO 不是特别明白
const curry_add = (a) => {
    let num = a || 0
    const item = (b) => {
        num+= b
        return item
    }
​
    item.toString = () => {
        console.log('参数变化，自动触发')
        return num
    }
​
    return item
}
​
console.log(curry_add(1)(2)(3))
// https://juejin.cn/post/6850418115042836487#heading-2
​
```

#### 连续赋值操作

// 连续赋值操作： <https://segmentfault.com/a/1190000004224719>

#### 输入一串字符串，根据字符串求出每个字母的数量并返回结果对象。数字为 1 时可省略

```
//输入一串字符串，根据字符串求出每个字母的数量并返回结果对象。（数字为1时可省略
​
const str = 'syuidfhasdffghjkgutweryerfgdcgertsdfghasdfad'
​
function getCharNum(str) {
    const tempList = str.split('')
    const map = tempList.reduce((p,c) => {
        if(p[c]) {
            p[c] += 1
        } else {
            p[c] = 1
        }
        return p
    }, {})
    Object.keys(map).forEach(key => {
        if(map[key] === 1) {
            delete map[key]
        }
    })
    return map
}
​
getCharNum(str)
```

#### 创建包含 10 个 1 的数组 多种方法

```
// 使用Array构造函数和fill()方法：
var arr = new Array(10).fill(1);
// 使用循环：
var arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(1);
}
// 使用Array.from()方法：
var arr = Array.from({length: 10}, () => 1);
// 使用扩展运算符和fill()方法：
var arr = [...new Array(10)].map(() => 1);
// 字符串的repeat和split方法
var arr = "1".repeat(10).split("")
```

#### 实现一个函数，

把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象 { ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’]

```
let str32 = ['zm', 'za', 'b', 'lm', 'ln', 'k']
function formatArrayToObject(arr) {
    let map = new Map()
    arr.forEach(el => {
         if(map.has(el[0])) {
              let res = map.get(el[0])
              res.push(el)
              map.set(el[0],res)
         }else {
             map.set(el[0],[el])
         }
    })
​
    let res= {}
    for (const  [key, val] of map) {
         res[key] = val.sort()
    }
    return res
}
​
console.log(formatArrayToObject(str32))
```

#### 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：

["0->2","4->5","7","13","15->16"]

```
// #### 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
​
// ["0->2","4->5","7","13","15->16"]
​
const getArr = (arr) => {
    let res = []
    let str = ""
    let j = -1
    for (let i = 0; i < arr.length; i++) {
        j = i
        if (arr[i] + 1 === arr[i + 1]) {
            while (arr[j] + 1 === arr[j + 1]) {
                str = '->' + arr[j + 1]
                j++
            }
            str = arr[i] + str
            res.push(str)
            i = j
        } else {
            res.push(arr[i])
        }
    }
    return res;
}
console.log(getArr([0, 1, 2, 4, 5, 7, 13, 15, 16]))
```

#### 字符串重命名。举例 ，输入["ab","c","ab","c","a","d"]，

输出["ab1","c1","ab2","c2","a","d"]， 输出不可以改变原有顺序，不重复的字符串不动。

```
// #### 字符串重命名。举例 ，输入["ab","c","ab","c","a","d"]，
//
// 输出["ab1","c1","ab2","c2","a","d"]，
// 输出不可以改变原有顺序，不重复的字符串不动。
const getNewArr = (arr) => {
    let res = new Array(arr.length)
    let map = new Map()
    let j = 0
​
    for (let k = 0; k < arr.length; k++) {
        if (map.has(arr[k])) {
            let valArr = map.get(arr[k])
            valArr.push(k)
            map.set(arr[k], valArr)
        } else {
            map.set(arr[k], [k])
            res[k] = arr[k]
        }
    }
​
    for (let val of arr) {
        let vals = map.get(val)
        if (vals.length > 1) {
            let j = 0
            while (j < vals.length) {
                res[vals[j]] = val + (j + 1)
                j++
            }
        }else {
            res[vals[0]] = val
        }
    }
​
    console.log(res)
}
let tr = ["ab","c","ab","c","a","d"]
getNewArr(tr)
```

#### 移除对象的空属性

```
let obj = {a: null, c: "", d: undefined, b: '哈哈哈'}
Reflect.ownKeys(obj).forEach(key => {
    if (!obj[key]) {
        Reflect.deleteProperty(obj, key)
    }
})
console.log(obj)
```

#### 一个数组，找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)

```
//n^2
function  getNextBig(arr) {
    let maxArr = new Array(arr.length).fill(-1)
    for (let i = 0; i < arr.length ; i++) {
        let j = i+1
        while(j< arr.length) {
            if(arr[j] > arr[i]) {
                maxArr[i] = j
                break;
            }
            j++
        }
    }
    console.log(maxArr)
}
const nums = [1, 3, 4, 2, 5, 6, 7];
getNextBig(nums)
​
function getNextBig1(arr) {
    let len = arr.length
    let stack = []
    stack.push(0)
    let res = new Array(len).fill(-1)
​
    for (let i = 1; i < len; i++) {
        let st = stack[stack.length - 1]
        if (arr[i] < arr[st]) {
            stack.push(i)
        } else if (arr[i] === arr[st]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length > 0 && arr[i] > arr[stack.length - 1]) {
                // 栈顶索引
                let top = stack.pop()
                res[top] = i
            }
            stack.push(i)
        }
    }
    return res
}
​
console.log(getNextBig1(nums))
```

#### 判断两个对象是否相等

```
// 判断两个对象是否相等
// 递归退出条件：
// 被比较的是两个值类型变量，直接用“===”判断
// 被比较的两个变量之一为null，直接判断另一个元素是否也为null
// 提前结束递推：
// 两个变量keys数量不同
// 传入的两个参数是同一个变量
// 递推工作：深度比较每一个key
function isEqual(obj1, obj2) {
    if (obj1 === null || obj2 === null) return obj1 === null && obj2 === null
    if (obj1 === obj2) return true
    let len1 = Reflect.ownKeys(obj1).length
    let len2 = Reflect.ownKeys(obj2).length
    if (len1 !== len2) return false
​
    for (const key in obj1) {
        if (!isEqual(obj1[key], obj2[key])) {
            return false
        }
    }
    return true
}
```

#### 寻找出现次数最多的三个标签

```
// 寻找出现次数最多的三个标签
const domList = document.querySelectorAll("*")
const map = new Map()
for (let element of domList) {
    if (map.has(element)) {
        map.set(element, map.get(element) + 1)
    } else {
        map.set(element, 1)
    }
}
let array = [...map]
​
array.sort((a,b)=> a[1] - b[1])
array.slice(0,3)
```

#### 100以内的素数

```
// 寻找100以内的素数
function iPrime(n) {
    for (let i = 2; i <n ; i++) {
        if(n%i===0) {
            return false
        }
    }
    return true
}
function getPrime(n) {
    let arr = []
    for (let i = 2; i <= n; i++) {
        if(iPrime(i)) {
            arr.push(i)
        }
    }
    return arr
}
​
console.log(getPrime(100).length)
```

#### 实现jsonp

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    let script = document.createElement('script');
    script.type = "text/javascript";
    // 传递一个callback函数给后端，方便后端返回时执行这个在前端定义的callback函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script)
​
    function handleCallback(res) {
        alert(JSON.stringify(res));
    }
​
    {
        // 返回的时候就执行回调函数
        handleCallback({"success": true, "user": "admin"})
    }
</script>
</body>
</html>
```

#### URL翻转

```
// url翻转
let url = 'www.baidu.toutiao.com'
​
// 不能使用split(), reverse
function reverseURL(str) {
    let len = str.length
    let i = 0
        , j = 0
    let res = ""
    while (j < len) {
        if (str[j] === ".") {
            res = '.' + str.slice(i, j) + res
            j++
            i = j
        } else {
            j++
        }
    }
    res = str.slice(i, j) + res
    console.log(res)
    return res
}
​
console.log(reverseURL(url))
​
//实现split
//实现join
String.prototype.split = function (char) {
    let res = []
    let temp = ""
    for (let i = 0; i < this.length; i++) {
        if (this[i] === char) {
            res.push(temp)
            temp = ""
        } else {
            temp += this[i]
        }
    }
    if (res) {
        res.push(temp)
    }
    return res
}
console.log('xxx.xxx.xx'.split('.'
))
```

//<https://github.com/Sunny-117/js-challenges/issues/93>

#### 解析URL Params 为的对象

```
function getUrlParam() {
    const paramString = location.search.substr(1);
    let urlParams = {};
    const paramArray = paramString.split("&");
    for (var i = 0; i < paramArray.length; i++) {
        var p = paramArray[i].split("=");
        urlParams[p[0]] = p[1];
    }
​
    return urlParams;
}
```

#### 随机生成颜色

#### 判断A、B数组的包含关系（值和数量），A属于B返回1，B属于A返回2，两者相等返回0，其他返回-1

#### 对象合并

#### 多行字符串转而为数组

```
const str = ` 1 21    3
4 5  6
7   8 9 `;        /* 多行字符串要用反引号 */
var arr = str.split('\n'); /* 根据换行符分割 */
```

#### 数组合并，数组求交集，并集，差集

#### 判断对象是否存在循环引用

#### 逆对象扁平化

```
let testObj = { 
  'a.b.c': 1,
  'd.e': [2,3],
 };
 
 console.log(unflattenObject(testObj)); // 输出：{ a: { b: { c: 1 } }, d: { e: [2,3] } }
```

#### 对象扁平化

#### 偏函数

#### 管道函数

#### 实现只能执行一次的函数

#### 手写事件委托

#### 数据类型判断

#### 类数组转数组

#### 预加载

#### 图片懒加载

#### 数组去重

#### 节流防抖

#### 函数组合

#### 用代码实现把字符串转换成base64编码

#### 实现一个 LazyMan

#### 树的场景

#### DOM2JSON

```
{
  tag: 'DIV',
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
​
function dom2Json(domtree) {
  let obj = {};
  obj.name = domtree.tagName;
  obj.children = [];
  domtree.childNodes.forEach((child) => obj.children.push(dom2Json(child)));
  return obj;
}
```

#### 计算目录树的深度

```
const tree = {
    name: 'root',
    children: [
        { name: '叶子1-1' },
        { name: '叶子1-2' },
        {
            name: '叶子2-1',
            children: [{
                name: '叶子3-1',
                children: [{
                    name: '叶子4-1',
                    children: [{}]
                }]
            }]
        }
    ]
}

function getLevel(tree) {
    if (tree == null) return 0;
    const queue = [tree]
    let dep = 0;
    while (queue.length) {
        dep++;
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            if (node.children) {
                for (const child of node.children) {
                    queue.push(child)
                }
            }
        }
    }
    return dep
}
console.log(getLevel(tree));
```

#### 树形结构获取路径名称

```
const treeData = [
    {
        name: "root",
        children: [
            { name: "src", children: [{ name: "index.html" }] },
            { name: "public", children: [] },
        ],
    },
];
const RecursiveTree = (data) => {
    const res = []
    const dfs = (data) => {
        data.forEach(ele => {
            res.push(ele.name)
            ele.children && dfs(ele.children)
        });
    }
    dfs(data)
    return res;
}
console.log(RecursiveTree(treeData));
```

#### 树转数组

#### 数组转树

#### 对象树的遍历

#### 查找json中children的路径

```
json = {
    id: 1,
    children: [
        { id: 2, children: [{ id: 3, children: [] }] },
        {
            id: 4,
            children: [
                { id: 5, children: [] },
                { id: 6, children: [] },
            ],
        },
        { id: 7, children: [] },
    ],
};
function findNode(obj) {
    const res = []
    function dfs(obj, currPath, target) {
        if (!obj) return;
        if (obj.id === target) {
            currPath += obj.id
            res.push(currPath)
            return
        }
        currPath += obj.id + '->'
        obj.children && obj.children.forEach(ele => {
            dfs(ele, currPath, target)
        });
    }
    dfs(obj, '', 5)
    return res;
}
```

#### 对象字符串转化为树结构

```
let strarr = {  
  'a-b-c-d':1,  
  'a-b-c-e':2,  
  'a-b-f':3,  
  'a-j':4  
} 
const data = Object.keys(strarr).reduce(function (acc, cur) {
  const _keys = cur.split('-');
  let tmp = acc;
  _keys.forEach((key, idx) => {
    if (idx === _keys.length - 1) {
      tmp[key] = strarr[cur];
    } else {
      if (!tmp[key]) tmp[key] = {};
      tmp = tmp[key];
    }
  });
  return acc;
}, {});
//迭代
function strObjtoTree(strarr) {
    let obj = {};

    for (let key in strarr) {
        let propertyNames = key.split('-');
        let lastPropertyName = propertyNames.pop();
        let nestedObj = obj;
        for (let propertyName of propertyNames) {
            nestedObj[propertyName] = nestedObj[propertyName] || {};
            nestedObj = nestedObj[propertyName];
        }
        nestedObj[lastPropertyName] = strarr[key];
    }
    return obj
}
//递归
function convertToObject(strarr) {
  const result = {};
  for (let key in strarr) {
    const keys = key.split('-');
    let obj = result;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      obj[k] = obj[k] || {};
      obj = obj[k];
    }
    obj[keys[keys.length - 1]] = strarr[key];
  }
  return result;
}
```

#### 判断有没有符合的路径并打印所有的路径

```
const data3 = [
    {
        id: 1,
        name: '前端',
        children: [
            {
                id: 2,
                name: 'html',
                children: [
                    { id: 5, name: 'vue', children: [] },
                    { id: 6, name: 're', children: [] },
                ]
            },
            {
                id: 3,
                name: 'html',
                children: [
                    { id: 7, name: 'vue', children: [] },
                    { id: 8, name: 're', children: [] },
                ]
            }
        ]
    }
]
```

#### 获取树结构中的name

```
let data = [
      {
          "name": "1-1",
          "kind": "oo",
          "children": [
              {
                  "name": "2-2",
                  "kind": "ii",
​
              },
              {
                  "name": "3-3",
                  "children": [
                      {
                          "name": "4-4",
                          "children": [
                              {
                                  "name": '707'
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "name": "5-5",
      },
      {
          "name": "6-6"
      }
  ]
  function getName(data, key = "name") {
      let result = [];
      if (Array.isArray(data)) {
          for (let item of data) {
              if (item[key]) {
                  result.push(item[key]);
              }
              if (item.children) {
                  result = result.concat(getName(item.children));
              }
          }
          return result;
      } else {
          return result;
      }
  }
​
  console.log(getName(data))
```