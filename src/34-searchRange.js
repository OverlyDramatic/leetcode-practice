/**
 * * 在排序数组中查找元素的第一个和最后一个位置 https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // * 解法1 - 简单查找
  // const result = [-1, -1]
  // for (let i in nums) {
  //   if (nums[i] === target) {
  //     if (result[0] === -1) {
  //       result[0] = +i
  //     }
  //     if (nums[+i + 1] !== target) {
  //       result[1] = +i
  //       break
  //     }
  //   }
  // }
  // return result
  // * 解法2 - 二分查找 + 扩散
  // const result = [-1, -1]
  // let index = binarySearch(nums, target)
  // if (index !== -1) {
  //   // * left
  //   for (let i = index; i >= 0; i--) {
  //     if (nums[i] === target && nums[i - 1] !== target) {
  //       result[0] = +i
  //     }
  //   }
  //   // * right
  //   for (let i = index; i < nums.length; i++) {
  //     if (nums[i] === target && nums[i + 1] !== target) {
  //       result[1] = +i
  //     }
  //   }
  // }
  // return result
  // * 解法3 - 纯二分查找
  // const result = [-1, -1]
  const left = binarySearchPlus(nums, target, true)
  const right = binarySearchPlus(nums, target, false) - 1
  if (left <= right) {
    return [left, right]
  }
  return [-1, -1]
}

// * 解法2的二分法
// function binarySearch(nums, target) {
//   let left = 0, right = nums.length - 1
//   while (left <= right) {
//     const mid = Math.floor((right + left) / 2)
//     if (nums[mid] > target) {
//       right = mid -1
//     } else if (nums[mid] < target) {
//       left = mid + 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// }
// * 解法3的二分法
function binarySearchPlus(nums, target, findLowest) {
  let left = 0, right = nums.length - 1, ans = nums.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > target || (findLowest && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}

module.exports = searchRange
