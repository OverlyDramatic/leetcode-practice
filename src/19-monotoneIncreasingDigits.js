/**
 * * 单调递增的数字 https://leetcode-cn.com/problems/monotone-increasing-digits/
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  const strN = N.toString().split('').map(num => +num)
  let upIndex = 1
  let res = N
  while (upIndex < strN.length && strN[upIndex - 1] <= strN[upIndex]) {
    upIndex++
  }
  if (upIndex < strN.length) {
    while (upIndex > 0 && strN[upIndex - 1] > strN[upIndex]) {
      strN[upIndex - 1] --
      upIndex--
    }
    for (let i = upIndex + 1; i < strN.length; i++) {
      strN[i] = 9
    }
    res = parseInt(strN.join(''))
  }
  return res
}

module.exports = monotoneIncreasingDigits
