const reverseString = function (str) {
  if (!str) return ''
  const len = str.length

  let revTmp = ''
  for (let i = len - 1; i >= 0; i--) {
    revTmp += str[i]
  }
  return revTmp
}

// Do not edit below this line
module.exports = reverseString
