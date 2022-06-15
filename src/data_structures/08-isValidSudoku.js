/**
 * * Valid Sudoku
 * https://leetcode.cn/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => Array(9).fill(0))
  const columns = new Array(9).fill(0).map(() => Array(9).fill(0))
  const subboxes = new Array(3).fill(0).map(() =>
    Array(3)
      .fill(0)
      .map(() => Array(9).fill(0))
  )
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      const boxI = Math.floor(i / 3)
      const boxJ = Math.floor(j / 3)
      if (num !== '.') {
        const index = num.charCodeAt() - '0'.charCodeAt() - 1
        if (
          rows[i][index]++ > 0 ||
          columns[j][index]++ > 0 ||
          subboxes[boxI][boxJ][index]++ > 0
        ) {
          return false
        }
      }
    }
  }
  return true
}

module.exports = isValidSudoku
