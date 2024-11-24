const fibonacci = function (n) {
  if (isNaN(n)) return
  if ((n = 0)) return 0
  if ((n = 1)) return 1

  let f01 = 0
  let f02 = 1
  let f = f01 + f02

  for (let i = 2; i <= n; i++) {
    f += f01 + f02
    f01 = i - 1
    f02 = i - 2
  }

  return f
}

console.log(fibonacci(4))

// Do not edit below this line
// module.exports = fibonacci
