/**
 * * Rotate Array
 * https://leetcode.cn/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // * 数组翻转
  // const reverse = (arr, start, end) => {
  //   while (start < end) {
  //     const temp = arr[start];
  //     arr[start++] = arr[end];
  //     arr[end--] = temp;
  //   }
  // }

  // const index = k % nums.length;
  // reverse(nums, 0, nums.length - 1);
  // reverse(nums, 0, index - 1);
  // reverse(nums, index, nums.length - 1);
  // return nums;
  // * 环状替换
  const gcd = (x, y) => y ? gcd(y, x % y) : x;

  const length = nums.length;
  const index = gcd(length, k);
  for (let i = 0; i < index; i++) {
    let p = i;
    let prev = nums[p];
    do {
      const nextIndex = (p + k) % length;
      const temp = nums[nextIndex];
      nums[nextIndex] = prev;
      p = nextIndex;
      prev = temp;
    } while (p !== i);
  }
  return nums;
};

module.exports = rotate;
