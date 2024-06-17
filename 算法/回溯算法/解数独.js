// 解数独
//判断棋盘合法又有三个纬度

function isValid(row, col, board, value) {
    let len = board.length
    // 判断行里是否有重复
    for (let col = 0; col < len; col++) {
        if (board[row][col] === value) {
            return false
        }
    }
    // 判断列里是否有重复
    for (let row = 0; row < len; row++) {
        if (board[row][col] === value) {
            return false
        }
    }

    // 判断9方格里面是否有重复
    let startRow = Math.floor(row / 3) * 3
    let startCol = Math.floor(col / 3) * 3

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === value) {
                return false
            }
        }
    }
    return true
}

var solveSudoku = function (board) {
    backtracking(board)
    return board
    function backtracking(board) {
        // for循环一个遍历棋盘行， 一个for循环遍历棋盘的列
        // 一行一行的确认下来以后，递归遍历这个位置放置9个数字的肯能性
        for (let i = 0; i < 9; i++) { //遍历行
            for (let j = 0; j < 9; j++) { //遍历列
                if (board[i][j] === ".") { // 跳过原始数字
                    //（i,j)这个位置放数字是否合适
                    for (let k = 1; k <= 9; k++) {
                        if (isValid(i, j, board, `${k}`)) {
                            // 放置K
                            board[i][j] = `${k}`
                            // 如果找到一组合适的就立刻返回
                            if (backtracking(board)) {
                                return true
                            }
                            //回溯 撤销k
                            board[i][j] = "."
                        }
                    }
                    // 九个数字都试完了，都不行就返回false,
                    return false
                    // 因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！
                    // 那么会直接返回， 「这也就是为什么没有终止条件也不会永远填不满棋盘而无限递归下去！」
                }

            }
        }
        //遍历完没有返回false，说明找到了合适的棋盘位置
        return true
    }
}
