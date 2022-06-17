/**
 * * Permutation in String
 * https://leetcode.cn/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const { length: l1 } = s1
  const { length: l2 } = s2
  if (l1 > l2) {
    return false
  }
  const l1Count = Array(26).fill(0)
  const l2Count = Array(26).fill(0)
  const charIndex = 'a'.charCodeAt()
  let left = 0
  let right = left + l1
  for (let i = 0; i < l1; i++) {
    l1Count[s1.charAt(i).charCodeAt() - charIndex]++
    l2Count[s2.charAt(i).charCodeAt() - charIndex]++
  }
  const l1CountStr = l1Count.toString()
  while (right <= l2) {
    if (l1CountStr === l2Count.toString()) {
      return true
    }
    l2Count[s2.charAt(left++).charCodeAt() - charIndex]--
    l2Count[s2.charAt(right++).charCodeAt() - charIndex]++
  }
  return false
}

module.exports = checkInclusion
