// 阿里面试题

//this arguments
//this-》函数的调用者
//arguments-》 获取函数实际传递的参数

var length = 1;

function fn() {
    console.log(this.length);
}

var obj = {
    length: 100,
    action: function (callback) {
        // arguments  函数实际接收的参数 fn 1,2,3,4
        //输出1 //callback每有调用3 指向全局的window
        callback(); //this->window
        //输出二
        arguments[0](); //指向数组本身 5
        //输出3
        var foo = arguments[0];
        foo(); //指向window 1
        //输出4
        this.foo2 = arguments[0]
        this.foo2(); //this ->Obj obj.length = 100
    }
}

var arr1 = [1,2,3,4];

obj.action(fn, ...arr1)
//
// {
//     //引题
//     var length = 1;
//
//     function foo() {
//         console.log(this.length);
//     }
//
//     var arr2 = [foo,2,3];
//     arr2[0](); // this-》arr2数组本身，指向这个数组 3最终的输出是3
//
//     var f1 = arr2[0]
//     f1() //指向window 1
// }