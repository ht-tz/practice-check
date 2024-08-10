let a = {
    value: 1,
    valueOf() {
        return this.value++;
    },
    toString() {
        return this.value++;
    },
};

if (a == 1 && a == 2 && a == 3) {
    console.log(true);
}

let baseObj = {
    valueof() {
        return '2';
    },
    toString() {
        return 1;
    },
};

console.log(baseObj == 1);
console.log(baseObj == '2');
// 相等比较操作的是有个对象，
// 另一个是数组或者字符串， 会优先调用对象的valueof方法，
// 对象转换为本数据类型，再进行比较
//当valueof返回的不是基本数据类型的时候，才会调用toString方法

// 当操作数是null和undefined的时候分别被转换为数字和NaN，然后按照前面的规则执行加减法运算
