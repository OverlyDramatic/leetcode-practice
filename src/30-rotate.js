/**
 * * 旋转图像 https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // * 解法1 - 暴力复制
  // const n = matrix.length
  // const _matrixCopy = new Array(n).fill(null).map(() => new Array(n).fill(undefined))
  // for (let i in matrix) {
  //   const row = matrix[i]
  //   for (let j in row) {
  //     _matrixCopy[j][n - i - 1] = row[j]
  //   }
  // }
  // for (let i in matrix) {
  //   const row = matrix[i]
  //   const _rowCopy = _matrixCopy[i]
  //   for (let j in row) {
  //     row[j] = _rowCopy[j]
  //   }
  // }
  // return matrix
  // * 解法2 - 原地旋转
  // const n = matrix.length
  // let _temp = NaN
  // let x = Math.ceil(n / 2)
  // let y = Math.floor(n / 2)
  // for (let i = 0; i < x; i++) {
  //   for (let j = 0; j < y; j++) {
  //     _temp = matrix[i][j]
  //     matrix[i][j] = matrix[n - j - 1][i]
  //     matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
  //     matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
  //     matrix[j][n - i - 1] = _temp
  //   }
  // }
  // return matrix
  // * 解法3 - 水平翻转、再对角线翻转
  const n = matrix.length
  const nChange = Math.floor(n / 2)
  for (let i = 0; i < nChange; i++) {
    for (let j = 0; j < n; j++) {
      ;[matrix[i][j], matrix[n - i - 1][j]] = [
        matrix[n - i - 1][j],
        matrix[i][j],
      ]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
}

module.exports = rotate
