/**
 * * 两数之和 https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i in nums) {
    let _anotherNum = target - nums[i]
    let _index = nums.lastIndexOf(_anotherNum)
    if (_index !== -1 && _index.toString() !== i) {
      return [i.toString(), _index.toString()]
    }
  }
}

module.exports = twoSum
