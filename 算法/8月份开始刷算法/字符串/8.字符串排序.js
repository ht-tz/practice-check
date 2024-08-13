function versionCompare(a, b) {
    const arr1 = a.split(".")
    const arr2 = b.split(".")
    const len = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < len; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        } else if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    return 0
}

const version = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
version.sort(versionCompare)
console.log(version)