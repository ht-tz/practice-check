function indexOfArr(arr, target)  {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [1,3,4,5,6,7,8,9,10]
console.log(indexOfArr(arr, 8)) //8