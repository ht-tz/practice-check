function PromiseAll(array) {
    if (!Array.isArray(array)) return
    let result = []
    let index = 0
    return new Promise((resolve, reject) => {

        // 将返回值添加到数组中
        function addData(key, value) {
            result[key] = value
            index++
            if (array.length === index) {
                resolve(result)
            }
        }

        for (let i = 0; i < array.length; i++) {

            let current = array[i]
            if (current instanceof  Promise) {
                current.then(value=>{
                     addData(i,value)
                },reason => reject(reason))
            } else {
                 addData(i,current)
            }
        }

    })
}