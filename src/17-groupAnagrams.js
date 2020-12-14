/**
 * * 字母异位词分组 https://leetcode-cn.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // * 方法1
  // const map = strs.map((item) => item.split('').sort().join(''))
  // const mapType = Array.from(new Set(map))
  // const res = new Array(mapType.length).fill(null)
  // for (let i in res) {
  //   res[i] = []
  // }
  // map.forEach((item, index) => res[mapType.indexOf(item)].push(strs[index]))
  // return res
  // * 方法2
  // const res = new Object()
  // const startCode = 'a'.charCodeAt()
  // for (let str of strs) {
  //   let key = new Array(26).fill(0)
  //   for (let char of str) {
  //     key[char.charCodeAt() - startCode]++
  //   }
  //   key = key.toString()
  //   res[key] ? res[key].push(str) : res[key] = [str]
  // }
  // return Object.values(res)
  // * 大神的方法 - 利用了质数只能被自己整除的特性
  if (strs.length < 2) return [strs]
  const sMap = new Map()
  const cMap = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
  ]
  for (const s of strs) {
    let key = 1
    for (let j = s.length - 1; j > -1; j--) {
      key *= cMap[s.charCodeAt(j) - 97]
    }

    sMap.has(key) ? sMap.get(key).push(s) : sMap.set(key, [s])
  }
  return Array.from(sMap.values())
}

module.exports = groupAnagrams
