// parseInt
// string radix 解析一个字符串并返回指定的十进制整数
console.log(parseInt('123', 10))
//  radix 表示2，到36的整数  表示进制的基数，超出这个范围NaN

// 数值转36进制
console.log(parseFloat(3.14))
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
parseFloat({
    toString: function () {
        return "3.14";
    },
});
