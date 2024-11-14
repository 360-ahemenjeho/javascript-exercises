const repeatString = function (str, n) {
  if (n < 0) return 'ERROR'
  if (!str) return ''

  let tmp = ''
  for (let i = 0; i < n; i++) {
    tmp += str
  }
  return tmp
}

// Do not edit below this line
module.exports = repeatString
