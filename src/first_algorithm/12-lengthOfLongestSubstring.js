/**
 * * Longest Substring Without Repeating Characters
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = (right = max = 0)
  const charSet = new Set()
  const length = s.length
  while (right < length) {
    const char = s.charAt(right)
    if (charSet.has(char)) {
      let _char = ''
      do {
        _char = s.charAt(left)
        left++
        charSet.delete(_char)
      } while (_char !== char)
    }
    right++
    max = Math.max(max, right - left)
    charSet.add(char)
  }
  return max
}

module.exports = lengthOfLongestSubstring
