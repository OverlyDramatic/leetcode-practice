/**
 * * 杨辉三角 https://leetcode-cn.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
function pascalsTriangle(numRows) {
  const result = []
  for (let row = 0; row < numRows; row++) {
    const numRow = Array(row + 1).fill(1)
    for (let i = 1; i <= row; i++) {
      // const lastRow = result[row - 1]
      numRow[i] = (result[row - 1][i - 1]) + (result[row - 1][i] || 0)
    }
    result.push(numRow)
  }
  return result
}

module.exports = pascalsTriangle
