function swap(arr,i) {
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
}


function bubble(arr) {
    for(let j = arr.length - 1 ; j >= 0; j--) {
        let flag = true; 
        for(let i = 0; i < j; i++) {
            if(arr[i] >arr[i+1]) {
                swap(arr,i,i+1)
                // flag = false
            }
        }
        console.log(arr);

        //break用于完全结束一个循环，跳出循环体执行循环后面的语句
        // if(flag) break;
    }
    return arr
}


let arr = [10,8, 6, 5, 4, 1]
console.log(bubble(arr))