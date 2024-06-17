// n皇后检验标准
function isValid(row, col, chessboard, n) {

    //检查列
    for (let i = 0; i < row; i++) {
        //减枝
        if (chessboard[i][col] === "Q") {
            return false
        }
    }
    // 检查45度是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] === "Q") {
            return false
        }
    }

    // 检查135度是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessboard[i][j] === "Q") {
            return false
        }
    }

    return true
}


let n = 4

let arr = new Array(n).fill([]).map(()=>new Array(n).fill("."))
isValid(1, 2, arr, 4)
console.log(arr)

//因为在单层搜索中 ，每一层递归，只会选for循环里面的桶一个元素中，所以不用去除

function solveNQueens(n) {
    let res = []
    // n是棋盘的大小
    //row 是递归到当前棋盘的第几行了
    let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill("."))
    backtracking(n, 0, chessBoard)
    return res

    function backtracking(n, row, board) {
        //说明到叶子节点了
        if (row === n) {
            console.log(board)
            let data = transformBoard(board)
            // 到叶子节点开始收集结果
            res.push(data)
            return
        }

        // 单层勋循环逻辑
        for (let col = 0; col < n; col++) {
            //先判断是否合法
            if (isValid(row, col, board, n)) {
                // 验证合法就可以放进去
                chessBoard[row][col] = "Q"
                // 放置皇后
                backtracking(n, row + 1, chessBoard)
                chessBoard[row][col] = "." //回溯，撤销皇后

            }
        }
    }

    // d
    function transformBoard(board) {
        let resArr = []
        for (let row of board) {
            resArr.push(row.join(""))
        }
        return resArr
    }

}

// let result = solveNQueens(4)
// console.log(result)