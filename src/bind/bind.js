Function.prototype.newCall = function (content, ...args) {
  content = content || window;
  content.fn = this;
  const result = content.fn(...args);
  delete content.fn;
  return result;
}

Function.prototype.newApply = function (content, args) {
  content = content || window;
  content.fn = this;
  const result = content.fn(...args);
  delete content.fn;
  return result;
}

Function.prototype.myBind = function (context, ...bindArgs) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function');
  }
  const _this = this;
  return function Fn(...execArgs) {
    const args = bindArgs.concat(execArgs);
    // 使用了闭包，这就导致后面无论使用多少次bind，最终的context指向，都是第一次传入的参数
    return _this.call(this instanceof Fn ? this : context, ...args);
  }
}
