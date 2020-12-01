/**
 * * 整数反转
 * * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
function reverseInt (x) {
  let _arr = x.toString().split('')
  let _start = x.toString().startsWith('-') ? '-' : ''
  const result = parseInt(_start + _arr.reverse().join(''))
  return (result < -2147483648 || result > 2147483647) ? 0 : result
}

module.exports = reverseInt
