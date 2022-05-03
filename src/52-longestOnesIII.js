/**
 * * Max Consecutive Ones III
 * https://leetcode-cn.com/problems/max-consecutive-ones-iii/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // * 滑动窗口
  let [zeroCount, maxCount, length] = [0, 0, nums.length];
  let [left, right] = [0, 0];

  while (right < length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount;
};

module.exports = longestOnes;
