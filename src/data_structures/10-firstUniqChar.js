/**
 * * First Unique Character in a String
 * https://leetcode.cn/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charCount = {}
  for (const char of s) {
    if (!charCount[char]) {
      charCount[char] = 1
    } else {
      charCount[char]++
    }
  }
  const { length } = s
  let i = 0
  while (i < length) {
    if (charCount[s.substring(i, ++i)] === 1) {
      return i - 1
    }
  }
  return -1
}

module.exports = firstUniqChar
