/**
 * * Merge Sorted Array
 * https://leetcode.cn/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // * 粗暴内置函数
  // nums1.splice(m, n, ...nums2)
  // nums1.sort((a, b) => a - b)
  // return nums1
  // * 双指针遍历插入
  // const sorted = []
  // let i = (j = 0)
  // while (i < m || j < n) {
  //   const num1 = nums1[i]
  //   const num2 = nums2[j]
  //   if (i === m) {
  //     sorted.push(num2)
  //     j++
  //   } else if (j === n) {
  //     sorted.push(num1)
  //     i++
  //   } else if (num1 < num2) {
  //     sorted.push(num1)
  //     i++
  //   } else {
  //     sorted.push(num2)
  //     j++
  //   }
  // }
  // for (let index = 0, len = nums1.length; index < len; index++) {
  //   nums1[index] = sorted[index]
  // }
  // return nums1
  // * 插尾双指针
  let i = m - 1
  let j = n - 1
  let num = 0
  let index = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      num = nums2[j--]
    } else if (j === -1) {
      num = nums1[i--]
    } else if (nums1[i] < nums2[j]) {
      num = nums2[j--]
    } else {
      num = nums1[i--]
    }
    nums1[index--] = num
  }
  return nums1
}

module.exports = merge
