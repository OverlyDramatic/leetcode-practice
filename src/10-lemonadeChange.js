/**
 * * 柠檬水找零 https://leetcode-cn.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
  let cash_5 = 0
  let cash_10 = 0
  for (let bill of bills) {
    if (bill === 5) {
      cash_5++
    } else if (bill === 10) {
      if (!cash_5) {
        return false
      }
      cash_5--
      cash_10++
    } else if (bill === 20) {
      if (cash_10 && cash_5) {
        cash_5--
        cash_10--
      } else if (cash_5 >= 3) {
        cash_5 -= 3
      } else {
        return false
      }
    }
  }
  return true
}

module.exports = lemonadeChange
