/**
 * * 找不同 https://leetcode-cn.com/problems/find-the-difference/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // * 解法1
  const charA = 'a'.charCodeAt()
  const sArr = new Array(26).fill(0)
  const tArr = new Array(26).fill(0)
  for (let i in s) {
    sArr[s[i].charCodeAt() - charA]++
    tArr[t[i].charCodeAt() - charA]++
  }
  tArr[t[t.length - 1].charCodeAt() - charA]++
  for (let i in sArr) {
    if (sArr[i] !== tArr[i]) {
      return String.fromCharCode(i - 0 + charA)
    }
  }
  // * 解法2 - 排序
  // const sArr = s.split('')
  // const tArr = t.split('')
  // sArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  // tArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  // for (let i in tArr) {
  //   if (sArr[i] !== tArr[i]) {
  //     return tArr[i]
  //   }
  // }
}

module.exports = findTheDifference
