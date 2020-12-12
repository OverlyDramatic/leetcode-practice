/**
 * * 摆动序列 https://leetcode-cn.com/problems/wiggle-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
  // * my fisrt solution
  // let loopLength = nums.length
  // if (loopLength <= 1) {
  //   return loopLength
  // }
  // loopLength--
  // const pFirst = { // * 第一个差为正数
  //   maxLength: 1,
  //   currentSign: false // * 当前正负号 - true为正
  // }
  // const nFirst = { // * 第一个差为负数
  //   maxLength: 1,
  //   currentSign: true // * 当前正负号 - false为负
  // }
  // for (let i = 0; i < loopLength; i++) {
  //   const a = nums[i], b = nums[i + 1]
  //   if (a === b) {
  //     continue
  //   }
  //   const currentSign = a < b
  //   if (currentSign !== pFirst.currentSign) {
  //     pFirst.currentSign = currentSign
  //     pFirst.maxLength++
  //   }
  //   if (currentSign !== nFirst.currentSign) {
  //     nFirst.currentSign = currentSign
  //     nFirst.maxLength++
  //   }
  // }
  // return Math.max(pFirst.maxLength, nFirst.maxLength)
  // * my second solution
  let loopLength = nums.length
  if (loopLength <= 1) {
    return loopLength
  }
  loopLength--
  let preDiff = nums[0] - nums[1]
  let maxlength = preDiff === 0 ? 1 : 2
  for (let i = 1; i < loopLength; i++) {
    const currentDiff = nums[i] - nums[i+1]
    if (currentDiff < 0 && preDiff >= 0 || currentDiff > 0 && preDiff <= 0) {
      maxlength++
      preDiff = currentDiff
    }
  }
  return maxlength
}

module.exports = wiggleMaxLength
