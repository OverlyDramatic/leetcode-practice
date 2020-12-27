/**
 * * 最长回文子串 https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // * 中心扩散法
  const loopLength = s.length
  let substring = ''
  for (let i = 0; i < loopLength; i++) {
    let _newEvenString = ''
    let _newOddString = ''
    _newOddString = findOddSubString(s, i)
    if (s[i] === s[i + 1]) {
      _newEvenString = findEvenSubString(s, i)
      if (_newOddString.length < _newEvenString.length) {
        _newOddString = _newEvenString
      }
    }
    if (substring.length < _newOddString.length) {
      substring = _newOddString
    }
  }
  return substring
}

function findOddSubString(s, index) {
  return findSubString(s, index, index)
}

function findEvenSubString(s, index) {
  return findSubString(s, index, index + 1)
}

function findSubString(s, left, right) {
  let substring = s.slice(left--, ++right)
  const length = s.length
  while (left >= 0 && right < length) {
    const leftChar = s[left--]
    const rightChar = s[right++]
    if (leftChar === rightChar) {
      substring = leftChar + substring + rightChar
    } else {
      break
    }
  }
  return substring
}

module.exports = longestPalindrome
