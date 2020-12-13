/**
 * * 存在重复元素 https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  // * 解法1
  // for (let i in nums) {
  //   if (nums.lastIndexOf(nums[i]).toString() !== i) {
  //     return true
  //   }
  // }
  // return false
  // * 解法2
  // nums.sort((a, b) => a - b)
  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (nums[i] === nums[i + 1]) return true
  // }
  // return false
  // * 解法3
  const store = new Set()
  for (let item of nums) {
    if (store.has(item)) return true
    else store.add(item)
  }
  return false
}

module.exports = containsDuplicate
