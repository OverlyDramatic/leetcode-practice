/**
 * * 整数反转
 * * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
// * 解法1
function reverseInt (x) {
  let _arr = x.toString().split('')
  let _start = x.toString().startsWith('-') ? '-' : ''
  const result = parseInt(_start + _arr.reverse().join(''))
  return (result < -2147483648 || result > 2147483647) ? 0 : result
}

module.exports = reverseInt

// * 解法2
// function reverseInt2(x) {
//   let flag = ''
//   let _str = x.toString()
//   if (x < 0) {
//     flag = '-'
//     _str = _str.slice('1')
//   }
//   let result = ''
//   for (let i = _str.length - 1; i >=0; i--) {
//     result += _str.charAt(i)
//   }
//   result = parseInt(flag + result)
//   return (result < -2147483648 || result > 2147483647) ? 0 : result
// }

// module.exports = reverseInt2
