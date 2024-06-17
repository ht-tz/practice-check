function bubble(array) {
    let len = array.length
    for(let i = len - 1;i>=0;i--) {
        let flag = true
        for(let j = 0;j<i;j++) {
              if(array[j] - array[j +1] >=0) {
                  swap(j,j+1,array)
                  flag = false
              }
        }
        if(flag) break
    }
    return array
}

function swap(i, j, array) {
    let temp = null
     temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

let arr = [7, 65, 4, 3, 22, 100]
console.log(bubble(arr))