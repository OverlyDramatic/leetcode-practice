/**
 * *  Squares of a Sorted Array
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // * 1. 二分法插入
  // const output = [];
  // for (const num of nums) {
  //   const square = num * num;
  //   output.splice(insertIndex(output, square), 0, square);
  // }
  // return output;
  
  // function insertIndex(outputArr, target) {
  //   let pLeft = 0;
  //   let index = outputArr.length;
  //   let pRight = index - 1;
  //   while (pLeft <= pRight) {
  //     const pMid = (pLeft + pRight) >> 1;
  //     const num = outputArr[pMid];
  //     if (num >= target) {
  //       index = pMid
  //       pRight = pMid - 1;
  //     } else {
  //       pLeft = pMid + 1;
  //     }
  //   }
  //   return index;
  // }
  // * 2. 双指针归并排序
  // let i = 0;
  // // 确定正负分界线
  // for (const index in nums) {
  //   if (nums[index] < 0) {
  //     i = +index;
  //   } else {
  //     break;
  //   }
  // }
  // // 归并排序
  // let j = i + 1;
  // const result = [];
  // const length = nums.length;
  // while (i >= 0 || j < length) {
  //   const numI = Math.pow(nums[i], 2);
  //   const numJ = Math.pow(nums[j], 2);
  //   if (j === length) {
  //     result.push(numI);
  //     i--;
  //   } else if (i === -1) {
  //     result.push(numJ);
  //     j++;
  //   } else if (numI <= numJ) {
  //     result.push(numI);
  //     i--;
  //   } else {
  //     result.push(numJ);
  //     j++;
  //   }
  // }
  // return result;
  // * 3.逆向双指针归并排序
  let i = 0;
  let j = nums.length - 1;
  const output = [];
  while (i <= j) {
    const numI = nums[i] * nums[i];
    const numJ = nums[j] * nums[j];
    if (numI >= numJ) {
      output.unshift(numI);
      i++;
    } else {
      output.unshift(numJ);
      j--;
    }
  }
  return output;
};

module.exports = sortedSquares;
