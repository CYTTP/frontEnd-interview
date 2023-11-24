Function.prototype.myCall = function (data) {
  // 判断是否有传递调用者 
  var data = data || window
  //  创建一个函数this指向调用者
  data.fn = this
  // 删除第一个参数
  var args = [...arguments].slice(1)
  // 调用参数
  var result = data.fn(...args)
  // 使用完 删除fn函数
  delete data.fn
  // 返回值
  return result
}

var a = {
  value: '我是a',
  //fn (num) {
  //  console.log(num)
  //  console.log(this.value)
  //}
}

function fn (num) {
  console.log(num)
  console.log(this.value)
}

fn.myCall(a, 1)

