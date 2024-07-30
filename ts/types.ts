// 字符串
let fileName: string = "hello world"; 
let fileName2: string = String(123);
let fullname: string = `my name is ${fileName}.${fileName2}`; // 模板字符串

/** 十进制整数 */

let integer: number = 6;

/** 十进制整数 */

let integer2: number = Number(42);

/** 十进制浮点数 */

let decimal: number = 3.14;

/** 二进制整数 */

let binary: number = 0b1010;

/** 八进制整数 */

let octal: number = 0o744;

/** 十六进制整数 */

let hex: number = 0xf00d;

let symbol = Symbol('')



// 数组的类型
let array: number [] = [1, 2, 5, 6] 
let array2: Array<number> = [1, 2, 5, 6] // 泛型数组 


// 元组类型， 可限制数组的长度和类型  结构赋值有极大的好处
let tuple: [number, string] = [123, 'abc'] // 固定长度，类型不一致会报错
// 枚举类型
enum Color {Red, Green, Blue}

//any 类型官方提供的作弊器 
//unknown 描述不确定的变量的类型  范围更大， unknown 只能 赋值给 unknown 或者 any 


// 所有的类型缩小手段对unkonwn 都有效


let res: unknown = 1
 
if (typeof res === 'number') { 
    res.toFixed() //  hover提示的是number
}


const userInfo : {
     id?: number,
    name?: string|number
} = {id:1, name:"string"}
// 可选类型操作
userInfo.id?.toFixed(); // Optional Chain


//never 表示永远不会发生的类型
function error(message: string): never {// 表示这个函数永远不会有返回值
    throw new Error(message)
} 
// 他是所有类型的儿子 
// 因为是儿子，所以哪一个爹都不能给儿子当儿子 除了它自己
 
const str: string = 'string';

if (typeof str === 'number') {

  str.toLowerCase(); // Property 'toLowerCase' does not exist on type 'never'.ts(2339)

}

// 接口可缺省的属性
interface option{
    url?: string;
    method: 'get' | 'post';
    // 只读取属性
    readonly name: string;
    // 定义函数类型
    (name: string): void;
}

// 索引签名

let languageMap = {
    '1': 1,
    '2': 2
}

//  interface 定义索引签名
interface languageMap1 {
     [name: string]: string
}
interface languageMap1 {
     [rank: number]: string
}

let data: languageMap1 = {
    rank: 'a',
    name:'1'
}


//Type 是将一个班类型的别名抽离出来，从而实现类型的复用
type language = {
    name: string
    age: () => {}
}


{
    // type 和 interface的区别
    // interface 接口可以重复定义，type 不能
    interface language {
        age: () => {}
    }   
    interface language {
        name: string;
    }
    // type 类型别名，不能重复定义
     
}

// 联合类型 可能是number 也可能是 string
function formatPx(size: number | string) {
     // 
}


type ModernUnit = 'vh' | 'vw';

type Unit = 'px' | 'em' | 'rem';

type MessedUp = ModernUnit | Unit; // 类型是 'vh' | 'vw' | 'px' | 'em' | 'rem'

// 多个接口板合并成一个类型，等同接口合并的效果，继承
  type IntersectionType = { id: number; name: string; } 

    & { age: number };

  const mixed: IntersectionType = {

    id: 1,

    name: 'name',

    age: 18
  }

// 合并联合类型，求交集

  type UnionA = 'px' | 'em' | 'rem' | '%';

  type UnionB = 'vh' | 'em' | 'rem' | 'pt';

  type IntersectionUnion = UnionA & UnionB; //'rem' | 'em'

  const intersectionA: IntersectionUnion = 'em'; // ok

  const intersectionB: IntersectionUnion = 'rem'; // ok

//   const intersectionC: IntersectionUnion = 'px'; // ts(2322)

//   const intersectionD: IntersectionUnion = 'pt'; // ts(2322)
 

// 交叉类型的优先级高于联合类型
type UnionIntersectionA = { id: number; } & { name: string; } | { id: string; } & { name: number; }; // 交叉操作符优先级高于联合操作符
type UnionIntersectionB = ('px' | 'em' | 'rem' | '%') | ('vh' | 'em' | 'rem' | 'pt'); // 调整优先级

type UnionIntersectionC = ({ id: number; } & { name: string; } | { id: string; }) & { name: number; };


type UnionIntersectionD = { id: number; } & { name: string; } & { name: number; } | { id: string; } & { name: number; }; // 满足分配率
// 实际等同于 type UnionIntersectionD = { id: string; name: number; };

type UnionIntersectionE = ({ id: string; } | { id: number; } & { name: string; }) & { name: number; }; // 满足交换律
// 实际的等同于 type UnionIntersectionE = { id: string; name: number; };