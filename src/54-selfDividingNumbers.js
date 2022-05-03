/**
 * * Self Dividing Numbers
 * https://leetcode-cn.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  // * 暴力遍历
  const result = []
  for (let i = left; i <= right; i++) {
    canBeSelfDevided(i) && result.push(i)
  }
  return result

  function canBeSelfDevided(num) {
    let temp = num
    while (temp > 0) {
      const digit = temp % 10
      if (num % digit !== 0) {
        return false
      }
      temp = Math.floor(temp / 10)
    }
    return true
  }
}

module.exports = selfDividingNumbers
