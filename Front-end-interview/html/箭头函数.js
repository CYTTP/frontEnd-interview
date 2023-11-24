function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())