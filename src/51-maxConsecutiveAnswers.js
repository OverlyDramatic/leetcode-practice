/**
 * *  Maximize the Confusion of an Exam
 * https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // * 1. 滑动窗口
  return Math.max(
    getMaxCount(answerKey, k, 'T'),
    getMaxCount(answerKey, k, 'F')
  )

  function getMaxCount(answerKey, k, reverseKey) {
    let [left, right, maxCount, n] = [0, 0, 0, answerKey.length]
    let count = 0
    while (right < n) {
      if (answerKey[right] === reverseKey) {
        count++
      }
      while (count > k) {
        if (answerKey[left] === reverseKey) {
          count--
        }
        left++
      }
      maxCount = Math.max(maxCount, right - left + 1)
      right++
    }
    return maxCount
  }
}

module.exports = maxConsecutiveAnswers
