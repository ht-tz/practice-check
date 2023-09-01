let arr = [1, 2, 34, 5454, 6565, 34, 2, 2];

function removeElement(array, target) {
    if (Array.isArray(array)) {
        let k = 0;
        for (let i = 0; i < array.length;i++) {
            if (array[i] !== target) {
                array[k] = array[i];
                k++
            }
        }
        return k;
    }
}
console.log(removeElement(arr,2))