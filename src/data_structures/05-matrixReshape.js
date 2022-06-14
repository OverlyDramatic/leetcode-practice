/**
 * * Reshape the Matrix
 * https://leetcode.cn/problems/reshape-the-matrix/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length
  const n = mat[0].length
  if (m * n === r * c) {
    const flattenArr = [];
    for (const row of mat) {
      for (const num of row) {
        flattenArr.push(num)
      }
    }
    const output = []
    for (const index in flattenArr) {
      const row = Math.floor(index / c)
      const col = index % c
      if (!output[row]) {
        output[row] = []
      }
      output[row][col] = flattenArr[index]
    }
    return output
  } else {
    return mat
  }
}

module.exports = matrixReshape
