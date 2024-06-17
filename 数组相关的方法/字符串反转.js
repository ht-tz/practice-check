//实现字符串翻转
{
    function reverseString(str) {
        // Step 1. 使用 split()方法返回一个新数组
        var splitString = str.split(''); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2.使用 reverse()方法 翻转数组
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3.使用 join()方法 组合所有的数组元素，从而变成一个新字符串
        var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. 返回翻转后的字符串
        return joinArray; // "olleh"
    }

    console.log(reverseString("dhsbds"))
}


{
    //使用for循环实现

    const reverseString = (str) => {
        let newStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i]
        }
        return newStr//实现字符串翻转
        {
            function reverseString(str) {
                // Step 1. 使用 split()方法返回一个新数组
                var splitString = str.split(''); // var splitString = "hello".split("");
                // ["h", "e", "l", "l", "o"]

                // Step 2.使用 reverse()方法 翻转数组
                var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
                // ["o", "l", "l", "e", "h"]

                // Step 3.使用 join()方法 组合所有的数组元素，从而变成一个新字符串
                var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
                // "olleh"

                //Step 4. 返回翻转后的字符串
                return joinArray; // "olleh"
            }

            console.log(reverseString("dhsbds"))
        }


        {
            //使用for循环实现

            const reverseString = (str) => {
                let newStr = "";
                for (let i = str.length - 1; i >= 0; i--) {
                    newStr += str[i]
                }
                return newStr
            }
            console.log(reverseString("dhsbds"))

        }

        {
            function reverseStr(str) {
                let newStr = ""
                let len = str.length
                while (len) {
                    len--
                    // console.log(len)
                    newStr += str[len]
                }
                return newStr
            }

            console.log(reverseStr("dhsbds"))

        }

        {
            // 实现数组元素翻转
            const reverseArr = (arr) => {
                let len = arr.length;
                let res = []
                for (let i = len - 1; i < len; i--) {
                    res.push(arr[i])
                }
                return res
            }
            let a = [1, 23, 4, 9, 5]

            console.log(reverseStr(a))
        }

        {
            const reverseArr = (arr) => {
                let len = arr.length;
                let res = []
                while(len) {
                    len--
                    res.push(arr[len])
                }
                return res
            }
            let a = [1, 23, 4, 9, 5]

            console.log(reverseStr(a))
        }

    }
    console.log(reverseString("dhsbds"))

}

{
    function reverseStr(str) {
        let newStr = ""
        let len = str.length
        while (len) {
            len--
            // console.log(len)
            newStr += str[len]
        }
        return newStr
    }

    console.log(reverseStr("dhsbds"))

}

{
    // 实现数组元素翻转
    const reverseArr = (arr) => {
        let len = arr.length;
        let res = []
        for (let i = len - 1; i < len; i--) {
            res.push(arr[i])
        }
        return res
    }
    let a = [1, 23, 4, 9, 5]

    console.log(reverseStr(a))
}

{
    const reverseArr = (arr) => {
        let len = arr.length;
        let res = []
        while(len) {
            len--
            res.push(arr[len])
        }
        return res
    }
    let a = [1, 23, 4, 9, 5]

    console.log(reverseStr(a))
}
