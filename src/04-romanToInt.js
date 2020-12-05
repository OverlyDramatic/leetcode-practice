/**
 * * 罗马数字转整数 https://leetcode-cn.com/problems/roman-to-integer/
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * @param {string} s
 * @return {number}
 */
const romanMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

function romanToInt (s) {
  let result = 0
  const length = s.length
  for (let i = 0; i < length; i++) {
    if (s[i] === 'I' || s[i] === 'X' || s[i] === 'C') {
      const _num = romanMap[s[i] + s[i + 1]]
      if (_num) {
        result += _num
        ++i
        continue
      }
    }
    result += romanMap[s[i]]
  }
  return result
}

module.exports = romanToInt
