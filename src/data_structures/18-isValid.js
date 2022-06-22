/**
 * * Valid Parentheses
 * https://leetcode.cn/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketMap = {
      ')': '(',
      ']': '[',
      '}': '{'
  }
  const stack = []
  if (s.length % 2) {
      return false
  }
  for (let i = 0, len = s.length; i < len; i++) {
      const char = s.charAt(i)
      if (!bracketMap[char]) {
          stack.push(char)
      } else if (bracketMap[char] !== stack.pop()) {
          return false
      }
  }
  return !stack.length
};

module.exports = isValid
