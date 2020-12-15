/**
 * * 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketStack = []
  const couple = {
    '[': ']',
    '{': '}',
    '(': ')'
  }
  for (let i of s) {
    if (Object.keys(couple).indexOf(i) !== -1) {
      bracketStack.push(i)
    } else {
      // const lastIndex = bracketStack.length - 1
      // if (lastIndex < 0 || i !== couple[bracketStack[lastIndex]]) {
      //   return false
      // }
      // bracketStack.pop()
      const lastBracket = bracketStack.pop()
      if (!lastBracket || i !== couple[lastBracket]) {
        return false
      }
    }
  }
  return !bracketStack.length
}

module.exports = isValid
