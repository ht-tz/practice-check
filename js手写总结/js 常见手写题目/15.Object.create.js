function myCreate(obj) {
    function F() {
    }

    F.prototype = obj;
    return new F();
}
 //Object.create() 会将参数对象作为一个新创建的空对象的原型, 并返回这个空对象