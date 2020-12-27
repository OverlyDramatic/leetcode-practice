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
    const x = s[i]
    const y = t[i]
    if ((pattern1[x] && pattern1[x] !== y)|| (pattern2[y] && pattern2[y] !== x)) {
      return false
    }
    pattern1[x] = y
    pattern2[y] = x
  }
  return true
}

module.exports = isIsomorphic
