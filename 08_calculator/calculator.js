const add = function (a, b) {
  if (isNaN(a) || isNaN(b)) return
  return a + b
}

const subtract = function (a, b) {
  if (isNaN(a) || isNaN(b)) return
  return a - b
}

const sum = function (arrInputs) {
  if (!arrInputs || arrInputs.length < 1) return 0

  let sum = 0

  for (const input of arrInputs) {
    if (!Number.isInteger(input)) return
    sum += input
  }

  return sum
}

const multiply = function (arrInputs) {
  if (!arrInputs || arrInputs.length < 1) return 0

  let product = 1

  for (const input of arrInputs) {
    if (!Number.isInteger(input)) return
    product *= input
  }

  return product
}

const power = function (base, power) {
  if (isNaN(base) || isNaN(power)) return
  if (base === 0 || power === 0) return 0

  let product = 1
  for (let i = 0; i < power; i++) {
    product *= base
  }
  return product
}

const factorial = function (n) {
  if (isNaN(n)) return
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
