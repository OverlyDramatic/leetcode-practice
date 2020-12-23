/**
 * * 字符串中的第一个唯一字符 https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // * 解法1 O(n^2)
  // const letterSet = new Set()
  // for (let i in s) {
  //   const _letter = s[i]
  //   if (letterSet.has(_letter)) continue
  //   else if (s.lastIndexOf(_letter) !== i - 0) {
  //     letterSet.add(_letter)
  //     continue
  //   }
  //   return i - 0
  // }
  // return -1
  // * 解法2 O(n)
  // const countMap = {}
  // for (let i in s) {
  //   const _cur = s[i]
  //   if (!countMap[_cur]) {
  //     countMap[_cur] = 1
  //   } else {
  //     countMap[_cur]++
  //   }
  // }
  // for (let i in s) {
  //   if (countMap[s[i]] === 1) {
  //     return i - 0
  //   }
  // }
  // return -1
  // * 解法3
  // for (let i in s) {
  //   const index = i - 0
  //   if (index === s.lastIndexOf(s[i]) && index === s.indexOf(s[i])) {
  //     return i - 0
  //   }
  // }
  // return -1
  // * 解法4
  let index = s.length
  for (let i of 'abcdefghijklmnopqrstuvwxyz') {
    const _index = s.indexOf(i)
    const _lastIndex = s.lastIndexOf(i)
    if (_index !== -1 && _index === _lastIndex) {
      index = Math.min(_index, index)
    }
  }
  return index === s.length ? -1 : index
}

module.exports = firstUniqChar
