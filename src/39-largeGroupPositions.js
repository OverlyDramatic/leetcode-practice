/**
 * * Positions of Large Groups https://leetcode-cn.com/problems/positions-of-large-groups/
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = []
  let _currentChar = s[0]
  let _startIndex = 0
  const length = s.length
  for (let i = 1; i <= length; i++) {
    const char = s[i]
    if (_currentChar !== char) {
      if (i - 1 - _startIndex >= 2) {
        result.push([_startIndex, i - 1])
      }
      _currentChar = char
      _startIndex = i
    }
  }
  return result
}

module.exports = largeGroupPositions
