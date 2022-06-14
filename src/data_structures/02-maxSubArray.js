/**
 * * Maximum Subarray
 * https://leetcode.cn/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
function Status(lSum, rSum, mSum, iSum) {
  this.lSum = lSum
  this.rSum = rSum
  this.mSum = mSum
  this.iSum = iSum
}

function pushUp(lSub, rSub) {
  const iSum = lSub.iSum + rSub.iSum
  const lSum = Math.max(lSub.lSum, lSub.iSum + rSub.lSum)
  const rSum = Math.max(rSub.rSum, rSub.iSum + lSub.rSum)
  const mSum = Math.max(Math.max(lSub.mSum, rSub.mSum), lSub.rSum + rSub.lSum)
  return new Status(lSum, rSum, mSum, iSum)
}

function getInfo(list, l, r) {
  if (l === r) {
    const num = list[l]
    return new Status(num, num, num, num)
  }
  const m = (l + r) >> 1
  const lSub = getInfo(list, l, m)
  const rSub = getInfo(list, m + 1, r)
  return pushUp(lSub, rSub)
}

var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum
}

module.exports = maxSubArray
