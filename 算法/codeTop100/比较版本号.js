/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let n = v1.length
    let m = v2.length
    let i = 0, j = 0
    while (i < n || j < m) {
        let a = 0
        let b = 0
        if (i < n) {
            a = parseInt(v1[i++])
        }
        if (j < m) {
            b = parseInt(v2[j++])
        }

        if (a != b) {
            return a > b ? 1 : -1
        }
    }
    return 0
};