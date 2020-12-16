/**
 * * 无重复字符的最长子串 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // * 解法1
  // const strLen = s.length
  // if (!strLen) {
  //   return 0
  // }
  // let maxLength = 0
  // let subStrArr = []
  // for (let i = 0; i < strLen; i++) {
  //   const letter = s[i]
  //   const index = subStrArr.indexOf(letter)
  //   if (index === -1) {
  //     subStrArr.push(letter)
  //   } else {
  //     maxLength = Math.max(maxLength, subStrArr.length)
  //     subStrArr = subStrArr.slice(index + 1)
  //     subStrArr.push(letter)
  //   }
  // }
  // return Math.max(maxLength, subStrArr.length)
  // * 解法2
  let maxlength = 0
  let i = 0, j = 0
  while (j < s.length) {
    const index = s.substring(i, j).indexOf(s[j])
    if (index !== -1) {
      maxlength = Math.max(maxlength, j - i)
      i = i + index + 1
    }
    j++
  }
  return Math.max(maxlength, j - i)
}

module.exports = lengthOfLongestSubstring
