let a = {
  value: '我是a'
}

function fn (name, age) {
  console.log("姓名" + name + "年龄" + age + this.value)
}

//fn.call(a, 'daes', 18)   传递参数列表
fn.apply(a, ['daes', 18])  // 传递数组
