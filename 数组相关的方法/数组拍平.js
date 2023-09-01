let ar = [1, [2, 3]]
{//数组扁平化，
    function flatten(array) {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                arr = arr.concat(flatten(array[i]));
            } else {
                arr.push(array[i]);
            }
        }
        return arr
    }


}
{
     function flatten(array) {
       while(array.some(value=>Array.isArray(value))){
           array = [].concat(...array)
       }
       return array
     }

    console.log(flatten(ar))
}