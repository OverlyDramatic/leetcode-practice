/**
 * * 检测大写字母 https://leetcode-cn.com/problems/detect-capital/
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 分而治之
  if (!word.length) {
    return false
  }
  const firstCase = upperOrLower(word[0])
  if (firstCase === 1) {
      // 1. 首字母大写
      // 1.1 全是大写
      // 1.2 后面字母全小写
      return allUpOrLow(word, 1) || allUpOrLow(word, 0)
  } else if (firstCase === 0) {
      // 2. 首字母小写 - 后面字母全小写
      return allUpOrLow(word, 0)
  }
  return false
};

// 1. 大写 0. 小写 -1. 非字母
function upperOrLower(letter) {
  const index = letter.charCodeAt();
  if (index >= 65 && index <= 90) {
      return 1
  } else if (index >= 97 && index <= 122) {
      return 0
  }
  return -1
}

// 1-up 0-low
function allUpOrLow(str, type) {
  for (let i = 1, letter = str[i]; letter; letter = str[++i]) {
      if (upperOrLower(letter) !== type) {
          return false
      }
  }
  return true
}

module.exports = detectCapitalUse
