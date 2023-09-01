//手写instanceof
{
    /*
    1.内部作用机制，是通过对象中的原型链中是不是能找到类型的prototype
    2.原理就是 一层一层查找__proto__，如果constructor.prototype相等则返回true，一直没找到则返回false
    3.instance.[__proto__ ...] === instance.constructor.prototype
     */

    function  instanceOf(left, right) {
        //left,instanceof右表达式
         var O = right.prototype;
         //获取右表达式的原型的显示原型
        left = left.__proto__;
        while (true) {
            //  如果查找完整个原型链还找不到prototype属性那么就返回null
            //Object.prototype.__proto__ === null
            if (left === null) {
                return false;
            }
            if(O === left) {
            return true
            }
            //以上两个条件都不符合就继续向上找
            left = left.__proto__;
        }

    }

    function myinstanceof(left,right) {
        let o = right.prototype;
        left = left.__proto__;
        while (true) {
             if (left === null){
                 return false;
             } if (o === left) {
                  return true
            }
             left= left.__proto__;
        }
    }
    function D(){}
    function C(){}
    var o = new C()

    console.log(instanceOf(o,D))
    console.log(instanceOf(o,C))
    console.log({} instanceof Object)
}