const add = require('../../src/other/01-add')

test('add', () => {
  expect(add(1).toString()).toBe(1)
  expect(add(1, 2).toString()).toBe(3)
  expect(add(1)(2).toString()).toBe(3)
  expect(add(1)(2)(3).toString()).toBe(6)
  expect(add(1, 2)(3).toString()).toBe(6)
})
