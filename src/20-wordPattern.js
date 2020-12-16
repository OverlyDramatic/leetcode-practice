/**
 * * 单词规律 https://leetcode-cn.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // * 解法1
  const pArr = pattern.split('')
  const sArr = s.split(' ')
  if (pArr.length !== sArr.length) {
    return false
  }
  const pSMap = {}
  for (let i = 0; i < pArr.length; i++) {
    const key = pArr[i]
    if (!pSMap[key]) {
      const value = sArr[i]
      for (let item of Object.keys(pSMap)) {
        if (pSMap[item] === value) {
          return false
        }
      }
      pSMap[key] = value
    } else {
      if (pSMap[key] !== sArr[i]) {
        return false
      }
    }
  }
  return true
  // * 解法2
  // const sArr = s.split(' ')
  // const len = sArr.length
  // if (len !== pattern.length) {
  //   return false
  // }
  // let codeS = '', codeP = ''
  // for (let i = 0; i < len; i++) {
  //   codeS += sArr.indexOf(sArr[i])
  //   codeP += pattern.indexOf(pattern[i])
  // }
  // return codeS === codeP
}

module.exports = wordPattern
