/**
 * * 删除排序数组中的重复项 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  // * 1. 双指针法
  let [p1, p2] = [0, 0]
  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      nums[++p1] = nums[p2]
    }
    p2++
  }
  return nums.slice(0, p1 + 1)
  // * 2. splice方法
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) {
  //     nums.splice(i--, 1)
  //   }
  // }
  // return nums
}

module.exports = removeDuplicates
