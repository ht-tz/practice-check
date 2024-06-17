// 类数组（Array-like Object）是指具有以下特征的对象：
//
// 拥有数值索引（numeric indices）：即可以通过整数索引访问对象的元素，类似于数组。
// 拥有 length 属性：表示对象中元素的个数。
// 尽管类数组对象具有数值索引和 length 属性，但它们通常不具备数组对象的方法（例如 push、pop 等），也不继承自数组原型链。常见的类数组对象包括函数的 arguments 对象、DOM 元素列表（如通过 document.querySelectorAll 返回的 NodeList 对象）等。
//
// 由于类数组对象不具备数组对象的方法，因此如果需要对其进行数组操作，通常需要将其转换为真正的数组。这可以通过 Array.from() 方法或使用展开运算符（...）来实现。
//
// 例如，将函数的 arguments 对象转换为数组：

//类数组转数组的方法
// 1. 拓展运算符
[...arrayLike]
Array.from(arrayLikey)
Array.prototype.slice.call(arrayLike)
Array.apply(null,arrayLike)
Array.prototype.concat.apply([],arrayLike)