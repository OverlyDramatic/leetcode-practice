/**
 * * Ransom Note
 * https://leetcode.cn/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = {}
  for (const char of magazine) {
    if (!magazineMap[char]) {
      magazineMap[char] = 1
    } else {
      magazineMap[char]++
    }
  }
  for (const char of ransomNote) {
    if (!magazineMap[char]) {
      return false
    }
    magazineMap[char]--
  }
  return true
}

module.exports = canConstruct
