/**
 * * Pascal's Triangle
 * https://leetcode.cn/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const output = []
  let i = 0
  while (i < numRows) {
    const row = Array(i + 1).fill(1)
    const mid = Math.round((i + 1) / 2)
    let j = 1
    const lastRow = output[i - 1]
    while (j < mid) {
      row[j] = row[i - j] = lastRow[j - 1] + lastRow[j]
      j++
    }
    i++
    output.push(row)
  }
  return output
}

module.exports = generate
