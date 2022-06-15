/**
 * * Set Matrix Zeroes
 * https://leetcode.cn/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = Array(matrix.length).fill(false)
  const col = Array(matrix[0].length).fill(false)
  for (const i in matrix) {
    for (const j in matrix[i]) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true
      }
    }
  }
  for (const i in matrix) {
    for (const j in matrix[i]) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

module.exports = setZeroes
