/**
 * * 回文数
 * * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */

//  * 字符串法
// function isPalindrome(x) {
//   if (x < 0) {
//     return false
//   }
//   const _str = x.toString()
//   const _len = _str.length - 1
//   const loopLength = Math.ceil(_len/2)
//   for (let i = 0; i < loopLength; i++) {
//     if (_str[i] !== _str[_len - i]) {
//       return false
//     }
//   }
//   return true
// }

// * 数字法
function isPalindrome(x) {
  // * 负数、末尾为0的数字不满足
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  // * 计算出 x 的左右两半部分
  let leftPart = x
  let rightPart = 0
  while (leftPart > rightPart) {
    rightPart = rightPart * 10 + (leftPart % 10)
    leftPart = Math.floor(leftPart / 10)
  }
  console.log(leftPart, rightPart)
  return leftPart === rightPart || leftPart === Math.floor(rightPart / 10)
}

module.exports = isPalindrome
