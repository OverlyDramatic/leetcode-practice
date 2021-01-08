/**
 * * 数组中重复的数字 LCOF https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // * 方法1 - 暴力
  // while (nums.length) {
  //   const num = nums.shift()
  //   if (nums.indexOf(num) !== -1) {
  //     return num
  //   }
  // }
  // * 方法2 - 暴力
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   const num = nums[i]
  //   if (nums.lastIndexOf(num) !== i) {
  //     return num
  //   }
  // }
  // * 方法3 - 快排+遍历
  // const sortedNums = quickSort(nums)
  // const length = sortedNums.length
  // let i = 0
  // while (i < length) {
  //   if (sortedNums[i] === sortedNums[++i]) {
  //     return sortedNums[i]
  //   }
  // }
  // * 方法4 - 单次遍历 - set
  // const numSet = new Set()
  // for (let i of nums) {
  //   if (numSet.has(i)) {
  //     return i
  //   } else {
  //     numSet.add(i)
  //   }
  // }
  // * 方法5 - 单词遍历 - hash map
  const numHashMap = new Map()
  for (let i of nums) {
    if (numHashMap.get(i)) return i
    else numHashMap.set(i, true)
  }
}

// function quickSort(arr) {
//   const length = arr.length
//   if (length < 2) return arr
//   const pIndex = Math.floor(length / 2)
//   const pivot = arr[pIndex]
//   const less = []
//   const greater = []
//   for (let i = 0; i < length; i++) {
//     if (i === pIndex) continue
//     const _curNum = arr[i]
//     if (_curNum <= pivot) {
//       less.push(_curNum)
//     } else {
//       greater.push(_curNum)
//     }
//   }
//   return [...quickSort(less), pivot, ...quickSort(greater)]
// }



module.exports = findRepeatNumber
