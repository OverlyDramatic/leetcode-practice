/**
 * * Valid Anagram
 * https://leetcode.cn/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hash = {}
  if (s.length !== t.length) {
    return false
  }
  for (const char of s) {
    if (!hash[char]) {
      hash[char] = 1
    } else {
      hash[char]++
    }
  }
  for (const char of t) {
    if (!hash[char]) {
      return false
    }
    hash[char]--
  }
  return true
};

module.exports = isAnagram
