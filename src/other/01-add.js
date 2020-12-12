// * 实现
// add(1) // 1
// add(1)(2) // 3
// add(1, 2, 3) // 6

function add(...args) {
  const result = args.reduce((item, total) => {
    return total + item
  }, 0)
  const sum = function (...args) {
    return add(result, ...args)
  }
  sum.toString = function () {
    return result
  }
  return sum
}

module.exports = add
