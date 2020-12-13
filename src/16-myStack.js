/**
 * * 用队列实现栈 https://leetcode-cn.com/problems/implement-stack-using-queues/
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack[this.stack.length] = x
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.stack.length) return undefined
  let length = this.stack.length - 1
  const res = this.stack[length]
  this.stack.length = length
  return res
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.stack.length
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
