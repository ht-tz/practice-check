function curries(fn) {
    return function curry(...args) {
        if (args.length < fn.length) {
            return function (...thisArg) {
                return curry(...args.concat([...thisArg]));
            }
        } else {
            return fn(...args)
        }
    }

}

function getSum(a, b, c) {
    return a + b + c
}


function curried(fn) {
    return function curry(...args) {
        //形式参数的个数大于实际参数的个数
        if (args.length < fn.length) {
            return function (...thisArg) {
                return curry(...args.concat([...thisArg]));
            }
        } else {
            fn(...args)
        }
    }
}

const sum = curries(getSum)
console.log(sum(1)(2)(3));