/**
 * * Plus One https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const num = (digits[i] + 1) % 10
    digits[i] = num
    if (num !== 0) {
      break
    } else if (i === 0) {
      digits.unshift(1)
    }
  }
  return digits
}

module.exports = plusOne
