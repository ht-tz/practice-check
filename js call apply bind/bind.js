//bind实现方式

/**
 * bind和apply和call的区别： 前者返回了一个绑定上下文的函数，后两个是执行了函数
 */
// {
//     // 1.模拟实现第一步
//     //返回一个函数
//     Function.prototype.myBind = function (context) {
//         //this指向调用者
//          let self = this;
//          // 返回一个函数
//         return function () {
//             // apply call 指定this
//             // 改变this的指向
//             return self.apply(context)
//         }
//     }
//
//
//     //this 测试用例
//
//     var value= 1;
//     var foo = {
//         value: 'foo',
//     }
//
//     function bar() {
//         return this.value;
//     }
//     var  foobar = bar.bind(foo)
//     console.log(foobar())
// }

{
    //模拟实现第二步
    //模拟实现第二步
    //对于第 3 点，使用 arguments 获取参数数组并作为 self.apply() 的第二个参数。
    // 对于第 4 点，获取返回函数的参数，然后同第3点的参数合并成一个参数数组，并作为 self.apply() 的第二个参数。

    Function.prototype.bind2 = function (context) {
        //this指向调用者
        let self = this;
        //实现第三点 第一个参数是this，截取this之后的参数
        var args = Array.prototype.slice.call(arguments,1);

        return function () {
            //实现第四点 获取返回的参数，同上参数合并作为self.apply()的第二哥参数
             var bindArgs = Array.prototype.slice.call(arguments)
            return self.apply(context,args.concat(bindArgs))
        }
    }

    // 测试用例
    var value = 2;

    var foo = {
        value: 1
    };

    function bar(name, age) {
        return {
            value: this.value,
            name: name,
            age: age
        }
    };

    var bindFoo = bar.bind2(foo, "Jack");
    console.log(bindFoo(20));
// {value: 1, name: "Jack", age: 20}

}

{
    //第三步
    //一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

    Function.prototype.bind3  = function (context) {
         let self = this;
         var args = Array.prototype.slice.call(arguments,1);
         var fBound = function () {
             var bindArgs = Array.prototype.slice.call(arguments,1);

             /**
              * 注释1：
              * 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true，可以让实例获得来自绑定函数的值，
              * 即上例中实例会具有 habit 属性。
              * 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
              */

             self.apply(
                 this instanceof fBound ? this : context,args.concat(bindArgs)
             )
         }

        /**
         * 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值，
         * 即上例中 obj 可以获取到 bar 原型上的 friend。
         */
        fBound.prototype = this.prototype;
        return fBound;
    }

}

{
    //模拟实现第四部
    // 上面实现中 fBound.prototype = this.prototype有一个缺点，直接修改 fBound.prototype 的时候，也会直接修改 this.prototype。
    Function.prototype.bind3  = function (context) {
        let self = this;
        var args = Array.prototype.slice.call(arguments,1);
        var FONP = function (){}
        var fBound = function () {
            var bindArgs = Array.prototype.slice.call(arguments,1);

            /**
             * 注释1：
             * 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true，可以让实例获得来自绑定函数的值，
             * 即上例中实例会具有 habit 属性。
             * 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
             */

            self.apply(
                this instanceof fBound ? this : context,args.concat(bindArgs)
            )
        }

        /**
         * 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值，
         * 即上例中 obj 可以获取到 bar 原型上的 friend。
         */
        FONP.prototype = this.prototype;
        fBound.prototype = new FONP()
        return fBound;
    }
    // 测试用例
    var value = 2;
    var foo = {
        value: 1
    };
    function bar(name, age) {
        this.habit = 'shopping';
        console.log(this.value);
        console.log(name);
        console.log(age);
    }
    bar.prototype.friend = 'kevin';

    var bindFoo = bar.bind3(foo, 'Jack'); // bind2
    var obj = new bindFoo(20); // 返回正确

    console.log(bindFoo(20))
    console.log(obj.habit)
    console.log(obj.friend)
    //修改原型
    obj.__proto__.friend = 'hhaha'
    console.log(bar.prototype.friend)

   /* //解决原型被修改的方案就是，使用一个空对象作为中介，把fBound.prototype赋值为空对象的实例（原型式继承）
    var FNOP = function () {} //创建一个空对象
    FNOP.prototype = this.prototype; //把空过对象的原型指向绑定函数的原型
    fBound.prototype = new FNOP(); //将空对象的实例赋值给fBound.prototype*/

}

{
    // 第五版
    Function.prototype.bind2 = function (context) {

        if (typeof this !== "function") {
            throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var self = this;
        var args = Array.prototype.slice.call(arguments, 1);

        var fNOP = function () {};

        var fBound = function () {
            var bindArgs = Array.prototype.slice.call(arguments);
            return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
        }
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    }
}