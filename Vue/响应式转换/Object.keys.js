/**
 * 1.返回的属性具有什么特性
 * 2. 包含继承的属性吗
 * 3.属性中有负数，有小数，返回的顺序是什么样子的
 * 4 返回属性的顺序
 * 5 属性symbol值，返回的顺序是什么样子的
 * Object.keys(1,2,3）Object.keys(1,2,3)
 */

{
    //返回的属性具有什么特性
    // 对象中具有可枚举的属性
    const obj1 = {
         'a':'bb',
        'b':'bb',
         'c':'cc'
    }

    console.log(Object.keys(obj1))
}

{
    const obj2 = Object.create({},{
    getFoo:{
        value:()=>this.foo(),
        enumerable: false, //是否可以枚举，默认属性
    }
    })

    obj2.foo = 1
    let obj = Object.keys(obj2)
    console.log(obj)
}
{
    //包含继承属性吗

    class test1 {
        constructor(name) {
         this.name = name
        }
    }

    class test2 extends test1{
        constructor(name,age) {
            super(name)
            this.age = age
        }

    }
    const b = new test2('cat', 180);

    console.log(Object.keys(b))
}

{
    let  obj = {
        5:'3',
        a:'a',
        1:'1',
        c:'c',
        Symbol:'Symbol',
        3:'3',
        b:'b'
    }

    //Number ->大小进行排序，大于0的整数排序，不对小数和负数进行排序
    //String ->定义顺序进行输出
    // Symbol -> 定义的顺序进行输出

    /**
     * OwnPropertyKeys 里面规定的，但是会执行keys的时候会判断type是否为string,所以symbol是不会被遍历的，需要用到getOwnPropertySymbols
     *
     */
    console.log(Object.keys(obj))
}

{
    //属性有Symbol，返回的顺序是什么样子的？
    let keys =  Object.keys({
        5:'5',
        Symbol:'Symbol',
        3:'3',
        b:'b'
    })
    console.log(keys)

}
{

        //keys 有负数和小数，返回的顺序是什么样子的？
        let keys = Object.keys({
            3:'3',
            1:"1",
            "-1":'-1',
            0.2:0.2
        })
        //负数->定义的顺序
        //小数-> 定义顺序
        // [ '1', '3', '-1', '0.2' ]

        console.log(keys)


}

{
    {
        // 6. Object.keys(null) && Object.keys(undefined)
        // 传入变量先转换为对象
        // console.log(Object.keys(null))
        // console.log(Object.keys(undefined))
    }
}