/**
 * * Move Zeroes
 * https://leetcode.cn/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // * 1. slow splice
  // let length = nums.length
  // let i = 0;
  // while (i < length) {
  //   const num = nums[i];
  //   if (num === 0) {
  //     nums.splice(i, 1);
  //     nums.push(num);
  //     length--;
  //   } else {
  //     i++;
  //   }
  // }
  // return nums;
  // * 2. double pointer
  const { length } = nums;
  let left = right = 0;
  while (right < length) {
    const num = nums[right];
    if (num !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

module.exports = moveZeroes;
