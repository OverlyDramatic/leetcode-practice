/**
 * * 同构字符串 https://leetcode-cn.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // * 解法1 - 哈希表
  const pattern1 = {}
  const pattern2 = {}
  for (let i in s) {
    const key1 = s[i]
    const value1 = t[i]
    const key2 = t[i]
    const value2 = s[i]
    if (!pattern1[key1] && !pattern2[key2]) {
      pattern1[key1] = value1
      pattern2[key2] = value2
    } else if (pattern1[key1] !== value1 && pattern2[key2] !== value2 ) {
      return false
    }
  }
  return true
}

module.exports = isIsomorphic
