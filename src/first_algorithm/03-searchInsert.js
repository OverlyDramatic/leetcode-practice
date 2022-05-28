/**
 * * Search Insert Position
 * https://leetcode.cn/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let pLeft = 0;
  let pRight = nums.length - 1;
  while (pLeft < pRight) {
    const pMid = Math.floor((pLeft + pRight) / 2);
    const num = nums[pMid];
    if (num > target) {
      pRight = pMid - 1;
    } else if (num < target) {
      pLeft = pMid + 1;
    } else {
      return pMid;
    }
  }
  const num = nums[pLeft];
  if (num >= target) {
    return pLeft;
  } else {
    return pLeft + 1;
  }
};

module.exports = searchInsert;
