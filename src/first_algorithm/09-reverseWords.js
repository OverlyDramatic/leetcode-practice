/**
 * * Reverse Words in a String III
 * https://leetcode.cn/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let start,
    end = 0
  let output = ''
  const { length } = s
  const reverse = (str) => {
    let out = ''
    for (let i = str.length - 1; i >= 0; i--) {
      out += str.charAt(i)
    }
    return out
  }
  while (end < length) {
    if (s[end] === ' ') {
      output += reverse(s.substring(start, end))
      start = ++end
      output += ' '
    } else {
      end++
    }
  }
  output += reverse(s.substring(start, end))

  return output
}

module.exports = reverseWords
