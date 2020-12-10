const lemonadeChange = require('../src/10-lemonadeChange')

test('lemonadeChange', () => {
  expect(lemonadeChange([5,5,5,10,20])).toBe(true)
  expect(lemonadeChange([5,5,10])).toBe(true)
  expect(lemonadeChange([10,10])).toBe(false)
  expect(lemonadeChange([5,5,10,10,20])).toBe(false)
  expect(lemonadeChange([5,5,5,10,5,5,10,20,20,20])).toBe(false)
})
