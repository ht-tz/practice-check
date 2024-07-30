type Point = {
    x: number
    y: number
}
type id = string | number

type Name = {
    name: string
}
type Age = {
    age: number
}
// 交叉类型
type Person = Age & Name

//  接口用于定义对象
interface P1 {
    x: number
    y: number
}

interface P1 {
    id: string | number
}

interface P1 {
    x: number,
    y: number,
 }


