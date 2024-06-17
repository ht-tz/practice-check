let strs = {
    'a-b-c-d': 1,
    'a-b-c-e': 2,
    'a-b-f': 3,
    'a-j': 4
}

function buildTreeFromPaths(obj) {
    let root = {}
    let paths = Object.keys(obj);
    for (let path of paths) {
        let  arr = path.split('-');
        let currentNode = root
        for (let s of arr) {
            if(!currentNode[s]) {
                currentNode[s] = {}
            }
            if (s === arr[arr.length - 1]) {
                currentNode[s].value = obj[path]
            }
            currentNode = currentNode[s]
        }
    }
    return root
}
let data = buildTreeFromPaths(strs)
console.log(JSON.stringify(data))