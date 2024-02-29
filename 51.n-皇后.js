/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = []
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    function backtrack(board, row) {
        if(row === board.length) {
            // 二位数组合并为字符串形式
            const result = board.map(v => v.join(''))
            res.push(result)
            return
        }
        let n = board[row].length
        for(let col = 0; col < n; col++) {
            // check
            if(!isValid(board, row, col)) {
                continue
            }
            board[row][col] = 'Q'
            backtrack(board, row + 1)
            board[row][col] = '.'
        }
    }

    function isValid(board, row, col) {
        // N皇后是否冲突(上，左上，右上)
        for(let i = 0; i < row; i++) {
            if(board[i][col] === 'Q') {
                return false
            }
        }

        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j] === 'Q') {
                return false
            }
        }

        for(let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
            if(board[i][j] === 'Q') {
                return false
            }
        }
        return true
    }

    backtrack(board, 0)
    return res 
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end